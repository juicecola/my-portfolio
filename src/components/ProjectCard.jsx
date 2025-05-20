// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
      {project.imageUrl && (
        <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[60px]">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              View on GitHub →
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-green-600 hover:text-green-800 hover:underline transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
