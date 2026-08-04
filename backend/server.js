import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const CAREERS_RECIPIENT = "adarsh@bangaloreelectronics.com";
const allowedResumeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const careerUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_RESUME_SIZE,
  },
  fileFilter: (_, file, callback) => {
    if (allowedResumeTypes.has(file.mimetype)) {
      callback(null, true);
      return;
    }

    callback(new Error("Resume must be a PDF, DOC, or DOCX file."));
  },
});

const handleCareerUpload = (req, res, next) => {
  careerUpload.single("resume")(req, res, (error) => {
    if (!error) {
      next();
      return;
    }

    if (error instanceof multer.MulterError && error.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({
        message: "Resume must be 5MB or smaller.",
      });
      return;
    }

    res.status(400).json({
      message: error.message || "Unable to upload the resume.",
    });
  });
};

const getGraphAccessToken = async () => {
  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(process.env.MICROSOFT_TENANT_ID)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.MICROSOFT_CLIENT_ID,
        client_secret: process.env.MICROSOFT_CLIENT_SECRET,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    },
  );

  const tokenData = await tokenResponse.json().catch(() => ({}));

  if (!tokenResponse.ok || !tokenData.access_token) {
    const error = new Error(
      tokenData.error_description || "Microsoft Graph authentication failed.",
    );
    error.code = "GRAPH_AUTH";
    throw error;
  }

  return tokenData.access_token;
};

const sendCareerApplication = async ({
  fullName,
  email,
  phone,
  experience,
  skills,
  summary,
  resume,
}) => {
  const accessToken = await getGraphAccessToken();
  const mailFrom = process.env.MAIL_FROM || CAREERS_RECIPIENT;
  const messageText = [
    "A new careers application has been submitted from the website.",
    "",
    `Full Name: ${fullName}`,
    `Email Address: ${email}`,
    `Phone Number: ${phone}`,
    `Years of Experience: ${experience}`,
    `Skills: ${skills}`,
    "",
    "Professional Summary:",
    summary,
    "",
    `Resume Attachment: ${resume.originalname}`,
  ].join("\n");

  const sendResponse = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailFrom)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: `New Careers Application - ${fullName}`,
          body: {
            contentType: "Text",
            content: messageText,
          },
          toRecipients: [
            {
              emailAddress: {
                address: CAREERS_RECIPIENT,
              },
            },
          ],
          replyTo: [
            {
              emailAddress: {
                address: email,
              },
            },
          ],
          attachments: [
            {
              "@odata.type": "#microsoft.graph.fileAttachment",
              name: resume.originalname,
              contentType: resume.mimetype,
              contentBytes: resume.buffer.toString("base64"),
            },
          ],
        },
        saveToSentItems: true,
      }),
    },
  );

  if (!sendResponse.ok) {
    const graphError = await sendResponse.json().catch(() => ({}));
    const error = new Error(
      graphError.error?.message || "Microsoft Graph could not send the email.",
    );
    error.code = "GRAPH_SEND";
    error.status = sendResponse.status;
    throw error;
  }
};

const getMailFailureMessage = (error) => {
  if (error?.code === "GRAPH_AUTH") {
    return "Microsoft Graph authentication failed. Check the tenant ID, client ID, and client secret in backend/.env.";
  }

  if (error?.code === "GRAPH_SEND" && error?.status === 403) {
    return "Microsoft Graph denied permission to send email. Confirm that the application has the Mail.Send application permission and that admin consent is granted.";
  }

  if (error?.code === "GRAPH_SEND") {
    return `Microsoft Graph could not send the application email: ${error.message}`;
  }

  return "Unable to send the application email right now. Please check the Microsoft Graph settings.";
};

app.post("/api/careers/applications", handleCareerUpload, async (req, res) => {
  try {
    const {
      fullName = "",
      email = "",
      phone = "",
      experience = "",
      skills = "",
      summary = "",
    } = req.body;

    const requiredFields = [
      ["fullName", fullName],
      ["email", email],
      ["phone", phone],
      ["experience", experience],
      ["skills", skills],
      ["summary", summary],
    ];

    const missingField = requiredFields.find(([, value]) => !String(value).trim());

    if (missingField) {
      res.status(400).json({
        message: `Missing required field: ${missingField[0]}.`,
      });
      return;
    }

    if (!req.file) {
      res.status(400).json({
        message: "Please attach a resume before submitting.",
      });
      return;
    }

    if (
      !process.env.MICROSOFT_TENANT_ID ||
      !process.env.MICROSOFT_CLIENT_ID ||
      !process.env.MICROSOFT_CLIENT_SECRET
    ) {
      res.status(500).json({
        message:
          "Microsoft Graph is not configured yet. Set MICROSOFT_TENANT_ID, MICROSOFT_CLIENT_ID, and MICROSOFT_CLIENT_SECRET in backend/.env.",
      });
      return;
    }

    await sendCareerApplication({
      fullName,
      email,
      phone,
      experience,
      skills,
      summary,
      resume: req.file,
    });

    res.status(200).json({
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("Career application error:", error);
    res.status(500).json({
      message: getMailFailureMessage(error),
    });
  }
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant for Bangalore Electronics company. We specialize in:
- Biometrics Access Control
- CCTV & Video Surveillance
- PSIM & Video Management System
- Video Analytics
- IT Infrastructure
- Networking Solutions
- Enterprise Management Systems
- Network Security
- Electronic Components
- Active Network Solutions

Always answer professionally, provide accurate information about our services, and suggest contacting sales for detailed consultations. Be friendly and helpful.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      reply: "Sorry, I'm experiencing technical difficulties. Please try again later or contact us directly.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
