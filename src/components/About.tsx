import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Sobre mí
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Mi perfil profesional
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Combino conocimientos técnicos, análisis de procesos y desarrollo
            de soluciones digitales para apoyar la mejora y automatización de
            sistemas administrativos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-cyan-400/40">
            <div className="mb-6 overflow-hidden rounded-3xl border border-cyan-400/20">
              <Image
                src="/imagen/Foto_Formal_3.png"
                alt="Ian Sollner"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>

            <h3 className="mb-2 text-2xl font-bold text-white">
              Ian Sollner
            </h3>

            <p className="mb-6 text-cyan-400">
              Estudiante de Ingeniería Civil en Computación e Informática
            </p>

            <div className="space-y-3 text-sm text-slate-400">
              <p>📍 Punta Arenas, Chile</p>
              <p>💻 Desarrollo web y sistemas</p>
              <p>🧩 Automatización de procesos</p>
              <p>📊 Modelamiento BPMN</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-cyan-400/40">
            <h3 className="mb-6 text-2xl font-bold text-cyan-400">
              Trayectoria e intereses
            </h3>

            <div className="space-y-5 leading-relaxed text-slate-300">
              <p>
                Soy estudiante de Ingeniería Civil en Computación e Informática,
                con interés en el desarrollo de software, la automatización de
                procesos y el análisis de sistemas de información.
              </p>

              <p>
                Actualmente desarrollo un proyecto de tesis relacionado con el
                análisis y modelado de un Sistema de Información Administrativa
                para el SLEP Magallanes, utilizando la plataforma SIMPLE para
                apoyar procesos de solicitud, gestión documental y mejora
                administrativa.
              </p>

              <p>
                Me interesa construir soluciones prácticas, bien estructuradas y
                orientadas a resolver problemas reales, combinando tecnologías
                modernas como React, Next.js, TypeScript y herramientas de
                modelamiento de procesos.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
                <p className="text-3xl font-black text-cyan-400">3+</p>
                <p className="mt-1 text-sm text-slate-400">Proyectos TI</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
                <p className="text-3xl font-black text-cyan-400">6</p>
                <p className="mt-1 text-sm text-slate-400">Años en retail</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
                <p className="text-3xl font-black text-cyan-400">2026</p>
                <p className="mt-1 text-sm text-slate-400">Portafolio web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}