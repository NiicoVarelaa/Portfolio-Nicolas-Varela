import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import SUPPORTED_LANGUAGES from "../constants/languages";
const LanguageContext = createContext();

function getInitialLang() {
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("lang");
    if (SUPPORTED_LANGUAGES.includes(savedLang)) return savedLang;
  }
  return "es";
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prevLang) => (prevLang === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(
    () => ({ lang, toggleLanguage }),
    [lang, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageContext;