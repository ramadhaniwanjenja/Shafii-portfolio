export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const projectsData: Project[] = [
  // IoT Projects
  {
    id: "sclick",
    title: "Sclick",
    category: "IoT",
    description:
      "Smart lighting system controlled via mobile phone, reducing energy consumption while providing convenient control options.",
    image: "/images/projects/sclick.jpg",
    tags: ["IoT", "Mobile App", "Energy Efficiency"],
  },
  {
    id: "l-guard",
    title: "L-guard",
    category: "IoT",
    description:
      "Smart helmet for motorcycle riders that detects accidents and automatically alerts emergency services with GPS location.",
    image: "/images/projects/lguard.jpg",
    tags: ["IoT", "Safety", "Emergency Response"],
  },
  {
    id: "levmoto",
    title: "LevMoto",
    category: "IoT",
    description:
      "Fire and smoke detector that sends alerts and initiates automatic extinguishing systems to prevent disaster.",
    image: "/images/projects/levmoto.jpg",
    tags: ["IoT", "Fire Safety", "Automation"],
  },

  // Robotics Projects
  {
    id: "robotic-arm",
    title: "Robotic Arm",
    category: "Robotics",
    description:
      "A multi-jointed robotic arm with precise movement capabilities, designed for educational and light industrial applications.",
    image: "/images/projects/robotic-arm.jpg",
    tags: ["Robotics", "Mechanical Engineering", "Education"],
  },
  {
    id: "robotic-car",
    title: "Autonomous Vehicle",
    category: "Robotics",
    description:
      "Self-navigating robotic car capable of obstacle avoidance and path finding using computer vision techniques.",
    image: "/images/projects/robotic-car.jpg",
    tags: ["Robotics", "Autonomous", "Computer Vision"],
  },
  {
    id: "ai-robot",
    title: "AI-powered Robot",
    category: "Robotics",
    description:
      "Intelligent robot with natural language processing capabilities and environmental awareness. Currently under development.",
    image: "/images/projects/ai-robot.jpg",
    tags: ["Robotics", "AI", "Natural Language"],
  },

  // Web Development Projects
  {
    id: "levkonnect",
    title: "LevKonnect",
    category: "Web",
    description:
      "Platform connecting engineers with job opportunities in Tanzania and beyond, helping bridge the employment gap.",
    image: "/images/projects/levkonnect.jpg",
    tags: ["Web Development", "Employment", "React"],
  },
  {
    id: "levstem",
    title: "LevSTEM",
    category: "Web",
    description:
      "STEM education and incubation hub providing resources, training materials, and community support for students.",
    image: "/images/projects/levstem.jpg",
    tags: ["Web Development", "Education", "Community"],
  },
  {
    id: "levenn",
    title: "Levenn",
    category: "Web",
    description:
      "Parent company site connecting all Lev platforms and offering Levpawa energy products to the Tanzanian market.",
    image: "/images/projects/levenn.jpg",
    tags: ["Web Development", "Energy", "E-commerce"],
  },
];

// Additional detailed project information
export interface ProjectDetail extends Project {
  longDescription?: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
  gallery?: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projectDetails: Record<string, Partial<ProjectDetail>> = {
  sclick: {
    longDescription:
      "Sclick is a smart lighting system that allows users to control their home lighting via a mobile app. The system is designed to reduce energy consumption while providing convenient control options for users. It features scheduling, remote access, and integration with other smart home devices.",
    challenge:
      "The main challenge was creating a reliable wireless communication system that works across different home environments while maintaining low power consumption for the control units.",
    solution:
      "By using a mesh network topology with low-power radio modules, we created a system that can cover an entire home while each node consumes minimal power. The mobile app provides an intuitive interface with all the necessary controls.",
    technologies: ["Arduino", "ESP8266", "React Native", "Firebase", "MQTT"],
    gallery: [
      "/images/projects/sclick-1.jpg",
      "/images/projects/sclick-2.jpg",
      "/images/projects/sclick-3.jpg",
    ],
    demoUrl: "https://sclick.levenn.com",
    repoUrl: "https://github.com/ramadhanishafii/sclick",
  },
  "l-guard": {
    longDescription:
      "L-guard is a smart helmet for motorcycle riders that can detect accidents and automatically alert emergency services with GPS location. It aims to reduce fatality rates by ensuring prompt medical assistance after accidents.",
    challenge:
      "Designing a reliable crash detection system that avoids false positives while capturing actual incidents, all within the confined space of a helmet and with limited power.",
    solution:
      "We combined multiple sensors including accelerometers, gyroscopes, and impact sensors with a sophisticated algorithm that can distinguish between normal riding conditions and actual accidents. A low-power LTE-M module handles emergency communications.",
    technologies: ["STM32", "GPS", "LTE-M", "Impact Sensors", "React Native"],
    gallery: ["/images/projects/lguard-1.jpg", "/images/projects/lguard-2.jpg"],
  },
  levkonnect: {
    longDescription:
      "LevKonnect is a platform connecting engineers with job opportunities in Tanzania and beyond. It helps bridge the employment gap by matching qualified engineers with companies looking for their specific skills.",
    challenge:
      "Creating an effective matching algorithm that considers both technical skills and soft skills to find the right fit for both companies and engineers in the Tanzanian job market.",
    solution:
      "We developed a multi-factor matching system that analyzes various aspects of a job listing and an engineer's profile. The platform includes features for skill verification, portfolio showcasing, and direct communication between parties.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    gallery: [
      "/images/projects/levkonnect-1.jpg",
      "/images/projects/levkonnect-2.jpg",
      "/images/projects/levkonnect-3.jpg",
    ],
    demoUrl: "https://levkonnect.com",
    repoUrl: "https://github.com/ramadhanishafii/levkonnect",
  },
};
