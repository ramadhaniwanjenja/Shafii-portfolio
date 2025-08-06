import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
        {title}
        <motion.div
          className="absolute -bottom-2 left-1/2 h-1 bg-blue-600 rounded"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transform: "translateX(-50%)" }}
        />
      </h2>
      {subtitle && (
        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
