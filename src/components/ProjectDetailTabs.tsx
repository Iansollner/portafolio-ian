"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "../data/projects";

type Tab = "necesidades" | "objetivos" | "tecnologias" | "arquitectura";

interface TabConfig {
  id: Tab;
  label: string;
}

const tabs: TabConfig[] = [
  { id: "necesidades", label: "Necesidades" },
  { id: "objetivos", label: "Objetivos" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "arquitectura", label: "Arquitectura" },
];

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-400/10 text-blue-300 border-blue-400/30",
  Backend: "bg-purple-400/10 text-purple-300 border-purple-400/30",
  "Full Stack": "bg-green-400/10 text-green-300 border-green-400/30",
  App: "bg-pink-400/10 text-pink-300 border-pink-400/30",
  "Análisis de sistema": "bg-orange-400/10 text-orange-300 border-orange-400/30",
};

export default function ProjectDetailTabs({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<Tab>("necesidades");

  const renderTabContent = () => {
    switch (activeTab) {
      case "necesidades":
        return (
          <div className="space-y-4">
            {project.necesidades.map((necesidad, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
                  <span className="text-sm font-semibold">{idx + 1}</span>
                </div>
                <p className="leading-relaxed text-slate-300">{necesidad}</p>
              </div>
            ))}
          </div>
        );

      case "objetivos":
        return (
          <div className="space-y-4">
            {project.objetivos.map((objetivo, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="leading-relaxed text-slate-300">{objetivo}</p>
              </div>
            ))}
          </div>
        );

      case "tecnologias":
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-4"
              >
                <p className="font-semibold text-cyan-300">{tech}</p>
              </div>
            ))}
          </div>
        );

      case "arquitectura":
        return (
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-8">
            <p className="leading-relaxed text-slate-300">
              {project.arquitectura}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Caso de estudio
              </p>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-black text-white md:text-5xl">
                  {project.title}
                </h1>
                <span className={`rounded-full border px-3 py-1 text-sm font-semibold ${categoryColors[project.category] || "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"}`}>
                  {project.category}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
                {project.longDescription}
              </p>
            </div>

            <Link
              href="/#portafolio"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ← Volver
            </Link>
          </div>

          {/* Metadata */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Categoría
              </p>
              <p className={`mt-2 inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${categoryColors[project.category] || "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"}`}>
                {project.category}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Tipo de proyecto
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {project.type}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Stack tecnológico
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                    +{project.technologies.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-2 border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap border-b-2 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  activeTab === tab.id
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur">
          <h2 className="mb-8 text-3xl font-bold text-cyan-300">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h2>
          {renderTabContent()}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Ver en GitHub
            </a>
          )}
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm3.5-9.5L10 8v8l5.5-3.5z" />
              </svg>
              Ver demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
