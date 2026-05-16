import Image from "next/image";
import Marquee from "react-fast-marquee";

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
          Estas son algunas pantallas reales de la aplicación.
        </p>
      </div>

      <div className="py-6 border-y border-slate-100">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          pauseOnClick={true}
          play={true}
          direction="left"
        >
          {screenshots.map((img, i) => (
            <div key={i} className="mx-3 w-48 lg:w-56 flex-shrink-0 rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={img.src}
                alt={img.alt}
                width={224}
                height={450}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;