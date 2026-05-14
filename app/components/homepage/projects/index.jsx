import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='features' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-brand-blue/20 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-brand-blue absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            FUNCIONALIDADES
          </span>
          <span className="w-full h-[2px] bg-brand-blue/30"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(37,99,235,0.15)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;