import Image from "next/image";
import Link from "next/link";
import { MdRocketLaunch } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { HiCheckBadge } from "react-icons/hi2";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/5 via-white to-white"></div>

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-10">
        <div className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6">
            <HiCheckBadge className="w-4 h-4" />
            Acceso Beta Gratuito
          </div>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:font-extrabold lg:text-[2.8rem] lg:leading-[1.2]">
            La plataforma que todo{' '}
            <span className="text-brand-blue">profesional de la educación</span>
            {' '}necesita
          </h1>

          <p className="mt-6 text-slate-500 text-sm lg:text-lg max-w-xl leading-relaxed">
            Gestiona alumnos, programa sesiones, genera reportes PDF con inteligencia artificial y comparte avances con tutores — todo desde tu celular.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:bg-brand-blue-dark hover:shadow-brand-blue/40 hover:-translate-y-0.5"
            >
              Solicitar Acceso Beta
              <RiContactsFill size={18} />
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-brand-blue hover:text-brand-blue hover:-translate-y-0.5"
            >
              Ver Funcionalidades
              <MdRocketLaunch size={18} />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <HiCheckBadge className="w-4 h-4 text-brand-green" />
              Sin instalación
            </div>
            <div className="flex items-center gap-1.5">
              <HiCheckBadge className="w-4 h-4 text-brand-green" />
              Multi-dispositivo
            </div>
            <div className="flex items-center gap-1.5">
              <HiCheckBadge className="w-4 h-4 text-brand-green" />
              Datos cifrados AES-256
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-blue/20 via-brand-green/10 to-brand-blue/5 blur-2xl"></div>
            <div className="relative rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/misteresen-logo.png"
                  width={48}
                  height={48}
                  alt="Missteresen"
                  className="rounded-xl"
                />
                <div>
                  <p className="font-bold text-slate-800">Missteresen</p>
                  <p className="text-xs text-slate-400">Plataforma Educativa</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold text-brand-blue">+100</p>
                  <p className="text-xs text-slate-400 mt-1">Alumnos activos</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold text-brand-green">+500</p>
                  <p className="text-xs text-slate-400 mt-1">Sesiones creadas</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold text-brand-blue">24/7</p>
                  <p className="text-xs text-slate-400 mt-1">Disponible</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold text-brand-green">IA</p>
                  <p className="text-xs text-slate-400 mt-1">Integrada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;