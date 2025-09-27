export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "languages";
}