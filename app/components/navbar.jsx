import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-brand-green text-2xl font-bold tracking-tight">
            Missteresen
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-2 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <span className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-brand-blue">Nosotros</span>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#features">
              <span className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-brand-blue">Funcionalidades</span>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <span className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-brand-blue">Galería</span>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact">
              <span className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-brand-blue">Contacto</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;