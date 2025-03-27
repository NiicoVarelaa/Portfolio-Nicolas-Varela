import React, { useState, useEffect } from "react";
import { BiMenu, BiSun, BiMoon } from "react-icons/bi";
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

    return (
        <header className={`fixed top-0 w-full backdrop-blur-md z-50 transition-shadow duration-300 ${hasShadow ? "shadow-lg" : "shadow-none"}`}>
            <nav className="max-w-7xl mx-auto py-4 px-6 lg:px-32 flex items-center justify-between text-orange-950 dark:text-gray-50">
                <a href="#home" className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300">
                    Nicolas Varela
                </a>

                <div className="hidden md:flex items-center gap-10 ml-auto">
                    <ul className="flex gap-10">
                        {["Proyectos", "Skills", "Sobre mí", "Contacto"].map((item, index) => (
                            <li key={index} className="group duration-300 relative">
                                <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-orange-500">{item}</a>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                            </li>
                        ))}
                    </ul>

                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-2xl p-2 rounded-full transition-colors duration-300">
                        {isDarkMode ? <BiSun className="text-yellow-400" /> : <BiMoon className="text-orange-950 dark:text-gray-50" />}
                    </button>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-2xl p-2 rounded-full transition-colors duration-300">
                        {isDarkMode ? <BiSun className="text-gray-50" /> : <BiMoon className="text-orange-950 dark:text-gray-50" />}
                    </button>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <BiMenu className="text-3xl" />
                    </button>
                </div>

                {isMenuOpen && (
                    <ul className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-lg bg-black/60 space-y-5 py-5 text-center text-gray-50">
                        {["Projects", "Skills", "About", "Contact"].map((item, index) => (
                            <li key={index} className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
                                <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                                    <span className="text-lg">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Navbar;


