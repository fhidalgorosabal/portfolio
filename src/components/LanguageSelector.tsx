import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { languageStore } from "../store/languageStore";
import type { Language, LanguageLabels } from "../types";
import "flag-icon-css/css/flag-icons.min.css";

const LanguageSelector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage } = languageStore();
  const menuRef = useRef<HTMLDivElement>(null);

  const languageLabels: LanguageLabels[] = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "pt", label: "Português" },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const getLanguageFlag = (lang: Language) => {
    switch (lang) {
      case "es":
        return <span className="flag-icon flag-icon-es" title="Español"></span>;
      case "en":
        return <span className="flag-icon flag-icon-gb" title="English"></span>;
      case "pt":
        return (
          <span className="flag-icon flag-icon-pt" title="Português"></span>
        );
      default:
        return (
          <span className="flag-icon flag-icon-un" title="Language"></span>
        );
    }
  };

  // 👉 Cerrar cuando se haga click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200 cursor-pointer"
      >
        <span className="text-xl">{getLanguageFlag(currentLanguage)}</span>
        <FiChevronDown
          className={`h-4 w-4 transition-transform ${
            isMenuOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-gray-300/90 dark:bg-gray-800/90 ring-1 ring-gray-200 dark:ring-gray-700 ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languageLabels.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                role="menuitem"
              >
                <span className="text-xl mr-2">
                  {getLanguageFlag(lang.code)}
                </span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
