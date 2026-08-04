import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bot,
  ChevronDown,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const quickPrompts = [
  "CCTV solution",
  "Biometric access",
  "Network security",
  "Talk to sales",
];

const serviceReplies = [
  {
    keywords: ["biometric", "biometrics", "access control", "attendance"],
    reply:
      "We can help with biometric access control, attendance integration, door controllers, and centralized access policies for offices, factories, campuses, and secure facilities.",
  },
  {
    keywords: ["cctv", "camera", "surveillance", "video surveillance", "nvr", "dvr"],
    reply:
      "For CCTV and video surveillance, we support camera selection, recording, remote viewing, storage planning, and multi-site monitoring based on your coverage and retention needs.",
  },
  {
    keywords: ["psim", "video management", "vms", "incident"],
    reply:
      "Our PSIM and video management solutions combine surveillance, alarms, access control, and incident workflows into one control-room view for faster response.",
  },
  {
    keywords: ["analytics", "video analytics", "ai", "people count", "intrusion"],
    reply:
      "Video analytics can help with intrusion detection, people counting, perimeter alerts, object detection, and operational insights from camera feeds.",
  },
  {
    keywords: ["it infrastructure", "server", "storage", "networking", "network"],
    reply:
      "We design and deploy IT infrastructure including switching, routing, wireless, servers, storage, structured cabling, and scalable enterprise networks.",
  },
  {
    keywords: ["network security", "firewall", "vpn", "security audit", "endpoint"],
    reply:
      "For network security, we can assist with firewalls, secure VPN access, segmentation, intrusion prevention, monitoring, and security hardening.",
  },
  {
    keywords: ["electronic component", "components", "sensor", "processor", "display"],
    reply:
      "We supply electronic components for commercial and industrial needs. Share the part category, quantity, and application so the team can check availability.",
  },
  {
    keywords: ["enterprise", "erp", "crm", "management system"],
    reply:
      "Our enterprise management solutions help teams streamline operations, reporting, workflows, and customer or resource management across departments.",
  },
];

const getFallbackResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  if (["hi", "hello", "hey"].some((word) => lowerMessage.includes(word))) {
    return "Hello! Welcome to Bangalore Electronics. I can help you explore our security, IT infrastructure, networking, and electronics solutions.";
  }

  if (["contact", "sales", "quote", "demo", "price", "pricing"].some((word) => lowerMessage.includes(word))) {
    return "Our team can help with pricing, demos, and solution design. You can call +91 8049511596, WhatsApp +91 8217064201, or email info@bangaloreelectronics.com.";
  }

  const matchedService = serviceReplies.find(({ keywords }) =>
    keywords.some((keyword) => lowerMessage.includes(keyword))
  );

  if (matchedService) {
    return `${matchedService.reply} Would you like our team to help you size a solution or arrange a consultation?`;
  }

  return "Thanks for your interest in Bangalore Electronics. Tell me what site, facility, or technology requirement you have, and I can guide you toward the right offering.";
};

const createMessage = (text, sender) => ({
  id: `${sender}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  text,
  sender,
  time: new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date()),
});

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    createMessage(
      "Hello! I am the Bangalore Electronics assistant. Ask me about CCTV, biometrics, networking, IT infrastructure, or sales support.",
      "bot"
    ),
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("Online");
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  const hasUserMessages = useMemo(
    () => messages.some((message) => message.sender === "user"),
    [messages]
  );

  useEffect(() => {
    if (isOpen) {
      const messageContainer = messagesContainerRef.current;

      if (messageContainer) {
        messageContainer.scrollTo({
          top: messageContainer.scrollHeight,
          behavior: "smooth",
        });
      }

      if (window.matchMedia("(min-width: 640px)").matches) {
        inputRef.current?.focus({ preventScroll: true });
      }
    }
  }, [isOpen, messages, isSending]);

  const fetchBotResponse = async (message) => {
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Chat service unavailable");
      }

      const data = await response.json();
      setStatus("AI assistant");
      return data.reply || getFallbackResponse(message);
    } catch {
      setStatus("Instant support");
      return getFallbackResponse(message);
    }
  };

  const sendMessage = async (message = input) => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isSending) {
      return;
    }

    setMessages((prev) => [...prev, createMessage(trimmedMessage, "user")]);
    setInput("");
    setIsSending(true);

    const botResponse = await fetchBotResponse(trimmedMessage);
    setMessages((prev) => [...prev, createMessage(botResponse, "bot")]);
    setIsSending(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="chat-fab fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--slack-purple)] text-white transition focus:outline-none focus:ring-4 focus:ring-[rgba(54,197,240,0.22)]"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={24} />}
      </button>

      {isOpen ? (
        <section
          className="chat-glass-panel fixed inset-x-3 bottom-24 z-40 flex h-[min(620px,calc(100vh-8rem))] flex-col overflow-hidden rounded-[24px] text-[var(--color-text)] sm:inset-x-auto sm:right-6 sm:w-[390px]"
          aria-label="Bangalore Electronics chat assistant"
        >
          <header className="chat-glass-header flex items-center justify-between bg-[var(--slack-deep)] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/12 text-[var(--slack-blue)]">
                <Bot size={21} />
              </div>
              <div>
                <h2 className="text-base font-semibold leading-tight">
                  Bangalore Electronics
                </h2>
                <p className="flex items-center gap-1.5 text-xs text-white/72">
                  <span className="h-2 w-2 rounded-full bg-[var(--slack-green)]" />
                  {status}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white/72 transition hover:bg-white/10 hover:text-white"
              aria-label="Minimize chat"
            >
              <ChevronDown size={20} />
            </button>
          </header>

          <div className="border-b border-[var(--color-border)] bg-white/45 px-4 py-3 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-2 text-xs text-[var(--color-muted)]">
              <a
                href="tel:+918049511596"
                className="flex items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-2 py-2 font-medium transition hover:border-[rgba(97,31,105,0.24)] hover:text-[var(--slack-purple)]"
              >
                <Phone size={14} />
                Call
              </a>
              <a
                href="https://wa.me/918217064201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-2 py-2 font-medium transition hover:border-[rgba(46,182,125,0.36)] hover:text-[var(--slack-green)]"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href="mailto:info@bangaloreelectronics.com"
                className="flex items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-2 py-2 font-medium transition hover:border-[rgba(54,197,240,0.42)] hover:text-[var(--slack-blue)]"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>

          <div
            ref={messagesContainerRef}
            className="chat-message-well flex-1 space-y-4 overflow-y-auto px-4 py-4"
          >
            {!hasUserMessages ? (
              <div className="rounded-[18px] border border-[var(--color-border)] bg-white px-3 py-3 text-sm text-[var(--color-muted)]">
                <div className="mb-1 flex items-center gap-2 font-semibold text-[var(--color-text)]">
                  <Sparkles className="text-[var(--slack-yellow)]" size={15} />
                  How can I help?
                </div>
                <p>Choose a topic or type your requirement below.</p>
              </div>
            ) : null}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" ? (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--slack-purple)]">
                    <Bot size={15} />
                  </div>
                ) : null}

                <div
                  className={`max-w-[78%] rounded-[18px] px-3 py-2 text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "bg-[var(--slack-purple)] text-white"
                      : "border border-[var(--color-border)] bg-white text-[var(--color-text)]"
                  }`}
                >
                  <p>{message.text}</p>
                  <div
                    className={`mt-1 flex items-center gap-1 text-[11px] ${
                      message.sender === "user"
                        ? "text-white/72"
                        : "text-[var(--color-muted)]"
                    }`}
                  >
                    <Clock3 size={11} />
                    {message.time}
                  </div>
                </div>

                {message.sender === "user" ? (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--slack-green)] text-white">
                    <User size={15} />
                  </div>
                ) : null}
              </div>
            ))}

            {isSending ? (
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--slack-purple)]">
                  <Bot size={15} />
                </div>
                <span className="rounded-[18px] border border-[var(--color-border)] bg-white px-3 py-2">
                  Typing...
                </span>
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/70 bg-white/65 p-3 backdrop-blur-2xl">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  disabled={isSending}
                  className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] transition hover:border-[rgba(97,31,105,0.24)] hover:text-[var(--slack-purple)] disabled:opacity-60"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your message..."
                className="premium-input min-w-0 flex-1 rounded-full px-4 py-2 text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--slack-purple)] text-white transition hover:bg-[var(--slack-deep)] disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
