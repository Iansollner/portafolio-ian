import Image from "next/image";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  type: string;
  category: "Frontend" | "Backend" | "Full Stack" | "App" | "Análisis de sistema";
  technologies: string[];
  github: string;
  demo: string;
  necesidades: string[];
  objetivos: string[];
  arquitectura: string;
  image: string;
};

export const projects: Project[] = [
  {
    image: "/imagen/slep_2.png",
    slug: "gestor-de-actas",
    title: "Gestor de Actas",
    description:
      "Sistema desarrollado para la gestión y organización de actas, enfocado en mejorar el control documental y facilitar procesos administrativos.",
    longDescription:
      "Gestor de Actas es una aplicación web diseñada para ordenar y administrar actas de reuniones o eventos. Incluye funcionalidades de creación, búsqueda y seguimiento de documentos, mejorando la trazabilidad y el acceso a la información.",
    type: "Sistema web",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "JavaScript"],
    github: "https://github.com/Iansollner/Gestor-Actas",
    demo: "#",
    necesidades: [
      "Gestión centralizada de documentos de actas",
      "Búsqueda y filtrado eficiente de actas",
      "Control de acceso y permisos de usuarios",
      "Auditoría de cambios en los documentos",
      "Interfaz intuitiva para usuarios no técnicos",
    ],
    objetivos: [
      "Reducir tiempo de búsqueda de actas en un 80%",
      "Centralizar la gestión documental en una plataforma única",
      "Mejorar el seguimiento de estados y responsabilidades",
      "Crear un historial de versiones para cada documento",
      "Proporcionar reportes automáticos de gestión",
    ],
    arquitectura:
      "Frontend en React con componentes reutilizables y manejo de estado con hooks. Backend en Node.js/Express con rutas RESTful. Base de datos relacional para gestión de usuarios y documentos. Autenticación con JWT. Almacenamiento de archivos en servidor local.",
  },
  {
    image: "/imagen/foto_formal_2.png",
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
      "Frontend SPA con React usando componentes funcionales y Context API. Backend con Express que expone endpoints REST. Base de datos para productos, usuarios y órdenes. Autenticación de usuarios. Validación de datos con schemas personalizados.",
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
      "Programa en C usando MPI para comunicación entre procesos. Distribución de matriz en bloques cíclicos entre procesos. Sincronización con MPI_Barrier. Cada proceso realiza cálculos locales independientes. Recolección de resultados en proceso maestro.",
  },
  {
    image: "/imagen/matrices.png",
    slug: "servidor-linux-oracle-cloud",
    title: "Servidor Linux en Oracle Cloud",
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
      "Instancia de máquina virtual en Oracle Cloud con sistema operativo Linux. Configuración de grupos de seguridad y reglas de ingreso. Acceso mediante SSH con claves públicas. Instalación de runtime y dependencias de aplicaciones. Configuración de servicio web (nginx/Apache). Monitoreo mediante herramientas de sistema.",
  },
];
