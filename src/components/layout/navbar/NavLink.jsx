import { memo } from "react";

const NavLink = ({ href, label, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
    className={`transition-all duration-300 relative group ${
      isActive
        ? "text-orange-500 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
    }`}
  >
    {label}
    <span
      className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
      aria-hidden="true"
    />
  </a>
);

NavLink.displayName = "NavLink";

export default memo(NavLink);
