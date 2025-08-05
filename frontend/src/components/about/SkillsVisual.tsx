import React from "react";
import SectionHeading from "../common/SectionHeading";

const SkillsVisual: React.FC = () => {
  const skills = [
    { name: "IoT", icon: "/assets/icons/iot.png" },
    { name: "Robotics", icon: "/assets/icons/robotics.png" },
    { name: "Web Development", icon: "/assets/icons/webdev.png" },
    { name: "STEM", icon: "/assets/icons/stem.png" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading title="Skills Overview" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {skills.map((skill) => (
            <div key={skill.name}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-gray-800 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsVisual;