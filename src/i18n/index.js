
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";

const resources = Object.fromEntries(
  Object.entries(translations).map(([language, content]) => [
    language,
    { translation: content },
  ])
);

const getInitialLanguage = () => {
  const saved = localStorage.getItem("amine-language");
  return ["en", "fr", "ar"].includes(saved) ? saved : "fr";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
