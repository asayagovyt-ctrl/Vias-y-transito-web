import {
  Route,
  Construction,
  SignpostBig,
  BarChart3,
  Footprints,
  Mountain,
  Activity,
  Rows3,
} from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "diseno-geometrico-vias",
    title: "Diseño geométrico de vías",
    description: "Trazado, perfiles y plataformas que cumplen norma desde el primer diseño.",
    details:
      "Definimos el trazado horizontal y vertical, el diseño de intersecciones y los accesos y conexiones viales, cumpliendo la normativa técnica vigente en cada etapa. El resultado es un diseño optimizado en su funcionalidad y operación, que pasa revisión sin retrasos y funciona igual de bien en una vía urbana que en un corredor interurbano.",
    highlights: [
      "Trazado horizontal y vertical.",
      "Diseño de intersecciones.",
      "Accesos y conexiones viales.",
      "Cumplimiento de normas técnicas.",
      "Optimización funcional y operacional.",
    ],
    icon: Route,
    image: "/images/servicios/diseno-geometrico-vias.jpg",
    homeImage: "/images/servicios-iconos/diseno-geometrico-vias.jpeg",
  },
  {
    id: "planes-manejo-transito",
    title: "Planes de manejo de tránsito",
    description: "Tu obra avanza sin bloquear la ciudad.",
    details:
      "Diseñamos los desvíos y el manejo de la circulación durante la obra, priorizando la seguridad de todos los usuarios de la vía con señalización temporal adecuada. Programamos el plan por etapas constructivas y gestionamos su aprobación ante la autoridad competente, para que la obra avance sin convertirse en un problema de movilidad para la ciudad.",
    highlights: [
      "Desvíos y manejo de la circulación.",
      "Seguridad para todos los usuarios.",
      "Señalización temporal.",
      "Programación por etapas constructivas.",
      "Aprobación ante la autoridad competente.",
    ],
    icon: Construction,
    image: "/images/servicios/planes-manejo-transito.jpeg",
    homeImage: "/images/servicios-iconos/planes-manejo-transito.jpeg",
  },
  {
    id: "senalizacion-vial",
    title: "Diseño de señalización vial",
    description: "Señalización horizontal y vertical que cumple INVIAS.",
    details:
      "Diseñamos la señalización horizontal y vertical y los dispositivos de seguridad vial requeridos, incluyendo demarcación y canalización del tránsito. Cada diseño cumple los manuales vigentes y se entrega con planos y especificaciones técnicas listos para construcción, sin retrasos en la aprobación.",
    highlights: [
      "Señalización horizontal y vertical.",
      "Dispositivos de seguridad vial.",
      "Demarcación y canalización.",
      "Cumplimiento de manuales vigentes.",
      "Planos y especificaciones técnicas.",
    ],
    icon: SignpostBig,
    image: "/images/servicios/senalizacion-vial.jpeg",
    homeImage: "/images/servicios-iconos/senalizacion-vial.jpeg",
  },
  {
    id: "estudios-transito",
    title: "Estudios de tránsito",
    description: "Los números que sustentan cada decisión de diseño.",
    details:
      "Hacemos aforos vehiculares y peatonales para levantar información confiable en campo, y con ella evaluamos el desempeño operacional de la red vial: capacidad, niveles de servicio y proyecciones de tránsito a futuro. Entregamos recomendaciones técnicas claras y un estudio que cumple con la normativa vigente, listo para sustentar decisiones de diseño, operación o gestión vial.",
    highlights: [
      "Aforos y recolección de información.",
      "Análisis operacional de la red vial.",
      "Capacidad y niveles de servicio.",
      "Proyección de tránsito.",
      "Recomendaciones técnicas.",
      "Cumplimiento normativo.",
    ],
    icon: BarChart3,
    image: "/images/servicios/estudios-transito.jpg",
    homeImage: "/images/servicios-iconos/estudios-transito.jpeg",
  },
  {
    id: "estudios-movilidad",
    title: "Estudios de movilidad",
    description: "Un diagnóstico claro de cómo se mueve tu zona hoy — y cómo debería moverse.",
    details:
      "Elaboramos un diagnóstico integral de cómo se mueve tu zona hoy: vehículos, peatones, ciclistas y transporte público. Evaluamos la accesibilidad en los diferentes modos de transporte, proyectamos la demanda futura de viajes y definimos estrategias de mitigación articuladas con la planeación urbana, todo bajo cumplimiento normativo.",
    highlights: [
      "Diagnóstico integral de la movilidad.",
      "Accesibilidad en los diferentes modos de transporte.",
      "Proyección de demanda de viajes.",
      "Estrategias de mitigación.",
      "Cumplimiento normativo.",
    ],
    icon: Footprints,
    image: "/images/servicios/estudios-movilidad.jpg",
    homeImage: "/images/servicios-iconos/estudios-movilidad.jpeg",
  },
  {
    id: "diseno-explanaciones",
    title: "Diseño de explanaciones",
    description: "Movimientos de tierra optimizados, base estable para la vía.",
    details:
      "Calculamos el balance de cortes y llenos a partir de la modelación digital del terreno, optimizando los movimientos de tierra y diseñando plataformas estables. Todo el diseño se integra con el proyecto vial, garantizando una infraestructura estable desde la base.",
    highlights: [
      "Balance de cortes y llenos.",
      "Modelación digital del terreno.",
      "Optimización de movimientos de tierra.",
      "Diseño de plataformas.",
      "Integración con el diseño vial.",
    ],
    icon: Mountain,
    image: "/images/servicios/diseno-explanaciones.jpeg",
    homeImage: "/images/servicios-iconos/diseno-explanaciones.jpeg",
  },
  {
    id: "modelaciones-trafico",
    title: "Modelaciones de tráfico",
    description: "Anticipamos cómo se va a comportar el tránsito, antes de construir.",
    details:
      "Simulamos el comportamiento del tránsito actual y futuro mediante microsimulación, evaluando distintos escenarios antes de construir. Esto permite optimizar la operación vial, validar alternativas de diseño y dar soporte técnico sólido a la toma de decisiones, reduciendo el riesgo de ajustes costosos en obra.",
    highlights: [
      "Microsimulación actual y futura.",
      "Evaluación de escenarios futuros.",
      "Optimización de la operación vial.",
      "Validación de alternativas de diseño.",
      "Soporte para la toma de decisiones.",
    ],
    icon: Activity,
    image: "/images/servicios/modelaciones-trafico.jpg",
    homeImage: "/images/servicios-iconos/modelaciones-trafico.jpeg",
  },
  {
    id: "diseno-semaforizacion",
    title: "Diseño de semaforización",
    description: "Intersecciones más seguras, menos tiempo de espera.",
    details:
      "Realizamos los estudios de justificación semafórica y programamos los tiempos de cada intersección, coordinando corredores completos para optimizar el flujo. El resultado son intersecciones más seguras y eficientes, con menos tiempo de espera para conductores y peatones.",
    highlights: [
      "Estudios de justificación.",
      "Programación de tiempos semafóricos.",
      "Coordinación de corredores.",
      "Optimización de intersecciones.",
      "Mejora de la seguridad vial.",
    ],
    icon: Rows3,
    homeImage: "/images/servicios-iconos/diseno-semaforizacion.jpeg",
  },
];
