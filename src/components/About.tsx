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
                src="/imagen/foto_formal_3.png"
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
              <p>📊 Analisis de Sistemas</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-cyan-400/40">
            <h3 className="mb-6 text-2xl font-bold text-cyan-400">
              Trayectoria e intereses
            </h3>

            <div className="space-y-5 leading-relaxed text-slate-300">
              <p>
                Soy Ingeniero Civil en Computación e Informática, con formación en desarrollo de 
                software, análisis y diseño de sistemas, bases de datos y redes de computadores.
              </p>

              <p>
                He participado en proyectos aplicados en entornos reales, incluyendo el 
                desarrollo de un Sistema de Información Administrativa y el modelamiento 
                de procesos para su implementación en la plataforma SIMPLE del sector público. 
                Estas y otras experiencias me han permitido fortalecer mis habilidades en el análisis de 
                requerimientos, resolución de problemas y trabajo en equipo.
              </p>

              <p>
                Cuento con conocimientos en desarollo de software, manejo React, JavaScript, TypeSript, 
                Python, Java y C, así como en administración de sistemas Linux, Docker y Oracle Cloud.
                gestión de proyectos TI, administración de redes 
                y gestión de bases de datos, con interés en desarrollarme profesionalmente 
                en el área de tecnologías de la información, aportando soluciones eficientes 
                y orientadas a las necesidades del negocio.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
                <p className="text-3xl font-black text-cyan-400">4+</p>
                <p className="mt-1 text-sm text-slate-400">Proyectos TI</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
                <p className="text-3xl font-black text-cyan-400">1+</p>
                <p className="mt-1 text-sm text-slate-400">Años de experiencia</p>
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