"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Cpu, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const experienceCards = [
  {
    section: "Experiencia profesional",
    badge: "Institucional",
    icon: Briefcase,
    role: "Analista y Diseñador de Software",
    organization: "SLEP Magallanes",
    period: "2025 - 2026",
    overview:
      "Lideré el análisis, diseño e implementación de una solución documental institucional integrada con la plataforma SIMPLE del Gobierno de Chile.",
    responsibilities: [
      "Consumo de la API de SIMPLE mediante backend propio en Express.js.",
      "Construcción de una aplicación web para visualización y gestión documental.",
      "Generación automática de documentos PDF como actas, resoluciones y contratos.",
      "Diseño de arquitectura cliente-servidor y modelado BPMN/UML.",
      "Integración de flujos documentales institucionales y despliegue en servidor del SLEP.",
    ],
    technologies: [
      "React",
      "Express.js",
      "SQLite",
      "REST API",
      "BPMN",
      "UML",
      "Draw.io",
      "Bizagi",
    ],
  },
  {
    section: "Experiencia profesional",
    badge: "Institucional",
    icon: Briefcase,
    role: "Analista y Diseñador de Sistema Full Stack",
    organization: "Universidad de Magallanes",
    period: "2024 - 2025",
    overview:
      "Diseñé una plataforma web empresarial para centralizar procesos administrativos, inventarios y gestión de activos institucionales.",
    responsibilities: [
      "Levantamiento de requerimientos junto a la Unidad de Inventario y Bodega.",
      "Modelado BPMN y UML para módulos de stock, solicitudes y reportes.",
      "Diseño de base de datos relacional y estructura de datos para seguimiento activo.",
      "Propuesta de interfaces administrativas modernas y procesos de integración institucional.",
      "Evaluación técnica y económica del proyecto para viabilidad operativa.",
    ],
    technologies: [
      "React",
      "Express.js",
      "MySQL",
      "BPMN",
      "UML",
      "Bizagi",
      "MySQL Workbench",
      "Lucidchart",
      "Draw.io",
    ],
  },
  {
    section: "Proyecto técnico",
    badge: "Técnico",
    icon: Cpu,
    role: "Desarrollador de Aplicaciones Paralelas",
    organization: "Proyecto HPC / MPI",
    period: "2023",
    overview:
      "Implementé una solución de cómputo paralelo para resolver sistemas triangulares usando MPI y técnicas de distribución cíclica.",
    responsibilities: [
      "Implementación de procesamiento distribuido con MPI en C.",
      "Optimización de memoria para matrices de gran tamaño.",
      "Distribución cíclica de bloques para balanceo de carga.",
      "Sincronización de procesos con MPI_Bcast y evaluaciones de rendimiento.",
      "Análisis de Speed Up y eficiencia del código paralelo.",
    ],
    technologies: ["C", "MPI", "OpenMPI", "Linux", "GCC", "Bash"],
  },
  {
    section: "Experiencia complementaria",
    badge: "Operativa",
    icon: Sparkles,
    role: "Atención al Cliente y Gestión Operativa",
    organization: "Joyería Eclipse",
    period: "6 años",
    overview:
      "Brindé atención especializada al cliente, administración de ventas y soporte operativo en un entorno retail exigente.",
    responsibilities: [
      "Atención y asesoría personalizada a clientes.",
      "Gestión de ventas y manejo de caja.",
      "Control de inventario, stock y reposición de producto.",
      "Coordinación de operaciones comerciales básicas.",
      "Apoyo en la organización del punto de venta.",
    ],
    technologies: ["Atención al cliente", "Ventas", "Caja", "Control de stock", "Comunicación"],
  },
];

export default function Experience() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 10);
    setCanScrollRight(slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 10);
  };

  useEffect(() => {
    updateScrollButtons();
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      slider.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const offset = slider.clientWidth * 0.9;
    slider.scrollBy({ left: direction * offset, behavior: "smooth" });
  };

  return (
    <section id="experiencia" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Trayectoria
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Experiencia profesional
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Una selección de roles, proyectos y entregables que reflejan mi enfoque técnico,
            institucional y operativo, con especialidad en desarrollo web y análisis de sistemas.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pr-4 scroll-smooth sm:-mx-6 sm:px-6 lg:-mx-0 lg:px-0" ref={sliderRef}>
            {experienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={`${card.role}-${card.organization}`}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="snap-start min-w-[90vw] sm:min-w-[70vw] md:min-w-[56vw] lg:min-w-[44rem] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_26px_90px_rgba(14,165,233,0.08)] backdrop-blur-xl"
                >
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                          {card.section}
                        </p>
                        <h3 className="text-2xl font-semibold text-white">{card.role}</h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {card.badge}
                    </span>
                  </div>

                  <div className="mb-5 rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-5">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-slate-400">{card.organization}</p>
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-500">{card.period}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{card.overview}</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Responsabilidades
                      </p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {card.responsibilities.map((task) => (
                          <li key={task} className="flex gap-3 leading-6">
                            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Tecnologías
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center px-3 md:flex">
            <button
              type="button"
              onClick={() => handleScroll(-1)}
              disabled={!canScrollLeft}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300 disabled:opacity-40 disabled:hover:border-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center px-3 md:flex">
            <button
              type="button"
              onClick={() => handleScroll(1)}
              disabled={!canScrollRight}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300 disabled:opacity-40 disabled:hover:border-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 md:hidden">
            <button
              type="button"
              onClick={() => handleScroll(-1)}
              disabled={!canScrollLeft}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/90 px-4 text-sm text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </button>
            <button
              type="button"
              onClick={() => handleScroll(1)}
              disabled={!canScrollRight}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/90 px-4 text-sm text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300 disabled:opacity-40"
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
