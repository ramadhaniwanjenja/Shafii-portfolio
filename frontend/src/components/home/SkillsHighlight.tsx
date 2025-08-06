import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";

const SkillsHighlight: React.FC = () => {
  const skills = [
    {
      title: "IoT Development",
      icon: "🔌",
      description:
        "Creating smart, connected devices that solve real-world problems like Sclick, L-guard, and LevMoto.",
      link: "/projects?category=iot",
    },
    {
      title: "Robotics",
      icon: "🤖",
      description:
        "Building and mentoring on robotics projects including robotic arms, autonomous vehicles, and FLL/FRC competitions.",
      link: "/projects?category=robotics",
    },
    {
      title: "Web Development",
      icon: "💻",
      description:
        "Developing modern web platforms like LevKonnect, LevSTEM, and Levenn using React, TypeScript, and more.",
      link: "/projects?category=web",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills & Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <Link
                  to={skill.link}
                  className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Explore projects →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Learn more about my skills
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsHighlight;
