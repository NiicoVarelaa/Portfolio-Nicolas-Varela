import { memo } from "react";
import DarkModeToggle from "./DarkModeToggle";
import LanguageButton from "./LanguageButton";

const MobileMenu = ({
  isOpen,
  navItems,
  activeSection,
  onItemClick,
  isDarkMode,
  toggleDarkMode,
  lang,
  toggleLanguage,
  translations,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed top-[4.5rem] right-4 z-50 w-64 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg shadow-2xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700"
      role="dialog"
      aria-label="Mobile navigation menu"
    >
      <nav aria-label="Mobile navigation">
        <ul className="space-y-1 py-4" role="list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onItemClick}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`block px-6 py-3 transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-orange-500 bg-orange-500/10 font-semibold border-l-4 border-orange-500"
                    : "text-gray-800 dark:text-gray-200 hover:bg-orange-500/5 hover:text-orange-500 border-l-4 border-transparent"
                }`}
              >
                <span className="text-base">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {isDarkMode ? translations.lightMode : translations.darkMode}
        </span>
        <DarkModeToggle isDark={isDarkMode} toggle={toggleDarkMode} />
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {translations.language}
        </span>
        <div className="flex gap-2">
          <LanguageButton
            code="es"
            currentLang={lang}
            onClick={toggleLanguage}
          />
          <LanguageButton
            code="en"
            currentLang={lang}
            onClick={toggleLanguage}
          />
        </div>
      </div>
    </div>
  );
};

MobileMenu.displayName = "MobileMenu";

export default memo(MobileMenu);
