export const books = [
  {
    title: "Libro Blanco de VTS (1993-2012): Veinte Años de Servicios de Tráfico Marítimo en Corea",
    year: "2012",
  },
  {
    title: "Traffic Management",
    year: "2015",
  },
  {
    title: "Manual VTS de la IALA 2016 (edición bilingüe coreano-inglés)",
    year: "2016",
  },
];

export const papers: {
  title: string;
  venue: string;
  year: string;
  summary?: string;
}[] = [
  {
    title:
      "Risk Management Challenges in Maritime Autonomous Surface Ships (MASSs): Training and Regulatory Readiness",
    venue: "MDPI Applied Sciences",
    year: "2025",
  },
  {
    title:
      "Development a Collision Accident Evaluation Indicator for an e-Navigation Service",
    venue: "Journal of the Korean Society of Marine Environment & Safety",
    year: "2021",
    summary:
      "Desarrolla un indicador de evaluación cuantitativo para los servicios de e-Navigation mediante el análisis de causa raíz (RCA) y el análisis de árbol de fallos (FTA) para identificar las causas fundamentales de los accidentes de colisión marítima.",
  },
  {
    title:
      "Desarrollo de un Marco de Chatbot para la Educación en Seguridad de Buques Basado en Datos Reales de Comunicación entre el Centro de Control de Tráfico Portuario y el Buque",
    venue: "ICIC Express Letters, Part B: Applications, Vol. 9",
    year: "2018",
  },
  {
    title: "Análisis de Competencias Laborales de Operadores de VTS Basado en Simulador",
    venue: "Journal of the Korean Society of Marine Police Science",
    year: "2017",
  },
  {
    title:
      "Análisis de la Conciencia Situacional de los Operadores de VTS a partir de Métodos de Observación de Campo y Autoinforme",
    venue: "Journal of Navigation and Port Research",
    year: "2016",
  },
];

// Ponencias en congresos y conferencias por invitación. Queda vacío hasta
// que el usuario confirme los elementos (título, congreso/institución, año
// y, opcionalmente, el rol — ponente invitado, presentación oral, etc.).
export const presentations: {
  title: string;
  venue: string;
  year: string;
  role?: string;
}[] = [];

export const patents = [
  {
    title:
      "Método de Elaboración de Cartas Náuticas Electrónicas Simplificadas para Sistemas de Seguimiento Automático de Buques Utilizando ENC Certificadas Internacionalmente",
    status: "Registrada",
    year: "2006",
  },
  {
    title: "Sistema de Evaluación de Aptitud para Oficiales de Navegación",
    status: "Solicitada",
    year: "2018",
  },
];
