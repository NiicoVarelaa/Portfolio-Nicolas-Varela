import { useState, useEffect, useMemo } from "react";
import { BiMenu, BiSun, BiMoon, BiX } from "react-icons/bi";
import { useLanguage } from "../context/LanguageContext";
import useDarkMode from "../hooks/useDarkMode";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const LanguageButton = ({ code, currentLang, onClick }) => (
    <button
        onClick={() => onClick(code)}
        disabled={currentLang === code}
        className={`px-2 py-1 rounded-md text-sm font-semibold transition-colors duration-300
            ${currentLang === code
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
    >
        {code.toUpperCase()}
    </button>
);

const DarkModeToggle = ({ isDark, toggle }) => (
    <button
        onClick={toggle}
        className="text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
        {isDark ? <BiSun className="text-gray-50" /> : <BiMoon className="text-gray-600" />}
    </button>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const { lang, toggleLanguage } = useLanguage();
    const t = languages[lang];

    const navItems = useMemo(() => [
        { label: t.navbar.projects, id: "proyectos" },
        { label: t.navbar.skills, id: "skills" },
        { label: t.navbar.about, id: "sobremí" },
        { label: t.navbar.contact, id: "contacto" },
    ], [t]);

    useEffect(() => {
        const handleScroll = () => {
            const shouldShowShadow = window.scrollY > 10;
            setHasShadow(prev => prev !== shouldShowShadow ? shouldShowShadow : prev);

            const scrollPosition = window.scrollY + 200;
            
            let current = "";
            navItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element && element.offsetTop <= scrollPosition) {
                    current = item.id;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    useEffect(() => {
        document.body.classList.toggle("no-scroll", isMenuOpen);
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const getLinkClass = (id) => `
        transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-50
        ${activeSection === id ? "text-orange-500 font-semibold" : ""} 
    `;

    return (
        <>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={toggleMenu} />
            )}

            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300
                    border-b backdrop-blur-md 
                    ${isMenuOpen || !hasShadow 
                        ? "border-transparent bg-gray" 
                        : "bg-gray/50 backdrop-blur-xl border-gray-100 dark:border-gray-700"
                    }`}
            >
                <nav className="max-w-6xl mx-auto py-3 px-4 sm:px-10 flex items-center justify-between text-base font-medium text-gray-600 dark:text-gray-300">
                    <a href="#home" className="text-xl lg:text-2xl font-semibold text-orange-500 hover:scale-105 transition-all duration-300">
                        Nicolás Varela
                    </a>

                    <div className="hidden lg:flex items-center gap-10 ml-auto">
                        <ul className="flex gap-10">
                            {navItems.map((item, index) => (
                                <li key={index} className="group duration-300 relative">
                                    <a 
                                        href={`#${item.id}`} 
                                        className={getLinkClass(item.id)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="h-6 w-0.5 bg-gray-100 dark:bg-gray-700"></div>

                        <div className="flex items-center gap-2">
                            <LanguageButton code="es" currentLang={lang} onClick={toggleLanguage} />
                            <LanguageButton code="en" currentLang={lang} onClick={toggleLanguage} />
                        </div>

                        <DarkModeToggle isDark={isDarkMode} toggle={() => setIsDarkMode(!isDarkMode)} />
                    </div>

                    <div className="flex items-center gap-4 lg:hidden">
                        <DarkModeToggle isDark={isDarkMode} toggle={() => setIsDarkMode(!isDarkMode)} />
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {isMenuOpen
                                ? <BiX className="text-3xl text-gray-600 dark:text-gray-300" />
                                : <BiMenu className="text-3xl text-gray-600 dark:text-gray-300" />}
                        </button>
                    </div>
                </nav>

                {isMenuOpen && (
                    <div className="lg:hidden fixed top-[4.5rem] right-4 z-50 w-64 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-300">
                        <ul className="space-y-2 py-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={toggleMenu}
                                        className={`block px-6 py-3 transition-colors duration-200
                                            ${activeSection === item.id 
                                                ? "text-orange-500 bg-orange-500/10 font-medium" 
                                                : "text-gray-800 dark:text-gray-200 hover:bg-orange-500/10 hover:text-orange-500"
                                            }`}
                                    >
                                        <span className="text-lg">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                                {isDarkMode ? t.navbar.lightMode : t.navbar.darkMode}
                            </span>
                            <DarkModeToggle isDark={isDarkMode} toggle={() => setIsDarkMode(!isDarkMode)} />
                        </div>

                        <div className="px-6 py-3 flex items-center justify-between">
                            <span>{t.navbar.language}</span>
                            <div className="flex gap-2">
                                <LanguageButton code="es" currentLang={lang} onClick={toggleLanguage} />
                                <LanguageButton code="en" currentLang={lang} onClick={toggleLanguage} />
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;