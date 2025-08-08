import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const HomePage: React.FC = () => {
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

  const keyAchievements = [
    {
      icon: "🎓",
      title: "STEM Education",
      description: "Training secondary school students in Tanzania & Rwanda",
      metric: "300+ Students",
    },
    {
      icon: "⚡",
      title: "Levenn Founder",
      description: "Providing affordable solar power solutions",
      metric: "Sustainable Energy",
    },
    {
      icon: "🤖",
      title: "Robotics Expert",
      description: "FLL Trainer & Judge since 2024",
      metric: "40+ Schools",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/shafiiweb",
      label: "GitHub",
    },
    {
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/shafii_wanjenja",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://linkedin.com/in/ramadhani-shafii",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebookF size={20} />,
      url: "https://facebook.com/shafii.wanjenja",
      label: "Facebook",
    },
  ];

  const stats = [
    {
      number: "3+",
      label: "Years Experience",
    },
    {
      number: "10+",
      label: "Projects Done",
    },
    {
      number: "30+",
      label: "Happy Clients",
    },
  ];

  const categories = [
    { id: "iot", name: "IoT Projects", icon: "🌐", count: 5 },
    { id: "robotics", name: "Robotics", icon: "🤖", count: 3 },
    { id: "web", name: "Web Development", icon: "💻", count: 4 },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          color: "#fff",
          padding: "40px",
        }}
      >
        {/* Main Content Container with Border - Only for Hero Section */}
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto 60px auto",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            borderRadius: "20px",
            padding: window.innerWidth > 768 ? "40px" : "20px",
            position: "relative",
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Hero Section */}
          <motion.div
            variants={itemVariants}
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
              gap: window.innerWidth > 768 ? "40px" : "20px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: "24px",
                  marginBottom: "8px",
                  color: "#8B5CF6",
                }}
              >
                Hi I am
              </motion.p>
              <motion.h1
                variants={itemVariants}
                style={{
                  fontSize: window.innerWidth > 768 ? "64px" : "36px",
                  fontWeight: "bold",
                  marginBottom: "24px",
                  color: "#8B5CF6",
                }}
              >
                Ramadhani Shafii Wanjenja
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                style={{
                  fontSize: window.innerWidth > 768 ? "32px" : "20px",
                  color: "#8B5CF6",
                  marginBottom: "32px",
                }}
              >
                Software Engineer & STEM Advocate
              </motion.h2>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(139, 92, 246, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8B5CF6",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "48px",
                }}
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "12px 24px",
                      background: "#8B5CF6",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    let's work together
                  </motion.button>
                </Link>
                <Link to="/cv">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "12px 24px",
                      background: "transparent",
                      color: "#8B5CF6",
                      border: "2px solid #8B5CF6",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Download CV
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: "flex",
                  gap: "48px",
                }}
              >
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        color: "#8B5CF6",
                        marginBottom: "4px",
                      }}
                    >
                      {stat.number}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#E5E7EB",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              variants={itemVariants}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Ramadhani Shafii"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "600px",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Key Achievements Section */}
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 0",
          }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "32px",
              color: "#fff",
              marginBottom: "40px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Key Achievements
          </motion.h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              padding: "20px",
            }}
          >
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "30px",
                  borderRadius: "24px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "40px", marginBottom: "20px" }}>
                  {achievement.icon}
                </span>
                <h3
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  {achievement.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "15px",
                  }}
                >
                  {achievement.description}
                </p>
                <span
                  style={{
                    fontSize: "18px",
                    color: "#8B5CF6",
                    fontWeight: "600",
                  }}
                >
                  {achievement.metric}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Categories Section */}
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 0",
          }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "32px",
              color: "#fff",
              marginBottom: "40px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Project Categories
          </motion.h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              padding: "20px",
              marginBottom: "60px",
            }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "30px",
                  borderRadius: "24px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "48px", marginBottom: "20px" }}>
                  {category.icon}
                </span>
                <h3
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  {category.name}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "20px",
                  }}
                >
                  Explore my {category.name.toLowerCase()} collection
                </p>
                <span
                  style={{
                    fontSize: "18px",
                    color: "#8B5CF6",
                    fontWeight: "600",
                  }}
                >
                  {category.count} Projects
                </span>
                <Link
                  to={`/projects?category=${category.id}`}
                  style={{ textDecoration: "none", marginTop: "20px" }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "10px 20px",
                      background: "rgba(139, 92, 246, 0.2)",
                      color: "#8B5CF6",
                      border: "1px solid rgba(139, 92, 246, 0.4)",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    View All
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "16px 32px",
                  background: "linear-gradient(135deg, #4C1D95, #7C3AED)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                }}
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
      {/* Custom Footer Section */}
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
            alignItems: "center",
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
              <Link
                to="/"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Home
              </Link>
              <Link
                to="/projects"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Contact
              </Link>
              <Link
                to="/cv"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                CV
              </Link>
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
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
    </>
  );
};

export default HomePage;
