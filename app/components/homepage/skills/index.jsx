import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative my-16 lg:my-32">
      <div className="text-center mb-12">
        <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
          Tecnologías
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
          Construido con lo mejor de la tecnología
        </h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm lg:text-base">
          Missteresen integra herramientas modernas para ofrecerte una experiencia rápida, segura y confiable.
        </p>
      </div>

      <div className="w-full py-8 border-y border-slate-100">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-300 m-3 sm:m-5 rounded-xl group relative hover:scale-110 cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-xl border border-slate-100 bg-white shadow-sm group-hover:border-brand-blue/30 group-hover:shadow-md transition-all duration-300 p-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;