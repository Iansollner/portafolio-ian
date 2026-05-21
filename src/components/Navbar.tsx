export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-6 py-4 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">

        <a
          href="#inicio"
          className="text-xl font-black tracking-wide text-white"
        >
          Ian<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

          <a
            href="#sobre-mi"
            className="transition duration-300 hover:text-cyan-400"
          >
            Sobre mí
          </a>

          <a
            href="#habilidades"
            className="transition duration-300 hover:text-cyan-400"
          >
            Habilidades
          </a>

          <a
            href="#experiencia"
            className="transition duration-300 hover:text-cyan-400"
          >
            Experiencia
          </a>

          <a
            href="#proyectos"
            className="transition duration-300 hover:text-cyan-400"
          >
            Proyectos
          </a>

          <a
            href="#educacion"
            className="transition duration-300 hover:text-cyan-400"
          >
            Educación
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}