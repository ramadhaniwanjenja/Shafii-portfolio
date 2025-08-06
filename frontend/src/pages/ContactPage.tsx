import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Message sent successfully! Thank you for reaching out. You should receive a confirmation email shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: `Error: ${result.message}`,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      link: "mailto:ramadhanishafiiwanjenja@gmail.com",
      color: "#EA4335",
      display: "ramadhanishafiiwanjenja@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={24} />,
      link: "https://www.linkedin.com/in/ramadhani-shafi-231a82287",
      color: "#0A66C2",
      display: "www.linkedin.com/in/ramadhani-shafi-231a82287",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      link: "https://github.com/ramadhaniwanjenja",
      color: "#333",
      display: "github.com/ramadhaniwanjenja",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      link: "https://www.instagram.com/ramadhanshafii_1251",
      color: "#E1306C",
      display: "www.instagram.com/ramadhanshafii_1251",
    },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom right, #0F172A, #1E293B)",
          color: "#fff",
          padding: "40px 20px",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingTop: "80px",
          }}
        >
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "48px",
              background: "linear-gradient(135deg, #4C1D95, #8B5CF6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "800px",
              margin: "0 auto 60px",
              textAlign: "center",
              lineHeight: "1.8",
            }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "40px",
                borderRadius: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "32px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #4C1D95, #7C3AED)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: isSubmitting ? "wait" : "pointer",
                  width: "100%",
                  boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: "20px",
                    padding: "16px",
                    borderRadius: "8px",
                    background:
                      submitStatus.type === "success"
                        ? "rgba(34, 197, 94, 0.1)"
                        : "rgba(239, 68, 68, 0.1)",
                    border: `1px solid ${
                      submitStatus.type === "success"
                        ? "rgba(34, 197, 94, 0.3)"
                        : "rgba(239, 68, 68, 0.3)"
                    }`,
                    color:
                      submitStatus.type === "success" ? "#22c55e" : "#ef4444",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </motion.form>

            {/* Contact Details */}
            <motion.div variants={itemVariants}>
              <h2
                style={{
                  fontSize: "28px",
                  color: "#fff",
                  marginBottom: "30px",
                  fontWeight: "600",
                }}
              >
                Contact Details
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "40px",
                  lineHeight: "1.6",
                }}
              >
                Feel free to reach out through any of the following channels.
                I'll get back to you as soon as possible.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "24px",
                      background: "rgba(15, 23, 42, 0.6)",
                      borderRadius: "16px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        color: link.color,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "22px",
                          fontWeight: "600",
                          marginBottom: "5px",
                          color: "#fff",
                        }}
                      >
                        {link.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "rgba(255, 255, 255, 0.6)",
                        }}
                      >
                        {link.display}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                style={{
                  marginTop: "40px",
                  padding: "30px",
                  background: "rgba(139, 92, 246, 0.1)",
                  borderRadius: "16px",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    color: "#8B5CF6",
                    textAlign: "center",
                  }}
                >
                  Need to Schedule a Meeting?
                </h3>
                <motion.a
                  href="https://calendar.app.google/e6Csm3i8eX29xYJX9" // Replace this with your booking link later
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginTop: "10px",
                    padding: "14px 28px",
                    background: "linear-gradient(135deg, #4C1D95, #7C3AED)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    textDecoration: "none",
                    boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                    display: "inline-block",
                  }}
                >
                  Book an Appointment
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ContactPage;
