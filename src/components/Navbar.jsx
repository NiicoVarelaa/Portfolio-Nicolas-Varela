import React, { useState, useEffect } from "react";
import { BiMenu, BiSun, BiMoon, BiX } from "react-icons/bi";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const [isDarkMode, setIsDarkMode] = useDarkMode();

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <header className={`fixed top-0 w-full border-b bg-gray backdrop-blur-md z-50 transition-shadow duration-300 ${hasShadow ? "bg-gray/50 backdrop-blur-xl md:border-gray-100 dark:md:border-gray-700" : "border-transparent"}`}>
                <nav className="max-w-6xl mx-auto py-3 px-4 sm:px-10 flex items-center justify-between text-base font-medium text-gray-600 dark:text-gray-300">
                    <a href="#home" className="text-xl md:text-2xl font-semibold text-orange-500 hover:scale-105 transition-all duration-300">
                        Nicolas Varela
                    </a>

                    <div className="hidden md:flex items-center gap-10 ml-auto">
                        <ul className="flex gap-10">
                            {["Proyectos", "Skills", "Sobre mí", "Contacto"].map((item, index) => (
                                <li key={index} className="group duration-300 relative">
                                    <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-gray-900 dark:hover:text-gray-50">{item}</a>
                                </li>
                            ))}
                        </ul>

                        <div className="h-6 w-0.5 bg-gray-100 dark:bg-gray-700"></div>

                        <button 
                            onClick={() => setIsDarkMode(!isDarkMode)} 
                            className="text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {isDarkMode ? <BiSun className="text-gray-50" /> : <BiMoon className="text-gray-600" />}
                        </button>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <button 
                            onClick={() => setIsDarkMode(!isDarkMode)} 
                            className="text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {isDarkMode ? <BiSun className="text-gray-50" /> : <BiMoon className="text-gray-600" />}
                        </button>

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {isMenuOpen ? (
                                <BiX className="text-3xl text-gray-600 dark:text-gray-300" />
                            ) : (
                                <BiMenu className="text-3xl text-gray-600 dark:text-gray-300" />
                            )}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden fixed top-[4.5rem] right-4 z-50 w-64 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-300">
                            <ul className="space-y-2 py-4">
                                {["Proyectos", "Skills", "Sobre mí", "Contacto"].map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            href={`#${item.toLowerCase().replace(" ", "")}`} 
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-orange-500/10 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                                        >
                                            <span className="text-lg font-medium">{item}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-400">
                                    {isDarkMode ? "Modo claro" : "Modo oscuro"}
                                </span>
                                <button 
                                    onClick={() => setIsDarkMode(!isDarkMode)} 
                                    className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    {isDarkMode ? <BiSun className="text-xl text-gray-300" /> : <BiMoon className="text-xl text-gray-600" />}
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Navbar;

