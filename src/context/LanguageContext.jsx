import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("es");

    // Leer desde localStorage cuando se monta
    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    // Guardar en localStorage cuando cambia el idioma
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLanguage = () => {
        setLang((prevLang) => (prevLang === "es" ? "en" : "es"));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
