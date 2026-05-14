// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-slate-50 border-slate-200 text-slate-600">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © 2026 Missteresen — Plataforma de Gestión Educativa
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="/#about"
              className="flex items-center gap-2 uppercase hover:text-brand-green"
            >
              <span>Nosotros</span>
            </Link>
            <Link
              target="_blank"
              href="/#features"
              className="flex items-center gap-2 uppercase hover:text-brand-green"
            >
              <span>Features</span>
            </Link>
            <Link
              target="_blank"
              href="/#contact"
              className="flex items-center gap-2 uppercase hover:text-brand-green"
            >
              <span>Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;