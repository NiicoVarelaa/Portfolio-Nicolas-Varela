import { memo } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const DarkModeToggle = ({ isDark, toggle }) => (
  <button
    onClick={toggle}
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    aria-pressed={isDark}
    className="text-2xl p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 active:scale-95"
  >
    {isDark ? (
      <BiSun className="text-yellow-400" aria-hidden="true" />
    ) : (
      <BiMoon className="text-gray-600" aria-hidden="true" />
    )}
  </button>
);

DarkModeToggle.displayName = "DarkModeToggle";

export default memo(DarkModeToggle);
