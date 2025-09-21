const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-12">
      <div className="container mx-auto px-6">
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Fernando Hidaldo Rosabal - {new Date().getFullYear()} |
            Desarrollador Full-Stack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
