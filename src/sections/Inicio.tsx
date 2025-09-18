import React from "react";

const Inicio: React.FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hola, soy <span className="text-blue-600">Tu Nombre</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Desarrollador Full Stack apasionado por crear experiencias digitales
            increíbles
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Especializado en React, Node.js y tecnologías modernas. Me encanta
            transformar ideas en soluciones tecnológicas innovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Ver Proyectos
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
