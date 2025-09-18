export const SECTIONS = {
  INICIO: "inicio",
  EXPERIENCIA: "experiencia",
  PROYECTOS: "proyectos",
  HABILIDADES: "habilidades",
  CONTACTO: "contacto",
} as const;

export const NAVIGATION_ITEMS = [
  { id: SECTIONS.INICIO, label: "Inicio" },
  { id: SECTIONS.EXPERIENCIA, label: "Experiencia" },
  { id: SECTIONS.PROYECTOS, label: "Proyectos" },
  { id: SECTIONS.HABILIDADES, label: "Habilidades" },
  { id: SECTIONS.CONTACTO, label: "Contacto" },
] as const;

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/tu-usuario",
  LINKEDIN: "https://linkedin.com/in/tu-perfil",
  TWITTER: "https://twitter.com/tu-usuario",
  EMAIL: "mailto:tu.email@ejemplo.com",
} as const;
