import { personalData } from '@/utils/data/personal-data';
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-32 relative text-slate-800">
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
          Contacto
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
          ¿Listo para transformar tu gestión educativa?
        </h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm lg:text-base">
          Solicita acceso beta y recibe una demo personalizada sin costo.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-4xl mx-auto">
        <ContactForm />
        <div className="lg:w-3/4 lg:pt-8">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-base flex items-center gap-3">
              <MdAlternateEmail
                className="bg-slate-100 p-2 rounded-full hover:bg-brand-green hover:scale-110 hover:text-white transition-all duration-300 text-slate-600 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-base flex items-center gap-3">
              <IoMdCall
                className="bg-slate-100 p-2 rounded-full hover:bg-brand-green hover:scale-110 hover:text-white transition-all duration-300 text-slate-600 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone || 'Próximamente'}
              </span>
            </p>
            <p className="text-sm md:text-base flex items-center gap-3">
              <CiLocationOn
                className="bg-slate-100 p-2 rounded-full hover:bg-brand-green hover:scale-110 hover:text-white transition-all duration-300 text-slate-600 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address || 'Disponible en todo Latinoamérica'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;