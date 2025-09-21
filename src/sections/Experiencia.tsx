const Experiencia = () => {
  return (
    <section id="experiencia" className="py-25 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Experiencia
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Experiencia 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Desarrollador Full Stack
                </h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  2022 - Presente
                </span>
              </div>
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                Empresa Tecnológica
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Desarrollo de aplicaciones web completas utilizando React,
                Node.js y bases de datos modernas. Liderazgo en proyectos de
                gran escala y mentoría a desarrolladores junior.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
              </div>
            </div>

            {/* Experiencia 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-600 dark:border-green-400">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Desarrollador Frontend
                </h3>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  2020 - 2022
                </span>
              </div>
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                Startup Innovadora
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Especialización en desarrollo frontend con React y Vue.js.
                Implementación de interfaces de usuario responsivas y
                optimización de rendimiento.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  Vue.js
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
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
