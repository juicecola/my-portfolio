// src/components/ProjectGrid.jsx
import { aiProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectGrid() {
  if (!aiProjects || aiProjects.length === 0) {
    return (
      <section id="projects" className="container mx-auto py-12 md:py-20 px-6 text-center">
         <p className="text-slate-500 font-mono">No projects to display yet. Add your projects to `src/data/projects.js`!</p>
      </section>
    )
  }
  return (
    <section id="projects" className="container mx-auto py-12 md:py-20 px-6">
      <p className="font-mono text-brand-secondary text-sm text-center mb-2 tracking-wide">$ ls ./projects</p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-10 md:mb-16 text-center">
        Data &amp; AI Engineering Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {aiProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
export default ProjectGrid;
