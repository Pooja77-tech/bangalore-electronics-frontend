import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("biometrics") || lowerMessage.includes("access control")) {
      return "We specialize in Biometrics Access Control systems. Our solutions provide secure and convenient access management for various industries. Would you like to know more about our biometric technologies?";
    } else if (lowerMessage.includes("cctv") || lowerMessage.includes("video surveillance")) {
      return "Our CCTV & Video Surveillance systems offer comprehensive security monitoring. We provide high-quality cameras, recording systems, and remote viewing capabilities. Contact us for a customized surveillance solution.";
    } else if (lowerMessage.includes("psim") || lowerMessage.includes("video management")) {
      return "Our PSIM & Video Management System integrates multiple security systems into a unified platform. It provides real-time monitoring, incident management, and automated responses. Perfect for large-scale security operations.";
    } else if (lowerMessage.includes("video analytics")) {
      return "Video Analytics technology helps detect unusual activities, count people, and provide intelligent insights from video feeds. Our solutions use AI to enhance security and operational efficiency.";
    } else if (lowerMessage.includes("it infrastructure") || lowerMessage.includes("networking")) {
      return "We offer comprehensive IT Infrastructure and Networking Solutions including servers, storage, network equipment, and cloud services. Our team ensures reliable and scalable IT environments.";
    } else if (lowerMessage.includes("enterprise management")) {
      return "Our Enterprise Management Systems help organizations streamline operations, improve productivity, and make data-driven decisions. We provide ERP, CRM, and other business management solutions.";
    } else if (lowerMessage.includes("network security")) {
      return "Network Security is crucial in today's digital landscape. We provide firewalls, intrusion detection, VPNs, and comprehensive security audits to protect your network infrastructure.";
    } else if (lowerMessage.includes("electronic components")) {
      return "We supply high-quality Electronic Components for various applications. Our inventory includes sensors, processors, displays, and other essential electronic parts.";
    } else if (lowerMessage.includes("active network")) {
      return "Active Network Solutions ensure optimal network performance and reliability. We design and implement networks that support your business growth and technological needs.";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("sales")) {
      return "Please visit our Contact page or call us directly to speak with our sales team. We're here to help you find the right solution for your needs.";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! Welcome to Bangalore Electronics. How can I assist you with our security and technology solutions today?";
    } else {
      return "Thank you for your interest in Bangalore Electronics. We specialize in security systems, IT infrastructure, and electronic solutions. Could you please tell me more about what you're looking for? Our team would be happy to provide detailed information.";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    const botResponse = getBotResponse(input);
    setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);

    setInput("");
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-400 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 h-96 bg-slate-800 border border-slate-600 rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-teal-500 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Bangalore Electronics Chat</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-teal-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-600">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400"
              />
              <button
                onClick={handleSend}
                className="bg-teal-500 hover:bg-teal-400 text-white p-2 rounded-lg transition"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
