export const education = [
  {
    institution: 'Universidad Tecnológica del Centro (UNITEC)',
    degree: 'Ingeniería en Tecnología de la Información',
    period: '2020 — 2022',
  },
  {
    institution: 'Instituto Universitario de Tecnología y Administración Industrial',
    degree: 'Tecnología y Administración Industrial',
    period: '2015 — 2018',
  },
];

/**
 * Certificaciones de industria con verificación externa (Credly).
 * documentUrl: reemplazar URL_PDF_AQUÍ con la ruta al comprobante local o en CDN.
 */
export const officialCertifications = [
  {
    id: 'do188',
    name: 'Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188)',
    version: '4.18',
    issuer: 'Red Hat',
    code: 'DO188',
    technicalFocus:
      'Podman, imágenes OCI, contenedores rootless y fundamentos de despliegue en OpenShift.',
    inspect: {
      badge: 'RED HAT',
      skills: ['Podman', 'OCI', 'Rootless Containers', 'Linux Kernel Namespaces'],
      impact:
        'Valida la base para diseñar entornos de contenedores reproducibles, seguros y alineados con estándares OCI antes de escalar cargas hacia OpenShift.',
    },
    verifyUrl:
      'https://www.credly.com/badges/a120ba47-623d-4dca-86f3-0f5c2870ac1b/public_url',
    documentUrl: 'URL_PDF_AQUÍ',
  },
  {
    id: 'do288',
    name: 'Red Hat OpenShift Developer II: Building and Deploying Cloud-native Applications (DO288)',
    version: '4.18',
    issuer: 'Red Hat',
    code: 'DO288',
    technicalFocus:
      'Builds cloud-native, Routes, Services, ConfigMaps, Secrets y despliegue de aplicaciones en OpenShift.',
    inspect: {
      badge: 'RED HAT',
      skills: ['OpenShift Builds', 'Routes', 'Services', 'ConfigMaps', 'Secrets'],
      impact:
        'Aporta criterio para convertir aplicaciones en workloads cloud-native con configuración externa, exposición controlada y despliegues sostenibles en producción.',
    },
    verifyUrl:
      'https://www.credly.com/badges/5961091a-fa96-4fe0-b639-07db39a45ec0/public_url',
    documentUrl: 'URL_PDF_AQUÍ',
  },
];

/**
 * Formación continua especializada (Udemy).
 * documentUrl: reemplazar URL_PDF_AQUÍ con el enlace al PDF del comprobante.
 */
export const continuousTraining = [
  {
    id: 'agile-scrum',
    name: 'Agile + Scrum: Curso intensivo para sumergirse y profundizar',
    issuer: 'Udemy',
    technicalFocus:
      'Marcos Agile, roles Scrum, ceremonias, estimación y gestión iterativa de entregas.',
    inspect: {
      badge: 'UDEMY',
      skills: ['Scrum', 'Sprint Planning', 'Backlog Refinement', 'Iterative Delivery'],
      impact:
        'Refuerza la capacidad de ordenar entregas técnicas en ciclos medibles, reduciendo incertidumbre y manteniendo visibilidad del avance para negocio e ingeniería.',
    },
    verifyUrl:
      'https://www.udemy.com/certificate/UC-21b47a7a-4118-4207-84d2-a99a6b9be174/',
    documentUrl: 'URL_PDF_AQUÍ',
  },
  {
    id: 'liderazgo-tech',
    name: 'Liderazgo: Gerencia en Tecnología / Ingeniería',
    issuer: 'Udemy',
    technicalFocus:
      'Dirección de equipos técnicos, toma de decisiones, comunicación ejecutiva y gestión de stakeholders.',
    inspect: {
      badge: 'UDEMY',
      skills: ['Tech Leadership', 'Decision Making', 'Stakeholder Management', 'Team Alignment'],
      impact:
        'Ayuda a traducir decisiones técnicas en prioridades compartidas, cuidando la coordinación entre equipos, restricciones operativas y objetivos de producto.',
    },
    verifyUrl:
      'https://www.udemy.com/certificate/UC-26a66377-120e-4581-81c4-3b40d35ad494/',
    documentUrl: 'URL_PDF_AQUÍ',
  },
  {
    id: 'arquitectura-avanzada',
    name: 'Arquitectura Software Avanzada: Más Allá de los Patrones',
    issuer: 'Udemy',
    technicalFocus:
      'Patrones arquitectónicos avanzados, diseño modular, acoplamiento, cohesión y evolución de sistemas.',
    inspect: {
      badge: 'UDEMY',
      skills: ['Modular Design', 'Coupling', 'Cohesion', 'Evolutionary Architecture'],
      impact:
        'Fortalece el análisis de límites entre módulos y la evolución de sistemas sin degradar mantenibilidad, testabilidad ni velocidad de cambio.',
    },
    verifyUrl:
      'https://www.udemy.com/certificate/UC-ca6e046c-61ea-45fd-92e9-b7d5cf5f2467/',
    documentUrl: 'URL_PDF_AQUÍ',
  },
  {
    id: 'diseno-gran-escala',
    name: 'Diseño de Sistemas a Gran Escala y Arquitectura de Software',
    issuer: 'Udemy',
    technicalFocus:
      'Escalabilidad horizontal, particionamiento, consistencia, latencia y trade-offs en sistemas distribuidos.',
    inspect: {
      badge: 'UDEMY',
      skills: ['Horizontal Scaling', 'Partitioning', 'Consistency', 'Latency Trade-offs'],
      impact:
        'Permite evaluar decisiones de arquitectura distribuida considerando capacidad, resiliencia, consistencia de datos y comportamiento bajo carga real.',
    },
    verifyUrl:
      'https://www.udemy.com/certificate/UC-8e8bf2d9-6784-4cdf-bb04-915a912ad8a1/',
    documentUrl: 'URL_PDF_AQUÍ',
  },
  {
    id: 'devops-integral',
    name: 'DevOps Integral Docker, Kubernetes, Jenkins, GitFlow CI CD',
    issuer: 'Udemy',
    technicalFocus:
      'Docker, Kubernetes, Jenkins, GitFlow y pipelines CI/CD de extremo a extremo.',
    inspect: {
      badge: 'UDEMY',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitFlow', 'CI/CD'],
      impact:
        'Conecta empaquetado, orquestación y automatización para reducir fricción entre desarrollo y operación, con pipelines repetibles de entrega continua.',
    },
    verifyUrl:
      'https://www.udemy.com/certificate/UC-faeff977-e273-440a-9269-f0597973f40c/',
    documentUrl: 'URL_PDF_AQUÍ',
  },
  {
    id: 'ia-deep-learning',
    name: 'Inteligencia Artificial y Deep Learning desde cero en Python',
    issuer: 'Udemy',
    technicalFocus:
      'Redes neuronales, TensorFlow/Keras, entrenamiento de modelos y pipelines de inferencia en Python.',
    inspect: {
      badge: 'UDEMY',
      skills: ['Python', 'Neural Networks', 'TensorFlow', 'Keras', 'Inference Pipelines'],
      impact:
        'Aporta base práctica para integrar capacidades de aprendizaje automático en flujos de datos, prototipos inteligentes y servicios de inferencia controlados.',
    },
    verifyUrl:
      'https://www.udemy.com/certificate/UC-24a65770-0a8b-4727-ba10-36fe18f7e522/',
    documentUrl: 'URL_PDF_AQUÍ',
  },
];
