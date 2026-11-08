
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

 const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  localStorage.setItem("amine-language", language);
  setMenuOpen(false);
};
  const links = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.expertise"), href: "#expertise" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.qualifications"), href: "#qualifications" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-icon">
            <Dumbbell size={23} />
          </span>
          <span>
            AMINE<span className="logo-accent">.</span>
            <small>FITNESS & COACHING</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.cta")} <span>↗</span>
          </a>

          <div className="language-switcher">
            {["en", "fr", "ar"].map((language) => (
              <button
                key={language}
                onClick={() => changeLanguage(language)}
                className={
                  i18n.language === language
                    ? "language-btn active"
                    : "language-btn"
                }
                aria-label={`Switch to ${language}`}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
