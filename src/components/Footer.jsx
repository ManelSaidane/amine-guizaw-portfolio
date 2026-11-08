
import { ArrowUp, Dumbbell } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="logo">
          <Dumbbell size={22} />
          <span>
            AMINE<span className="logo-accent">.</span>
            <small>FITNESS & COACHING</small>
          </span>
        </a>

        <p>{t("footer.slogan")}</p>

        <a href="#home" className="back-top">
          {t("footer.back")}
          <ArrowUp size={16} />
        </a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Amine Guizaw.{" "}
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
