import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Función para aplicar el tema al documento
const applyTheme = (theme: Theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Detectar preferencia del sistema
const getSystemPreference = (): Theme => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? "dark" 
    : "light";
};

export const themeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      // Valor inicial
      currentTheme: "light",
      
      setTheme: (theme) => {
        set({ currentTheme: theme });
        applyTheme(theme);
      },
      
      toggleTheme: () => {
        const newTheme = get().currentTheme === "light" ? "dark" : "light";
        get().setTheme(newTheme);
      },
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        // Si hay un tema guardado, aplicarlo
        if (state?.currentTheme) {
          applyTheme(state.currentTheme);
        } else {
          // Si no hay tema guardado, usar preferencia del sistema
          const systemTheme = getSystemPreference();
          applyTheme(systemTheme);
          // Actualizar el estado
          if (state) {
            state.setTheme(systemTheme);
          }
        }
      },
    }
  )
);

// Inicializar tema inmediatamente si estamos en el navegador
if (typeof window !== "undefined") {
  // Verificar si ya hay un tema guardado
  const savedTheme = localStorage.getItem("theme-storage");
  if (!savedTheme) {
    // Si no hay tema guardado, usar preferencia del sistema
    const systemTheme = getSystemPreference();
    applyTheme(systemTheme);
  }
}
