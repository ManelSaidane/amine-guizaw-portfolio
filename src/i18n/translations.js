const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      expertise: "Expertise",
      services: "Services",
      qualifications: "Qualifications",
      contact: "Contact",
      cta: "Get in touch"
    },

    hero: {
      eyebrow: "SPORTS COACH & APA INSTRUCTOR",
      title1: "Build your",
      title2: "stronger",
      description:
        "Push your limits, develop your potential and build a better version of yourself through personalized sports coaching.",
      cta: "Start your journey",
      secondary: "Discover my journey",
      slogan: "DISCIPLINE. CONSISTENCY. RESULTS.",
      floatingTitle: "Train with purpose.",
      floatingSubtitle: "Transform your potential.",
      scroll: "SCROLL TO EXPLORE"
    },

    about: {
      eyebrow: "01 — ABOUT",
      title1: "Passion for movement.",
      title2: "Purpose in every session.",
      intro:
        "I am Amine Guizaw, an instructor in Adapted Physical Activities and a coach specializing in fitness and bodybuilding.",
      p1: "My mission is to support every individual in their physical development by combining scientific knowledge, sports discipline and personalized guidance.",
      p2: "I believe lasting progress comes from consistency, the right methodology and an approach adapted to each individual's abilities.",
      link: "Discover my services",
      highlights: [
        {
          title: "University education",
          text: "University degree in Adapted Physical Activities."
        },
        {
          title: "International certification",
          text: "International training in fitness and bodybuilding through IFBB Academy."
        },
        {
          title: "Personalized approach",
          text: "Coaching adapted to individual goals and abilities."
        }
      ]
    },

    expertise: {
      eyebrow: "02 — EXPERTISE",
      title1: "Knowledge meets",
      title2: "performance.",
      description:
        "Complementary skills dedicated to your physical development.",
      items: [
        {
          title: "Bodybuilding",
          description:
            "Muscle development, training techniques and physical progression."
        },
        {
          title: "Fitness & Physical Preparation",
          description:
            "Improving physical abilities, strength, endurance and conditioning."
        },
        {
          title: "Adapted Physical Activities",
          description:
            "Sports guidance adapted to individual needs and abilities."
        },
        {
          title: "Progress & Performance",
          description:
            "Progress assessment and personalized training adjustments."
        }
      ]
    },

    services: {
      eyebrow: "03 — SERVICES",
      title1: "Your goals.",
      title2: "My guidance.",
      items: [
        {
          tag: "PERSONAL TRAINING",
          title: "Personalized Coaching",
          description:
            "Training programs tailored to your goals, level and pace."
        },
        {
          tag: "BODYBUILDING",
          title: "Bodybuilding Programs",
          description:
            "Structured planning to develop strength and muscle mass."
        },
        {
          tag: "PERFORMANCE",
          title: "Physical Preparation",
          description: "Progressive work on physical abilities and performance."
        },
        {
          tag: "ASSESSMENT",
          title: "Physical Assessment",
          description:
            "An initial assessment to better understand your physical condition."
        }
      ]
    },

    qualifications: {
      eyebrow: "04 — QUALIFICATIONS",
      title1: "Expertise built on",
      title2: "knowledge.",
      items: [
        {
          year: "UNIVERSITY DEGREE",
          title: "Adapted Physical Activities (APA)",
          institution: "ISSEP of Gafsa",
          description: "University degree in Adapted Physical Activities."
        },
        {
          year: "INTERNATIONAL TRAINING",
          title: "Fitness & Bodybuilding",
          institution: "IFBB Academy",
          description: "International training in fitness and bodybuilding."
        },
        {
          year: "SECOND DEGREE",
          title: "Bodybuilding Coach",
          institution: "National Federation — ISSEP of Gafsa",
          description: "Second-degree qualification in bodybuilding coaching."
        }
      ]
    },

    assessment: {
      eyebrow: "05 — PHYSICAL ASSESSMENT",
      title1: "Understand your body.",
      title2: "Plan your progress.",
      description:
        "Answer the questions carefully. Your health information helps us choose safer and more suitable exercises.",
      title: "Initial Assessment Form",
      step: "Step",
      of: "of",
      next: "Continue",
      previous: "Back",
      submit: "Download my assessment",
      export: "Export my answers",
      reset: "Start over",
      placeholder: "Enter your answer...",
      selectPlaceholder: "Choose an option",
      required: "Please complete all required fields before continuing.",
      success:
        "Your assessment has been downloaded successfully. Your answers have not been sent to the coach.",
      note: "Your answers are only saved in the downloaded file. They are not automatically sent to the coach.",
      privacy:
        "I confirm that the information I provided is accurate and agree to its use for assessing my condition and preparing a suitable program, while respecting my privacy.",

      groups: [
        {
          title: "01 — Personal Information",
          fields: [
            { name: "Full name", type: "text", required: true },
            {
              name: "Age",
              type: "number",
              required: true,
              min: 12,
              max: 100
            },
            {
              name: "Gender",
              type: "select",
              options: ["Male", "Female"]
            },
            { name: "Phone number", type: "tel" },
            { name: "Occupation", type: "text" },
            { name: "Place of residence", type: "text" }
          ]
        },
        {
          title: "02 — Body Measurements",
          fields: [
            {
              name: "Current weight (kg)",
              type: "number",
              required: true,
              step: "0.1"
            },
            {
              name: "Height (cm)",
              type: "number",
              required: true
            },
            {
              name: "Target weight (kg)",
              type: "number",
              step: "0.1"
            },
            {
              name: "Do you know your body fat percentage?",
              type: "select",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          title: "03 — Fitness Goals",
          fields: [
            {
              name: "What is your main goal?",
              type: "select",
              required: true,
              options: [
                "Weight loss and fat burning",
                "Muscle mass gain",
                "Fat loss while maintaining muscle",
                "Increase physical strength",
                "Improve physical fitness",
                "Improve mobility and functional abilities"
              ]
            },
            {
              name: "When would you like to achieve your goal?",
              type: "text",
              placeholder: "For example: 3 months"
            },
            {
              name: "What would you most like to improve about your body?",
              type: "textarea"
            }
          ]
        },
        {
          title: "04 — Sports Experience & Training",
          fields: [
            {
              name: "Your fitness level",
              type: "select",
              options: ["Beginner", "Intermediate", "Advanced"]
            },
            {
              name: "How long have you been training?",
              type: "text"
            },
            {
              name: "How many days per week can you train?",
              type: "select",
              options: ["2 days", "3 days", "4 days", "5 days", "6 days"]
            },
            {
              name: "Preferred session duration",
              type: "select",
              options: [
                "30 minutes",
                "45 minutes",
                "1 hour",
                "More than 1 hour"
              ]
            },
            {
              name: "Do you practice any other sports?",
              type: "text"
            }
          ]
        },
        {
          title: "05 — Health Information",
          fields: [
            {
              name: "Do you have any chronic conditions? Please explain.",
              type: "textarea"
            },
            {
              name: "Do you experience back, knee, shoulder or joint pain?",
              type: "textarea"
            },
            {
              name: "Have you had surgery or suffered an injury before?",
              type: "textarea"
            },
            {
              name: "Do you regularly take any medication?",
              type: "text"
            },
            {
              name: "Do you have a disability, mobility difficulty or medical instructions we should consider?",
              type: "textarea"
            }
          ]
        },
        {
          title: "06 — Nutrition & Lifestyle",
          fields: [
            {
              name: "How many meals do you eat per day?",
              type: "select",
              options: ["1 meal", "2 meals", "3 meals", "4 meals or more"]
            },
            {
              name: "How many hours do you sleep per day?",
              type: "text",
              placeholder: "For example: 7 hours"
            },
            {
              name: "How much water do you drink per day?",
              type: "text",
              placeholder: "For example: 2 litres"
            },
            {
              name: "What is the nature of your work?",
              type: "select",
              options: [
                "Mostly sitting",
                "Some physical activity",
                "Heavy physical activity"
              ]
            },
            {
              name: "Do you follow a diet? Are there foods you avoid or are allergic to?",
              type: "textarea"
            }
          ]
        },
        {
          title: "07 — Follow-up",
          fields: [
            {
              name: "What is the biggest difficulty you face in achieving your goal?",
              type: "textarea"
            },
            {
              name: "Would you like regular follow-up with the coach?",
              type: "select",
              options: ["Yes", "No", "I would like to know more"]
            },
            {
              name: "Any other information you would like to share with the coach?",
              type: "textarea"
            }
          ]
        }
      ]
    },
    contact: {
      eyebrow: "06 — GET IN TOUCH",
      title1: "Ready to start",
      title2: "your journey?",
      description:
        "Every goal begins with a first step. Let's talk about your fitness journey.",
      phone: "PHONE",
      email: "EMAIL",
      location: "LOCATION",
      locationValue: "Tozeur",
      whatsapp: "Contact via WhatsApp",
      message:
        "Hello Amine, I would like to know more about your coaching services."
    },

    footer: {
      slogan: "Discipline. Consistency. Results.",
      back: "BACK TO TOP",
      rights: "All rights reserved."
    }
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      expertise: "Expertise",
      services: "Services",
      qualifications: "Qualifications",
      contact: "Contact",
      cta: "Me contacter"
    },

    hero: {
      eyebrow: "COACH SPORTIF & ENSEIGNANT APA",
      title1: "Construisez",
      title2: "votre force",
      description:
        "Dépassez vos limites, développez votre potentiel et construisez une meilleure version de vous-même grâce à un accompagnement sportif personnalisé.",
      cta: "Commencer maintenant",
      secondary: "Découvrir mon parcours",
      slogan: "DISCIPLINE. RÉGULARITÉ. RÉSULTATS.",
      floatingTitle: "Entraînez-vous avec un objectif.",
      floatingSubtitle: "Transformez votre potentiel.",
      scroll: "DÉFILER POUR EXPLORER"
    },

    about: {
      eyebrow: "01 — À PROPOS",
      title1: "Passion du mouvement.",
      title2: "Un objectif à chaque séance.",
      intro:
        "Je suis Amine Guizaw, enseignant en Activités Physiques Adaptées et coach spécialisé en fitness et culturisme.",
      p1: "Ma mission est d'accompagner chaque personne dans son développement physique en associant connaissances scientifiques, discipline sportive et suivi personnalisé.",
      p2: "Je crois qu'une progression durable repose sur la régularité, une bonne méthode et une approche adaptée aux capacités de chacun.",
      link: "Découvrir mes services",
      highlights: [
        {
          title: "Formation universitaire",
          text: "Diplôme universitaire en Activités Physiques Adaptées."
        },
        {
          title: "Certification internationale",
          text: "Formation internationale en fitness et culturisme avec IFBB Academy."
        },
        {
          title: "Approche personnalisée",
          text: "Un accompagnement adapté aux objectifs et capacités de chacun."
        }
      ]
    },

    expertise: {
      eyebrow: "02 — EXPERTISE",
      title1: "Knowledge meets",
      title2: "performance.",
      description:
        "Des compétences complémentaires au service de votre évolution.",
      items: [
        {
          title: "Culturisme",
          description:
            "Développement musculaire, techniques d'entraînement et progression physique."
        },
        {
          title: "Fitness & préparation physique",
          description:
            "Amélioration des capacités physiques, force, endurance et conditionnement."
        },
        {
          title: "Activités physiques adaptées",
          description:
            "Accompagnement sportif tenant compte des capacités et des besoins individuels."
        },
        {
          title: "Suivi & performance",
          description:
            "Évaluation des progrès et adaptation des programmes d'entraînement."
        }
      ]
    },

    services: {
      eyebrow: "03 — SERVICES",
      title1: "Vos objectifs.",
      title2: "Mon accompagnement.",
      items: [
        {
          tag: "COACHING PERSONNALISÉ",
          title: "Coaching personnalisé",
          description:
            "Des programmes adaptés à vos objectifs, votre niveau et votre rythme."
        },
        {
          tag: "CULTURISME",
          title: "Programme de musculation",
          description:
            "Une planification structurée pour développer force et masse musculaire."
        },
        {
          tag: "PERFORMANCE",
          title: "Préparation physique",
          description:
            "Un travail progressif sur les capacités physiques et la performance."
        },
        {
          tag: "ÉVALUATION",
          title: "Évaluation physique",
          description:
            "Une analyse initiale pour mieux comprendre votre condition physique."
        }
      ]
    },

    qualifications: {
      eyebrow: "04 — QUALIFICATIONS",
      title1: "Une expertise fondée sur",
      title2: "les connaissances.",
      items: [
        {
          year: "DIPLÔME UNIVERSITAIRE",
          title: "Activités Physiques Adaptées (APA)",
          institution: "ISSEP de Gafsa",
          description: "Diplôme universitaire en Activités Physiques Adaptées."
        },
        {
          year: "FORMATION INTERNATIONALE",
          title: "Fitness & culturisme",
          institution: "IFBB Academy",
          description: "Formation internationale en fitness et culturisme."
        },
        {
          year: "DEUXIÈME DEGRÉ",
          title: "Coach de culturisme",
          institution: "Fédération nationale — ISSEP de Gafsa",
          description:
            "Qualification de deuxième degré en coaching de culturisme."
        }
      ]
    },

    assessment: {
      eyebrow: "05 — ÉVALUATION PHYSIQUE",
      title1: "Comprenez votre corps.",
      title2: "Planifiez votre progression.",
      description:
        "Répondez aux questions avec précision. Les informations relatives à votre santé nous aident à choisir des exercices plus adaptés et plus sûrs.",
      title: "Formulaire d'évaluation initiale",
      step: "Étape",
      of: "sur",
      next: "Continuer",
      previous: "Retour",
      submit: "Télécharger mon évaluation",
      export: "Exporter mes réponses",
      reset: "Recommencer",
      placeholder: "Votre réponse...",
      selectPlaceholder: "Choisissez une option",
      required:
        "Veuillez remplir tous les champs obligatoires avant de continuer.",
      success:
        "Votre évaluation a été téléchargée avec succès. Vos réponses n'ont pas été envoyées au coach.",
      note: "Vos réponses sont uniquement enregistrées dans le fichier téléchargé. Elles ne sont pas automatiquement transmises au coach.",
      privacy:
        "Je confirme que les informations fournies sont exactes et j'accepte leur utilisation pour évaluer ma situation et préparer un programme adapté, dans le respect de ma vie privée.",

      groups: [
        {
          title: "01 — Informations personnelles",
          fields: [
            { name: "Nom et prénom", type: "text", required: true },
            {
              name: "Âge",
              type: "number",
              required: true,
              min: 12,
              max: 100
            },
            {
              name: "Sexe",
              type: "select",
              options: ["Homme", "Femme"]
            },
            { name: "Numéro de téléphone", type: "tel" },
            { name: "Profession", type: "text" },
            { name: "Lieu de résidence", type: "text" }
          ]
        },
        {
          title: "02 — Mensurations corporelles",
          fields: [
            {
              name: "Poids actuel (kg)",
              type: "number",
              required: true,
              step: "0.1"
            },
            {
              name: "Taille (cm)",
              type: "number",
              required: true
            },
            {
              name: "Poids souhaité (kg)",
              type: "number",
              step: "0.1"
            },
            {
              name: "Connaissez-vous votre taux de masse grasse ?",
              type: "select",
              options: ["Oui", "Non"]
            }
          ]
        },
        {
          title: "03 — Objectifs sportifs",
          fields: [
            {
              name: "Quel est votre objectif principal ?",
              type: "select",
              required: true,
              options: [
                "Perdre du poids et brûler les graisses",
                "Augmenter la masse musculaire",
                "Perdre de la graisse tout en conservant les muscles",
                "Augmenter la force physique",
                "Améliorer la condition physique",
                "Améliorer la mobilité et les capacités fonctionnelles"
              ]
            },
            {
              name: "Dans quel délai souhaitez-vous atteindre votre objectif ?",
              type: "text",
              placeholder: "Exemple : 3 mois"
            },
            {
              name: "Quelle partie de votre condition physique souhaitez-vous le plus améliorer ?",
              type: "textarea"
            }
          ]
        },
        {
          title: "04 — Expérience sportive et entraînement",
          fields: [
            {
              name: "Votre niveau sportif",
              type: "select",
              options: ["Débutant", "Intermédiaire", "Avancé"]
            },
            {
              name: "Depuis combien de temps vous entraînez-vous ?",
              type: "text"
            },
            {
              name: "Combien de jours par semaine pouvez-vous vous entraîner ?",
              type: "select",
              options: ["2 jours", "3 jours", "4 jours", "5 jours", "6 jours"]
            },
            {
              name: "Durée de séance souhaitée",
              type: "select",
              options: [
                "30 minutes",
                "45 minutes",
                "1 heure",
                "Plus d'une heure"
              ]
            },
            {
              name: "Pratiquez-vous d'autres sports ?",
              type: "text"
            }
          ]
        },
        {
          title: "05 — État de santé",
          fields: [
            {
              name: "Souffrez-vous d'une maladie chronique ? Précisez si nécessaire.",
              type: "textarea"
            },
            {
              name: "Avez-vous des douleurs au dos, aux genoux, aux épaules ou aux articulations ?",
              type: "textarea"
            },
            {
              name: "Avez-vous subi une opération ou une blessure auparavant ?",
              type: "textarea"
            },
            {
              name: "Prenez-vous régulièrement des médicaments ?",
              type: "text"
            },
            {
              name: "Avez-vous un handicap, des difficultés de mobilité ou des recommandations médicales à prendre en compte ?",
              type: "textarea"
            }
          ]
        },
        {
          title: "06 — Nutrition et mode de vie",
          fields: [
            {
              name: "Combien de repas prenez-vous par jour ?",
              type: "select",
              options: ["1 repas", "2 repas", "3 repas", "4 repas ou plus"]
            },
            {
              name: "Combien d'heures dormez-vous par jour ?",
              type: "text",
              placeholder: "Exemple : 7 heures"
            },
            {
              name: "Quelle quantité d'eau buvez-vous par jour ?",
              type: "text",
              placeholder: "Exemple : 2 litres"
            },
            {
              name: "Quelle est la nature de votre travail ?",
              type: "select",
              options: [
                "Principalement assis",
                "Avec des déplacements",
                "Effort physique important"
              ]
            },
            {
              name: "Suivez-vous un régime alimentaire ? Évitez-vous certains aliments ou avez-vous des allergies ?",
              type: "textarea"
            }
          ]
        },
        {
          title: "07 — Suivi",
          fields: [
            {
              name: "Quelle est la principale difficulté que vous rencontrez pour atteindre votre objectif ?",
              type: "textarea"
            },
            {
              name: "Souhaitez-vous un suivi régulier avec le coach ?",
              type: "select",
              options: ["Oui", "Non", "Je souhaite en savoir plus"]
            },
            {
              name: "Autres informations que vous souhaitez communiquer au coach",
              type: "textarea"
            }
          ]
        }
      ]
    },

    contact: {
      eyebrow: "06 — CONTACT",
      title1: "Prêt à commencer",
      title2: "votre parcours ?",
      description:
        "Chaque objectif commence par une première étape. Parlons de votre projet sportif.",
      phone: "TÉLÉPHONE",
      email: "EMAIL",
      location: "LOCALISATION",
      locationValue: "Tozeur, Tunisie",
      whatsapp: "Contacter via WhatsApp",
      message:
        "Bonjour Amine, je souhaite avoir plus d'informations sur vos services de coaching."
    },

    footer: {
      slogan: "Discipline. Régularité. Résultats.",
      back: "RETOUR EN HAUT",
      rights: "Tous droits réservés."
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      expertise: "الاختصاصات",
      services: "الخدمات",
      qualifications: "الشهادات",
      contact: "اتصل بي",
      cta: "تواصل معي"
    },

    hero: {
      eyebrow: "مدرب رياضي وأستاذ في الأنشطة البدنية المكيفة",
      title1: "ابنِ",
      title2: "قوتك",
      description:
        "تجاوز حدودك، وطوّر قدراتك، واصنع نسخة أفضل من نفسك من خلال مرافقة رياضية مخصصة لأهدافك.",
      cta: "ابدأ رحلتك الآن",
      secondary: "اكتشف مسيرتي",
      slogan: "الانضباط. الاستمرارية. النتائج.",
      floatingTitle: "تدرّب بهدف واضح.",
      floatingSubtitle: "حوّل إمكانياتك إلى إنجازات.",
      scroll: "اكتشف المزيد"
    },

    about: {
      eyebrow: "01 — من أنا",
      title1: "شغف بالحركة.",
      title2: "هدف في كل حصة.",
      intro:
        "أنا أمين قيواز، أستاذ في الأنشطة البدنية المكيفة ومدرب متخصص في اللياقة البدنية وكمال الأجسام.",
      p1: "تتمثل مهمتي في مرافقة كل شخص في تطوير قدراته البدنية من خلال الجمع بين المعرفة العلمية والانضباط الرياضي والمتابعة الشخصية.",
      p2: "أؤمن بأن التقدم المستدام يعتمد على الاستمرارية والمنهجية الصحيحة ومراعاة قدرات كل فرد.",
      link: "اكتشف خدماتي",
      highlights: [
        {
          title: "تكوين جامعي",
          text: "شهادة جامعية في الأنشطة البدنية المكيفة."
        },
        {
          title: "تكوين دولي",
          text: "تكوين دولي في اللياقة البدنية وكمال الأجسام من IFBB Academy."
        },
        {
          title: "مرافقة شخصية",
          text: "برامج تدريب تتناسب مع أهداف وقدرات كل شخص."
        }
      ]
    },

    expertise: {
      eyebrow: "02 — الاختصاصات",
      title1: "المعرفة في خدمة",
      title2: "الأداء الرياضي.",
      description: "مهارات متكاملة لدعم تطورك البدني وتحقيق أهدافك.",
      items: [
        {
          title: "كمال الأجسام",
          description: "تطوير العضلات وتقنيات التدريب والتقدم البدني."
        },
        {
          title: "اللياقة والتحضير البدني",
          description: "تطوير القدرات البدنية والقوة والتحمل واللياقة."
        },
        {
          title: "الأنشطة البدنية المكيفة",
          description: "مرافقة رياضية تراعي الاحتياجات والقدرات الفردية."
        },
        {
          title: "المتابعة والأداء",
          description: "تقييم التقدم وتكييف برامج التدريب حسب النتائج."
        }
      ]
    },

    services: {
      eyebrow: "03 — الخدمات",
      title1: "أهدافك.",
      title2: "مرافقتي.",
      items: [
        {
          tag: "تدريب شخصي",
          title: "تدريب مخصص",
          description: "برامج تدريب تتناسب مع أهدافك ومستواك وإمكانياتك."
        },
        {
          tag: "كمال الأجسام",
          title: "برامج بناء العضلات",
          description: "تخطيط تدريبي منظم لتطوير القوة والكتلة العضلية."
        },
        {
          tag: "الأداء الرياضي",
          title: "التحضير البدني",
          description: "عمل تدريجي لتطوير القدرات البدنية والأداء الرياضي."
        },
        {
          tag: "التقييم",
          title: "التقييم البدني",
          description: "تقييم أولي لفهم حالتك البدنية واحتياجاتك."
        }
      ]
    },

    qualifications: {
      eyebrow: "04 — الشهادات",
      title1: "خبرة مبنية على",
      title2: "المعرفة.",
      items: [
        {
          year: "شهادة جامعية",
          title: "الأنشطة البدنية المكيفة",
          institution: "المعهد العالي للرياضة والتربية البدنية بقفصة",
          description: "شهادة جامعية في مجال الأنشطة البدنية المكيفة."
        },
        {
          year: "تكوين دولي",
          title: "اللياقة البدنية وكمال الأجسام",
          institution: "IFBB Academy",
          description: "تكوين دولي في مجال اللياقة البدنية وكمال الأجسام."
        },
        {
          year: "الدرجة الثانية",
          title: "مدرب كمال الأجسام",
          institution: "الجامعة الوطنية — المعهد العالي بقفصة",
          description: "شهادة مدرب كمال الأجسام من الدرجة الثانية."
        }
      ]
    },

    assessment: {
      eyebrow: "05 — التقييم البدني",
      title1: "افهم جسمك.",
      title2: "خطط لتطورك.",
      description:
        "أجب عن الأسئلة بكل وضوح. تساعدنا المعلومات الصحية على اختيار تمارين أكثر ملاءمة وأماناً.",
      title: "استمارة التقييم الأوّلي",
      step: "الخطوة",
      of: "من",
      next: "متابعة",
      previous: "رجوع",
      submit: "تحميل التقييم",
      export: "تصدير الإجابات",
      reset: "إعادة البدء",
      placeholder: "أدخل إجابتك...",
      selectPlaceholder: "اختر إجابة",
      required: "يرجى إكمال جميع الخانات الإجبارية قبل المتابعة.",
      success: "تم تحميل التقييم بنجاح. لم يتم إرسال إجاباتك إلى المدرب.",
      note: "يتم حفظ إجاباتك فقط في الملف الذي تقوم بتحميله، ولا يتم إرسالها تلقائياً إلى المدرب.",
      privacy:
        "أؤكد أن المعلومات التي قدمتها صحيحة، وأوافق على استعمالها لتقييم وضعي وتحضير برنامج مناسب مع احترام خصوصيتي.",

      groups: [
        {
          title: "01 — المعلومات الشخصية",
          fields: [
            { name: "الاسم واللقب", type: "text", required: true },
            {
              name: "العمر",
              type: "number",
              required: true,
              min: 12,
              max: 100
            },
            {
              name: "الجنس",
              type: "select",
              options: ["ذكر", "أنثى"]
            },
            { name: "رقم الهاتف", type: "tel" },
            { name: "المهنة", type: "text" },
            { name: "مكان الإقامة", type: "text" }
          ]
        },
        {
          title: "02 — القياسات الجسمانية",
          fields: [
            {
              name: "الوزن الحالي (كغ)",
              type: "number",
              required: true,
              step: "0.1"
            },
            {
              name: "الطول (سم)",
              type: "number",
              required: true
            },
            {
              name: "الوزن الذي ترغب في الوصول إليه (كغ)",
              type: "number",
              step: "0.1"
            },
            {
              name: "هل تعرف نسبة الدهون في جسمك؟",
              type: "select",
              options: ["نعم", "لا"]
            }
          ]
        },
        {
          title: "03 — الهدف الرياضي",
          fields: [
            {
              name: "ما هو هدفك الرئيسي؟",
              type: "select",
              required: true,
              options: [
                "إنقاص الوزن وحرق الدهون",
                "زيادة الكتلة العضلية",
                "إنقاص الدهون مع المحافظة على العضلات",
                "زيادة القوة البدنية",
                "تحسين اللياقة البدنية",
                "تحسين الحركة والقدرات الوظيفية"
              ]
            },
            {
              name: "في أي مدة ترغب في تحقيق هدفك؟",
              type: "text",
              placeholder: "مثلاً: 3 أشهر"
            },
            {
              name: "ما أكثر شيء ترغب في تحسينه في جسمك؟",
              type: "textarea"
            }
          ]
        },
        {
          title: "04 — الخبرة والتدريب",
          fields: [
            {
              name: "مستواك الرياضي",
              type: "select",
              options: ["مبتدئ", "متوسط", "متقدم"]
            },
            {
              name: "منذ متى وأنت تمارس التدريب؟",
              type: "text"
            },
            {
              name: "كم يوماً يمكنك التدرب في الأسبوع؟",
              type: "select",
              options: ["يومان", "3 أيام", "4 أيام", "5 أيام", "6 أيام"]
            },
            {
              name: "مدة الحصة التي تناسبك",
              type: "select",
              options: ["30 دقيقة", "45 دقيقة", "ساعة", "أكثر من ساعة"]
            },
            {
              name: "هل تمارس رياضات أخرى؟",
              type: "text"
            }
          ]
        },
        {
          title: "05 — الحالة الصحية",
          fields: [
            {
              name: "هل تعاني من مرض مزمن؟ وضّح إذا كانت الإجابة نعم.",
              type: "textarea"
            },
            {
              name: "هل تعاني من آلام في الظهر أو الركبة أو الكتف أو المفاصل؟",
              type: "textarea"
            },
            {
              name: "هل أجريت عملية جراحية أو تعرضت لإصابة من قبل؟",
              type: "textarea"
            },
            {
              name: "هل تستعمل أدوية بصفة منتظمة؟",
              type: "text"
            },
            {
              name: "هل لديك إعاقة أو صعوبة في الحركة أو تعليمات طبية يجب مراعاتها؟",
              type: "textarea"
            }
          ]
        },
        {
          title: "06 — التغذية ونمط الحياة",
          fields: [
            {
              name: "كم وجبة تتناول في اليوم؟",
              type: "select",
              options: ["وجبة واحدة", "وجبتان", "3 وجبات", "4 وجبات أو أكثر"]
            },
            {
              name: "كم ساعة تنام في اليوم؟",
              type: "text",
              placeholder: "مثلاً: 7 ساعات"
            },
            {
              name: "كمية الماء التي تشربها يومياً",
              type: "text",
              placeholder: "مثلاً: لتران"
            },
            {
              name: "طبيعة عملك",
              type: "select",
              options: [
                "أغلب الوقت جالس",
                "يتطلب الحركة",
                "يتطلب مجهوداً بدنياً كبيراً"
              ]
            },
            {
              name: "هل تتبع نظاماً غذائياً؟ هل تتجنب بعض المأكولات أو تعاني من حساسية غذائية؟",
              type: "textarea"
            }
          ]
        },
        {
          title: "07 — المتابعة",
          fields: [
            {
              name: "ما أكبر صعوبة تواجهك لتحقيق هدفك؟",
              type: "textarea"
            },
            {
              name: "هل ترغب في متابعة دورية مع المدرب؟",
              type: "select",
              options: ["نعم", "لا", "أرغب في معرفة المزيد"]
            },
            {
              name: "معلومات أخرى ترغب في إيصالها إلى المدرب",
              type: "textarea"
            }
          ]
        }
      ]
    },

    contact: {
      eyebrow: "06 — تواصل معي",
      title1: "هل أنت مستعد",
      title2: "لبداية رحلتك؟",
      description: "كل هدف يبدأ بخطوة أولى. دعنا نتحدث عن مشروعك الرياضي.",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationValue: "توزر، تونس",
      whatsapp: "تواصل عبر واتساب",
      message: "مرحباً أمين، أود معرفة المزيد عن خدمات التدريب التي تقدمها."
    },

    footer: {
      slogan: "الانضباط. الاستمرارية. النتائج.",
      back: "العودة للأعلى",
      rights: "جميع الحقوق محفوظة."
    }
  }
};

export default translations;
