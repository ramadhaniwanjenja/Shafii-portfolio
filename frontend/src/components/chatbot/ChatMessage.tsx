// Not directly used with react-chatbot-kit, but included for completeness
import React from "react";
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp?: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isBot,
  timestamp,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
          <svg
            className="w-4 h-4 text-blue-600"
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
          isBot
            ? "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none"
            : "bg-blue-600 text-white rounded-br-none"
        }`}
      >
        <p className="text-sm">{message}</p>
        {timestamp && (
          <p
            className={`text-[10px] mt-1 ${
              isBot ? "text-gray-400" : "text-blue-100"
            }`}
          >
            {timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ml-2 flex-shrink-0">
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
  );
};

export default ChatMessage;
