export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Portafolio Profesional
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Ian Sollner
        </h1>

        <h2 className="mb-6 text-2xl text-slate-300 md:text-3xl">
          Ingeniería Civil en Computación e Informática
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          Desarrollo web, automatización de procesos, análisis de sistemas,
          BPMN y tecnologías modernas como React, Next.js y TypeScript.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Ver proyectos
          </button>

          <button className="rounded-xl border border-slate-600 px-6 py-3 transition hover:border-cyan-400 hover:text-cyan-400">
            Contacto
          </button>
        </div>

      </section>
    </main>
  );
}