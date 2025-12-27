import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    // Simple bot responses
    setTimeout(() => {
      let botResponse = "I'm sorry, I didn't understand that. Can you please rephrase?";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("services")) {
        botResponse = "We offer Biometrics Access, Video Surveillance, IT Infrastructure, and more. Would you like to know more about any specific service?";
      } else if (lowerInput.includes("contact")) {
        botResponse = "You can reach us at +91 80 22239770 or email adarsh@bangaloreelectronics.com. Would you like me to direct you to our contact page?";
      } else if (lowerInput.includes("consultation")) {
        botResponse = "We'd be happy to provide a consultation. Please visit our contact page or call us directly.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = "Hi there! Welcome to Bangalore Electronics. How can I assist you?";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1000);

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
