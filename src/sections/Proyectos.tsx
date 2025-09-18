import React from "react";

const Proyectos: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado y de los que me
            siento orgulloso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Proyecto 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                E-commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Plataforma completa de comercio electrónico con carrito de
                compras, sistema de pagos y panel de administración.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  Node.js
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Ver Demo
                </button>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Código
                </button>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Task Management App
              </h3>
              <p className="text-gray-600 mb-4">
                Aplicación de gestión de tareas con funcionalidades de
                colaboración en tiempo real y notificaciones.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Vue.js
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Express
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Socket.io
                </span>
              </div>
              <div className="flex gap-4">
                <button className="text-green-600 hover:text-green-800 font-medium">
                  Ver Demo
                </button>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Código
                </button>
              </div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Weather Dashboard
              </h3>
              <p className="text-gray-600 mb-4">
                Dashboard meteorológico con visualizaciones interactivas y
                pronósticos detallados.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                  D3.js
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                  API
                </span>
              </div>
              <div className="flex gap-4">
                <button className="text-purple-600 hover:text-purple-800 font-medium">
                  Ver Demo
                </button>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Código
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
