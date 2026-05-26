"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Shield, Code, Briefcase } from "lucide-react";

const certifications = [
  {
    title: "Programador de Bases de Datos en la Web",
    institution: "Universidad de Magallanes",
    category: "Desarrollo y Software",
    description:
      "Formación en programación de bases de datos para la web, abarcando modelamiento relacional, consultas SQL, manipulación de datos (CRUD) e integración con aplicaciones backend.",
    skills: ["SQL", "CRUD", "Bases de Datos", "Modelamiento Relacional", "Backend"],
    type: "pdf",
    href: "/certificados/Programador de bases de datos en la web.pdf",
  },
  {
    title: "Especialista en Gestión de Proyectos Informáticos",
    institution: "Universidad de Magallanes",
    category: "Gestión TI",
    description:
      "Formación en gestión de proyectos TI, incluyendo planificación, control de alcance, gestión de recursos y seguimiento de proyectos con enfoque en metodologías tradicionales y ágiles.",
    skills: ["Gestión TI", "Planificación", "Metodologías Ágiles", "Scrum", "Gestión de Recursos"],
    type: "pdf",
    href: "/certificados/Especialista en Gestion de Proyectos Informáticos.pdf",
  },
  {
    title: "Especialista en Configuración y Mantención de Redes de Computadores",
    institution: "Universidad de Magallanes",
    category: "Redes y Cisco",
    description:
      "Formación en configuración, administración y mantención de redes de computadores, incluyendo dispositivos de red, resolución de problemas y gestión de infraestructura.",
    skills: ["Networking", "Switching", "Routing", "Infraestructura", "Troubleshooting"],
    type: "pdf",
    href: "/certificados/Especialista en configruacion y mantencion de redes de computadores.pdf",
  },
  {
    title: "Cisco Umag",
    institution: "Cisco Networking Academy / UMAG",
    category: "Redes y Cisco",
    description:
      "Certificación orientada a fundamentos de redes, modelo OSI/TCP-IP, direccionamiento IPv4/IPv6, configuración de switches y routers, routing y conceptos de redes inalámbricas.",
    skills: ["CCNA", "IPv4", "IPv6", "Routing", "Switching", "Wireless"],
    type: "pdf",
    href: "/certificados/Cisco-Umag.pdf",
  },
  {
    title: "Analista de Sistemas Informáticos",
    institution: "Universidad de Magallanes",
    category: "Desarrollo y Software",
    description:
      "Formación orientada al análisis y desarrollo de sistemas informáticos, incluyendo programación, bases de datos, modelamiento de procesos y ciclo de vida del software.",
    skills: ["Análisis de Sistemas", "Bases de Datos", "Programación", "Modelamiento", "Ingeniería de Software"],
    type: "pdf",
    href: "/certificados/Analista de datos Informáticos.pdf",
  },
  {
    title: "Introducción a las Redes",
    institution: "Cisco Networking Academy",
    category: "Redes y Cisco",
    description:
      "Certificación enfocada en fundamentos de redes, direccionamiento IP, protocolos, conectividad y conceptos básicos de infraestructura de red.",
    skills: ["Networking", "IPv4", "Protocolos", "OSI", "TCP/IP"],
    type: "credly",
    href: "https://www.credly.com/badges/bbc5af40-fea4-4f60-b35c-dd5ec7bf6bc9/linked_in_profile",
  },
  {
    title: "Switching, Routing, and Wireless Essentials",
    institution: "Cisco Networking Academy",
    category: "Redes y Cisco",
    description:
      "Certificación enfocada en switching, routing y fundamentos de redes inalámbricas mediante tecnologías Cisco.",
    skills: ["Switching", "Routing", "Wireless", "Cisco"],
    type: "credly",
    href: "https://www.credly.com/badges/4da6d3b0-306a-43bb-9382-de05e37deabf/linked_in_profile",
  },
  {
    title: "Introducción a Ciberseguridad",
    institution: "Cisco Networking Academy",
    category: "Redes y Cisco",
    description:
      "Certificación orientada a fundamentos de ciberseguridad, amenazas informáticas, vulnerabilidades y mecanismos básicos de defensa y protección.",
    skills: ["Cybersecurity", "Threat Detection", "Networking Security", "Vulnerabilidades", "Defensa"],
    type: "credly",
    href: "https://www.credly.com/earner/earned/badge/4beccad3-98eb-4629-888e-f873a6d554f3",
  },
];

const categories = [
  { name: "Redes y Cisco", icon: Shield },
  { name: "Desarrollo y Software", icon: Code },
  { name: "Gestión TI", icon: Briefcase },
];

const getCategoryIcon = (categoryName: string) => {
  const category = categories.find((c) => c.name === categoryName);
  return category?.icon || Award;
};

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
            Certificaciones profesionales en redes, desarrollo de software y gestión TI
            de instituciones reconocidas a nivel internacional.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-16">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            const certs = certifications.filter((c) => c.category === category.name);

            if (certs.length === 0) return null;

            return (
              <div key={category.name}>
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                    <CategoryIcon className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                  <span className="ml-auto text-sm text-slate-500">{certs.length} certificación{certs.length > 1 ? "es" : ""}</span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {certs.map((cert, index) => (
                    <motion.article
                      key={cert.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_26px_90px_rgba(14,165,233,0.08)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/90 hover:shadow-[0_26px_90px_rgba(14,165,233,0.15)]"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                          <Award className="h-5 w-5" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {cert.type === "credly" ? "Credly" : "Certificado"}
                        </span>
                      </div>

                      <h4 className="mb-2 text-lg font-semibold text-white">{cert.title}</h4>

                      <div className="mb-4 flex flex-col gap-1">
                        <p className="text-sm text-cyan-300">{cert.institution}</p>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-slate-400">{cert.description}</p>

                      <div className="mb-5 flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20"
                      >
                        {cert.type === "credly" ? "Ver insignia" : "Ver certificado"}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

