import { useState, useEffect, useMemo, useCallback } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import useLanguage from "../../hooks/useLanguage";
import useDarkMode from "../../hooks/useDarkMode";
import useScrollSpy from "../../hooks/useScrollSpy";
import DarkModeToggle from "./navbar/DarkModeToggle";
import LanguageButton from "./navbar/LanguageButton";
import NavLink from "./navbar/NavLink";
import MobileMenu from "./navbar/MobileMenu";
import es from "../../locales/es.js";
import en from "../../locales/en.js";

const languages = { es, en };

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const { lang, toggleLanguage } = useLanguage();
  const t = languages[lang];

  // Memoizar navItems solo cuando cambie el idioma
  const navItems = useMemo(
    () => [
      { label: t.navbar.projects, id: "proyectos" },
      { label: t.navbar.skills, id: "skills" },
      { label: t.navbar.about, id: "sobremí" },
      { label: t.navbar.contact, id: "contacto" },
    ],
    [t.navbar]
  );

  // Extraer IDs para el scroll spy
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);

  // Custom hook para scroll spy optimizado
  const { activeSection, hasShadow } = useScrollSpy(sectionIds);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Handlers memoizados
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleDark = useCallback(
    () => setIsDarkMode((prev) => !prev),
    [setIsDarkMode]
  );

  return (
    <>
      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-md ${
          hasShadow
            ? "bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-6xl mx-auto py-3 px-4 sm:px-10 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-xl lg:text-2xl font-bold text-orange-500 hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-lg px-2"
            aria-label="Nicolás Varela - Home"
          >
            Nicolás Varela
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            <ul className="flex gap-8" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={`#${item.id}`}
                    label={item.label}
                    isActive={activeSection === item.id}
                  />
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div
              className="h-6 w-px bg-gray-300 dark:bg-gray-600"
              aria-hidden="true"
            />

            {/* Language Buttons */}
            <div
              className="flex items-center gap-2"
              role="group"
              aria-label="Language selection"
            >
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

            {/* Dark Mode Toggle */}
            <DarkModeToggle isDark={isDarkMode} toggle={toggleDark} />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <DarkModeToggle isDark={isDarkMode} toggle={toggleDark} />
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              {isMenuOpen ? (
                <BiX
                  className="text-3xl text-gray-700 dark:text-gray-300"
                  aria-hidden="true"
                />
              ) : (
                <BiMenu
                  className="text-3xl text-gray-700 dark:text-gray-300"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          onItemClick={closeMenu}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDark}
          lang={lang}
          toggleLanguage={toggleLanguage}
          translations={t.navbar}
        />
      </header>
    </>
  );
};

export default Navbar;
