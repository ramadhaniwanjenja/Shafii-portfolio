import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatInterface: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Hi there! I'm Ramadhani's virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    const input = document.getElementById("chat-input");
    if (isOpen && input) {
      input.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay to simulate thinking
  };

  const generateResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    let responseText = "";

    // Simple response logic based on keywords
    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      responseText = "Hello! How can I assist you today?";
    } else if (input.includes("project") || input.includes("work")) {
      responseText =
        "Ramadhani has worked on several exciting projects in IoT, robotics, and web development. You can check out specific projects in the Projects section. Would you like me to tell you about a particular one?";
    } else if (
      input.includes("contact") ||
      input.includes("hire") ||
      input.includes("email")
    ) {
      responseText =
        "You can reach Ramadhani via email at ramadhani@levenn.com or use the contact form on the Contact page. Would you like me to help you schedule a meeting?";
    } else if (input.includes("skill") || input.includes("experience")) {
      responseText =
        "Ramadhani specializes in IoT development, robotics, and web development. He has experience with technologies like Arduino, React, and various programming languages. Is there a specific skill you're interested in?";
    } else if (input.includes("iot") || input.includes("internet of things")) {
      responseText =
        "Ramadhani has created several IoT projects including Sclick (smart lighting), L-guard (smart helmet), and LevMoto (fire detection system). Would you like more details about these?";
    } else if (input.includes("robot") || input.includes("robotics")) {
      responseText =
        "Ramadhani is involved in robotics projects and has worked as a trainer for FLL competitions. His robotics projects include robotic arms and autonomous vehicles. What aspect of robotics interests you?";
    } else if (input.includes("web") || input.includes("website")) {
      responseText =
        "Ramadhani has developed several web platforms including LevKonnect, LevSTEM, and the Levenn company website. These projects use modern technologies like React and TypeScript.";
    } else if (
      input.includes("education") ||
      input.includes("study") ||
      input.includes("university")
    ) {
      responseText =
        "Ramadhani is currently pursuing a Software Engineering degree at African Leadership University, expected to graduate in 2027. He's passionate about continuing education in STEM fields.";
    } else if (
      input.includes("book") ||
      input.includes("meeting") ||
      input.includes("appointment")
    ) {
      responseText =
        "I'd be happy to help you schedule a meeting with Ramadhani. Please head to the Contact page where you can select a time that works for you, or send a direct message with your preferred time.";
    } else if (input.includes("thank")) {
      responseText =
        "You're welcome! Is there anything else I can help you with?";
    } else if (input.includes("bye") || input.includes("goodbye")) {
      responseText =
        "Thank you for chatting! Feel free to reach out again if you have more questions. Have a great day!";
    } else {
      responseText =
        "I'm not sure I understand. Would you like to know about Ramadhani's projects, skills, or how to contact him?";
    }

    return {
      id: `bot-${Date.now()}`,
      text: responseText,
      sender: "bot",
      timestamp: new Date(),
    };
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
          <motion.div
            className="fixed bottom-20 right-4 w-[320px] md:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-[9999] chat-interface"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              top: window.innerWidth > 768 ? '100px' : 'auto',
              bottom: window.innerWidth > 768 ? 'auto' : '20px',
              right: window.innerWidth > 768 ? '20px' : '16px',
            }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Ramadhani's Assistant
                    </h3>
                    <p className="text-xs text-white/80">
                      Online | Typically replies instantly
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center mr-2 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-[#8b5cf6]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-[#8b5cf6] text-white rounded-br-none"
                          : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-[10px] mt-1 ${
                          message.sender === "user"
                            ? "text-white/70"
                            : "text-gray-400"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    {message.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-[#8b5cf6] flex items-center justify-center ml-2 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-[#8b5cf6]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="bg-white rounded-2xl px-4 py-2 shadow-sm border border-gray-100">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-[#8b5cf6]"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 rounded-full bg-[#8b5cf6]"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 rounded-full bg-[#8b5cf6]"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white border-t border-gray-100"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  id="chat-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/20 transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-[#8b5cf6] text-white rounded-full p-2 hover:bg-[#7c3aed] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-5 h-5 transform rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatInterface;
