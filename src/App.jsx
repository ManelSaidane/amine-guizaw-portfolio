import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Services from "./components/Services";
import Qualifications from "./components/Qualifications";
import Assessment from "./components/Assessment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.language.startsWith("ar")
      ? "ar"
      : i18n.language.startsWith("en")
        ? "en"
        : "fr";

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Qualifications />
        <Assessment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;