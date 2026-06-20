/**
 * Contenido del portafolio — copy directo, sin plantillas corporativas.
 */

export const profile = {
  name: 'Mr. Yoniquer',
  fullName: 'Yoniquer Anderson Chacón Duque',
  alias: 'Theo',
  role: 'Enterprise Software Architect & DevOps Engineer',
  headline: 'Construyendo sistemas distribuidos de alta disponibilidad.',
  subline:
    'Telecomunicaciones · OpenShift · Kafka · Quarkus · arquitectura event-driven',
  cvUrl: '/cv-yoniquer-anderson.pdf',
  location: 'Caracas, Venezuela',
  email: 'yoniquerchacon@gmail.com',
  phone: '+58 424 2293867',
  linkedin: 'https://www.linkedin.com/in/yoniquerchacon/',
  github: 'https://github.com/yoniquerchacon',
};

export const navigation = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'tecnologias', label: 'Stack' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'formacion', label: 'Formación' },
];

export const professionalSummary = {
  statement:
    'Conduzco decisiones de arquitectura que conectan continuidad operativa y objetivos de negocio en telecomunicaciones. Diseño y gobierno migraciones desde monolitos hacia plataformas cloud-native y event-driven (Quarkus, Kafka, OpenShift), con foco en resiliencia, reducción de footprint de infraestructura y prevención proactiva de incidentes P1 en producción.',
  focus: [
    'Definición de blueprints de arquitectura, estándares de diseño y guardrails técnicos para iniciativas de misión crítica.',
    'Orquestación de células Scrum/Agile y sincronización de desarrollo e infraestructura bajo flujos DevOps de entrega continua.',
    'Optimización de plataformas de ejecución mediante diseño eficiente de servicios, caché distribuida y automatización de pipelines.',
    'Mitigación de riesgo operativo con prácticas de resiliencia, observabilidad y respuesta coordinada ante crisis productivas.',
  ],
};

export const experience = [
  {
    id: 'telefonica-ve',
    company: 'Telefónica Venezuela',
    role: 'Development Leader',
    period: 'Dic 2024 — Presente',
    location: 'Caracas',
    brand: {
      name: 'Telefónica',
      code: 'TEF',
      variant: 'telefonica',
      focus:
        'Dirigí la evolución de dominios críticos hacia arquitectura cloud-native y event-driven, alineando decisiones técnicas con estabilidad del negocio y velocidad de entrega.',
    },
    highlights: [
      'Diseñé y goberné la migración de capacidades clave desde esquemas monolíticos hacia microservicios en Quarkus/Kafka/OpenShift.',
      'Impulsé la optimización del footprint de cómputo mediante racionalización de servicios, patrones de escalado y despliegues eficientes.',
      'Institucionalicé prácticas de resiliencia para disminuir exposición a incidentes P1 y mejorar continuidad operacional.',
      'Sincronicé células ágiles, arquitectura, desarrollo e infraestructura en ciclos continuos de entrega y validación en producción.',
    ],
  },
  {
    id: 'movistar-hispam',
    company: 'Movistar · Telefónica Hispam',
    role: 'Development Leader',
    period: 'Jun 2024 — Presente',
    location: 'Venezuela',
    brand: {
      name: 'Movistar Hispam',
      code: 'MVS',
      variant: 'movistar',
      focus:
        'Escalé decisiones de integración y arquitectura a nivel regional, priorizando desacoplamiento, gobernanza técnica y entrega continua entre múltiples frentes operativos.',
    },
    highlights: [
      'Consolidé arquitectura de integración empresarial basada en eventos para habilitar interoperabilidad entre plataformas regionales.',
      'Lideré revisiones arquitectónicas con criterio de riesgo, costo operativo y mantenibilidad de largo plazo.',
      'Coordiné ejecución de iniciativas cross-team bajo marcos Agile/DevOps con foco en confiabilidad y time-to-market.',
    ],
  },
  {
    id: 'telefonica-support',
    company: 'Telefónica',
    role: 'Líder de Soporte de Aplicaciones y Sistemas',
    period: 'Mar 2020 — Sep 2024',
    location: 'Caracas',
    brand: {
      name: 'Telefónica',
      code: 'OPS',
      variant: 'telefonica',
      focus:
        'Tomé el frente de crisis productivas y transformé soporte reactivo en disciplina de prevención, endureciendo arquitectura, operación y capacidad de respuesta.',
    },
    highlights: [
      'Gestioné incidentes críticos P1 end-to-end, desde diagnóstico técnico hasta planes estructurales de corrección y prevención.',
      'Conduje tuning de plataformas distribuidas para estabilizar rendimiento, disponibilidad y uso de recursos.',
      'Preparé la transición hacia modelos containerizados con prácticas de observabilidad, despliegue controlado y recuperación operativa.',
    ],
  },
  {
    id: 'zoom',
    company: 'ZOOM International Services',
    role: 'Full Stack Developer',
    period: 'Jun 2018 — Mar 2020',
    location: 'Urbina',
    brand: {
      name: 'ZOOM',
      code: 'ZIS',
      variant: 'zoom',
      focus:
        'Contribuí a modernizar capacidades digitales y de integración para soportar crecimiento operativo y trazabilidad de negocio.',
    },
    highlights: [
      'Ejecuté migración de base de código PHP hacia Laravel con mejoras de mantenibilidad y velocidad de evolución funcional.',
      'Implementé servicios REST para integrar sistemas heterogéneos con menor fricción operativa.',
    ],
  },
  {
    id: 'spi-dba',
    company: 'Soporte S.P.I., C.A.',
    role: 'Oracle DBA',
    period: 'Jun 2016 — Mar 2020',
    location: null,
    brand: {
      name: 'S.P.I.',
      code: 'DBA',
      variant: 'spi',
      focus:
        'Sostuve la confiabilidad del dato en producción con prácticas de recuperación, tuning y control operativo orientadas a continuidad del servicio.',
    },
    highlights: [
      'Administré Oracle en entornos productivos con foco en backup/recovery, tuning SQL y estabilidad transaccional.',
      'Fortalecí disciplina operativa para reducir riesgo de indisponibilidad y degradación de desempeño.',
    ],
  },
  {
    id: 'supercable',
    company: 'Supercable Alk Internacional',
    role: 'Desarrollador',
    period: 'Mar — Jun 2018',
    location: 'Caracas',
    brand: {
      name: 'Supercable',
      code: 'NET',
      variant: 'supercable',
      focus:
        'Aporté en el soporte y evolución de sistemas internos conectados al negocio de servicios de conectividad.',
    },
    highlights: [
      'Desarrollé componentes internos orientados a operación diaria y continuidad de servicio.',
      'Participé en resolución de incidencias y soporte de aplicaciones en ambiente productivo.',
    ],
  },
];

/**
 * Matriz tipográfica: nombre en negrita + keywords de dominio real.
 * items sin keywords → listados compactos al final de la categoría.
 */
export const techStack = [
  {
    category: 'Runtime & Frameworks',
    items: [
      {
        name: 'Java / Quarkus',
        keywords: 'Microservicios cloud-native, GraalVM native-image, arranque sub-segundo',
        tradeoff:
          'Priorizo Quarkus cuando el objetivo es minimizar huella de memoria y tiempos de arranque en Kubernetes sin sacrificar consistencia en servicios Java empresariales.',
        logos: ['Java', 'Quarkus', 'GraalVM', 'RESTEasy'],
      },
      {
        name: 'Spring Boot',
        keywords: 'WebFlux reactivo, JPA avanzado, OAuth2/OIDC en APIs empresariales',
        tradeoff:
          'Mantengo Spring Boot en dominios que requieren ecosistema maduro y amplia compatibilidad, aceptando mayor consumo de recursos frente a runtimes más ligeros.',
        logos: ['Spring', 'WebFlux', 'JPA', 'OAuth2'],
      },
      {
        name: 'Apache Camel',
        keywords: 'Rutas EIP, conectores enterprise, integración con sistemas legacy',
        tradeoff:
          'Uso Camel para reducir complejidad de integración y acelerar conectividad con legados, a cambio de una gobernanza estricta de rutas y observabilidad.',
        logos: ['Apache Camel', 'EIP', 'REST', 'JMS'],
      },
    ],
    compact: ['PHP / Laravel'],
  },
  {
    category: 'Arquitectura & Integración',
    items: [
      {
        name: 'Event-Driven Architecture',
        keywords: 'Apache Kafka como backbone — producers, consumers, stream processing',
        tradeoff:
          'Elijo Kafka como backbone para desacoplar servicios y asegurar persistencia de eventos críticos, asumiendo mayor disciplina en contratos, orden y operación de plataforma.',
        logos: ['Kafka', 'Producers', 'Consumers', 'Streams'],
      },
      {
        name: 'Red Hat 3Scale',
        keywords: 'API Management, rate limiting, políticas de seguridad perimetral',
        tradeoff:
          'Aplico 3Scale cuando la prioridad es gobernanza fuerte de APIs y control de consumo en producción, incluso con una capa adicional en el flujo de tráfico.',
        logos: ['3Scale', 'API Gateway', 'Policies', 'Rate Limit'],
      },
      {
        name: 'Knative',
        keywords: 'Serverless sobre Kubernetes — scale-to-zero, triggers, serving',
        tradeoff:
          'Selecciono Knative para cargas variables y eventos bursty, balanceando elasticidad y eficiencia contra mayor complejidad operativa en debugging y tuning.',
        logos: ['Knative', 'Serving', 'Eventing', 'Scale-to-Zero'],
      },
    ],
    compact: ['Microservicios', 'Domain-Driven Design'],
  },
  {
    category: 'Plataforma & Infraestructura',
    items: [
      {
        name: 'Red Hat OpenShift',
        keywords: 'Namespaces, Routes, Operators, DO188/DO288 certificado',
        tradeoff:
          'Prefiero OpenShift por su modelo enterprise de seguridad, operación y estandarización, asumiendo mayor rigor de plataforma frente a clusters minimalistas.',
        logos: ['OpenShift', 'Routes', 'Operators', 'Namespaces'],
      },
      {
        name: 'Kubernetes',
        keywords: 'Workloads, ConfigMaps, Secrets, HPA, networking',
        tradeoff:
          'Uso Kubernetes como plano de control universal para portabilidad y escalabilidad, con la contrapartida de complejidad en networking, observabilidad y gobernanza.',
        logos: ['Kubernetes', 'HPA', 'Secrets', 'Networking'],
      },
      {
        name: 'Podman / Docker',
        keywords: 'Contenedores rootless, multi-stage builds, registries privados',
        tradeoff:
          'Combino Podman y Docker para cubrir seguridad rootless y experiencia de desarrollo, cuidando compatibilidad de imágenes y pipelines entre entornos.',
        logos: ['Podman', 'Docker', 'OCI', 'Registries'],
      },
    ],
    compact: ['Docker Swarm'],
  },
  {
    category: 'DevOps & CI/CD',
    items: [
      {
        name: 'Jenkins',
        keywords: 'Pipelines declarativos, multi-branch, integración con OpenShift',
        tradeoff:
          'Sostengo Jenkins cuando se requiere granularidad y ecosistema de plugins en CI/CD, compensando con reglas estrictas de mantenimiento y seguridad.',
        logos: ['Jenkins', 'Pipeline', 'Multibranch', 'OpenShift'],
      },
      {
        name: 'OpenShift Pipelines',
        keywords: 'Tekton — build, test, deploy como recursos Kubernetes',
        tradeoff:
          'Apuesto por Tekton/OpenShift Pipelines para una entrega declarativa nativa de Kubernetes, a cambio de una curva de adopción mayor en los equipos.',
        logos: ['Tekton', 'Tasks', 'Pipelines', 'Kubernetes CRDs'],
      },
    ],
    compact: ['GitOps', 'GitFlow'],
  },
  {
    category: 'Datos',
    items: [
      {
        name: 'Oracle / PostgreSQL / MySQL',
        keywords: 'Query tuning, índices compuestos, particionamiento, replicación',
        tradeoff:
          'Selecciono motor relacional según criticidad transaccional y costo operativo: consistencia fuerte y tuning fino por encima de simplicidad inicial.',
        logos: ['Oracle', 'PostgreSQL', 'MySQL', 'Replication'],
      },
      {
        name: 'MongoDB',
        keywords: 'Operación productiva — MDB300, OFS400, sharding, replica sets',
        tradeoff:
          'Uso MongoDB cuando el dominio exige flexibilidad de modelo y escalado horizontal rápido, controlando cuidadosamente consistencia y patrones de consulta.',
        logos: ['MongoDB', 'Sharding', 'Replica Sets', 'OFS400'],
      },
      {
        name: 'Redis / Infinispan',
        keywords: 'Caché distribuida, invalidación por eventos, session clustering',
        tradeoff:
          'Incorporo Redis/Infinispan para latencia ultra baja y descarga de sistemas core, con gobernanza de expiración, coherencia e invalidación distribuida.',
        logos: ['Redis', 'Infinispan', 'Cache', 'Clustering'],
      },
    ],
    compact: ['Vector DBs'],
  },
];
