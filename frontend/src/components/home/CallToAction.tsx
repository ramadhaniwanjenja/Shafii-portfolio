import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Sustainable Solutions Together
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Whether you're looking for a collaboration, have a project idea, or
            just want to connect, I'm always open to new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-bold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
