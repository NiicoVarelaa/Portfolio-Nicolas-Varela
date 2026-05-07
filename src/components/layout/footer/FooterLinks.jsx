import { memo } from "react";
import PropTypes from "prop-types";

const FooterLink = ({ href, label }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded px-1"
  >
    {label}
    <span
      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
      aria-hidden="true"
    />
  </a>
);

const FooterLinks = ({ links }) => (
  <nav
    className="hidden md:flex items-center gap-8"
    role="navigation"
    aria-label="Footer navigation"
  >
    {links.map((link) => (
      <FooterLink key={link.href} href={link.href} label={link.label} />
    ))}
  </nav>
);

FooterLinks.displayName = "FooterLinks";

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

FooterLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default memo(FooterLinks);
