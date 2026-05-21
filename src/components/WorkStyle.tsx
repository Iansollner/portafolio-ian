import {
  Brain,
  BookOpen,
  ClipboardList,
  RefreshCw,
  Users,
  Target,
} from "lucide-react";

const workValues = [
  {
    title: "Análisis y resolución",
    icon: Brain,
    description:
      "Me enfoco en comprender problemas técnicos y administrativos para construir soluciones claras, eficientes y bien estructuradas.",
  },
  {
    title: "Aprendizaje continuo",
    icon: BookOpen,
    description:
      "Me gusta aprender nuevas tecnologías, herramientas y metodologías para mejorar constantemente mis capacidades profesionales.",
  },
  {
    title: "Trabajo estructurado",
    icon: ClipboardList,
    description:
      "Valoro la organización, documentación y planificación en el desarrollo de proyectos y sistemas de información.",
  },
  {
    title: "Adaptabilidad",
    icon: RefreshCw,
    description:
      "Puedo adaptarme a diferentes tecnologías, entornos de trabajo y desafíos técnicos según las necesidades del proyecto.",
  },
  {
    title: "Trabajo en equipo",
    icon: Users,
    description:
      "Disfruto colaborar con otras personas, compartir conocimientos y participar activamente en proyectos grupales.",
  },
  {
    title: "Orientación a soluciones",
    icon: Target,
    description:
      "Busco desarrollar herramientas y procesos que generen impacto práctico y ayuden a resolver necesidades reales.",
  },
];

export default function WorkStyle() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Perfil profesional
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Forma de trabajar
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Principios y habilidades que aplico en el desarrollo de proyectos,
            análisis de sistemas y trabajo profesional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workValues.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={24} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}