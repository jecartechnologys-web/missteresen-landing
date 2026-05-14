import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-white border-[#E2E8F0] relative rounded-lg border bg-gradient-to-r to-slate-50 w-full shadow-sm">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-blue to-brand-green"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-brand-green to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
        </div>
        <p className="text-center ml-3 text-brand-green text-base lg:text-xl font-semibold">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-slate-200 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base text-slate-600">
          <div className="blink">
            <span className="mr-2 text-brand-blue font-semibold">const</span>
            <span className="mr-2 text-slate-800">feature</span>
            <span className="mr-2 text-brand-blue font-semibold">=</span>
            <span className="text-slate-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-800">name:</span>
            <span className="text-slate-400">{`'`}</span>
            <span className="text-brand-green">{project.name}</span>
            <span className="text-slate-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-slate-800">tools:</span>
            <span className="text-slate-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-brand-green">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-slate-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-slate-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-800">categoria:</span>
            <span className="text-brand-blue">{project.role}</span>
            <span className="text-slate-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-slate-800">Descripción:</span>
            <span className="text-slate-500">{' ' + project.description}</span>
            <span className="text-slate-400">,</span>
          </div>
          <div><span className="text-slate-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;