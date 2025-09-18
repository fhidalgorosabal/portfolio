import Header from "./components/Header";
import Inicio from "./sections/Inicio";
import Experiencia from "./sections/Experiencia";
import Proyectos from "./sections/Proyectos";
import Habilidades from "./sections/Habilidades";
import Contacto from "./sections/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
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
