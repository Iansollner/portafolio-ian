
import {
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  Network,
  Workflow,
} from "lucide-react";


const projects = [
  {
    title: "Gestor de Actas",
    description:
      "Sistema desarrollado para la gestión y organización de actas, enfocado en mejorar el control documental y facilitar procesos administrativos.",
    type: "Sistema web",
    icon: Code2,
    technologies: ["React", "Node.js", "Express", "JavaScript"],
    github: "https://github.com/Iansollner/Gestor-Actas",
    demo: "#",
  },
  {
    title: "E-commerce React + Express",
    description:
      "Plataforma de comercio electrónico desarrollada con frontend en React y backend en Express, orientada a la gestión de productos, ventas y operaciones básicas.",
    type: "Desarrollo web",
    icon: Code2,
    technologies: ["React", "Express", "Node.js", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Resolución de matrices con MPI",
    description:
      "Programa en C con MPI para resolver sistemas de ecuaciones mediante sustitución hacia atrás, utilizando distribución de filas en bloques cíclicos.",
    type: "Programación paralela",
    icon: Network,
    technologies: ["C", "MPI", "Linux", "Benchmarking"],
    github: "#",
    demo: "#",
  },
  {
    title: "Servidor Linux en Oracle Cloud",
    description:
      "Configuración de un entorno Linux en Oracle Cloud Free Tier, aplicando conceptos de infraestructura, redes, administración de servidores y despliegue.",
    type: "Infraestructura Cloud",
    icon: Cloud,
    technologies: ["Oracle Cloud", "Linux", "Redes", "Servidor"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Mis trabajos
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Proyectos destacados
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Una selección de proyectos académicos, técnicos y personales que
            reflejan mi experiencia en desarrollo, análisis e infraestructura.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                      <Icon size={28} />
                    </div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <GitBranch size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      <ExternalLink size={18} />
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}