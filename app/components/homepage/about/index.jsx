import Image from "next/image";
import { HiCheckBadge } from "react-icons/hi2";

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-32 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-green/10 blur-3xl"></div>
            <Image
              src="/misteresen-logo.png"
              width={300}
              height={300}
              alt="Missteresen"
              className="relative rounded-2xl shadow-xl"
            />
          </div>
        </div>
        <div>
          <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
            Nosotros
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            La plataforma diseñada por y para educadores
          </h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            Missteresen es la plataforma integral que todo profesional de la educación necesita. Gestiona alumnos, programa sesiones, genera reportes PDF profesionales y aprovecha la inteligencia artificial para crear informes psicopedagógicos, boletines y planes de estudio personalizados.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <HiCheckBadge className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-sm text-slate-600">100% multi-dispositivo</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheckBadge className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-sm text-slate-600">Sincronización en tiempo real</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheckBadge className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-sm text-slate-600">Cifrado AES-256</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheckBadge className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-sm text-slate-600">IA integrada con Groq</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;