
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  Network,
  Workflow,
} from "lucide-react";
import { projects } from "../data/projects";

const projectIcons: Record<string, typeof Code2> = {
  "Gestor de Actas": Code2,
  "E-commerce React + Express": Code2,
  "Resolución de matrices con MPI": Network,
  "Servidor Linux en Oracle Cloud": Cloud,
};

const categories = ["Todos", "Frontend", "Backend", "Full Stack", "App", "Análisis de sistema"] as const;
type Category = typeof categories[number];

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-400/10 text-blue-300 border-blue-400/30",
  Backend: "bg-purple-400/10 text-purple-300 border-purple-400/30",
  "Full Stack": "bg-green-400/10 text-green-300 border-green-400/30",
  App: "bg-pink-400/10 text-pink-300 border-pink-400/30",
  "Análisis de sistema": "bg-orange-400/10 text-orange-300 border-orange-400/30",
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("Todas");

  // Generar dinámicamente las tecnologías disponibles
  const availableTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filtrar proyectos
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === "Todos" || project.category === selectedCategory;
      const techMatch =
        selectedTechnology === "Todas" || project.technologies.includes(selectedTechnology);
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTechnology]);

  const hiddenGithubButtonSlugs = new Set([
    "inventario_bodega_umag",
    "computacion-paralela-mpi",
  ]);

  return (
    <section id="portafolio" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Mis trabajos
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Portafolio
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Una selección de proyectos académicos, técnicos y personales que
            reflejan mi experiencia en desarrollo, análisis e infraestructura.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="mb-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Categoría
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "border-cyan-400 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filtros de tecnología */}
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Tecnologías
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex w-full flex-col gap-2 sm:w-auto">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Selecciona tecnología</span>
              <select
                value={selectedTechnology}
                onChange={(event) => setSelectedTechnology(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-200 shadow-inner shadow-slate-950/10 transition duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 sm:w-[260px]"
              >
                <option value="Todas">Todas</option>
                {availableTechs.map((tech) => (
                  <option key={tech} value={tech} className="bg-slate-950 text-slate-200">
                    {tech}
                  </option>
                ))}
              </select>
            </label>
            <p className="text-sm text-slate-400">
              Filtro por categoría y tecnología para ver solo los proyectos que te interesan.
            </p>
          </div>
        </div>

        {/* Grid de proyectos filtrados */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => {
              const Icon = projectIcons[project.title] ?? Code2;

              return (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-slate-950/95 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />
                  <div className="absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl opacity-50 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 text-cyan-400 shadow-inner shadow-cyan-500/10 transition duration-300 group-hover:bg-cyan-400/10">
                        <Icon size={28} />
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[project.category] || "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"}`}>
                          {project.category}
                        </span>
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300 transition duration-300 group-hover:bg-cyan-400/15 group-hover:text-cyan-200">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`mb-6 overflow-hidden rounded-3xl border border-cyan-400/20 ${
                        project.slug === "gestor-de-actas" || project.slug === "inventario_bodega_umag"
                          ? "bg-white p-2"
                          : "bg-slate-950/60"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={450}
                        className={`w-full transition duration-500 group-hover:scale-105 ${
                          project.slug === "gestor-de-actas"
                            ? "h-44 object-contain sm:object-cover"
                            : project.slug === "inventario_bodega_umag"
                            ? "h-44 object-contain"
                            : "h-44 object-cover"
                        }`}
                      />
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
                          className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300 transition duration-300 group-hover:bg-cyan-400/10 group-hover:text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      {!hiddenGithubButtonSlugs.has(project.slug) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                          <GitBranch size={18} />
                          GitHub
                        </a>
                      )}

                      <Link
                        href={`/proyectos/${project.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <ExternalLink size={18} />
                        Ver proyecto
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
            <p className="text-lg text-slate-400">
              No hay proyectos que coincidan con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}