import { useState, useEffect } from "react";
import { Project } from "../types/Project";
import { projectsData } from "../data/projects";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setProjects(() => projectsData as unknown as Project[]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { projects, loading };
};
