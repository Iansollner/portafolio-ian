"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, ArrowRight } from "lucide-react";

const education = [
  {
    title: "Ingeniería Civil en Computación e Informática",
    institution: "Universidad de Magallanes",
    period: "2026",
    status: "Completado",
    description:
      "Formación orientada al desarrollo de software, sistemas de información, infraestructura tecnológica y análisis computacional.",
    highlights: ["Análisis de sistemas", "Desarrollo full stack", "Programación paralela", "Redes e infraestructura"],
  },
  {
    title: "Cisco — Fundamentos de Ciberseguridad",
    institution: "Cisco Networking Academy",
    period: "En Curso",
    status: "Activo",
    description:
      "Conceptos de seguridad informática, amenazas, vulnerabilidades, redes y protección de sistemas.",
    highlights: ["Seguridad de redes", "Protección de datos", "Análisis de amenazas"],
  },
];

export default function Education() {
  const handleViewCertifications = () => {
    const element = document.getElementById("certificaciones");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="educacion" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Formación
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Educación académica
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Formación universitaria y educación continua en desarrollo de software,
            sistemas y ciberseguridad.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_26px_90px_rgba(14,165,233,0.08)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/90"
              >
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-cyan-300">{item.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:items-end">
                    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {item.period}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
                        item.status === "Activo"
                          ? "border border-green-500/20 bg-green-500/10 text-green-300"
                          : "border border-slate-500/20 bg-slate-500/10 text-slate-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-slate-400">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={handleViewCertifications}
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20"
            >
              <Award className="h-5 w-5" />
              Ver certificaciones
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}