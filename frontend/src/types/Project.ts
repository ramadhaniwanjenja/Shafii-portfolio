export interface Project {
    tags: never[];
    id: string;
    title: string;
    description: string;
    category: "IoT" | "Robotics" | "Web Development";
    technologies: string[];
    images: string[];
    demoUrl?: string;
    repoUrl?: string;
  }