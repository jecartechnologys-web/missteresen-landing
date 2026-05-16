import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id='features' className="relative my-16 lg:my-32">
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
          Funcionalidades
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
          Todo lo que necesitas en un solo lugar
        </h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm lg:text-base">
          Desde la gestión de alumnos hasta reportes con inteligencia artificial. Missteresen centraliza todas las herramientas que un profesional de la educación necesita.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;