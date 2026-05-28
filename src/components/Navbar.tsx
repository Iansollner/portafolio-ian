"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl sm:gap-4 sm:px-5 sm:py-4">
        <a href="#inicio" className="text-lg font-black tracking-wide text-white sm:text-xl">
          Ian<span className="text-cyan-400"> S</span>
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex lg:gap-8">
          <a href="#sobre-mi" className="transition duration-300 hover:text-cyan-400">
            Sobre mí
          </a>

          <a href="#habilidades" className="transition duration-300 hover:text-cyan-400">
            Habilidades
          </a>

          <a href="#experiencia" className="transition duration-300 hover:text-cyan-400">
            Experiencia
          </a>

          <a
            href="#portafolio"
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/15 hover:text-cyan-100"
          >
            Portafolio
          </a>

          <a href="#educacion" className="transition duration-300 hover:text-cyan-400">
            Educación
          </a>

          <a href="#certificaciones" className="transition duration-300 hover:text-cyan-400">
            Certificaciones
          </a>

          <a href="#contacto" className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-200">
            Contacto
          </a>
        </nav>

        <div className={`w-full overflow-hidden transition-[max-height] duration-300 md:hidden ${open ? "max-h-[360px]" : "max-h-0"}`}>
          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-sm text-slate-300 shadow-xl shadow-cyan-500/5">
            <a href="#sobre-mi" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Sobre mí
            </a>
            <a href="#habilidades" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Habilidades
            </a>
            <a href="#experiencia" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Experiencia
            </a>
            <a
              href="#portafolio"
              onClick={() => setOpen(false)}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/15 hover:text-cyan-100"
            >
              Portafolio
            </a>
            <a href="#educacion" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Educación
            </a>
            <a href="#certificaciones" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Certificaciones
            </a>
            <a href="#contacto" onClick={() => setOpen(false)} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-200">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
