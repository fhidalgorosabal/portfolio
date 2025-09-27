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

export const COLOR_MAP = {
  red: {
    border: "border-red-600 dark:border-red-400",
    text: "text-red-600 dark:text-red-400",
    badgeBg: "bg-red-100 dark:bg-red-900",
    badgeText: "text-red-800 dark:text-red-200",
  },
  orange: {
    border: "border-orange-600 dark:border-orange-400",
    text: "text-orange-600 dark:text-orange-400",
    badgeBg: "bg-orange-100 dark:bg-orange-900",
    badgeText: "text-orange-800 dark:text-orange-200",
  },
  yellow: {
    border: "border-yellow-600 dark:border-yellow-400",
    text: "text-yellow-600 dark:text-yellow-400",
    badgeBg: "bg-yellow-100 dark:bg-yellow-900",
    badgeText: "text-yellow-800 dark:text-yellow-200",
  },
  green: {
    border: "border-green-600 dark:border-green-400",
    text: "text-green-600 dark:text-green-400",
    badgeBg: "bg-green-100 dark:bg-green-900",
    badgeText: "text-green-800 dark:text-green-200",
  },
  cyan: {
    border: "border-cyan-600 dark:border-cyan-400",
    text: "text-cyan-600 dark:text-cyan-400",
    badgeBg: "bg-cyan-100 dark:bg-cyan-900",
    badgeText: "text-cyan-800 dark:text-cyan-200",
  },
  sky: {
    border: "border-sky-600 dark:border-sky-400",
    text: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-100 dark:bg-sky-900",
    badgeText: "text-sky-800 dark:text-sky-200",
  },
  blue: {
    border: "border-blue-600 dark:border-blue-400",
    text: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-900",
    badgeText: "text-blue-800 dark:text-blue-200",
  },
  indigo: {
    border: "border-indigo-600 dark:border-indigo-400",
    text: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-100 dark:bg-indigo-900",
    badgeText: "text-indigo-800 dark:text-indigo-200",
  },
  purple: {
    border: "border-purple-600 dark:border-purple-400",
    text: "text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-100 dark:bg-purple-900",
    badgeText: "text-purple-800 dark:text-purple-200",
  },
};