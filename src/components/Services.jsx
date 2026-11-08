
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <section className="section services" id="services">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">{t("services.eyebrow")}</span>
          <h2>
            {t("services.title1")}
            <br />
            <span>{t("services.title2")}</span>
          </h2>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <a
              href="#contact"
              className="service-item"
              key={service.title}
            >
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="service-content">
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <ArrowUpRight className="service-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
