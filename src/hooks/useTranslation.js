import { useContext } from "react";
import LanguageContext from "@context/LanguageContext";
import es from "@locales/es";
import en from "@locales/en";

const translations = { es, en };

/**
 * @returns {typeof es}
 */
const useTranslation = () => {
  const { lang } = useContext(LanguageContext);
  return translations[lang];
};

/**
 * @returns {string}
 */
export const useLang = () => {
  const { lang } = useContext(LanguageContext);
  return lang;
};

export default useTranslation;