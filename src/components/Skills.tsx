import {
  Code2,
  Server,
  Database,
  Wrench,
  Cloud,
  Workflow,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Java", "C"],
  },
  {
    title: "Bases de datos",
    icon: Database,
    skills: ["MySQL", "SQL Server"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "Oracle Cloud",
      "Linux",
      "Vercel",
      "Git",
    ],
  },
  {
    title: "Modelamiento",
    icon: Workflow,
    skills: ["BPMN", "SIMPLE", "Análisis de procesos"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Tecnologías
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Stack tecnológico
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Herramientas, tecnologías y metodologías que utilizo para el
            desarrollo de soluciones y proyectos.
          </p>
        </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-2xl font-bold text-cyan-400">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
}