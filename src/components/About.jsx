
import { motion } from "framer-motion";
import { Award, GraduationCap, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [GraduationCap, Award, Target];

const About = () => {
  const { t } = useTranslation();

  const highlights = t("about.highlights", {
    returnObjects: true,
  });

  return (
    <section className="section about" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">
            {t("about.eyebrow")}
          </span>

          <h2>
            {t("about.title1")}
            <br />
            <span>{t("about.title2")}</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="large-text">
              {t("about.intro")}
            </p>

            <p>{t("about.p1")}</p>

            <p>{t("about.p2")}</p>

            <a href="#services" className="text-link">
              {t("about.link")} ↗
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  className="highlight-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="highlight-icon">
                    <Icon />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
