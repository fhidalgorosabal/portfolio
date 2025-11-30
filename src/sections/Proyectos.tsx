import ProjectCard from "../components/ProjectCard";

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Proyectos
          </h2>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          <div className="h-[320px]">
            <ProjectCard
              name="TranSoft"
              description="desarrollado en CodeIgniter 3.0.6, como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas."
              imageUrl="/images/projects/transoft-image.webp"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
          <div className="h-[320px]">
            <ProjectCard
              name="FinanceApp"
              description="desarrollada en Angular 13.0.0, diseñada para gestionar ingresos y gastos a nivel personal o para pequeñas empresas."
              imageUrl="/images/projects/financeapp-image.webp"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
          <div className="h-[320px]">
            <ProjectCard
              name="TranSoft"
              description="Sistema desarrollado en CodeIgniter 3.0.6, como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas."
              imageUrl="/images/TranSoft.png"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
          <div className="h-[320px]">
            <ProjectCard
              name="TranSoft"
              description="Sistema desarrollado en CodeIgniter 3.0.6, como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas."
              imageUrl="/images/TranSoft.png"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
          <div className="h-[320px]">
            <ProjectCard
              name="TranSoft"
              description="Sistema desarrollado en CodeIgniter 3.0.6, como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas."
              imageUrl="/images/TranSoft.png"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
          <div className="h-[320px]">
            <ProjectCard
              name="TranSoft"
              description="Sistema desarrollado en CodeIgniter 3.0.6, como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas."
              imageUrl="/images/TranSoft.png"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
          <div className="h-[320px]">
            <ProjectCard
              name="TranSoft"
              description="TranSoft: desarrollado en CodeIgniter 3.0.6, como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas."
              imageUrl="/images/TranSoft.png"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
          <div className="h-[320px]">
            <ProjectCard
              name="TranSoft"
              description="Sistema desarrollado en CodeIgniter 3.0.6, como parte del proyecto de tesis de la carrera de Ingeniería en Ciencias Informáticas."
              imageUrl="/images/TranSoft.png"
              codeUrl="https://github.com/fhidalgorosabal/transoft"
              demoUrl="https://github.com/fhidalgorosabal/transoft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
