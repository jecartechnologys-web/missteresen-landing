import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-slate-50 border-slate-100">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <Link href="/" className="text-brand-green text-lg font-bold">
              Missteresen
            </Link>
            <p className="text-sm text-slate-400 mt-1">
              Plataforma de Gestión Educativa con IA
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/#about"
              className="text-sm text-slate-500 hover:text-brand-blue transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/#features"
              className="text-sm text-slate-500 hover:text-brand-blue transition-colors"
            >
              Funcionalidades
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-slate-500 hover:text-brand-blue transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            © 2026 Missteresen — Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;