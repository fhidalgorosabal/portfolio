import { themeStore } from "../store/themeStore";

/**
 * Hook para gestionar el tema de la aplicación
 * @returns {Object} Objeto con el tema actual y funciones para cambiarlo
 */
export const useTheme = () => {
  const { currentTheme, setTheme, toggleTheme } = themeStore();

  return {
    theme: currentTheme,
    isDark: currentTheme === "dark",
    setTheme,
    toggleTheme,
  };
};
