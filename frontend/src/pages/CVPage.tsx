import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import Footer from "../components/Footer";

const CVPage: React.FC = () => {
  const experiences = [
    {
      company: "Levenn",
      location: "Arusha, Tanzania",
      role: "Founder and Embedded Engineer",
      period: "2021 - Present",
      description:
        "As the visionary founder of Levenn, I serve as an embedded systems engineer, orchestrating groundbreaking projects at the intersection of technology and societal impact. Collaborating with a dedicated team, we research and develop innovative solutions that leverage embedded systems to address pressing community challenges. My role involves designing and implementing electrical systems that seamlessly integrate with the digital world, demonstrating a deep understanding of embedded systems engineering principles.",
      projects: [
        {
          name: "Autonomous Robotics Car",
          description:
            "Developed an autonomous robotics car capable of obstacle avoidance, line following, and remote control via a mobile app. Implemented using Arduino, ultrasonic sensors, and motor drivers.",
        },
        {
          name: "Kacny - Interactive Humanoid",
          description:
            "Created Kacny, a humanoid robot with speech capabilities and basic interaction features. Integrated natural language processing and text-to-speech technologies to enable human-robot communication.",
        },
      ],
    },
    {
      company: "African Youth Forum",
      location: "Oran, Algeria",
      role: "Mini hackathon Mentor",
      period: "November 2024",
      description:
        "Mentored participants from Kenya, Rwanda, Niger, and Burundi, guiding them under the STEM framework to align with the theme, 'Educating Africa Fit for the 21st Century.' Contributed to shaping innovative solutions while empowering youth with 21st-century skills essential for Africa's future development.",
    },
    {
      company: "African Leadership University",
      location: "Kigali, Rwanda",
      role: "Vice President of ALU Robotics Club",
      period: "September 2023 - Present",
      description:
        "Organize and train new members in the basics of electronics, IoT, and LEGO robotics. Leadership and expertise contribute to fostering a strong foundation in STEM education for club members.",
    },
    {
      company: "Coderina",
      location: "Kigali, Rwanda",
      role: "Robotics Trainer and Judge, FLL Robotics Competition Rwanda 2024",
      period: "December 2023 - March 2024",
      description:
        "Trained public school students in Northern Province and served as a judge during the final international competition. Worked with Coderina to contribute to STEM education and robotics initiatives.",
    },
    {
      company: "Taifa Technovation Hub",
      location: "Arusha, Tanzania",
      role: "STEM Trainer",
      period: "2022 - 2023",
      description:
        "Led training sessions in Science, Technology, Engineering, and Mathematics (STEM), specialising in robotics and IoT. Role involved empowering individuals with hands-on skills and knowledge in cutting-edge fields, fostering innovation and technological proficiency.",
    },
  ];

  const education = [
    {
      institution: "African Leadership University",
      degree: "Bachelor of Software Engineering",
      period: "2023 - 2026",
    },
    {
      institution: "University of California, Irvine (Coursera)",
      degree: "IoT Course",
      period: "April - September 2024",
    },
    {
      institution: "Arduino",
      degree: "Arduino Certification Program",
      period: "August 2024",
    },
    {
      institution: "FABLab Rwanda",
      degree: "IoT Certification Programs",
      period: "April 2024",
    },
    {
      institution: "The School Of St.Jude",
      degree: "Advanced Level - PCM (Physics, Chemistry and Mathematics)",
      period: "2020 - 2022",
    },
  ];

  const skills = {
    engineering: ["Circuit designing", "3D designing", "IoT", "Robotics"],
    softComputing: ["Microsoft Office Tools", "Google Suite"],
    technical: ["Graphics Design", "HTML/CSS", "Python", "C/C++", "Java"],
    soft: [
      "Leadership",
      "Creativity",
      "Innovation",
      "Teaching",
      "Entrepreneurship",
    ],
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

  const references = [
    {
      name: "Eliamani Jackson Kiavi",
      title: "Founder & CEO of Levenn",
      phone: "+255 676 565 063",
      email: "eliamanikiavi@gmail.com",
    },
    {
      name: "Saidi Hozza",
      title: "Founder of Taifa Innovation Hub",
      phone: "+255 684 736 765",
      email: "sahozza@tatechhub.com",
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
          background: "#0F172A",
          color: "#fff",
          padding: "40px 20px",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              marginBottom: "40px",
              padding: "20px",
            }}
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                flexShrink: 0,
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #8B5CF6",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
            >
              <img
                src="/adminpic.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>

            {/* Name and Contact */}
            <div style={{ flex: 1 }}>
              <h1
                style={{
                  fontSize: "48px",
                  background: "linear-gradient(135deg, #4C1D95, #8B5CF6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                Ramadhani Shafii Wanjenja
              </h1>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "12px",
                  width: "100%",
                }}
              >
                {[
                  {
                    icon: <FaEnvelope />,
                    text: "ramadhanishafiiwanjenja@gmail.com",
                    href: "mailto:ramadhanishafiiwanjenja@gmail.com",
                  },
                  {
                    icon: <FaPhone />,
                    text: "+255693608730",
                    href: "tel:+255693608730",
                  },
                  {
                    icon: <FaLinkedin />,
                    text: "LinkedIn",
                    href: "https://www.linkedin.com/in/ramadhani-shafi-231a82287",
                  },
                  { icon: <FaMapMarkerAlt />, text: "Gasabo, Kigali, Rwanda" },
                ].map((item, index) =>
                  item.href ? (
                    <motion.a
                      key={index}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ scale: 1.05 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        padding: "12px 16px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.icon} {item.text}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "rgba(255, 255, 255, 0.7)",
                        padding: "12px 16px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.icon} {item.text}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "40px",
            }}
          >
            {/* Left Column */}
            <div>
              {/* Summary */}
              <motion.section
                variants={itemVariants}
                style={{
                  marginBottom: "40px",
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    color: "#8B5CF6",
                    marginBottom: "20px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FaUserTie /> Summary
                </h2>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: "1.8",
                  }}
                >
                  As the founder of Levenn, I am dedicated to
                  driving innovation in the energy sector. My work centers
                  around developing sustainable energy solutions that address
                  Tanzania's energy challenges, particularly in underserved
                  communities. With a focus on clean energy projects and
                  environmental sustainability, I aim to promote renewable
                  energy adoption to improve energy access and contribute to a
                  greener future in Africa.
                </p>
              </motion.section>

              {/* Experience */}
              <motion.section
                variants={itemVariants}
                style={{
                  marginBottom: "40px",
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    color: "#8B5CF6",
                    marginBottom: "20px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FaBriefcase /> Professional Experience
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
                      whileHover={{ scale: 1.02 }}
                      style={{
                        padding: "20px",
                        background: "rgba(139, 92, 246, 0.1)",
                        borderRadius: "12px",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                      }}
                    >
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          color: "rgba(255, 255, 255, 0.5)",
                          marginBottom: "15px",
                        }}
                      >
                        <span>
                          {exp.company} | {exp.location}
                        </span>
                        <span>{exp.period}</span>
                      </div>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          lineHeight: "1.6",
                          marginBottom: exp.projects ? "20px" : "0",
                        }}
                      >
                        {exp.description}
                      </p>
                      {exp.projects && (
                        <div style={{ marginTop: "15px" }}>
                          <h4
                            style={{
                              color: "#8B5CF6",
                              fontSize: "16px",
                              fontWeight: "600",
                              marginBottom: "10px",
                            }}
                          >
                            Key Projects
                          </h4>
                          {exp.projects.map((project, idx) => (
                            <div
                              key={idx}
                              style={{
                                marginBottom:
                                  idx === exp.projects.length - 1 ? 0 : "15px",
                                padding: "15px",
                                background: "rgba(255, 255, 255, 0.05)",
                                borderRadius: "8px",
                                border: "1px solid rgba(139, 92, 246, 0.1)",
                              }}
                            >
                              <h5
                                style={{
                                  color: "#fff",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  marginBottom: "5px",
                                }}
                              >
                                {project.name}
                              </h5>
                              <p
                                style={{
                                  color: "rgba(255, 255, 255, 0.7)",
                                  fontSize: "14px",
                                  lineHeight: "1.5",
                                }}
                              >
                                {project.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column */}
            <div>
              {/* Education */}
              <motion.section
                variants={itemVariants}
                style={{
                  marginBottom: "40px",
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    color: "#8B5CF6",
                    marginBottom: "20px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FaGraduationCap /> Education
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      style={{
                        padding: "15px",
                        background: "rgba(139, 92, 246, 0.1)",
                        borderRadius: "12px",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                      }}
                    >
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "5px",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          color: "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <span>{edu.institution}</span>
                        <span>{edu.period}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section
                variants={itemVariants}
                style={{
                  marginBottom: "40px",
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    color: "#8B5CF6",
                    marginBottom: "20px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FaTools /> Skills
                </h2>
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "18px",
                        marginBottom: "15px",
                        textTransform: "capitalize",
                      }}
                    >
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                      }}
                    >
                      {skillList.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          style={{
                            padding: "6px 12px",
                            background: "rgba(139, 92, 246, 0.1)",
                            color: "#8B5CF6",
                            borderRadius: "20px",
                            fontSize: "14px",
                            border: "1px solid rgba(139, 92, 246, 0.2)",
                            cursor: "default",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.section>

              {/* References */}
              <motion.section
                variants={itemVariants}
                style={{
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    color: "#8B5CF6",
                    marginBottom: "20px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  References
                </h2>
                {references.map((ref, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      background: "rgba(139, 92, 246, 0.1)",
                      padding: "20px",
                      borderRadius: "15px",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      marginBottom:
                        index === references.length - 1 ? 0 : "20px",
                    }}
                  >
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "18px",
                        marginBottom: "10px",
                      }}
                    >
                      {ref.name}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        marginBottom: "10px",
                      }}
                    >
                      {ref.title}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <motion.a
                        href={`tel:${ref.phone}`}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "rgba(255, 255, 255, 0.7)",
                          textDecoration: "none",
                          padding: "8px",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <FaPhone /> {ref.phone}
                      </motion.a>
                      <motion.a
                        href={`mailto:${ref.email}`}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "rgba(255, 255, 255, 0.7)",
                          textDecoration: "none",
                          padding: "8px",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <FaEnvelope /> {ref.email}
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.section>
            </div>
          </div>

          {/* Download Button */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <motion.a
              href="https://docs.google.com/document/d/1XNXiiSxOFruPGYYD5Mk0b4ToYTluSRurp97B4xagFOE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-block",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #4C1D95, #7C3AED)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                textDecoration: "none",
              }}
            >
              Download PDF Version
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default CVPage;
