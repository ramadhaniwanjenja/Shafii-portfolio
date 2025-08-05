import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

// Import the project data
import { projectsData, projectDetails, ProjectDetail } from "../data/projects";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Project ID is missing");
      setLoading(false);
      return;
    }

    // Find the basic project data
    const basicProject = projectsData.find((p) => p.id === id);

    if (!basicProject) {
      setError("Project not found");
      setLoading(false);
      return;
    }

    // Combine basic data with detailed data
    const details = projectDetails[id] || {};
    setProject({
      ...basicProject,
      ...details,
    } as ProjectDetail);

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          {error || "Project not found"}
        </h1>
        <Link
          to="/projects"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all projects
          </Link>

          <SectionHeading
            title={project.title}
            subtitle={`A ${project.category} Project`}
          />

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About this project
                </h2>
                <p className="text-gray-700 mb-6">
                  {project.longDescription || project.description}
                </p>

                {project.challenge && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      The Challenge
                    </h3>
                    <p className="text-gray-700 mb-6">{project.challenge}</p>
                  </>
                )}

                {project.solution && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      The Solution
                    </h3>
                    <p className="text-gray-700 mb-6">{project.solution}</p>
                  </>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Technologies Used
                    </h3>
                    <ul className="list-disc pl-5 mb-6">
                      {project.technologies.map((tech, index) => (
                        <li key={index} className="text-gray-700">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden h-48"
                      >
                        <img
                          src={img}
                          alt={`${project.title} gallery ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(project.demoUrl || project.repoUrl) && (
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      View Live Demo
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Want to discuss a similar project? Contact me!
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
