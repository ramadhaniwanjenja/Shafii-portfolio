import React from "react";
import ProjectCard from "../common/ProjectCard";
import { Project } from "../../types/Project";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={{
            ...project,
            image: project.images?.[0] || '',
            tags: project.tags || []
          }} 
        />
      ))}
    </div>
  );
};

export default ProjectGrid;