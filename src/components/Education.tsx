const education = [
  {
    title: "Ingeniería Civil en Computación e Informática",
    institution: "Universidad",
    period: "En curso",
    description:
      "Formación orientada al desarrollo de software, sistemas de información, infraestructura tecnológica y análisis computacional.",
  },
  {
    title: "Cisco — Fundamentos de Ciberseguridad",
    institution: "Cisco Networking Academy",
    period: "2026",
    description:
      "Conceptos de seguridad informática, amenazas, vulnerabilidades, redes y protección de sistemas.",
  },
];

export default function Education() {
  return (
    <section id="educacion" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Formación
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Educación y certificaciones
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Formación académica y aprendizaje continuo en áreas relacionadas
            con desarrollo, sistemas e infraestructura tecnológica.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-4 top-0 h-full w-px bg-cyan-400/20 md:left-1/2" />

          <div className="space-y-12">

            {education.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 top-4 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:left-1/2 md:-translate-x-1/2" />

                <div className="ml-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-cyan-400/40 md:ml-0 md:w-1/2">
                  
                  <span className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                    {item.period}
                  </span>

                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mb-4 text-cyan-400">
                    {item.institution}
                  </p>

                  <p className="leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}