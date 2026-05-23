"use client";

import { motion } from "framer-motion";

//const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="inicio"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0 opacity-30">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500 blur-[140px]"
        />
      </div>
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300"
        >
          Full Stack Developer
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-cyan-400"
        >
          Portafolio Profesional
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mb-6 text-6xl font-black tracking-tight text-white md:text-8xl"
        >
          Ian <span className="text-cyan-400">Sollner</span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="mb-8 text-2xl font-medium text-slate-300 md:text-3xl"
        >
          Ingeniería Civil en Computación e Informática
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl"
        >
          Desarrollo web, automatización de procesos, análisis de sistemas,
          BPMN y tecnologías modernas para construir soluciones digitales.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="#portafolio"
            className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
          >
            Ver portafolio
          </a>

          <a
            href="#contacto"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contacto
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-5 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Descargar CV
          </a>

          <a
            href="https://linkedin.com/in/TU-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Iansollner"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </motion.div>

        <motion.a
          variants={fadeUp}
          href="#sobre-mi"
          className="mt-16 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
        >
          Desliza para conocer más ↓
        </motion.a>
      </motion.div>
    </motion.section>
  );
}