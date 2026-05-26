"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Cisco — Fundamentos de Ciberseguridad",
    issuer: "Cisco Networking Academy",
    date: "2026",
    status: "En progreso",
    description:
      "Certificación en ciberseguridad, seguridad de redes, análisis de amenazas y protección de sistemas.",
    skills: ["Seguridad informática", "Redes", "Análisis de vulnerabilidades"],
  },
  {
    title: "Python para Análisis de Datos",
    issuer: "Coursera",
    date: "2025",
    status: "Completado",
    description: "Especialización en análisis de datos con Python, Pandas, NumPy y visualización de datos.",
    skills: ["Python", "Análisis de datos", "Visualización"],
  },
  {
    title: "React & Next.js Avanzado",
    issuer: "Udemy",
    date: "2025",
    status: "Completado",
    description:
      "Formación completa en desarrollo frontend moderno con React, Next.js, TypeScript y Tailwind CSS.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "SQL Server & Diseño de Base de Datos",
    issuer: "Coursera",
    date: "2024",
    status: "Completado",
    description:
      "Certificación en diseño y administración de bases de datos relacionales con SQL Server.",
    skills: ["SQL", "Diseño de BD", "Administración"],
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Acreditaciones
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Certificaciones
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Certificaciones profesionales en ciberseguridad, desarrollo web, análisis de datos
            y gestión de bases de datos de plataformas reconocidas a nivel internacional.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_26px_90px_rgba(14,165,233,0.08)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/90"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                    <Award className="h-5 w-5" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
                      cert.status === "Completado"
                        ? "border border-green-500/20 bg-green-500/10 text-green-300"
                        : "border border-amber-500/20 bg-amber-500/10 text-amber-300"
                    }`}
                  >
                    <CheckCircle className="h-3 w-3" />
                    {cert.status}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">{cert.title}</h3>

                <div className="mb-4 flex flex-col gap-1">
                  <p className="text-sm text-cyan-300">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-400">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
