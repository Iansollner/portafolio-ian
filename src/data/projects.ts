import Image from "next/image";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  type: string;
  category: "Frontend" | "Backend" | "Full Stack" | "App" | "Análisis de sistema"| "Sistema de Información";
  technologies: string[];
  github: string;
  demo: string;
  necesidades: string[];
  objetivos: string[];
  arquitectura: string[];
  image: string;
};

export const projects: Project[] = [
  {
    image: "/imagen/slep_2.png",
    slug: "gestor-de-actas",
    title: "Sistema de Gestión Documental — SLEP Magallanes",
    description:
      "Sistema de Información Administrativa diseñado e implementado para digitalizar y estandarizar procesos documentales del área TI del SLEP Magallanes mediante integración con la plataforma gubernamental SIMPLE.",
    longDescription:
      "Gestor de Actas es una aplicación web diseñada para ordenar y administrar actas de reuniones o eventos. Incluye funcionalidades de creación, búsqueda y seguimiento de documentos, mejorando la trazabilidad y el acceso a la información.",
    type: "Sistema web",
    category: "Sistema de Información",
    technologies: [  "React",
      "Node.js",
      "Express.js",
      "SQLite",
      "REST API",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap 5",
      "SIMPLE",
      "BPMN",
      "UML",
      "Git",
      "GitHub"],
    github: "https://github.com/Iansollner/Gestor-Actas",
    demo: "#",
    necesidades: [
      "Digitalizar procesos administrativos que se realizaban manualmente mediante documentos físicos.",
      "Reducir la pérdida de información y mejorar la trazabilidad documental.",
      "Estandarizar formatos de actas, contratos y resoluciones utilizados por el área TI.",
      "Centralizar la visualización y gestión de documentos provenientes de la plataforma SIMPLE.",
      "Automatizar tareas repetitivas como generación de PDFs, validaciones y notificaciones.",
      "Mejorar los tiempos de búsqueda, almacenamiento y emisión de documentos."
    ],
    objetivos: [
      "Diseñar un Sistema de Información Administrativa orientado a la gestión documental del área TI del SLEP Magallanes.",
      "Modelar procesos administrativos utilizando BPMN y UML.",
      "Implementar flujos digitales mediante la plataforma SIMPLE.",
      "Desarrollar un gestor documental complementario para visualizar y administrar trámites.",
      "Integrar generación automática de documentos institucionales en formato PDF.",
      "Mejorar la eficiencia, trazabilidad y control documental institucional."
    ],
  arquitectura: [
    "Frontend SPA desarrollado en React para visualización y administración documental.",
    "Backend REST API desarrollado en Node.js y Express.js.",
    "Base de datos SQLite para almacenamiento local de documentos.",
    "Integración mediante API con la plataforma gubernamental SIMPLE.",
    "Sistema proxy para proteger tokens institucionales y transformar datos.",
    "Generación dinámica de documentos PDF institucionales.",
    "Persistencia local y sincronización de trámites importados desde SIMPLE."
  ]
  },
  {
    image: "/imagen/js.png",
    slug: "ecommerce-react-express",
    title: "E-commerce React + Express",
    description:
      "Plataforma de comercio electrónico desarrollada con frontend en React y backend en Express, orientada a la gestión de productos, ventas y operaciones básicas.",
    longDescription:
      "Esta tienda en línea integra un frontend moderno con un backend REST en Express. Permite la administración de catálogo, la simulación de carrito de compras y el manejo de estados de pedidos.",
    type: "Desarrollo web",
    category: "Full Stack",
    technologies: ["React", "Express", "Node.js", "JavaScript"],
    github: "#",
    demo: "#",
    necesidades: [
      "Plataforma de venta en línea funcional",
      "Gestión dinámica del catálogo de productos",
      "Sistema de carrito de compras persistente",
      "Simulación de pedidos y pagos",
      "Panel administrativo para gestión de inventario",
    ],
    objetivos: [
      "Crear una experiencia de compra fluida y responsiva",
      "Implementar un backend escalable con Express",
      "Gestionar órdenes y estados de pedidos",
      "Proporcionar reportes de ventas y análisis",
      "Integrar validación de datos en cliente y servidor",
    ],
    arquitectura:
      ["Frontend SPA con React usando componentes funcionales y Context API. Backend con Express que expone endpoints REST. Base de datos para productos, usuarios y órdenes. Autenticación de usuarios. Validación de datos con schemas personalizados.",]
  },
  {
    image: "/imagen/matrices.png",
    slug: "matrices-mpi",
    title: "Resolución de matrices con MPI",
    description:
      "Programa en C con MPI para resolver sistemas de ecuaciones mediante sustitución hacia atrás, utilizando distribución de filas en bloques cíclicos.",
    longDescription:
      "El proyecto implementa paralelización con MPI para el cálculo eficiente de sistemas de ecuaciones lineales. Trabaja con distribución de datos en procesos y sincronización de resultados.",
    type: "Programación paralela",
    category: "Backend",
    technologies: ["C", "MPI", "Linux", "Benchmarking"],
    github: "#",
    demo: "#",
    necesidades: [
      "Resolver sistemas de ecuaciones de gran tamaño eficientemente",
      "Paralelizar algoritmos de álgebra lineal",
      "Distribuir carga de trabajo entre procesos",
      "Optimizar tiempo de ejecución en hardware multi-core",
      "Validar precisión de resultados numéricos",
    ],
    objetivos: [
      "Implementar algoritmo de sustitución hacia atrás paralelizado",
      "Lograr speedup linear con múltiples procesos",
      "Distribuir filas en bloques cíclicos para balanceo de carga",
      "Minimizar overhead de comunicación entre procesos",
      "Generar benchmarks de rendimiento",
    ],
    arquitectura:
[      "Programa en C usando MPI para comunicación entre procesos. Distribución de matriz en bloques cíclicos entre procesos. Sincronización con MPI_Barrier. Cada proceso realiza cálculos locales independientes. Recolección de resultados en proceso maestro.",
]  },
  {
    image: "/imagen/portafolio.png",
    slug: "servidor-linux-oracle-cloud",
    title: "Portafolio",
    description:
      "Configuración de un entorno Linux en Oracle Cloud Free Tier, aplicando conceptos de infraestructura, redes, administración de servidores y despliegue.",
    longDescription:
      "El proyecto documenta el despliegue de una instancia Linux en Oracle Cloud, con configuración de red, acceso SSH y despliegue de servicios. Incluye prácticas de seguridad y automatización básica.",
    type: "Infraestructura Cloud",
    category: "Análisis de sistema",
    technologies: ["Oracle Cloud", "Linux", "Redes", "Servidor"],
    github: "#",
    demo: "#",
    necesidades: [
      "Infraestructura en la nube escalable y segura",
      "Acceso remoto seguro mediante SSH",
      "Configuración de firewall y reglas de red",
      "Despliegue de aplicaciones web",
      "Monitoreo y mantenimiento del servidor",
    ],
    objetivos: [
      "Configurar instancia Linux en Oracle Cloud Free Tier",
      "Implementar prácticas de seguridad en servidor",
      "Crear reglas de firewall apropiadas",
      "Desplegar aplicación de ejemplo en el servidor",
      "Documentar proceso de configuración",
    ],
    arquitectura:
[      "Instancia de máquina virtual en Oracle Cloud con sistema operativo Linux. Configuración de grupos de seguridad y reglas de ingreso. Acceso mediante SSH con claves públicas. Instalación de runtime y dependencias de aplicaciones. Configuración de servicio web (nginx/Apache). Monitoreo mediante herramientas de sistema.",
]  },
];
