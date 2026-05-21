export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>
          © 2026 Ian Sollner. Todos los derechos reservados.
        </p>

        <div className="flex gap-6">
          <a href="#inicio" className="transition hover:text-cyan-400">
            Inicio
          </a>

          <a href="#portafolio" className="transition hover:text-cyan-400">
            Portafolio
          </a>

          <a href="#contacto" className="transition hover:text-cyan-400">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}