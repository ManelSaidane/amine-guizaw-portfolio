
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ClipboardCheck,
  MessageCircle,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const Assessment = () => {
  const { t, i18n } = useTranslation();

  const assessment = t("assessment", {
    returnObjects: true,
  });

  const groups = Array.isArray(assessment?.groups)
    ? assessment.groups
    : [];

  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(false);

  const isArabic = i18n.language?.startsWith("ar");
  const isLastStep = step === groups.length - 1;

  // TEST WHATSAPP : ton numéro
  const WHATSAPP_NUMBER = "21655963017";

  const updateAnswer = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));

    setSuccess(false);
  };

  const nextStep = () => {
    const currentGroup = groups[step];

    const missingRequired = currentGroup.fields.some(
      (field) =>
        field.required &&
        !String(answers[field.name] || "").trim()
    );

    if (missingRequired) {
      alert(assessment.required);
      return;
    }

    setStep((prev) => Math.min(prev + 1, groups.length - 1));
  };

  // ENVOI WHATSAPP
  const sendToWhatsApp = (event) => {
    event.preventDefault();

    const lastGroup = groups[step];

    const missingRequired = lastGroup.fields.some(
      (field) =>
        field.required &&
        !String(answers[field.name] || "").trim()
    );

    if (missingRequired || !consent) {
      alert(assessment.required);
      return;
    }

    const message = `
🏋️ NOUVELLE ÉVALUATION PHYSIQUE
━━━━━━━━━━━━━━━━━━

Bonjour Amine,

Une nouvelle personne vient de remplir son formulaire d'évaluation physique.

${groups
  .map((group) => {
    const groupAnswers = group.fields
      .map((field) => {
        const value = answers[field.name];

        return value !== undefined &&
          String(value).trim() !== ""
          ? `• ${field.name}: ${value}`
          : null;
      })
      .filter(Boolean)
      .join("\n");

    return `\n📌 ${group.title}\n${groupAnswers}`;
  })
  .join("\n")}

━━━━━━━━━━━━━━━━━━
📅 Date : ${new Date().toLocaleString()}
🌐 Langue : ${i18n.language}

Envoyé depuis votre site web.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setSuccess(true);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setConsent(false);
    setSuccess(false);
  };

  if (!groups.length) return null;

  return (
    <section
      className="section assessment"
      id="assessment"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="section-container">

        <div className="section-heading">
          <span className="eyebrow">
            {assessment.eyebrow}
          </span>

          <h2>
            {assessment.title1}
            <br />
            <span>{assessment.title2}</span>
          </h2>

          <p>{assessment.description}</p>
        </div>

        <div className="assessment-card">

          <div className="assessment-header">
            <div className="assessment-icon">
              <ClipboardCheck />
            </div>

            <div>
              <h3>{assessment.title}</h3>
              <p>
                {assessment.step} {step + 1} {assessment.of}{" "}
                {groups.length}
              </p>
            </div>
          </div>

          <div className="progress-track">
            <div
              className="progress-value"
              style={{
                width: `${((step + 1) / groups.length) * 100}%`,
              }}
            />
          </div>

          <form onSubmit={sendToWhatsApp}>

            <h3 className="assessment-step-title">
              {groups[step].title}
            </h3>

            <div className="assessment-fields">

              {groups[step].fields.map((field, index) => (
                <label
                  className="assessment-field"
                  key={index}
                >
                  <span>
                    {field.name}
                    {field.required && (
                      <span className="required-mark"> *</span>
                    )}
                  </span>

                  {field.type === "select" ? (
                    <select
                      value={answers[field.name] || ""}
                      onChange={(e) =>
                        updateAnswer(field.name, e.target.value)
                      }
                      required={field.required}
                    >
                      <option value="">
                        {assessment.selectPlaceholder}
                      </option>

                      {field.options?.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      value={answers[field.name] || ""}
                      onChange={(e) =>
                        updateAnswer(field.name, e.target.value)
                      }
                      placeholder={
                        field.placeholder || assessment.placeholder
                      }
                      rows={3}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={answers[field.name] || ""}
                      onChange={(e) =>
                        updateAnswer(field.name, e.target.value)
                      }
                      placeholder={
                        field.placeholder || assessment.placeholder
                      }
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      required={field.required}
                    />
                  )}
                </label>
              ))}

            </div>

            {isLastStep && (
              <>
                <label className="assessment-consent">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) =>
                      setConsent(e.target.checked)
                    }
                    required
                  />

                  <span>{assessment.privacy}</span>
                </label>

                <p className="assessment-note">
                  {assessment.note}
                </p>
              </>
            )}

            {success && (
              <div className="assessment-success">
                {assessment.success}
              </div>
            )}

            <div className="assessment-actions">

              <button
                type="button"
                className="secondary-btn"
                onClick={() =>
                  setStep((prev) => Math.max(0, prev - 1))
                }
                disabled={step === 0}
              >
                {isArabic ? (
                  <ArrowRight size={16} />
                ) : (
                  <ArrowLeft size={16} />
                )}

                {assessment.previous}
              </button>

              {!isLastStep ? (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={nextStep}
                >
                  {assessment.next}

                  {isArabic ? (
                    <ArrowLeft size={16} />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  className="primary-btn"
                >
                  <MessageCircle size={18} />
                  {assessment.submit}
                </button>
              )}

            </div>
          </form>

          <button
            className="reset-btn"
            type="button"
            onClick={reset}
          >
            <RotateCcw size={14} />
            {assessment.reset}
          </button>

        </div>
      </div>
    </section>
  );
};

export default Assessment;
