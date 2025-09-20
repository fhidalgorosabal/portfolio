import Header from "./components/Header";
import Inicio from "./sections/Inicio";
import Experiencia from "./sections/Experiencia";
import Proyectos from "./sections/Proyectos";
import Habilidades from "./sections/Habilidades";
import Contacto from "./sections/Contacto";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { useEffect } from "react";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Force apply theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Forzar un reflow para aplicar los cambios
    document.documentElement.style.backgroundColor = "";
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Inicio />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
