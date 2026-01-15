import { useMemo } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import useLanguage from "../../hooks/useLanguage";
import SocialLink from "./footer/SocialLink";
import FooterLinks from "./footer/FooterLinks";
import FooterBranding from "./footer/FooterBranding";
import es from "../../locales/es.js";
import en from "../../locales/en.js";

const languages = { es, en };

const Footer = () => {
  const { lang } = useLanguage();
  const t = languages[lang].footer;

  // Año actual solo se calcula una vez
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Links de navegación
  const footerLinks = useMemo(
    () => [
      { label: t.projects, href: "#proyectos" },
      { label: t.aboutMe, href: "#sobremí" },
      { label: "Contacto", href: "#contacto" },
    ],
    [t.projects, t.aboutMe]
  );

  // Links sociales
  const socialLinks = useMemo(
    () => [
      {
        href: "https://github.com/NiicoVarelaa",
        icon: <SiGithub aria-hidden="true" />,
        label: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/niicolasvarelaa/",
        icon: <SiLinkedin aria-hidden="true" />,
        label: "LinkedIn",
      },
    ],
    []
  );

  return (
    <footer
      className="relative w-full border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <FooterBranding copyrightText={t.copyright} year={currentYear} />
          <FooterLinks links={footerLinks} />
          <div
            className="flex items-center gap-5"
            role="group"
            aria-label="Social media links"
          >
            {socialLinks.map((social) => (
              <SocialLink
                key={social.href}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
