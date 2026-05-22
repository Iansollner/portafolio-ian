import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../../../data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-3xl border border-cyan-400/20 bg-slate-950/80 p-10 shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Proyecto detallado
              </p>
              <h1 className="text-4xl font-black text-white md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Volver al portafolio
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
                <h2 className="mb-4 text-2xl font-bold text-cyan-300">
                  Descripción extendida
                </h2>
                <p className="leading-relaxed text-slate-300">
                  {project.longDescription}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
                <h2 className="mb-4 text-2xl font-bold text-cyan-300">
                  Tecnologías usadas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8">
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                  Tipo de proyecto
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {project.type}
                </p>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                  Enlaces
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Ver en GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Ver demo
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
