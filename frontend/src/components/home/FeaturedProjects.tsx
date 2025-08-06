import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../common/ProjectCard";

// This could be moved to a data file later
const featuredProjects = [
  {
    id: "sclick",
    title: "Sclick",
    category: "IoT",
    image: "/images/projects/sclick.jpg", // Add a placeholder image for now
    description:
      "Smart lighting system controlled via mobile phone, reducing energy consumption.",
    tags: ["IoT", "Mobile App", "Energy Efficiency"],
  },
  {
    id: "l-guard",
    title: "L-guard",
    category: "IoT",
    image: "/images/projects/lguard.jpg", // Add a placeholder image for now
    description:
      "Smart helmet for motorcycle riders that detects accidents and alerts emergency services.",
    tags: ["IoT", "Safety", "Emergency Response"],
  },
  {
    id: "levkonnect",
    title: "LevKonnect",
    category: "Web",
    image: "/images/projects/levkonnect.jpg", // Add a placeholder image for now
    description:
      "Platform connecting engineers with job opportunities in Tanzania and beyond.",
    tags: ["Web Development", "Employment", "React"],
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
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
            to="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
  