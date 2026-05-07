import { memo } from "react";
import PropTypes from "prop-types";

const NavLink = ({ href, label, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
    className={`transition-all duration-300 relative group ${
      isActive
        ? "text-orange-600 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500"
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

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(NavLink);
