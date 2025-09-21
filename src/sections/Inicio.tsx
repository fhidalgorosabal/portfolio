import Button from "../components/Button";
import { useTranslation } from "../hooks/useTranslation";

const Inicio = () => {
  const { translate } = useTranslation();
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-[url('images/bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-200/80 to-gray-300/80 dark:from-gray-900/60 dark:to-gray-800/60"></div>

      <div className="container mx-auto px-6 mt-25 sm:mt-14 md:mt-10 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-700 dark:text-white mb-6">
            {translate("home-title")} <br />
            <span className="text-sky-700 dark:text-sky-400">
              {translate("home-title-name")}
            </span>
          </h1>
          <p className="mt-0 sm:mt-5 md:mt-14 text-lg text-gray-900 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            {translate("home-description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">{translate("home-button-1")}</Button>
            <Button variant="secondary">{translate("home-button-2")}</Button>
            <Button variant="success">{translate("home-button-3")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
