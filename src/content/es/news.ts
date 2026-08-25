import type { NewsItem } from "../en/news";

// Instantánea de tendencias marítimas internacionales (OMI, IALA y el sector
// en general). Cada elemento enlaza con su fuente original. Última
// actualización: 2026.08.
export const newsItems: NewsItem[] = [
  {
    id: "net-zero-framework",
    category: "imo",
    title: "Las conversaciones sobre el Marco de Cero Neto de la OMI se reanudarán a finales de 2026",
    summary:
      "El Marco de Cero Neto de la OMI, aprobado en el MEPC 83 en abril de 2025, no fue adoptado en la sesión extraordinaria tras no alcanzar los Estados miembros un consenso. Basado en un estándar global de combustibles y un mecanismo de comercio de emisiones, se espera que la sesión se reconvoque hacia octubre de 2026.",
    date: "2026.08",
    source: "IMO Media Centre",
    sourceUrl:
      "https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-net-zero-shipping-talks-to-resume-in-2026.aspx",
  },
  {
    id: "iala-e-navigation-s100",
    category: "iala",
    title: "La IALA acelera la transición de e-Navigation al estándar S-100",
    summary:
      "El e-Bulletin de la IALA destacó el seminario final del proyecto MaDaMe sobre la transición al marco S-100 de cartas digitales y datos de navegación, junto con la importancia de las especificaciones de producto de la nueva serie S-200, subrayando el impulso del sector hacia un ecosistema de navegación totalmente digital.",
    date: "2026.06",
    source: "IALA e-Bulletin",
    sourceUrl: "https://www.iala.int/e-bulletin/",
  },
  {
    id: "msc111-safety",
    category: "safety",
    title:
      "El MSC 111 adopta amplias actualizaciones en normas de mercancías peligrosas, inspección y formación",
    summary:
      "El Comité de Seguridad Marítima de la OMI (111.º período de sesiones, mayo de 2026) adoptó la Enmienda 43-26 del Código IMDG (en vigor el 1 de enero de 2028), una revisión del Programa Mejorado de Inspecciones (Código ESP) para petroleros y graneleros, y un aumento del peso corporal estándar de la tripulación (90 kg) conforme al Código IP. También se aprobaron directrices para la formación de tripulaciones de buques propulsados por metanol, etanol, amoníaco e hidrógeno.",
    date: "2026.05",
    source: "Britannia P&I Club",
    sourceUrl:
      "https://britanniapandi.com/2026/06/imo-maritime-safety-committee-update-111/",
  },
  {
    id: "mass-code",
    category: "mass",
    title: "La OMI adopta el primer Código del mundo para buques autónomos",
    summary:
      "El MSC 111 adoptó el Código MASS internacional no obligatorio para buques de carga, que entró en vigor el 1 de julio de 2026. Incorpora la evaluación de riesgos en el proceso de aprobación y define la interacción con los Centros de Operación Remota, preservando la responsabilidad del capitán de intervenir incluso sin tripulación a bordo. Se prevé un Código obligatorio tras una Fase de Adquisición de Experiencia, a partir de 2032.",
    date: "2026.07",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imo-mcs-111-new-mass-code-adopted/",
  },
  {
    id: "maritime-cyber-code",
    category: "cyber",
    title: "La OMI apunta a 2028 para un Código de Ciberseguridad Marítima específico",
    summary:
      "El Comité de Facilitación de la OMI (FAL 50) acordó desarrollar, para 2028, un Código de Ciberseguridad Marítima no obligatorio y basado en objetivos, que abarque puertos, buques y la interfaz buque-puerto. Las medidas obligatorias de ciberseguridad para la seguridad de la Ventanilla Única se están incorporando al Convenio FAL, con vistas a su adopción en el FAL 51.",
    date: "2026.06",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imos-facilitation-committee-fal-50/",
  },
  {
    id: "green-fuel-race",
    category: "green",
    title:
      "La carrera de los combustibles alternativos: el GNL lidera mientras el metanol y el amoníaco se acercan",
    summary:
      "En 2026, los buques propulsados por GNL lideran con más de 600 unidades en operación y más de 1.300 en pedido, representando cerca de dos tercios de los nuevos pedidos de combustibles alternativos. El metanol crece rápidamente en los segmentos de portacontenedores y buques para vehículos, mientras se multiplican los proyectos de amoníaco pese a sus retos de toxicidad y corrosión. La propulsión nuclear sigue siendo una perspectiva a largo plazo, frenada por vacíos regulatorios.",
    date: "2026.08",
    source: "Ship Universe",
    sourceUrl:
      "https://www.shipuniverse.com/the-great-green-fuel-race-in-2026-lng-methanol-ammonia-and-the-nuclear-option/",
  },
  {
    id: "vdes-solas",
    category: "enav",
    title: "El VDES es reconocido en el SOLAS mientras comienza la era de los satélites",
    summary:
      "En mayo de 2026, el Comité de Seguridad Marítima de la OMI acordó reconocer el VDES (Sistema de Intercambio de Datos por VHF) como alternativa al AIS bajo el SOLAS, con entrada en vigor el 1 de enero de 2028. Los satélites con carga útil VDES de Space Norway y Lusospace han alcanzado con éxito la órbita, marcando el inicio de la infraestructura de e-Navigation basada en satélites.",
    date: "2026.05",
    source: "VDES Alliance",
    sourceUrl:
      "https://www.vdes-alliance.org/index.php/category/news-about-vdes/",
  },
  {
    id: "officer-shortage-2026",
    category: "seafarer",
    title: "Informe sobre la fuerza laboral marítima: déficit de 39.100 oficiales, y sigue creciendo",
    summary:
      "El Informe sobre la Fuerza Laboral Marítima de BIMCO/ICS 2026 (publicado el 25 de junio de 2026) sitúa el déficit actual de oficiales certificados STCW en 39.100, con una necesidad adicional de 113.735 para 2030, a medida que crece la flota y la demanda de tripulación certificada aumenta un 35% respecto a 2021. El informe pide un promedio de 22.747 nuevos oficiales al año hasta 2030, junto con un refuerzo de la captación, la formación y la retención.",
    date: "2026.06",
    source: "BIMCO / ICS",
    sourceUrl:
      "https://www.bimco.org/news-insights/press-media/press-releases/2026/0625-workforce-report/",
  },
  {
    id: "mlc-2025-amendments",
    category: "seafarer",
    title: "Las enmiendas de 2025 al MLC refuerzan la protección de la gente de mar; entran en vigor en 2027",
    summary:
      "Las enmiendas al Convenio sobre el Trabajo Marítimo (MLC), que entrarán en vigor a finales de diciembre de 2027, formalizan el derecho de la gente de mar a permisos de tierra sin discriminación, amplían las obligaciones de repatriación de los armadores (viaje, alojamiento, comidas y gastos médicos), prohíben expresamente la violencia y el acoso a bordo, exigen mecanismos de denuncia seguros, y añaden normas de higiene con enfoque de género y procedimientos de queja confidenciales y sin represalias.",
    date: "2025.06",
    source: "West of England P&I Club",
    sourceUrl:
      "https://www.westpandi.com/news-and-resources/news/june-2025/amendments-to-the-maritime-labour-convention-adopt/",
  },
  // --- daily-append-marker: the daily research job inserts new items just above this line. Do not remove or edit it. ---
];
