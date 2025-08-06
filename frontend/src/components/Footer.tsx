import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ChatInterface from "./chatbot/ChatInterface";

const Footer: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/ramadhaniwanjenja",
      label: "GitHub",
    },
    {
      icon: <FaInstagram size={20} />,
      url: "https://www.instagram.com/ramadhanshafii_1251/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/ramadhani-shafi-231a82287/",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/shafiiramadhaniwanjenja/",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/cv", label: "CV" },
  ];

  return (
    <>
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          padding: "25px 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                color: "#8b5cf6",
                fontSize: "24px",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Ramadhani Shafii Wanjenja
            </h3>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "600",
                margin: "0 0 10px 0",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "600",
                margin: "0 0 10px 0",
                textAlign: "center",
              }}
            >
              Connect
            </h4>
            <div
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#8b5cf6",
                    fontSize: "20px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-[#8b5cf6]/20"
                >
                  {social.icon}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: "#8b5cf6",
                  fontSize: "20px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                }}
                className="hover:bg-[#8b5cf6]/20"
                onClick={() => setIsChatOpen(true)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright - very minimal */}
        <div
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "12px",
            marginTop: "20px",
          }}
        >
          © 2025 Shafii. All rights reserved.
        </div>
      </div>

      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Footer;