import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "iot", name: "IoT Projects" },
    { id: "robotics", name: "Robotics" },
    { id: "web", name: "Web Development" },
  ];

  const projects = [
    {
      id: 1,
      title: "Sclick",
      category: "iot",
      description:
        "Smart lighting system controlled via phone app for efficient energy management.",
      image: "/projects/sclick.jpg",
      technologies: ["IoT", "Mobile App", "Smart Home"],
      demoUrl: "https://sclick.levenn.com",
      githubUrl: "https://github.com/ramadhanishafii/sclick",
    },
    {
      id: 2,
      title: "L-guard",
      category: "iot",
      description:
        "Smart helmet with accident detection and emergency service alerting system.",
      image: "/projects/lguard.jpg",
      technologies: ["IoT", "Safety", "GPS"],
      demoUrl: "https://lguard.levenn.com",
      githubUrl: "https://github.com/ramadhanishafii/lguard",
    },
    {
      id: 3,
      title: "LevMoto",
      category: "iot",
      description:
        "Fire and smoke detector with automatic alert and extinguishing system.",
      image: "/projects/levmoto.jpg",
      technologies: ["IoT", "Safety", "Automation"],
      demoUrl: "https://levmoto.levenn.com",
      githubUrl: "https://github.com/ramadhanishafii/levmoto",
    },
    {
      id: 4,
      title: "Robotic Arm",
      category: "robotics",
      description:
        "Advanced robotic arm with precise movement control and object manipulation.",
      image: "/projects/robotic-arm.jpg",
      technologies: ["Robotics", "AI", "Control Systems"],
      demoUrl: "https://robotics.levenn.com/arm",
      githubUrl: "https://github.com/ramadhanishafii/robotic-arm",
    },
    {
      id: 5,
      title: "LevKonnect",
      category: "web",
      description:
        "Platform connecting engineers with job opportunities in the renewable energy sector.",
      image: "/projects/levkonnect.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://levkonnect.com",
      githubUrl: "https://github.com/ramadhanishafii/levkonnect",
    },
    {
      id: 6,
      title: "LevSTEM",
      category: "web",
      description: "STEM education and incubation hub for aspiring innovators.",
      image: "/projects/levstem.jpg",
      technologies: ["React", "Firebase", "Education"],
      demoUrl: "https://levstem.com",
      githubUrl: "https://github.com/ramadhanishafii/levstem",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
        {/* Header */}
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
            My Projects
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
            Explore my portfolio of IoT, Robotics, and Web Development projects.
            Each project represents a step towards sustainable innovation and
            community impact.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: "12px 24px",
                background:
                  selectedCategory === category.id
                    ? "linear-gradient(135deg, #4C1D95, #7C3AED)"
                    : "rgba(255, 255, 255, 0.1)",
                color:
                  selectedCategory === category.id
                    ? "white"
                    : "rgba(255, 255, 255, 0.7)",
                border: "1px solid",
                borderColor:
                  selectedCategory === category.id
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      background: "rgba(0, 0, 0, 0.02)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "48px",
                    }}
                  >
                    {project.category === "iot" && "🌐"}
                    {project.category === "robotics" && "🤖"}
                    {project.category === "web" && "💻"}
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        marginBottom: "12px",
                        color: "#fff",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.7)",
                        marginBottom: "20px",
                        lineHeight: "1.6",
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "20px",
                      }}
                    >
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          style={{
                            padding: "6px 12px",
                            background: "rgba(139, 92, 246, 0.1)",
                            color: "#8B5CF6",
                            borderRadius: "20px",
                            fontSize: "14px",
                            border: "1px solid rgba(139, 92, 246, 0.2)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                      }}
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "10px 20px",
                          background:
                            "linear-gradient(135deg, #4C1D95, #7C3AED)",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "10px",
                          fontSize: "14px",
                          fontWeight: "500",
                          flex: 1,
                          textAlign: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        View Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "10px 20px",
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "#fff",
                          textDecoration: "none",
                          borderRadius: "10px",
                          fontSize: "14px",
                          fontWeight: "500",
                          flex: 1,
                          textAlign: "center",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "800px",
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
            Have a Project in Mind?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "32px",
              lineHeight: "1.6",
            }}
          >
            I'm always interested in hearing about new projects and
            opportunities. Let's discuss how we can work together to bring your
            ideas to life.
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
              Start a Project
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
