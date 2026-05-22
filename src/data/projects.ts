export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  type: string;
  technologies: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    slug: "gestor-de-actas",
    title: "Gestor de Actas",
    description:
      "Sistema desarrollado para la gestión y organización de actas, enfocado en mejorar el control documental y facilitar procesos administrativos.",
    longDescription:
      "Gestor de Actas es una aplicación web diseñada para ordenar y administrar actas de reuniones o eventos. Incluye funcionalidades de creación, búsqueda y seguimiento de documentos, mejorando la trazabilidad y el acceso a la información.",
    type: "Sistema web",
    technologies: ["React", "Node.js", "Express", "JavaScript"],
    github: "https://github.com/Iansollner/Gestor-Actas",
    demo: "#",
  },
  {
    slug: "ecommerce-react-express",
    title: "E-commerce React + Express",
    description:
      "Plataforma de comercio electrónico desarrollada con frontend en React y backend en Express, orientada a la gestión de productos, ventas y operaciones básicas.",
    longDescription:
      "Esta tienda en línea integra un frontend moderno con un backend REST en Express. Permite la administración de catálogo, la simulación de carrito de compras y el manejo de estados de pedidos.",
    type: "Desarrollo web",
    technologies: ["React", "Express", "Node.js", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    slug: "matrices-mpi",
    title: "Resolución de matrices con MPI",
    description:
      "Programa en C con MPI para resolver sistemas de ecuaciones mediante sustitución hacia atrás, utilizando distribución de filas en bloques cíclicos.",
    longDescription:
      "El proyecto implementa paralelización con MPI para el cálculo eficiente de sistemas de ecuaciones lineales. Trabaja con distribución de datos en procesos y sincronización de resultados.",
    type: "Programación paralela",
    technologies: ["C", "MPI", "Linux", "Benchmarking"],
    github: "#",
    demo: "#",
  },
  {
    slug: "servidor-linux-oracle-cloud",
    title: "Servidor Linux en Oracle Cloud",
    description:
      "Configuración de un entorno Linux en Oracle Cloud Free Tier, aplicando conceptos de infraestructura, redes, administración de servidores y despliegue.",
    longDescription:
      "El proyecto documenta el despliegue de una instancia Linux en Oracle Cloud, con configuración de red, acceso SSH y despliegue de servicios. Incluye prácticas de seguridad y automatización básica.",
    type: "Infraestructura Cloud",
    technologies: ["Oracle Cloud", "Linux", "Redes", "Servidor"],
    github: "#",
    demo: "#",
  },
];
