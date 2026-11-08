
import { Award, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [GraduationCap, Award, Award];

const Qualifications = () => {
  const { t } = useTranslation();
  const items = t("qualifications.items", { returnObjects: true });

  return (
    <section className="section qualifications" id="qualifications">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">
            {t("qualifications.eyebrow")}
          </span>
          <h2>
            {t("qualifications.title1")}
            <br />
            <span>{t("qualifications.title2")}</span>
          </h2>
        </div>

        <div className="qualification-timeline">
          {items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div className="qualification-item" key={item.title}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="qualification-content">
                  <div className="qualification-icon">
                    <Icon />
                  </div>
                  <span className="qualification-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.institution}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
