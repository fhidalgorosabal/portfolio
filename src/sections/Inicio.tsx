import { useTranslation } from "../hooks/useTranslation";

const Inicio = () => {
  const { translate } = useTranslation();
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-[url('images/bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay debajo del contenido */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-200/80 to-gray-300/80 dark:from-gray-900/60 dark:to-gray-800/60"></div>

      {/* Contenido principal arriba */}
      <div className="container mx-auto px-6 pt-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold text-gray-700 dark:text-white mb-6">
            {translate("home-title")} <br />
            <span className="text-sky-700 dark:text-sky-400">
              {translate("home-title-name")}
            </span>
          </h1>
          <p className="text-lg text-gray-900 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            {translate("home-description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sky-600 dark:bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 dark:hover:bg-sky-600 transition-colors duration-200">
              {translate("home-button-1")}
            </button>
            <button className="border-2 border-sky-600 dark:border-sky-400 text-sky-600 dark:text-sky-400 px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white transition-colors duration-200">
              {translate("home-button-2")}
            </button>
            <button className="border-2 border-sky-600 dark:border-sky-400 text-sky-600 dark:text-sky-400 px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white transition-colors duration-200">
              {translate("home-button-3")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
