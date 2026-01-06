import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
