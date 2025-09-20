import { useTranslation } from "../hooks/useTranslation";

const Inicio = () => {
  const { translate } = useTranslation();
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 pt-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            {translate("home-title")} <br />
            <span className="text-blue-600 dark:text-blue-400">
              {translate("home-title-name")}
            </span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            {translate("home-description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
              {translate("home-button-1")}
            </button>
            <button className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors duration-200">
              {translate("home-button-2")}
            </button>
            <button className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors duration-200">
              {translate("home-button-3")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
