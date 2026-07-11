// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="rounded-lg border border-ink-700 bg-ink-900 overflow-hidden transition-all duration-300 hover:border-brand-secondary/50 hover:shadow-[0_0_0_1px_rgba(6,182,212,0.15)] group">
      {project.imageUrl ? (
        <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden border-b border-ink-700">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="w-full h-32 flex items-center gap-2 px-4 border-b border-ink-700 bg-ink-800">
          <span className="term-dot bg-red-500/60" />
          <span className="term-dot bg-amber-400/60" />
          <span className="term-dot bg-emerald-400/60" />
          <span className="ml-2 font-mono text-xs text-slate-600 truncate">{project.id}.pipeline</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed min-h-[60px]">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-xs font-mono font-semibold text-brand-secondary/80 uppercase tracking-wider mb-2">
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="font-mono bg-ink-800 border border-ink-600 text-slate-300 px-2.5 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-4 font-mono text-sm">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-secondary-light hover:underline transition-colors"
            >
              git clone →
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
            >
              live demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
