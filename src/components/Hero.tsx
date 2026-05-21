const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
          Disponible para nuevas oportunidades
        </div>

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-cyan-400">
          Portafolio Profesional
        </p>

        <h1 className="mb-6 text-6xl font-black tracking-tight text-white md:text-8xl">
          Ian <span className="text-cyan-400">Sollner</span>
        </h1>

        <h2 className="mb-8 text-2xl font-medium text-slate-300 md:text-3xl">
          Ingeniería Civil en Computación e Informática
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
          Desarrollo web, automatización de procesos, análisis de sistemas,
          BPMN y tecnologías modernas para construir soluciones digitales.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#proyectos"
            className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contacto
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="mt-16 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
        >
          Desliza para conocer más ↓
        </a>
      </div>
    </section>
  );
}