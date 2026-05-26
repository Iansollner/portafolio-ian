export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contacto
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Trabajemos juntos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Puedes contactarme a través de mis redes profesionales o enviarme
            un mensaje directamente mediante el formulario.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            
            <h3 className="mb-8 text-3xl font-bold text-white">
              Información de contacto
            </h3>

            <div className="space-y-6">

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  Email
                </p>

                <p className="text-slate-300">
                  iansollner@gmail.com
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  LinkedIn
                </p>

                <p className="text-slate-300">
                  <a
                    href="https://linkedin.com/in/ian-alejandro-sollner-fuentealba-898375342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-cyan-400 hover:underline hover:decoration-cyan-400"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  GitHub
                </p>

                <p className="text-slate-300">
                  <a
                    href="https://github.com/tu-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-cyan-400 hover:underline hover:decoration-cyan-400"
                  >
                    github.com/tu-github
                  </a>
                </p>
              </div>

            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">

            <h3 className="mb-8 text-3xl font-bold text-white">
              Envíame un mensaje
            </h3>

            <div className="space-y-6">

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Nombre
                </label>

                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Mensaje
                </label>

                <textarea
                  rows={6}
                  placeholder="Escribe tu mensaje..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-cyan-300"
              >
                Enviar mensaje
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}