const quizQuestions = {
  enfants: {
    "mathématiques": [
      {
        question: "Combien font 7 + 5 ?",
        answers: ["10", "12", "13", "14"],
        correct: 1,
        explanation: "7 + 5 = 12."
      },
      {
        question: "Combien font 4 × 3 ?",
        answers: ["7", "10", "12", "15"],
        correct: 2,
        explanation: "4 multiplié par 3 donne 12."
      },
      {
        question: "Quel nombre vient après 29 ?",
        answers: ["28", "30", "31", "39"],
        correct: 1,
        explanation: "Après 29 vient 30."
      }
    ],
    "français": [
      {
        question: "Quel est le pluriel de « cheval » ?",
        answers: ["Chevals", "Chevaux", "Chevales", "Chevaus"],
        correct: 1,
        explanation: "Le pluriel de cheval est chevaux."
      },
      {
        question: "Quel mot est un verbe ?",
        answers: ["Maison", "Courir", "Joli", "Table"],
        correct: 1,
        explanation: "Courir est un verbe à l'infinitif."
      },
      {
        question: "Quel est le contraire de « grand » ?",
        answers: ["Petit", "Long", "Haut", "Large"],
        correct: 0,
        explanation: "Le contraire de grand est petit."
      }
    ],
    "anglais": [
      {
        question: "Comment dit-on « Bonjour » en anglais ?",
        answers: ["Goodbye", "Please", "Hello", "Thanks"],
        correct: 2,
        explanation: "Hello signifie bonjour en anglais."
      },
      {
        question: "Que signifie « Apple » ?",
        answers: ["Orange", "Pomme", "Banane", "Raisin"],
        correct: 1,
        explanation: "Apple signifie pomme."
      },
      {
        question: "Comment dit-on « Chat » en anglais ?",
        answers: ["Dog", "Bird", "Cat", "Fish"],
        correct: 2,
        explanation: "Cat signifie chat."
      }
    ],
    "sciences": [
      {
        question: "Quelle planète est surnommée la planète rouge ?",
        answers: ["Vénus", "Mars", "Jupiter", "Mercure"],
        correct: 1,
        explanation: "Mars est surnommée la planète rouge à cause de sa couleur."
      },
      {
        question: "Quel organe permet de respirer ?",
        answers: ["Le cœur", "L'estomac", "Les poumons", "Le cerveau"],
        correct: 2,
        explanation: "Les poumons permettent les échanges respiratoires."
      },
      {
        question: "À quelle température l'eau gèle-t-elle ?",
        answers: ["0 °C", "10 °C", "50 °C", "100 °C"],
        correct: 0,
        explanation: "L'eau gèle à 0 °C dans les conditions habituelles."
      }
    ],
    "géographie": [
      {
        question: "Quelle est la capitale de la Côte d'Ivoire ?",
        answers: ["Abidjan", "Yamoussoukro", "Bouaké", "Korhogo"],
        correct: 1,
        explanation: "Yamoussoukro est la capitale politique de la Côte d'Ivoire."
      },
      {
        question: "Sur quel continent se trouve le Sénégal ?",
        answers: ["Asie", "Europe", "Afrique", "Amérique"],
        correct: 2,
        explanation: "Le Sénégal se trouve en Afrique de l'Ouest."
      },
      {
        question: "Quel est le plus grand océan du monde ?",
        answers: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        correct: 3,
        explanation: "L'océan Pacifique est le plus vaste."
      }
    ],
    "culture générale": [
      {
        question: "Combien y a-t-il de jours dans une semaine ?",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "Une semaine compte 7 jours."
      },
      {
        question: "Quel animal est connu comme le roi de la jungle ?",
        answers: ["Éléphant", "Lion", "Girafe", "Zèbre"],
        correct: 1,
        explanation: "Le lion est souvent surnommé le roi des animaux."
      },
      {
        question: "Combien de couleurs compte l'arc-en-ciel traditionnellement ?",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "On distingue traditionnellement sept couleurs."
      }
    ]
  },
adultes: {
  "culture générale": {
    "Facile": [
      {
        question: "Combien de continents compte-t-on généralement ?",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "Le modèle géographique le plus courant en compte sept."
      }
    ],
    "Intermédiaire": [
      {
        question: "Quelle organisation a été fondée en 1945 pour promouvoir la paix internationale ?",
        answers: ["L'ONU", "L'OTAN", "L'UNESCO", "L'Union africaine"],
        correct: 0,
        explanation: "L'Organisation des Nations unies a été fondée en 1945."
      }
    ],
    "Difficile": [
      {
        question: "Quelle est la monnaie officielle du Japon ?",
        answers: ["Won", "Yuan", "Yen", "Dollar"],
        correct: 2,
        explanation: "La monnaie japonaise est le yen."
      }
    ],
    "Expert": [
      {
        question: "Quel traité a officiellement créé l'Union européenne en 1993 ?",
        answers: ["Le traité de Rome", "Le traité de Maastricht", "Le traité de Lisbonne", "Le traité de Paris"],
        correct: 1,
        explanation: "Le traité de Maastricht, entré en vigueur en 1993, a créé l'Union européenne."
      }
    ]
  },

  "histoire": {
    "Facile": [
      {
        question: "En quelle année la Seconde Guerre mondiale s'est-elle terminée ?",
        answers: ["1942", "1945", "1948", "1950"],
        correct: 1,
        explanation: "La guerre s'est terminée en 1945."
      }
    ],
    "Intermédiaire": [
      {
        question: "Qui était le premier président de la Côte d'Ivoire ?",
        answers: ["Laurent Gbagbo", "Henri Konan Bédié", "Félix Houphouët-Boigny", "Alassane Ouattara"],
        correct: 2,
        explanation: "Félix Houphouët-Boigny fut le premier président de la Côte d'Ivoire."
      }
    ],
    "Difficile": [
      {
        question: "En quelle année le mur de Berlin est-il tombé ?",
        answers: ["1985", "1989", "1991", "1995"],
        correct: 1,
        explanation: "Le mur de Berlin est tombé en novembre 1989."
      }
    ],
    "Expert": [
      {
        question: "En quelle année s'est tenue la conférence de Berlin qui a organisé le partage colonial de l'Afrique ?",
        answers: ["1875", "1884-1885", "1898", "1905"],
        correct: 1,
        explanation: "La conférence de Berlin s'est tenue de novembre 1884 à février 1885."
      }
    ]
  },

  "géographie": {
    "Facile": [
      {
        question: "Quelle est la capitale du Ghana ?",
        answers: ["Lomé", "Accra", "Lagos", "Cotonou"],
        correct: 1,
        explanation: "Accra est la capitale du Ghana."
      }
    ],
    "Intermédiaire": [
      {
        question: "Quel fleuve traverse l'Égypte ?",
        answers: ["Le Congo", "Le Nil", "Le Niger", "Le Zambèze"],
        correct: 1,
        explanation: "Le Nil traverse l'Égypte et se jette dans la Méditerranée."
      }
    ],
    "Difficile": [
      {
        question: "Quel est le plus grand pays du monde par sa superficie ?",
        answers: ["Canada", "Chine", "États-Unis", "Russie"],
        correct: 3,
        explanation: "La Russie est le plus grand pays du monde par sa superficie."
      }
    ],
    "Expert": [
      {
        question: "Quel pays est entièrement enclavé à l'intérieur de l'Afrique du Sud ?",
        answers: ["Le Botswana", "Le Lesotho", "Le Zimbabwe", "La Namibie"],
        correct: 1,
        explanation: "Le Lesotho est entièrement entouré par le territoire sud-africain."
      }
    ]
  },

  "sciences": {
    "Facile": [
      {
        question: "Quel est le symbole chimique de l'or ?",
        answers: ["Ag", "Au", "Fe", "O"],
        correct: 1,
        explanation: "Au est le symbole chimique de l'or."
      }
    ],
    "Intermédiaire": [
      {
        question: "Quelle est l'unité de mesure de la force ?",
        answers: ["Watt", "Joule", "Newton", "Volt"],
        correct: 2,
        explanation: "La force se mesure en newtons."
      }
    ],
    "Difficile": [
      {
        question: "Quel gaz les plantes absorbent-elles principalement pour la photosynthèse ?",
        answers: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"],
        correct: 2,
        explanation: "Les plantes absorbent le dioxyde de carbone pour la photosynthèse."
      }
    ],
    "Expert": [
      {
        question: "Quel est le pH d'une solution neutre à température ambiante (environ 25 °C) ?",
        answers: ["0", "5", "7", "14"],
        correct: 2,
        explanation: "Une solution neutre possède un pH égal à 7 à environ 25 °C."
      }
    ]
  },

  "technologies": {
    "Facile": [
      {
        question: "Que signifie HTML ?",
        answers: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Modern Language",
          "HomeText Markup Link"
        ],
        correct: 0,
        explanation: "HTML signifie HyperText Markup Language."
      }
    ],
    "Intermédiaire": [
      {
        question: "Quel composant est souvent considéré comme le cerveau de l'ordinateur ?",
        answers: ["La souris", "Le processeur", "L'écran", "Le clavier"],
        correct: 1,
        explanation: "Le processeur exécute les instructions et les calculs."
      }
    ],
    "Difficile": [
      {
        question: "Que signifie le sigle URL ?",
        answers: [
          "Uniform Resource Locator",
          "Universal Reading Link",
          "United Reference Language",
          "User Resource List"
        ],
        correct: 0,
        explanation: "URL signifie Uniform Resource Locator."
      }
    ],
    "Expert": [
      {
        question: "Quel protocole sécurise les échanges entre un navigateur et un site web ?",
        answers: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: 2,
        explanation: "HTTPS utilise le chiffrement TLS pour sécuriser les échanges web."
      }
    ]
  },

  "économie": {
    "Facile": [
      {
        question: "Que signifie l'inflation ?",
        answers: [
          "Une baisse générale des prix",
          "Une hausse générale des prix",
          "Une hausse des salaires uniquement",
          "Une baisse de la population"
        ],
        correct: 1,
        explanation: "L'inflation correspond à une augmentation générale et durable des prix."
      }
    ],
    "Intermédiaire": [
      {
        question: "Que mesure le PIB ?",
        answers: [
          "La population d'un pays",
          "La production de richesses d'un pays",
          "Le nombre d'entreprises",
          "Le niveau des importations uniquement"
        ],
        correct: 1,
        explanation: "Le produit intérieur brut mesure la valeur de la production économique d'un pays."
      }
    ],
    "Difficile": [
      {
        question: "Quelle institution émet les billets en euros ?",
        answers: [
          "La Banque mondiale",
          "La Banque centrale européenne",
          "Le FMI",
          "La Commission européenne"
        ],
        correct: 1,
        explanation: "La Banque centrale européenne autorise l'émission des billets en euros."
      }
    ],
    "Expert": [
      {
        question: "En économie, que désigne le coût d'opportunité ?",
        answers: [
          "Le prix total d'un produit",
          "La valeur de la meilleure option à laquelle on renonce",
          "Le coût de fabrication d'un produit",
          "Le montant des impôts payés"
        ],
        correct: 1,
        explanation: "Le coût d'opportunité correspond à la valeur de la meilleure alternative abandonnée."
      }
    ]
  },

  "langues": {
    "Facile": [
      {
        question: "Que signifie le mot espagnol « gracias » ?",
        answers: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        correct: 2,
        explanation: "Gracias signifie merci en espagnol."
      }
    ],
    "Intermédiaire": [
      {
        question: "Quel est le pluriel anglais de « child » ?",
        answers: ["Childs", "Children", "Childes", "Childrens"],
        correct: 1,
        explanation: "Le pluriel irrégulier de child est children."
      }
    ],
    "Difficile": [
      {
        question: "Quel est le contraire anglais de « expensive » ?",
        answers: ["Cheap", "Beautiful", "Difficult", "Strong"],
        correct: 0,
        explanation: "Cheap signifie bon marché."
      }
    ],
    "Expert": [
      {
        question: "En anglais, que signifie généralement le mot « actually » ?",
        answers: ["Actuellement", "En fait", "Éventuellement", "Rapidement"],
        correct: 1,
        explanation: "Actually signifie généralement « en fait » ou « en réalité », et non « actuellement »."
      }
    ]
  },

  "logique": {
    "Facile": [
      {
        question: "Complétez la suite : 2, 4, 8, 16, ...",
        answers: ["18", "24", "30", "32"],
        correct: 3,
        explanation: "Chaque nombre est multiplié par 2. Le suivant est 32."
      }
    ],
    "Intermédiaire": [
      {
        question: "Un article coûte 10 000 F CFA. Il bénéficie d'une réduction de 20 %. Quel est son nouveau prix ?",
        answers: ["8 000 F CFA", "9 000 F CFA", "7 000 F CFA", "6 000 F CFA"],
        correct: 0,
        explanation: "20 % de 10 000 = 2 000. Le nouveau prix est 8 000 F CFA."
      }
    ],
    "Difficile": [
      {
        question: "Si tous les A sont des B et que tous les B sont des C, alors :",
        answers: [
          "Tous les C sont des A",
          "Tous les A sont des C",
          "Aucun A n'est C",
          "Aucun B n'est C"
        ],
        correct: 1,
        explanation: "Si A appartient à B et B appartient à C, alors A appartient aussi à C."
      }
    ],
    "Expert": [
      {
        question: "Si 5 machines fabriquent 5 objets en 5 minutes, combien de temps faut-il à 100 machines pour fabriquer 100 objets au même rythme ?",
        answers: ["5 minutes", "20 minutes", "100 minutes", "500 minutes"],
        correct: 0,
        explanation: "Chaque machine fabrique un objet en 5 minutes. Les 100 machines fabriquent donc 100 objets en 5 minutes."
      }
    ]
  }
}
};