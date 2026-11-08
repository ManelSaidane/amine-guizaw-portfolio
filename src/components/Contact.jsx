
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const phone = "55963017";
  const whatsappMessage = encodeURIComponent(t("contact.message"));

  return (
    <section className="section contact" id="contact">
      <div className="section-container">
        <span className="eyebrow">{t("contact.eyebrow")}</span>

        <div className="contact-heading">
          <h2>
            {t("contact.title1")}
            <br />
            <span>{t("contact.title2")}</span>
          </h2>

          <p>{t("contact.description")}</p>
        </div>

        <div className="contact-grid">
          <a href={`tel:${phone}`} className="contact-card">
            <Phone />
            <span>{t("contact.phone")}</span>
            <strong>55 963 017</strong>
            <ArrowUpRight />
          </a>

          <a
            href="mailto:Aminegizaw38@gmail.com"
            className="contact-card"
          >
            <Mail />
            <span>{t("contact.email")}</span>
            <strong>Aminegizaw38@gmail.com</strong>
            <ArrowUpRight />
          </a>

          <div className="contact-card">
            <MapPin />
            <span>{t("contact.location")}</span>
            <strong>{t("contact.locationValue")}</strong>
          </div>
        </div>

        <a
          href={`https://wa.me/${phone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="primary-btn whatsapp-btn"
        >
          {t("contact.whatsapp")}
          <ArrowUpRight size={19} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
