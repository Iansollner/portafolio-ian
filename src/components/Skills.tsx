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
    skills: [
      { name: "React", level: "Intermedio-Avanzado", progress: 75 },
      { name: "Next.js", level: "Intermedio-Avanzado", progress: 75 },
      { name: "TypeScript", level: "Intermedio-Avanzado", progress: 75 },
      { name: "Tailwind CSS", level: "Intermedio-Avanzado", progress: 70 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Intermedio-Avanzado", progress: 75 },
      { name: "Express", level: "Intermedio-Avanzado", progress: 70 },
      { name: "Java", level: "Intermedio", progress: 65 },
      { name: "C", level: "Intermedio-Avanzado", progress: 80 },
    ],
  },
  {
    title: "Bases de datos",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Avanzado", progress: 85 },
      { name: "SQL Server", level: "Intermedio-Avanzado", progress: 80 },
    ],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Avanzado", progress: 85 },
      { name: "GitHub", level: "Avanzado", progress: 85 },
      { name: "VS Code", level: "Avanzado", progress: 90 },
      { name: "Postman", level: "Intermedio-Avanzado", progress: 70 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", level: "Intermedio-Avanzado", progress: 70 },
      { name: "Oracle Cloud", level: "Intermedio", progress: 55 },
      { name: "Linux", level: "Intermedio", progress: 65 },
      { name: "Git", level: "Avanzado", progress: 85 },
    ],
  },
  {
    title: "Analisis de sistemas",
    icon: Workflow,
    skills: [
      { name: "BPMN", level: "Avanzado", progress: 80 },
      { name: "SIMPLE", level: "Avanzado", progress: 90 },
      { name: "Análisis de procesos", level: "Avanzado", progress: 90 },
    ],
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

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="font-semibold text-slate-100">
                            {skill.name}
                          </span>
                          <span className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">
                            {skill.level}
                          </span>
                        </div>

                        <div className="relative h-2 rounded-full bg-slate-800">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full bg-cyan-400"
                            style={{ width: `${skill.progress}%` }}
                          />
                          <span
                            className="absolute -top-2.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/90 ring-2 ring-slate-950"
                            style={{ left: `calc(${skill.progress}% - 0.625rem)` }}
                          />
                        </div>

                        <div className="mt-2 flex justify-between text-[11px] uppercase text-slate-500">
                          <span>Básico</span>
                          <span>Intermedio</span>
                          <span>Avanzado</span>
                        </div>
                      </div>
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