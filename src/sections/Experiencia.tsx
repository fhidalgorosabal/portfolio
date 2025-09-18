import React from "react";

const Experiencia: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experiencia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mi trayectoria profesional y los proyectos en los que he trabajado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Experiencia 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Desarrollador Full Stack
                </h3>
                <span className="text-blue-600 font-medium">
                  2022 - Presente
                </span>
              </div>
              <h4 className="text-lg text-gray-600 mb-3">
                Empresa Tecnológica
              </h4>
              <p className="text-gray-700 mb-4">
                Desarrollo de aplicaciones web completas utilizando React,
                Node.js y bases de datos modernas. Liderazgo en proyectos de
                gran escala y mentoría a desarrolladores junior.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
              </div>
            </div>

            {/* Experiencia 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Desarrollador Frontend
                </h3>
                <span className="text-green-600 font-medium">2020 - 2022</span>
              </div>
              <h4 className="text-lg text-gray-600 mb-3">Startup Innovadora</h4>
              <p className="text-gray-700 mb-4">
                Especialización en desarrollo frontend con React y Vue.js.
                Implementación de interfaces de usuario responsivas y
                optimización de rendimiento.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Vue.js
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
