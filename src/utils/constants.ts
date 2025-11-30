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
    badgeBg: "bg-red-900 dark:bg-red-100",
    badgeText: "text-red-200 dark:text-red-800",
  },
  orange: {
    border: "border-orange-600 dark:border-orange-400",
    text: "text-orange-600 dark:text-orange-400",
    badgeBg: "bg-orange-900 dark:bg-orange-100",
    badgeText: "text-orange-200 dark:text-orange-800",
  },
  yellow: {
    border: "border-yellow-600 dark:border-yellow-400",
    text: "text-yellow-600 dark:text-yellow-400",
    badgeBg: "bg-yellow-900 dark:bg-yellow-100",
    badgeText: "text-yellow-200 dark:text-yellow-800",
  },
  green: {
    border: "border-green-600 dark:border-green-400",
    text: "text-green-600 dark:text-green-400",
    badgeBg: "bg-green-900 dark:bg-green-100",
    badgeText: "text-green-200 dark:text-green-800",
  },
  cyan: {
    border: "border-cyan-600 dark:border-cyan-400",
    text: "text-cyan-600 dark:text-cyan-400",
    badgeBg: "bg-cyan-900 dark:bg-cyan-100",
    badgeText: "text-cyan-200 dark:text-cyan-800",
  },
  sky: {
    border: "border-sky-600 dark:border-sky-400",
    text: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-900 dark:bg-sky-100",
    badgeText: "text-sky-200 dark:text-sky-800",
  },
  blue: {
    border: "border-blue-600 dark:border-blue-400",
    text: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-900 dark:bg-blue-100",
    badgeText: "text-blue-200 dark:text-blue-800",
  },
  indigo: {
    border: "border-indigo-600 dark:border-indigo-400",
    text: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-900 dark:bg-indigo-100",
    badgeText: "text-indigo-200 dark:text-indigo-800",
  },
  purple: {
    border: "border-purple-600 dark:border-purple-400",
    text: "text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-900 dark:bg-purple-100",
    badgeText: "text-purple-200 dark:text-purple-800",
  },
};