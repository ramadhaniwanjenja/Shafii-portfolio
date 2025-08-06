import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
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

  const experiences = [
    {
      title: "Founder & CEO",
      company: "Levenn",
      period: "2023 - Present",
      description:
        "Leading the development of affordable solar power solutions for sustainable community development.",
      achievements: [
        "Developed innovative solar power distribution systems",
        "Established partnerships with local communities",
        "Created job opportunities in renewable energy sector",
      ],
    },
    {
      title: "STEM Trainer & Judge",
      company: "FLL Robotics",
      period: "2024 - Present",
      description:
        "Training and mentoring students in robotics and technology, fostering innovation in young minds.",
      achievements: [
        "Trained over 300 students in Tanzania in robotics",
        "Supervised 40+ schools in FLL competitions",
        "Developed comprehensive training curriculum",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "African Leadership University",
      period: "2023 - 2027",
      description:
        "Focusing on software development, IoT systems, and artificial intelligence.",
    },
  ];

  const skills = [
    {
      category: "Technical Skills",
      items: [
        "IoT Development",
        "Robotics",
        "Web Development",
        "Solar Systems",
        "AI/ML",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership",
        "Problem Solving",
        "Communication",
        "Project Management",
        "Teaching",
      ],
    },
  ];

  return (
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
      {/* Hero Section */}
      <motion.div
        variants={itemVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "60px",
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
          }}
        >
          About Me
        </motion.h1>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          A Tanzanian software engineer and STEM advocate passionate about
          leveraging technology for sustainable development and community
          empowerment.
        </motion.p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        variants={itemVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 0",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "40px",
            borderRadius: "24px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              color: "#fff",
              marginBottom: "24px",
              fontWeight: "600",
            }}
          >
            Vision & Mission
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            My mission is to drive technological innovation in Tanzania while
            prioritizing environmental sustainability and community development.
            Through Levenn, I'm working to provide affordable and clean
            renewable energy solutions that address real community challenges.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.8",
            }}
          >
            I believe in the power of education and technology to transform
            lives, which is why I'm dedicated to training the next generation of
            innovators through STEM education and robotics programs.
          </p>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        variants={itemVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 0",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#fff",
            marginBottom: "40px",
            fontWeight: "600",
          }}
        >
          Professional Experience
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "40px",
                borderRadius: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      marginBottom: "8px",
                      fontWeight: "600",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.5)",
                    padding: "8px 16px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}
              >
                {exp.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.7)",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#8B5CF6" }}>•</span> {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        variants={itemVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 0",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#fff",
            marginBottom: "40px",
            fontWeight: "600",
          }}
        >
          Education
        </h2>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {edu.institution}
                </p>
              </div>
              <span
                style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.5)",
                  padding: "8px 16px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                }}
              >
                {edu.period}
              </span>
            </div>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
              }}
            >
              {edu.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={itemVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 0",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#fff",
            marginBottom: "40px",
            fontWeight: "600",
          }}
        >
          Skills & Expertise
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "40px",
                borderRadius: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  color: "#fff",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
              >
                {skillSet.category}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {skillSet.items.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "8px 16px",
                      background: "rgba(139, 92, 246, 0.1)",
                      color: "#8B5CF6",
                      borderRadius: "20px",
                      fontSize: "16px",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          padding: "60px 0",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#fff",
            marginBottom: "24px",
            fontWeight: "600",
          }}
        >
          Let's Connect
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "600px",
            margin: "0 auto",
            marginBottom: "32px",
            lineHeight: "1.6",
          }}
        >
          Interested in collaborating or learning more about my work? Let's
          start a conversation!
        </p>
        <Link to="/contact">
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
            Get in Touch
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
