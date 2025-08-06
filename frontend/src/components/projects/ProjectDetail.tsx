import React from "react";
import { Project } from "../../types/Project";
import Button from "../common/Button";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">{project.title}</h1>
      <p className="text-gray-600 text-lg">{project.description}</p>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="space-x-4">
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">View Demo</Button>
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">View Repository</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;