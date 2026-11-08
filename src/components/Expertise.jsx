
import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  Trophy,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [
  Dumbbell,
  Activity,
  HeartPulse,
  Trophy,
];

const Expertise = () => {
  const { t } = useTranslation();

  const expertise = t("expertise.items", {
    returnObjects: true,
  });

  return (
    <section className="section expertise" id="expertise">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">
            {t("expertise.eyebrow")}
          </span>

          <h2>
            {t("expertise.title1")}
            <br />
            <span>{t("expertise.title2")}</span>
          </h2>

          <p>{t("expertise.description")}</p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                className="expertise-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="expertise-top">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="expertise-icon">
                    <Icon />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="card-line"></div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
