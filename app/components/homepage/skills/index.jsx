import Image from "next/image";

const screenshots = Array.from({ length: 26 }, (_, i) => ({
  src: `/screenshots/screenshot-${i + 1}.${i === 0 ? 'png' : 'jpeg'}`,
  alt: `Missteresen pantalla ${i + 1}`,
}));

function Skills() {
  return (
    <div id="skills" className="relative my-16 lg:my-32">
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
          La App en Acción
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
          Mira cómo funciona Missteresen
        </h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm lg:text-base">
          Estas son algunas pantallas reales de la aplicación. Todo lo que necesitas para gestionar tus alumnos desde un solo lugar.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {screenshots.map((img, i) => (
          <div key={i} className="break-inside-avoid rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={800}
              className="w-full h-auto"
              loading={i < 8 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;