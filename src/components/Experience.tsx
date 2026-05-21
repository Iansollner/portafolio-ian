const experiences = [
  {
    role: "Proyecto de tesis — SLEP Magallanes",
    place: "Área de Informática",
    period: "2025 - 2026",
    description:
      "Análisis y modelado de procesos administrativos mediante BPMN y la plataforma SIMPLE, orientado a la automatización de solicitudes y gestión documental.",
    tags: ["BPMN", "SIMPLE", "Análisis de procesos", "Gestión documental"],
  },
  {
    role: "Experiencia en retail y atención al cliente",
    place: "Joyería / Área comercial",
    period: "6 años",
    description:
      "Experiencia en ventas, atención al cliente, manejo de caja, control de stock, apoyo operativo y tareas administrativas relacionadas con el funcionamiento del local.",
    tags: ["Atención al cliente", "Ventas", "Caja", "Stock", "Administración"],
  },
  {
    role: "Desarrollo de proyectos académicos TI",
    place: "Universidad",
    period: "Formación profesional",
    description:
      "Desarrollo de soluciones en programación, sistemas web, programación paralela, redes y análisis de sistemas durante la formación universitaria.",
    tags: ["React", "C", "Java", "MPI", "Redes"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Trayectoria
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Experiencia
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Experiencias académicas, profesionales y técnicas que han aportado
            a mi desarrollo en el área informática y administrativa.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-cyan-400">
                    {experience.place}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  {experience.period}
                </span>
              </div>

              <p className="mb-6 leading-relaxed text-slate-400">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}