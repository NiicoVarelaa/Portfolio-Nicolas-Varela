import { memo } from "react";

const LanguageButton = ({ code, currentLang, onClick }) => {
  const isActive = currentLang === code;

  return (
    <button
      onClick={() => onClick(code)}
      disabled={isActive}
      aria-label={`Switch to ${code === "es" ? "Spanish" : "English"}`}
      aria-current={isActive ? "true" : undefined}
      className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
        isActive
          ? "bg-orange-500 text-white cursor-not-allowed"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
      }`}
    >
      {code.toUpperCase()}
    </button>
  );
};

LanguageButton.displayName = "LanguageButton";

export default memo(LanguageButton);
