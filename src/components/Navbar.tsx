"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">
        <a href="#inicio" className="text-xl font-black tracking-wide text-white">
          Ian<span className="text-cyan-400"> S</span>
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#sobre-mi" className="transition duration-300 hover:text-cyan-400">
            Sobre mí
          </a>

          <a href="#habilidades" className="transition duration-300 hover:text-cyan-400">
            Habilidades
          </a>

          <a href="#experiencia" className="transition duration-300 hover:text-cyan-400">
            Experiencia
          </a>

          <a href="#portafolio" className="transition duration-300 hover:text-cyan-400">
            Portafolio
          </a>

          <a href="#educacion" className="transition duration-300 hover:text-cyan-400">
            Educación
          </a>

          <a href="#contacto" className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-200">
            Contacto
          </a>
        </nav>

        <div className={`w-full overflow-hidden transition-[max-height] duration-300 md:hidden ${open ? "max-h-[360px]" : "max-h-0"}`}>
          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/95 px-5 py-4 text-sm text-slate-300 shadow-xl shadow-cyan-500/5">
            <a href="#sobre-mi" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Sobre mí
            </a>
            <a href="#habilidades" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Habilidades
            </a>
            <a href="#experiencia" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Experiencia
            </a>
            <a href="#portafolio" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Portafolio
            </a>
            <a href="#educacion" onClick={() => setOpen(false)} className="transition duration-300 hover:text-cyan-400">
              Educación
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
