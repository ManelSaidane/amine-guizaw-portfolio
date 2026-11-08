
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Dumbbell } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-background-circle"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            {t("hero.eyebrow")}
          </div>

          <h1>
            {t("hero.title1")}
            <br />
            <span>{t("hero.title2")}</span>
          </h1>

          <p className="hero-description">
            {t("hero.description")}
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              {t("hero.cta")}
              <ArrowUpRight size={19} />
            </a>

            <a href="#about" className="secondary-btn">
              {t("hero.secondary")}
            </a>
          </div>

          <div className="hero-bottom">
            <div className="hero-mini-icon">
              <Dumbbell size={21} />
            </div>
            <p>{t("hero.slogan")}</p>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-image-frame">
            <img
              src="/images/coach-amine.jpg"
              alt="Amine Guizaw"
              onError={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />

            <div className="image-placeholder">
              <Dumbbell size={55} />
              <span>YOUR PHOTO HERE</span>
              <small>coach-amine.jpg</small>
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-number">01</span>
            <div>
              <strong>{t("hero.floatingTitle")}</strong>
              <small>{t("hero.floatingSubtitle")}</small>
            </div>
          </div>

          <div className="hero-vertical-text">
            AMINE GUIZAW · FITNESS COACH
          </div>

          <div className="hero-scroll">
            <ArrowDown size={15} />
            {t("hero.scroll")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
