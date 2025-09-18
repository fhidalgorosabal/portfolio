import type { Experience, Project, Skill } from "../types";

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Plataforma completa de comercio electrónico con carrito de compras, sistema de pagos y panel de administración.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/tu-usuario/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    image: "/images/project2.jpg",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/tu-usuario/task-manager",
    liveUrl: "https://taskmanager-demo.com",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico con visualizaciones interactivas y pronósticos detallados.",
    image: "/images/project3.jpg",
    technologies: ["React", "D3.js", "OpenWeather API", "TypeScript"],
    githubUrl: "https://github.com/tu-usuario/weather-dashboard",
    liveUrl: "https://weather-demo.com",
  },
];

export const sampleExperiences: Experience[] = [
  {
    id: "1",
    company: "Empresa Tecnológica",
    position: "Desarrollador Full Stack",
    period: "2022 - Presente",
    description:
      "Desarrollo de aplicaciones web completas utilizando React, Node.js y bases de datos modernas. Liderazgo en proyectos de gran escala y mentoría a desarrolladores junior.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
  },
  {
    id: "2",
    company: "Startup Innovadora",
    position: "Desarrollador Frontend",
    period: "2020 - 2022",
    description:
      "Especialización en desarrollo frontend con React y Vue.js. Implementación de interfaces de usuario responsivas y optimización de rendimiento.",
    technologies: ["React", "Vue.js", "TailwindCSS", "JavaScript", "Webpack"],
  },
];

export const sampleSkills: Skill[] = [
  { id: "1", name: "JavaScript", level: 90, category: "languages" },
  { id: "2", name: "TypeScript", level: 85, category: "languages" },
  { id: "3", name: "React", level: 90, category: "frontend" },
  { id: "4", name: "Vue.js", level: 80, category: "frontend" },
  { id: "5", name: "Node.js", level: 85, category: "backend" },
  { id: "6", name: "Express", level: 80, category: "backend" },
  { id: "7", name: "MongoDB", level: 75, category: "tools" },
  { id: "8", name: "PostgreSQL", level: 70, category: "tools" },
  { id: "9", name: "Git", level: 85, category: "tools" },
  { id: "10", name: "Docker", level: 70, category: "tools" },
];
