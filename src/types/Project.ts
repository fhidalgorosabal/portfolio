export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectCardType {
  name: string;
  description: string;
  imageUrl: string;
  codeUrl?: string;
  demoUrl?: string;
}