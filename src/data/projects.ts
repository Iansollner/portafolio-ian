

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
  arquitectura: string[];
  architectureImages?: string[];
  architectureImageCaptions?: string[];
  architectureSections?: {
    title: string;
    description: string[];
    points?: string[];
  }[];
  resultados?: string[];
  funcionalidades?: string[];
  desafios?: string[];
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
      "Proyecto enfocado en la digitalización de procesos administrativos del área de Tecnología de la Información del SLEP Magallanes. La solución integra la plataforma gubernamental SIMPLE con un sistema web complementario desarrollado en React y Node.js, permitiendo gestionar, visualizar y generar documentos institucionales como actas, contratos y resoluciones de manera centralizada y trazable.",
    type: "Sistema de Información",
    category: "Full Stack",
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
    ],
    architectureImages: [
      "/imagen/arquitecturaslep.png",
      "/imagen/flujoslep.png",
    ],
    architectureImageCaptions: [
      "Arquitectura Del Sistema de Gestión Documental",
      "Flujo del Sitema y su Integración con SIMPLE",
    ],
    architectureSections: [
      {
        title: "Importación desde SIMPLE",
        description: ["El sistema consume la API REST de SIMPLE para obtener la informacion de formularios y procesos completados. Se importan:"],
        points: [
          "Datos de formularios",
          "Usuarios y tramitadores",
          "Estados y fechas de procesos",
        ],
      },
      {
        title: "Gestión Documental",
        description: ["Los documentos generados se gestionanen el sistema con metadatos asociadosa cada proceso. Características:"],
        points: [
          "Almacenamiento de PDFs",
          "Busqueda y filtros avanzados",
          "Historial y trazabilidad",
        ],
      },
      {
        title: "Generación de Documentos",
        description: ["A partir de los datos importados, el sistema genera automaticamente documentos institucionales en formato PDF. Tipos de Documentos:"],
        points: [
          "Actas de entrega y recepción",
          "Resoluciones de reasignación",
          "Contratos comodato",
        ],
      },
      {
        title: "Reportes y Consultas",
        description: ["La informacion consolidada permite visualizar reportes y estadisticas para la toma de decisiones."],
        points: [
          "Reportes por tipo de documento",
          "Reportes por periodo",
          "Estado de procesos",
          "Exportación de datos",
        ],
      },

      {
        title: "Despliegue",
        description: ["La aplicación se encuentra desplegada en el servidor institucional del SLEP Magallanes."],
        points: [
          "Frontend: React (Vite)",
          "Backend: Express.js (Node.js)",
          "Base de datos: SQLite",
          "Servidor: Institucional (Linux)"
        ]
      },
    ],
    resultados: [
      "Reducción aproximada del 72% en tiempos de generación documental.",
      "Digitalización completa de procesos anteriormente manuales.",
      "Automatización de revisión, emisión y almacenamiento documental.",
      "Estandarización institucional de actas, contratos y resoluciones.",
      "Validación y puesta en marcha por parte del área TI del SLEP Magallanes.",
      "Mejora significativa en trazabilidad y disponibilidad de información."
    ],
    funcionalidades: [
      "Importación de trámites desde SIMPLE mediante API.",
      "Generación automática de documentos PDF.",
      "Visualización de documentos institucionales.",
      "Filtros dinámicos por tipo, fecha y estado.",
      "Historial y trazabilidad documental.",
      "Edición de contratos comodato.",
      "Gestión de actas de entrega y recepción.",
      "Gestión de resoluciones de reasignación.",
      "Notificaciones automáticas por correo.",
      "Almacenamiento local de documentos."
    ],
    desafios: [
      "Integración segura con la API institucional de SIMPLE.",
      "Modelado BPMN de procesos administrativos reales.",
      "Estandarización documental para múltiples tipos de trámites.",
      "Conversión dinámica de datos JSON a estructuras visuales.",
      "Diseño de arquitectura híbrida entre SIMPLE y sistema local.",
      "Persistencia local y sincronización de documentos."
    ],
  },
  {
    image: "/imagen/umag.png",
    slug: "inventario_bodega_umag",
    title: "Sistema Integral de Inventario y Bodega UMAG",
    description:
      "Diseño de un sistema web empresarial para centralizar y automatizar procesos de inventario y bodega en la Universidad de Magallanes.",
    longDescription:
      "Proyecto de análisis y diseño de software desarrollado junto a la Unidad de Inventario y Bodega de la Universidad de Magallanes. La propuesta contempla una plataforma web basada en React, Express.js y MySQL para centralizar procesos administrativos como altas, bajas, traslados, donaciones, solicitudes a bodega, reportes y control de activos institucionales.",
    type: "Análisis y Diseño de Software",
    category: "Análisis de sistema",
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "MySQL Workbench",
      "BPMN",
      "UML",
      "Bizagi",
      "Draw.io",
      "Lucidchart",
      "Excel",
      "Word"
    ],
    github: "#",
    demo: "#",

    necesidades: [
      "Centralizar la información de inventario y bodega en una única plataforma.",
      "Reducir el uso de herramientas separadas como Excel, correos, AppSheet y documentos compartidos.",
      "Mejorar la trazabilidad de bienes, productos, solicitudes y movimientos internos.",
      "Automatizar procesos administrativos asociados a altas, bajas, traslados, donaciones y solicitudes a bodega.",
      "Facilitar la búsqueda de bienes mediante filtros, códigos, facturas y órdenes de compra.",
      "Optimizar la generación de reportes administrativos y planillas murales.",
      "Incorporar flujos de validación, vistos buenos, firmas y timbres digitales.",
      "Diseñar una solución escalable e integrable con sistemas institucionales como SIA, VRAF, Adquisiciones y Mesa de Ayuda."
    ],

    objetivos: [
      "Diseñar un sistema informático web para apoyar los procesos de la Unidad de Inventario y Bodega de la Universidad de Magallanes.",
      "Modelar los procesos actuales y propuestos mediante BPMN, DFD y diagramas UML.",
      "Definir requerimientos funcionales y no funcionales para una plataforma de inventario y bodega.",
      "Diseñar una base de datos relacional para centralizar la información de bienes, productos, solicitudes y reportes.",
      "Proponer interfaces funcionales para los principales módulos del sistema.",
      "Evaluar la factibilidad técnica, operacional y económica de la solución propuesta.",
      "Plantear una arquitectura web basada en React, Express.js y MySQL."
    ],

    arquitectura: [
      "Aplicación web diseñada bajo una arquitectura cliente-servidor.",
      "Frontend propuesto en React para la construcción de interfaces y navegación entre módulos.",
      "Backend propuesto en Node.js con Express.js para gestionar la lógica de negocio y servicios REST.",
      "Base de datos relacional MySQL diseñada mediante modelo entidad-relación y diccionario de datos.",
      "Sistema modular dividido en inventario, bodega, solicitudes, reportes, bajas, traslados y donaciones.",
      "Control de acceso basado en roles para usuarios, funcionarios, encargados, comisión de baja y autoridades VB.",
      "Integración proyectada con sistemas institucionales como Adquisiciones, VRAF, SIA y Mesa de Ayuda.",
      "Flujos de aprobación mediante firmas digitales, timbres y estados de solicitud."
    ],

    architectureImages: [
      "/imagen/arquitectura-inventario-umag.png",
      "/imagen/navegacion-inventario-umag.png"
    ],

    architectureImageCaptions: [
      "Arquitectura propuesta del sistema de Inventario y Bodega",
      "Mapa de navegación de interfaces y módulos"
    ],

    architectureSections: [
      {
        title: "Estructura lógica",
        description: [
          "El sistema fue diseñado de forma modular para separar los procesos principales de inventario y bodega."
        ],
        points: [
          "Módulo de alta, baja, traslado y donación de bienes.",
          "Módulo de solicitudes a bodega.",
          "Módulo de administración de productos.",
          "Módulo de reportes y búsqueda avanzada."
        ]
      },
      {
        title: "Estructura física",
        description: [
          "La solución fue planteada como una aplicación web cliente-servidor con frontend, backend y base de datos relacional."
        ],
        points: [
          "Frontend desarrollado en React.",
          "Backend mediante Node.js y Express.js.",
          "Base de datos relacional MySQL.",
          "Comunicación mediante servicios REST."
        ]
      },
      {
        title: "Modelo de datos",
        description: [
          "Se diseñó una base de datos relacional para representar bienes, usuarios, solicitudes, productos, edificios, espacios y proveedores."
        ],
        points: [
          "Modelo entidad-relación diseñado en MySQL Workbench.",
          "Diccionario de datos para documentar atributos y entidades.",
          "Relaciones entre inventario, bodega, usuarios y reportes.",
          "Soporte para trazabilidad histórica de activos."
        ]
      },
      {
        title: "Integraciones institucionales",
        description: [
          "La arquitectura considera conexión con sistemas internos de la universidad para reducir duplicidad de datos y automatizar procesos."
        ],
        points: [
          "Integración proyectada con Adquisiciones para órdenes de compra y facturas.",
          "Integración con VRAF para información contable.",
          "Conexión con Mesa de Ayuda para tickets de traslado.",
          "Compatibilidad con el ecosistema SIA institucional."
        ]
      },
      {
        title: "Modelado del sistema",
        description: [
          "El proyecto incluyó diversos diagramas para representar procesos, comportamiento del sistema e interacción entre actores."
        ],
        points: [
          "Diagramas BPMN de procesos actuales y propuestos.",
          "Casos de uso UML y fichas de casos de uso.",
          "Diagramas de secuencia y colaboración.",
          "Diagrama de navegación de interfaces."
        ]
      },
      {
        title: "Roles y permisos",
        description: [
          "El sistema fue diseñado con acceso diferenciado según las responsabilidades de cada tipo de usuario."
        ],
        points: [
          "Usuario general.",
          "Funcionario y encargado de inventario.",
          "Funcionario y encargado de bodega.",
          "Comisión de baja.",
          "Autoridades con visto bueno, firma o timbre digital."
        ]
      }
    ],

    resultados: [
      "Diseño completo de una solución web empresarial para la Unidad de Inventario y Bodega UMAG.",
      "Levantamiento y documentación de requerimientos funcionales y no funcionales.",
      "Modelado de procesos administrativos mediante BPMN y UML.",
      "Diseño de base de datos relacional y diccionario de datos.",
      "Propuesta de interfaces para los módulos principales del sistema.",
      "Evaluación de factibilidad técnica, operacional y económica.",
      "Estimación de costos y esfuerzo mediante puntos de función."
    ],

    funcionalidades: [
      "Alta de bienes institucionales.",
      "Baja de bienes con flujos de validación.",
      "Traslado de activos entre ubicaciones.",
      "Donación de bienes internos o externos.",
      "Solicitud de productos a bodega.",
      "Administración de stock y productos.",
      "Búsqueda avanzada de bienes y solicitudes.",
      "Generación de reportes en PDF o Excel.",
      "Planillas murales por dependencia.",
      "Firmas y timbres digitales para procesos administrativos."
    ],

    desafios: [
      "Comprender procesos administrativos reales de inventario y bodega.",
      "Traducir procesos manuales en módulos digitales estructurados.",
      "Diseñar una arquitectura escalable para múltiples áreas institucionales.",
      "Modelar flujos complejos con múltiples actores, validaciones y estados.",
      "Diseñar una base de datos capaz de centralizar información dispersa.",
      "Proponer integraciones con sistemas institucionales existentes.",
      "Documentar técnicamente el sistema mediante BPMN, UML, DFD y modelos relacionales."
    ]
  },
  {
  image: "/imagen/portafolio.png",
  slug: "portfolio-profesional",
  title: "Portafolio Profesional",
  description:
    "Aplicación web moderna desarrollada para presentar proyectos, experiencia y habilidades del área TI mediante una arquitectura frontend moderna y responsive.",
  longDescription:
    "Portafolio profesional desarrollado con Next.js, React y TypeScript orientado a presentar proyectos académicos, institucionales y de desarrollo de software mediante una experiencia visual moderna inspirada en portfolios SaaS y desarrolladores frontend profesionales. El proyecto incorpora rutas dinámicas, animaciones avanzadas, diseño responsive, arquitectura basada en componentes reutilizables y páginas individuales tipo case study para cada proyecto.",

  type: "Frontend / Full Stack",
  category: "Frontend",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
    "Git",
    "GitHub",
    "Vercel",
    "VSCode"
  ],

  github: "https://github.com/Iansollner/portafolio-ian",
  demo: "#",

  necesidades: [
    "Contar con una plataforma personal para presentar perfil profesional, habilidades y proyectos TI.",
    "Centralizar proyectos académicos, institucionales y personales en un único sitio web.",
    "Mostrar proyectos mediante páginas individuales con información técnica detallada.",
    "Crear una presencia digital profesional orientada a postulaciones laborales y prácticas TI.",
    "Diseñar una interfaz moderna, responsive y visualmente atractiva para reclutadores.",
    "Organizar proyectos mediante categorías, tecnologías y arquitectura técnica.",
    "Incorporar animaciones e interacciones modernas para mejorar la experiencia de usuario."
  ],

  objetivos: [
    "Desarrollar un portafolio profesional utilizando tecnologías modernas del ecosistema frontend.",
    "Implementar una arquitectura basada en componentes reutilizables utilizando React y Next.js.",
    "Crear páginas dinámicas tipo case study para cada proyecto del portafolio.",
    "Diseñar una experiencia visual moderna inspirada en portfolios SaaS y desarrolladores frontend.",
    "Aplicar animaciones, efectos visuales y diseño responsive mediante Tailwind CSS y Framer Motion.",
    "Optimizar la organización y visualización de proyectos mediante rutas dinámicas y datos centralizados.",
    "Preparar una plataforma escalable para futuras mejoras y despliegue profesional."
  ],

  arquitectura: [
    "Aplicación web desarrollada utilizando Next.js con App Router.",
    "Frontend basado en React y TypeScript mediante componentes reutilizables.",
    "Sistema de rutas dinámicas para páginas individuales de proyectos.",
    "Datos centralizados de proyectos mediante archivos TypeScript.",
    "Estilos implementados con Tailwind CSS bajo una estética dark/cyan moderna.",
    "Animaciones y microinteracciones desarrolladas con Framer Motion.",
    "Arquitectura modular separada por componentes, secciones y páginas.",
    "Despliegue preparado para Vercel e integración continua mediante GitHub."
  ],

  architectureImages: [
    "/imagen/sistemaportafolio.png",
    "/imagen/portafolio.png"
  ],

  architectureImageCaptions: [
    "Arquitectura general del portafolio profesional",
    "Presentación del portafolio"
  ],

  architectureSections: [
    {
      title: "Estructura lógica",
      description: [
        "El portafolio fue diseñado mediante una arquitectura modular basada en componentes reutilizables."
      ],
      points: [
        "Separación por secciones como Hero, About, Projects, Skills y Contact.",
        "Sistema de tarjetas dinámicas para proyectos.",
        "Páginas individuales tipo case study para cada proyecto.",
        "Organización del contenido mediante rutas dinámicas."
      ]
    },

    {
      title: "Estructura física",
      description: [
        "La aplicación fue desarrollada como una SPA moderna utilizando el ecosistema de Next.js."
      ],
      points: [
        "Frontend desarrollado con React y TypeScript.",
        "Renderizado mediante Next.js App Router.",
        "Assets estáticos organizados mediante estructura modular.",
        "Despliegue en Vercel conectado con GitHub."
      ]
    },

    {
      title: "Arquitectura frontend",
      description: [
        "La interfaz se construyó utilizando componentes reutilizables y estilos utilitarios modernos."
      ],
      points: [
        "Tailwind CSS para diseño responsive.",
        "Framer Motion para animaciones y transiciones.",
        "Lucide React para iconografía moderna.",
        "Diseño dark/cyan inspirado en portfolios SaaS."
      ]
    },

    {
      title: "Gestión de proyectos",
      description: [
        "Los proyectos se administran mediante datos centralizados para facilitar escalabilidad y mantenimiento."
      ],
      points: [
        "Archivo projects.ts como fuente principal de datos.",
        "Renderizado dinámico de tecnologías y categorías.",
        "Sistema de tabs para arquitectura, objetivos y resultados.",
        "Compatibilidad con imágenes y diagramas por proyecto."
      ]
    },

    {
      title: "Experiencia de usuario",
      description: [
        "El proyecto fue diseñado para priorizar navegación fluida, claridad visual y presentación profesional."
      ],
      points: [
        "Diseño completamente responsive.",
        "Hover effects y glow effects modernos.",
        "Cards premium con transparencias y blur.",
        "Optimización visual orientada a reclutadores TI."
      ]
    },

    {
      title: "Despliegue y control de versiones",
      description: [
        "El proyecto utiliza herramientas modernas de desarrollo y despliegue continuo."
      ],
      points: [
        "Control de versiones mediante Git y GitHub.",
        "Despliegue automático mediante Vercel.",
        "Estructura preparada para escalabilidad futura.",
        "Integración continua simplificada."
      ]
    }
  ],

  resultados: [
    "Desarrollo de un portafolio profesional moderno y escalable.",
    "Implementación de rutas dinámicas para proyectos.",
    "Diseño responsive optimizado para desktop y dispositivos móviles.",
    "Creación de una interfaz moderna inspirada en portfolios premium.",
    "Integración de animaciones avanzadas y microinteracciones.",
    "Centralización y organización profesional de proyectos TI.",
    "Preparación de una plataforma lista para postulaciones laborales y crecimiento profesional."
  ],

  funcionalidades: [
    "Landing page profesional.",
    "Navbar flotante responsive.",
    "Sistema de proyectos dinámicos.",
    "Páginas individuales para cada proyecto.",
    "Filtros por tecnologías y categorías.",
    "Visualización de arquitectura e imágenes técnicas.",
    "Animaciones y transiciones modernas.",
    "Botones de contacto, GitHub, LinkedIn y CV.",
    "Diseño responsive para múltiples dispositivos.",
    "Sistema escalable basado en componentes."
  ],

  desafios: [
    "Diseñar una interfaz moderna manteniendo buena experiencia de usuario.",
    "Construir una arquitectura escalable basada en componentes reutilizables.",
    "Implementar rutas dinámicas y páginas individuales para proyectos.",
    "Mantener consistencia visual en toda la aplicación.",
    "Diseñar una estética profesional tipo SaaS/frontend premium.",
    "Optimizar animaciones y efectos visuales sin afectar rendimiento.",
    "Organizar proyectos complejos mediante una estructura clara y mantenible."
  ]
},{
  image: "/imagen/matrices.png",

  slug: "computacion-paralela-mpi",

  title: "Resolución Paralela de Sistemas Triangulares con MPI",

  description:
    "Aplicación de computación paralela desarrollada en C y MPI para resolver sistemas de ecuaciones triangulares superiores utilizando distribución cíclica de bloques y procesamiento distribuido.",

  longDescription:
    "Proyecto de High Performance Computing (HPC) enfocado en la paralelización de la resolución de sistemas de ecuaciones lineales mediante sustitución hacia atrás. La aplicación fue desarrollada en lenguaje C utilizando MPI (Message Passing Interface), implementando una estrategia de distribución de bloques cíclicos para balancear la carga entre múltiples procesos y optimizar tiempos de ejecución sobre matrices de gran tamaño.",

  type: "High Performance Computing",

  category: "Backend",

  technologies: [
    "C",
    "MPI",
    "OpenMPI",
    "Linux",
    "GCC",
    "Bash",
    "HPC",
    "Programación Paralela"
  ],

  github: "#",

  demo: "#",

  necesidades: [
    "Reducir los tiempos de ejecución en la resolución de sistemas triangulares superiores.",
    "Aprovechar procesamiento distribuido para trabajar con matrices de gran tamaño.",
    "Implementar una estrategia eficiente de paralelización mediante MPI.",
    "Distribuir el trabajo de manera equilibrada entre múltiples procesos.",
    "Evaluar escalabilidad y eficiencia paralela en distintos escenarios de ejecución.",
    "Analizar el impacto del número de procesadores sobre el rendimiento del algoritmo."
  ],

  objetivos: [
    "Desarrollar un algoritmo paralelo utilizando MPI para resolver sistemas de ecuaciones triangulares.",
    "Implementar sustitución hacia atrás utilizando procesamiento distribuido.",
    "Distribuir filas de matrices mediante bloques cíclicos.",
    "Comparar tiempos de ejecución utilizando distintas cantidades de procesos.",
    "Analizar métricas de Speed Up y eficiencia paralela.",
    "Evaluar el comportamiento del algoritmo sobre matrices de distintos tamaños."
  ],

  arquitectura: [
    "Aplicación distribuida basada en MPI ejecutada sobre múltiples procesos.",
    "Lectura de matrices triangulares superiores desde archivos binarios.",
    "Distribución cíclica de bloques entre procesos para balancear carga.",
    "Proceso maestro encargado de lectura y distribución inicial de datos.",
    "Procesos trabajadores ejecutando cálculo paralelo sobre subconjuntos de filas.",
    "Comunicación distribuida mediante MPI_Bcast y sincronización entre procesos.",
    "Procesamiento concurrente mediante sustitución hacia atrás.",
    "Ejecución sobre entorno Linux orientado a computación paralela."
  ],

  architectureImages: [
    "/imagen/arquitecturampi.png",
    "/imagen/graficompi.png"
  ],

  architectureImageCaptions: [
    "Arquitectura distribuida basada en MPI",
    "Distribución cíclica de bloques entre procesos"
  ],

  architectureSections: [
    {
      title: "Estructura lógica",
      description: [
        "La aplicación fue diseñada utilizando un modelo de procesamiento distribuido basado en MPI."
      ],
      points: [
        "Proceso maestro encargado de lectura y coordinación.",
        "Procesos trabajadores ejecutando cálculo paralelo.",
        "Comunicación distribuida mediante operaciones MPI.",
        "Sincronización durante sustitución hacia atrás."
      ]
    },

    {
      title: "Distribución de datos",
      description: [
        "La matriz triangular superior fue distribuida utilizando bloques cíclicos entre procesos."
      ],
      points: [
        "Asignación equilibrada de filas.",
        "Reducción de desbalance de carga.",
        "Distribución eficiente para matrices grandes.",
        "Procesamiento concurrente sobre subconjuntos de datos."
      ]
    },

    {
      title: "Procesamiento paralelo",
      description: [
        "Cada proceso ejecuta operaciones matemáticas sobre las filas asignadas utilizando comunicación distribuida."
      ],
      points: [
        "Resolución mediante backward substitution.",
        "Uso de MPI_Bcast para compartir resultados parciales.",
        "Sincronización entre procesos.",
        "Reducción de tiempos de ejecución."
      ]
    },

    {
      title: "Gestión de memoria",
      description: [
        "El proyecto debió optimizar consumo de memoria para trabajar con matrices grandes."
      ],
      points: [
        "Inicialmente cada proceso cargaba la matriz completa.",
        "Se modificó la arquitectura para que solo el proceso maestro leyera la matriz.",
        "Distribución parcial de datos hacia procesos trabajadores.",
        "Reducción significativa de uso de memoria."
      ]
    },

    {
      title: "Escalabilidad y rendimiento",
      description: [
        "El proyecto evaluó el comportamiento del algoritmo utilizando distintas cantidades de procesos y tamaños de matriz."
      ],
      points: [
        "Pruebas con matrices entre 5000x5000 y 18000x18000.",
        "Ejecución entre 1 y 8 procesos.",
        "Análisis de Speed Up y eficiencia paralela.",
        "Evaluación de sobrecarga de comunicación."
      ]
    },

    {
      title: "Entorno de ejecución",
      description: [
        "La aplicación fue desarrollada y ejecutada sobre un entorno Linux utilizando herramientas de programación paralela."
      ],
      points: [
        "Compilación mediante GCC y OpenMPI.",
        "Ejecución utilizando mpirun.",
        "Procesamiento multi-core.",
        "Orientación a High Performance Computing."
      ]
    }
  ],

  resultados: [
    "Implementación exitosa de un algoritmo paralelo utilizando MPI.",
    "Distribución eficiente de matrices mediante bloques cíclicos.",
    "Reducción significativa de tiempos de ejecución utilizando múltiples procesos.",
    "Mejora de rendimiento especialmente en matrices grandes.",
    "Análisis experimental de escalabilidad paralela.",
    "Evaluación comparativa entre ejecución secuencial y paralela.",
    "Identificación de limitaciones relacionadas con comunicación y hardware."
  ],

  funcionalidades: [
    "Lectura de matrices triangulares desde archivos binarios.",
    "Distribución paralela de bloques de filas.",
    "Resolución mediante sustitución hacia atrás.",
    "Comunicación distribuida entre procesos.",
    "Sincronización mediante MPI_Bcast.",
    "Procesamiento sobre matrices de gran tamaño.",
    "Medición de tiempos de ejecución.",
    "Análisis de rendimiento paralelo."
  ],

  desafios: [
    "Gestionar alto consumo de memoria en matrices grandes.",
    "Implementar correctamente distribución cíclica de bloques.",
    "Coordinar sincronización entre procesos MPI.",
    "Reducir overhead de comunicación distribuida.",
    "Comprender comportamiento del algoritmo según hardware disponible.",
    "Analizar impacto del número de núcleos e hilos sobre el rendimiento.",
    "Evitar desbalance de carga entre procesos.",
    "Optimizar rendimiento en escenarios con múltiples procesadores."
  ]
}
];
