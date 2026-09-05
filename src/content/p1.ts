import type { Service } from "./services";

/**
 * Les six prestations qui portent le trafic. Reecrites au format « question →
 * reponse en deux phrases → detail », avec sources ouvertes et verifiees le
 * 1er septembre 2026, et un tableau par page.
 *
 * Les champs `experience` sont volontairement vides : ils doivent etre remplis
 * par quelqu'un qui a fait le chantier.
 */
export const p1: Service[] = [
  {
    slug: "demoussage-toiture",
    name: "Démoussage de toiture",
    h1: "Démoussage de toiture aux Andelys",
    title: "Démoussage de toiture aux Andelys et dans l'Eure",
    metaDescription:
      "Démoussage de toiture aux Andelys, à Vernon, Gisors et dans l'Eure : retrait de la mousse, traitement, gouttières comprises. Devis gratuit.",
    keyword: "démoussage toiture Les Andelys",
    priority: 1,
    photoDir: "05-nettoyage-demoussage-toiture",
    lead:
      "La mousse n'est pas un problème d'esthétique. Sous le climat humide de la vallée de la Seine, elle retient l'eau contre l'ardoise, accélère l'usure du matériau et finit par faire éclater les tuiles au premier gel. Un démoussage régulier repousse une réfection complète de plusieurs années.",
    blocks: [
      {
        h2: "Pourquoi faut-il démousser une toiture dans l'Eure ?",
        capsule:
          "Parce que la mousse retient l'eau contre la couverture au lieu de la laisser ruisseler, et que cette eau gèle en hiver puis fait éclater l'ardoise ou la tuile de l'intérieur. Dans la vallée de la Seine, où l'humidité est quasi permanente, c'est le premier facteur de vieillissement d'un toit.",
        body: [
          "Les toitures du Vexin normand cumulent les conditions favorables à la mousse : brouillards de vallée, ombre portée des boisements, versants nord nombreux sur le bâti ancien.",
          "Le mécanisme est mécanique avant d'être esthétique. La mousse se comporte comme une éponge posée sur la couverture : elle maintient l'humidité au contact du matériau, ses racines soulèvent les éléments, et l'eau finit par passer par les recouvrements ainsi ouverts.",
          "S'y ajoute l'obstruction progressive des gouttières par les débris végétaux, qui produit le trio classique : infiltration, humidité en pied de mur, façade tachée.",
        ],
      },
      {
        h2: "Comment se déroule un démoussage de toiture ?",
        capsule:
          "En trois temps : diagnostic et protection des abords, nettoyage à une pression adaptée au support, puis application d'un traitement anti-mousse curatif et préventif. Un hydrofuge peut être ajouté dans un second passage, une fois la couverture parfaitement sèche.",
        body: [
          "La pression est réglée selon le matériau et son âge. Un nettoyage trop agressif fait plus de dégâts que la mousse elle-même : c'est la faute la plus courante sur ce type de chantier.",
        ],
        list: [
          "Diagnostic et protection : état de la couverture, repérage des éléments déjà fendus, protection des plantations et des descentes d'eau.",
          "Nettoyage : basse ou haute pression selon le support, toujours dans le sens de l'écoulement pour ne jamais forcer l'eau sous les éléments.",
          "Traitement anti-mousse : produit curatif et préventif, qui poursuit son action plusieurs mois après notre passage.",
        ],
      },
      {
        h2: "Ardoise ou tuile : le démoussage change-t-il ?",
        capsule:
          "Oui, et c'est la seule décision technique qui compte vraiment sur ce chantier. L'ardoise ancienne se traite exclusivement en basse pression, la tuile en bon état accepte une pression plus soutenue mais toujours maîtrisée.",
        body: [
          "L'ardoise est fine et se feuillette. Une lance trop puissante décape la patine et fragilise le clivage, ce qui accélère précisément ce que le démoussage devait ralentir. Les crochets rouillés sont repérés et remplacés pendant l'intervention.",
          "Sur tuile terre cuite, le point de vigilance se déplace : ce sont les tuiles de rive et de faîtage, plus exposées, qui se descellent en premier.",
        ],
        table: {
          caption:
            "Réglage retenu selon le support. En cas de doute sur l'état d'une couverture ancienne, nous descendons systématiquement d'un cran.",
          head: ["Support", "Pression", "Point de vigilance"],
          rows: [
            ["Ardoise ancienne", "Basse uniquement", "Feuilletage, crochets rouillés"],
            ["Ardoise récente", "Basse", "Patine de surface"],
            ["Tuile terre cuite saine", "Haute, maîtrisée", "Rives et faîtage"],
            ["Tuile poreuse ou gélive", "Basse + traitement", "Éclatement au gel"],
            ["Zinc", "Nettoyage doux", "Jamais d'abrasif"],
          ],
        },
      },
      {
        h2: "Faut-il ajouter un traitement hydrofuge ?",
        capsule:
          "C'est utile dès que le matériau est poreux, ce qui est le cas de la plupart des tuiles anciennes du secteur. L'hydrofuge ne colmate rien : il rend la surface déperlante, l'eau ruisselle au lieu d'être absorbée, et la mousse revient beaucoup plus lentement.",
        body: [
          "La couverture sèche plus vite après chaque pluie, ce qui supprime l'humidité stagnante dont la mousse a besoin pour s'installer.",
          "Le traitement s'applique impérativement sur une couverture propre et sèche : appliqué sur un support encrassé, il scelle la saleté dessous. Nous prévoyons donc toujours deux passages. Le détail est sur notre page [traitement hydrofuge](/services/traitement-hydrofuge).",
        ],
      },
    ],
    priceNote:
      "Le prix d'un démoussage se calcule au mètre carré et dépend de la pente, de l'accessibilité, de l'état de la couverture et du traitement retenu. Nous établissons le devis après être montés sur le toit, jamais par téléphone.",
    experienceQuestion:
      "Sur un chantier de démoussage aux Andelys, qu'avez-vous découvert sous la mousse que le client ne soupçonnait pas ? Un chiffre, une commune, ce que ça a changé au devis.",
    faq: [
      {
        q: "À quelle fréquence faut-il démousser une toiture ?",
        a: "Dans l'Eure, comptez tous les 3 à 5 ans sans traitement hydrofuge, et jusqu'à 10 ans avec. Une toiture exposée au nord ou proche d'arbres se réencrasse plus vite.",
      },
      {
        q: "Le démoussage haute pression abîme-t-il la toiture ?",
        a: "Il peut l'abîmer s'il est mal employé, en particulier sur ardoise ancienne. C'est pour cette raison que nous réglons la pression selon le matériau et l'âge de la couverture, et que nous travaillons toujours dans le sens de l'écoulement.",
      },
      {
        q: "Faut-il être présent pendant l'intervention ?",
        a: "Non. Nous avons seulement besoin d'un accès à l'eau et d'un espace pour installer le matériel. Nous faisons le point avec vous à la fin, photos à l'appui.",
      },
      {
        q: "Combien de temps dure un démoussage ?",
        a: "Une maison individuelle courante se traite en une journée. Avec traitement hydrofuge, prévoyez une seconde intervention après séchage complet.",
      },
      {
        q: "Le démoussage est-il pris en charge par l'assurance ?",
        a: "Non, il s'agit d'un entretien courant à la charge du propriétaire. En revanche, un défaut d'entretien peut vous être opposé par l'assureur en cas de sinistre lié à une infiltration.",
      },
      {
        q: "Intervenez-vous en dehors des Andelys ?",
        a: "Oui : Vernon, Gaillon, Écouis, Fleury-sur-Andelle, Étrépagny, Gisors et les communes voisines. La liste complète est sur notre page zone d'intervention.",
      },
    ],
    related: ["nettoyage-toiture", "traitement-hydrofuge", "renovation-toiture"],
  },

  {
    slug: "nettoyage-toiture",
    name: "Nettoyage de toiture",
    h1: "Nettoyage de toiture aux Andelys",
    title: "Nettoyage de toiture aux Andelys et dans l'Eure",
    metaDescription:
      "Nettoyage de toiture aux Andelys et dans l'Eure : pression adaptée au support, tuile comme ardoise, gouttières comprises. Devis gratuit.",
    keyword: "nettoyage toiture Les Andelys",
    priority: 1,
    photoDir: "05-nettoyage-demoussage-toiture",
    lead:
      "Un nettoyage de toiture rend à la couverture sa capacité à évacuer l'eau. Ce n'est pas un ravalement décoratif : c'est l'entretien qui conditionne la durée de vie de tout ce qui se trouve dessous, de la charpente à l'isolant.",
    blocks: [
      {
        h2: "Que retire réellement un nettoyage de toiture ?",
        capsule:
          "Les mousses et lichens, mais aussi le film d'algues noires des versants ombragés, les dépôts de pollution et les débris végétaux accumulés dans les noues et les gouttières. Ce sont ces couches qui empêchent l'eau de ruisseler et la poussent à chercher un passage latéral.",
        body: [
          "L'eau qui stagne ne traverse pas la couverture par un trou franc : elle entre par un recouvrement mal drainé. C'est pour cette raison qu'une tache au plafond apparaît souvent à plusieurs mètres du point d'entrée réel.",
          "Un nettoyage rétablit donc d'abord un écoulement correct. L'aspect n'est qu'une conséquence.",
        ],
      },
      {
        h2: "Nettoyage ou démoussage : quelle différence ?",
        capsule:
          "Le nettoyage retire ce qui est présent en surface ; le démoussage y ajoute un traitement anti-mousse qui continue d'agir après notre passage. Dans la pratique nous réalisons presque toujours les deux dans la même intervention, parce que nettoyer sans traiter ne tient qu'une saison ou deux.",
        body: [
          "Si votre besoin est surtout préventif et que la couverture est déjà propre, le traitement seul peut suffire.",
          "Si la mousse est installée, l'ordre ne change pas : on nettoie, on traite, et on n'applique un hydrofuge qu'ensuite, sur support sec. Voir notre page [démoussage de toiture](/services/demoussage-toiture).",
        ],
      },
      {
        h2: "Basse ou haute pression : comment choisissez-vous ?",
        capsule:
          "Le choix dépend du matériau et de son état, jamais de la rapidité souhaitée. La haute pression est réservée aux tuiles saines et au béton ; l'ardoise ancienne, les tuiles poreuses et les couvertures fragilisées se traitent en basse pression avec un produit.",
        body: [
          "Sur une maison ancienne des Andelys, couverte en ardoise, c'est presque toujours la basse pression qui s'impose.",
          "Le résultat est moins immédiat qu'un décapage à forte pression, mais il ne coûte pas dix ardoises à remplacer la semaine suivante.",
        ],
        table: {
          caption: "Ce que nous vérifions avant de choisir la pression de travail.",
          head: ["État constaté", "Approche", "Pourquoi"],
          rows: [
            ["Ardoise ancienne, patine marquée", "Basse pression", "Le clivage se fragilise sous la lance"],
            ["Tuile mécanique récente", "Haute pression maîtrisée", "Support dense, peu poreux"],
            ["Tuile ancienne, surface pulvérulente", "Basse pression + traitement", "Matériau déjà gélif"],
            ["Éléments fendus repérés", "Remplacement avant nettoyage", "Sinon l'eau entre pendant le chantier"],
            ["Zinguerie corrodée", "Nettoyage doux, reprise à chiffrer", "L'abrasif accélère la perforation"],
          ],
        },
      },
      {
        h2: "Un nettoyage révèle-t-il des défauts cachés ?",
        capsule:
          "Presque toujours, et c'est l'un de ses intérêts. La mousse masque les ardoises fendues, les crochets rompus, les solins fissurés et les tuiles déplacées ; une fois la couverture propre, ces défauts deviennent visibles et chiffrables.",
        body: [
          "Nous les relevons pendant l'intervention et vous les signalons avec des photos, en distinguant ce qui doit être repris tout de suite de ce qui peut attendre.",
          "Réparer ces points au moment du nettoyage coûte une fraction de ce qu'ils coûteront une fois l'eau passée dans l'isolant.",
        ],
      },
    ],
    priceNote:
      "Le tarif dépend de la surface développée, de la pente, du type de couverture et de l'accès. Le déplacement pour établir le devis est gratuit et sans engagement.",
    experienceQuestion:
      "Quel est le pire état de toiture que vous ayez nettoyé dans le secteur, et qu'est-ce qui est apparu une fois la mousse retirée ?",
    faq: [
      {
        q: "Quelle est la meilleure période pour nettoyer une toiture ?",
        a: "Le printemps et le début de l'automne. Il faut une couverture sèche et des températures douces pour que les traitements adhèrent correctement.",
      },
      {
        q: "Le produit utilisé est-il dangereux pour le jardin ?",
        a: "Nous protégeons les plantations et les descentes d'eau avant l'application, et nous rinçons les abords en fin de chantier.",
      },
      {
        q: "Récupérez-vous les déchets ?",
        a: "Oui. Les mousses et débris décrochés sont ramassés et évacués, et le chantier est laissé propre.",
      },
      {
        q: "Puis-je nettoyer ma toiture moi-même ?",
        a: "Techniquement oui, mais le travail en hauteur est la principale cause d'accident grave sur ce type de chantier, et une pression mal réglée coûte souvent plus cher que l'intervention elle-même.",
      },
      {
        q: "Faut-il couper l'eau ou prévoir quelque chose ?",
        a: "Un simple accès à un point d'eau extérieur suffit. Si vous récupérez l'eau de pluie, signalez-le nous : nous déconnectons la cuve pendant le chantier.",
      },
    ],
    related: ["demoussage-toiture", "traitement-hydrofuge", "gouttieres"],
  },

  {
    slug: "fuite-toiture",
    name: "Fuite de toiture",
    h1: "Recherche et réparation de fuite de toiture aux Andelys",
    title: "Fuite de toiture aux Andelys — Intervention rapide",
    metaDescription:
      "Fuite de toiture aux Andelys et dans l'Eure : recherche du point d'entrée, protection provisoire, réparation. Diagnostic gratuit sur place.",
    keyword: "fuite de toiture urgence Les Andelys",
    priority: 1,
    photoDir: "06-fuite-etancheite-toiture",
    lead:
      "Une infiltration ne se referme jamais seule. Ce qui commence par une auréole discrète au plafond finit par détremper l'isolant, noircir la charpente et faire tomber le plâtre. Le coût de la réparation devient alors sans rapport avec celui du problème d'origine.",
    blocks: [
      {
        h2: "D'où viennent la plupart des fuites de toiture ?",
        capsule:
          "De cinq points précis, et presque jamais du milieu d'un versant : ardoise ou tuile cassée, solin de cheminée fissuré, noue obstruée ou zinguerie percée, faîtage descellé, joint de fenêtre de toit en fin de vie. Aucun de ces cinq points n'est visible depuis le sol.",
        body: [
          "Le solin de cheminée arrive largement en tête sur le bâti ancien du secteur : c'est le raccord entre une maçonnerie qui bouge et une couverture qui bouge différemment.",
          "Les joints de fenêtre de toit posés dans les années 1990 et 2000 arrivent aujourd'hui en fin de vie, et produisent une trace en partie basse du cadre souvent prise pour de la condensation.",
        ],
        list: [
          "Ardoise ou tuile cassée, déplacée ou glissée, souvent après un coup de vent.",
          "Solin de cheminée fissuré : le point faible numéro un.",
          "Noue obstruée ou zinguerie percée par la corrosion.",
          "Faîtage descellé, dont le mortier a éclaté sous l'effet du gel.",
          "Joint d'étanchéité de fenêtre de toit arrivé en fin de vie.",
        ],
      },
      {
        h2: "Pourquoi la fuite n'est-elle pas là où apparaît la tache ?",
        capsule:
          "Parce que l'eau qui franchit la couverture ne tombe pas à la verticale : elle circule sur l'écran sous-toiture, suit un liteau, longe un chevron et ressort parfois à plusieurs mètres de son point d'entrée. Réparer au-dessus de la tache revient donc, la plupart du temps, à ne pas réparer du tout.",
        body: [
          "C'est la raison pour laquelle nous ne posons jamais un enduit ou une bâche sur la zone visible avant d'avoir localisé l'origine. Cela donne l'illusion d'une réparation pendant quelques semaines, puis le problème revient, aggravé, et le diagnostic est devenu plus difficile.",
          "Notre méthode va du plus simple au plus technique : inspection des combles pour suivre le cheminement de l'eau, examen de la couverture, contrôle des points singuliers, puis test à l'eau ciblé si nécessaire.",
        ],
      },
      {
        h2: "Que faire en attendant l'intervention ?",
        capsule:
          "Placez un récipient sous l'écoulement, écartez ce qui peut être abîmé, et coupez le circuit électrique concerné si l'eau s'en approche. Ne montez pas sur le toit : une toiture mouillée est la situation où les accidents arrivent.",
        body: [
          "Photographiez la tache et l'écoulement, avec la date. Ces images servent à votre déclaration de sinistre et nous aident à cibler la recherche.",
          "Si de l'eau a atteint l'isolant des combles, signalez-le : un isolant gorgé d'eau perd sa performance et ne sèche pas seul.",
        ],
        table: {
          caption:
            "Ce que couvre habituellement une assurance habitation. L'obligation d'assurance décennale du constructeur est décrite sur [service-public.gouv.fr](https://www.service-public.fr/particuliers/vosdroits/F2034) ; vérifiez toujours votre contrat, les garanties varient.",
          head: ["Situation", "Généralement couvert", "Généralement à votre charge"],
          rows: [
            ["Dégâts intérieurs (plafond, sol, mobilier)", "Oui, au titre du dégât des eaux", "La franchise"],
            ["Réparation de la couverture elle-même", "Rarement", "Le plus souvent oui"],
            ["Toiture endommagée par une tempête", "Souvent, garantie tempête", "La franchise"],
            ["Désordre lié à un défaut d'entretien", "Non", "Oui, en totalité"],
            ["Travaux récents d'un professionnel", "Via sa garantie décennale", "—"],
          ],
        },
      },
      {
        h2: "Faut-il réparer ou refaire toute la toiture ?",
        capsule:
          "On répare tant que le désordre est localisé et que le reste de la couverture est sain, ce qui est le cas de la majorité des interventions. On bascule vers la réfection quand les crochets cèdent partout, que les éléments sont gélifs sur un versant entier, ou que la même zone est reprise pour la troisième fois.",
        body: [
          "Nous donnons cet avis avant le devis, pas après. Vendre une réparation dont nous savons qu'elle ne tiendra pas ne rapporte qu'un client mécontent l'hiver suivant.",
          "Si la réfection s'impose, le détail du déroulé est sur notre page [rénovation de toiture](/services/renovation-toiture).",
        ],
      },
    ],
    priceNote:
      "Une réparation ponctuelle et une reprise de zinguerie ne se chiffrent pas de la même manière. Le diagnostic est établi sur place et le devis remis avant tout démarrage.",
    experienceQuestion:
      "Racontez une fuite dont l'origine était très éloignée de la tache visible : où était l'entrée d'eau, où sortait-elle, comment l'avez-vous trouvée ?",
    faq: [
      {
        q: "Intervenez-vous rapidement en cas de fuite ?",
        a: "Une infiltration active passe en priorité sur notre planning. Appelez-nous : nous vous indiquons un créneau réaliste plutôt qu'une promesse intenable.",
      },
      {
        q: "Mon assurance prend-elle en charge la réparation de la toiture ?",
        a: "L'assurance habitation couvre en général les dommages causés par l'eau à l'intérieur, mais rarement la réparation de la couverture si elle relève d'un défaut d'entretien. Déclarez le sinistre rapidement et conservez nos photos et notre rapport.",
      },
      {
        q: "Travaillez-vous sur les toitures anciennes ?",
        a: "Oui, c'est l'essentiel de notre activité sur le secteur des Andelys, où le bâti ancien en ardoise domine.",
      },
      {
        q: "Posez-vous une bâche en urgence ?",
        a: "Uniquement pour mettre hors d'eau en attendant une intervention, et jamais comme réparation. Nous localisons l'origine avant de reprendre définitivement.",
      },
      {
        q: "Une fuite peut-elle venir de la cheminée ?",
        a: "Très souvent. Le solin, c'est-à-dire le raccord entre la souche et la couverture, est le point de fuite le plus fréquent que nous rencontrons.",
      },
    ],
    related: ["reparation-toiture", "zinguerie", "renovation-toiture"],
  },

  {
    slug: "renovation-toiture",
    name: "Rénovation de toiture",
    h1: "Rénovation et réfection de toiture aux Andelys",
    title: "Rénovation de toiture aux Andelys et dans l'Eure",
    metaDescription:
      "Rénovation de toiture aux Andelys et dans l'Eure : ardoise, tuile, zinc. Diagnostic avant devis, réfection totale ou partielle. Devis gratuit.",
    keyword: "rénovation toiture Les Andelys",
    priority: 1,
    photoDir: "02-reparation-renovation-toiture",
    lead:
      "Une couverture bien posée tient plusieurs décennies, mais elle prévient toujours avant de lâcher. Savoir lire ces signaux permet de choisir le moment de la réfection plutôt que de le subir un matin d'hiver.",
    blocks: [
      {
        h2: "Quand faut-il refaire sa toiture ?",
        capsule:
          "Quand plusieurs signaux se cumulent : éléments qui glissent après chaque coup de vent, crochets qui cassent les uns après les autres, lumière visible depuis les combles, bois qui noircit, réparations qui reviennent chaque hiver. Trois de ces points réunis suffisent à faire chiffrer une réfection.",
        body: [
          "Pris isolément, aucun de ces signes n'impose de tout refaire. C'est leur accumulation sur un même versant qui indique que le problème n'est plus ponctuel mais général.",
          "Le signal le plus fiable reste la fixation : quand les crochets rouillés cèdent en série, remplacer les ardoises descendues ne fait que repousser l'échéance de quelques mois.",
        ],
        list: [
          "Des ardoises ou des tuiles glissent, se soulèvent ou manquent après chaque coup de vent.",
          "Les crochets rouillés cassent les uns après les autres.",
          "De la lumière est visible depuis les combles.",
          "Le liteaunage ou la charpente commencent à noircir.",
          "Les réparations ponctuelles reviennent chaque hiver.",
          "L'isolant des combles est tassé ou taché.",
          "La couverture a plus de cinquante ans et n'a jamais été reprise.",
        ],
      },
      {
        h2: "Comment se déroule une réfection complète ?",
        capsule:
          "En cinq étapes : dépose de l'ancienne couverture et évacuation des gravats, contrôle et traitement de la charpente, pose d'un écran de sous-toiture, liteaunage et couverture neuve, puis reprise de toute la zinguerie. Une réfection qui laisse l'ancienne zinguerie en place n'est pas une réfection.",
        body: [
          "L'écran de sous-toiture est absent de la plupart des maisons anciennes du secteur. C'est lui qui apporte la seconde barrière contre les infiltrations et les remontées de vent, et c'est le principal gain invisible d'une réfection.",
          "La charpente n'est visible qu'une fois la couverture déposée. C'est le seul moment où remplacer une panne attaquée ne coûte pas une dépose supplémentaire : voir notre page [charpente](/services/charpente).",
          "Nous mettons la toiture hors d'eau chaque soir, ce qui permet d'habiter la maison pendant le chantier dans la grande majorité des cas.",
        ],
      },
      {
        h2: "Faut-il une autorisation d'urbanisme pour refaire sa toiture ?",
        capsule:
          "Oui dès que l'aspect extérieur change : une [déclaration préalable de travaux](https://www.service-public.fr/particuliers/vosdroits/F17578) est alors obligatoire, et elle se dépose en mairie. Aux Andelys, une partie du bâti se situe en secteur protégé, où le dossier et les délais d'instruction diffèrent.",
        body: [
          "Service-Public précise que le contenu du dossier, le nombre d'exemplaires et les délais d'instruction ne sont pas les mêmes lorsque le projet se trouve en site protégé. C'est le cas aux abords de Château-Gaillard.",
          "Une réfection à l'identique, sans changement de matériau ni de teinte, reste plus simple à faire accepter. Nous vous indiquons ce qui est requis au moment du devis, mais la démarche reste au nom du propriétaire.",
        ],
      },
      {
        h2: "Ardoise ou tuile : que choisir en Normandie ?",
        capsule:
          "L'ardoise domine le bâti ancien des Andelys et du Vexin normand, et reste souvent imposée aux abords des sites protégés ; la tuile terre cuite équipe surtout les constructions récentes. Le choix se fait dans cet ordre : l'existant, les règles d'urbanisme de la commune, puis le budget.",
        body: [
          "L'ardoise est fine et légère, ce qui ménage les charpentes anciennes et convient aux fortes pentes traditionnelles du secteur.",
          "La tuile se répare élément par élément, ce qui rend son entretien moins coûteux, mais elle est plus sensible à la gélivité quand elle vieillit.",
        ],
        table: {
          caption: "Comparaison à l'usage, sur le bâti que nous rencontrons dans l'Eure.",
          head: ["Critère", "Ardoise", "Tuile terre cuite"],
          rows: [
            ["Bâti concerné", "Ancien, fortes pentes", "Récent, pentes moyennes"],
            ["Poids sur charpente", "Faible", "Plus élevé"],
            ["Réparation ponctuelle", "Simple si pose au crochet", "Simple si modèle encore produit"],
            ["Point faible", "Fixations qui rouillent", "Gélivité en vieillissant"],
            ["Secteur protégé", "Souvent imposée", "Souvent refusée"],
            ["Coût de pose", "Plus élevé", "Plus contenu"],
          ],
        },
      },
      {
        h2: "Faut-il isoler pendant la rénovation ?",
        capsule:
          "C'est le seul moment où l'isolation par l'extérieur se pose sans surcoût de dépose, puisque la couverture est déjà retirée. Poser la question après le chantier revient à devoir tout redéposer, ou à se rabattre sur une isolation par l'intérieur qui laisse subsister les ponts thermiques.",
        body: [
          "Côté aides, la règle a changé : [MaPrimeRénov'](https://www.france-renov.gouv.fr/aides/maprimerenov) finance aujourd'hui une rénovation d'ampleur permettant un gain d'au moins deux étiquettes énergétiques, une rénovation en copropriété, ou une rénovation par geste limitée à l'installation d'une pompe à chaleur.",
          "Autrement dit, l'isolation seule ne relève plus du parcours « par geste » : elle doit s'inscrire dans un projet plus large. Le montant dépend des revenus du foyer et du projet, et un conseiller France Rénov' peut vous le confirmer avant que vous vous engagiez.",
          "Le détail technique est sur nos pages [isolation de toiture](/services/isolation-toiture) et [isolation des combles](/services/isolation-combles).",
        ],
      },
    ],
    priceNote:
      "Le prix d'une réfection se calcule au mètre carré et varie fortement selon le matériau, la complexité de la toiture, l'état de la charpente et l'accès au chantier. Le diagnostic et le devis détaillé sont gratuits.",
    experienceQuestion:
      "Sur une réfection récente, qu'avez-vous trouvé sous la couverture déposée qui n'était pas prévu au devis initial, et comment l'avez-vous géré avec le client ?",
    faq: [
      {
        q: "Combien de temps dure un chantier de rénovation de toiture ?",
        a: "Pour une maison individuelle courante, comptez une à deux semaines selon la surface, la complexité et la météo.",
      },
      {
        q: "Peut-on habiter la maison pendant les travaux ?",
        a: "Oui dans la grande majorité des cas. Nous mettons la toiture hors d'eau chaque soir.",
      },
      {
        q: "Existe-t-il des aides pour une rénovation de toiture ?",
        a: "Les aides portent sur la performance énergétique, donc sur l'isolation associée, plus que sur la couverture seule. MaPrimeRénov' vise aujourd'hui les rénovations d'ampleur ; nous faisons le point avec vous au moment du devis.",
      },
      {
        q: "Reprenez-vous la charpente si elle est abîmée ?",
        a: "Oui. Le contrôle de la charpente fait partie de la réfection, et nous remplaçons les pièces attaquées avant de reposer la couverture.",
      },
      {
        q: "Faut-il déclarer les travaux en mairie ?",
        a: "Une déclaration préalable est nécessaire dès que l'aspect extérieur est modifié, avec des règles particulières en secteur protégé. Renseignez-vous auprès de la mairie des Andelys avant le démarrage.",
      },
    ],
    related: ["charpente", "isolation-toiture", "toiture-ardoise"],
  },

  {
    slug: "reparation-toiture",
    name: "Réparation de toiture",
    h1: "Réparation de toiture aux Andelys",
    title: "Réparation de toiture aux Andelys et dans l'Eure",
    metaDescription:
      "Réparation de toiture aux Andelys et dans l'Eure : tuiles cassées, solins, faîtage, ardoises déplacées. Diagnostic et devis gratuits.",
    keyword: "réparation toiture Les Andelys",
    priority: 1,
    photoDir: "02-reparation-renovation-toiture",
    lead:
      "Toutes les toitures n'ont pas besoin d'être refaites. Une réparation ciblée, faite au bon moment et correctement, prolonge une couverture de plusieurs années pour une fraction du coût d'une réfection.",
    blocks: [
      {
        h2: "Quelles réparations de toiture réalisez-vous ?",
        capsule:
          "Le remplacement d'ardoises et de tuiles cassées ou glissées, la reprise de faîtage descellé, la réfection de solins de cheminée, le remplacement de crochets rompus et la reprise de rives. Ce sont les cinq interventions qui représentent l'essentiel de notre activité de réparation sur le secteur.",
        body: [
          "Ces travaux ont un point commun : ils traitent un désordre localisé sur une couverture par ailleurs saine.",
          "Une réparation ne prolonge une toiture que si l'on traite la cause. Remplacer une ardoise sans regarder pourquoi elle est descendue conduit à revenir au même endroit l'hiver suivant.",
        ],
        list: [
          "Remplacement d'ardoises ou de tuiles cassées, glissées ou manquantes.",
          "Reprise de faîtage descellé et remplacement des tuiles faîtières.",
          "Réfection de solins de cheminée et d'abergements.",
          "Remplacement de crochets rompus sur couverture ardoise.",
          "Reprise de rives et de bandes de doublis.",
          "Réparation ponctuelle de zinguerie percée.",
        ],
      },
      {
        h2: "Réparer ou rénover : comment trancher ?",
        capsule:
          "La règle tient en une phrase : on répare tant que le désordre est localisé, on rénove quand il devient général. Les trois signaux de bascule sont des crochets qui cèdent partout, des éléments gélifs sur tout un versant, et une même zone reprise pour la troisième fois.",
        body: [
          "Nous donnons cet avis avant d'établir le devis. Une réparation vendue sur une couverture en fin de vie est un service rendu à personne.",
          "Si la bascule est confirmée, le déroulé complet est décrit sur notre page [rénovation de toiture](/services/renovation-toiture).",
        ],
        table: {
          caption: "Grille que nous appliquons sur place, avant tout chiffrage.",
          head: ["Constat", "Décision", "Raison"],
          rows: [
            ["Quelques éléments cassés, reste sain", "Réparation", "Désordre localisé"],
            ["Ardoises descendues en série sur un versant", "Réfection du versant", "Fixations en fin de vie"],
            ["Faîtage descellé seul", "Réparation", "Intervention indépendante"],
            ["Solin fissuré, couverture saine", "Réparation", "Point singulier isolé"],
            ["Troisième reprise au même endroit", "Réfection", "La cause n'est pas le symptôme"],
            ["Charpente noircie sous la zone", "Diagnostic avant tout devis", "L'eau passe depuis longtemps"],
          ],
        },
      },
      {
        h2: "Que faire après une tempête ?",
        capsule:
          "Faites contrôler les rives et le faîtage, même si rien ne coule à l'intérieur. Dans le couloir venté de la vallée de la Seine, un élément déplacé qui n'est pas remis en place devient une infiltration deux à trois mois plus tard, quand les pluies s'installent.",
        body: [
          "Nous établissons un constat photographique daté, utile à votre déclaration de sinistre auprès de l'assurance.",
          "Ne montez pas vérifier vous-même après un coup de vent : c'est le moment où la couverture est la moins stable.",
        ],
      },
    ],
    experienceQuestion:
      "Quelle réparation avez-vous refusée parce qu'elle n'aurait pas tenu, et qu'avez-vous proposé à la place ?",
    faq: [
      {
        q: "Une réparation peut-elle vraiment suffire ?",
        a: "Oui, tant que le désordre est localisé et la couverture globalement saine. C'est le cas de la majorité des interventions que nous réalisons.",
      },
      {
        q: "Retrouve-t-on des ardoises identiques aux anciennes ?",
        a: "Sur les couvertures anciennes, une différence de teinte est possible. Quand c'est faisable, nous prélevons des éléments sur une zone peu visible pour réparer les versants exposés.",
      },
      {
        q: "Intervenez-vous pour un seul élément cassé ?",
        a: "Oui. Une ardoise cassée traitée tout de suite coûte infiniment moins qu'un plafond refait.",
      },
      {
        q: "Donnez-vous une garantie sur les réparations ?",
        a: "Les travaux de bâtiment relèvent des garanties légales applicables, dont l'assurance de responsabilité civile décennale que tout constructeur a l'obligation de souscrire. Le détail figure sur le devis.",
      },
      {
        q: "Combien de temps faut-il pour une réparation ?",
        a: "La plupart des interventions ponctuelles se traitent en une demi-journée à une journée, selon l'accès et la météo.",
      },
    ],
    related: ["fuite-toiture", "faitage", "renovation-toiture"],
  },

  {
    slug: "zinguerie",
    name: "Zinguerie",
    h1: "Couvreur zingueur aux Andelys",
    title: "Couvreur zingueur aux Andelys — Zinguerie (27)",
    metaDescription:
      "Couvreur zingueur aux Andelys et dans l'Eure : noues, solins, habillages, chéneaux et raccords de cheminée en zinc. Devis gratuit.",
    keyword: "couvreur zingueur Les Andelys",
    priority: 1,
    photoDir: "09-travaux-de-zinguerie",
    lead:
      "La zinguerie, c'est la partie du toit qu'on ne regarde jamais. Et c'est très souvent par là que l'eau entre, même quand les ardoises sont en parfait état.",
    blocks: [
      {
        h2: "Qu'est-ce que la zinguerie d'une toiture ?",
        capsule:
          "C'est l'ensemble des pièces métalliques façonnées qui assurent l'étanchéité partout où le recouvrement de la couverture s'interrompt : le long d'une cheminée, dans l'angle entre deux versants, au bord d'un pignon, au sommet du toit. Elles représentent une part infime de la surface et la quasi-totalité des points de faiblesse.",
        body: [
          "Une couverture fonctionne par recouvrement : chaque élément protège celui du dessous. Dès que cette logique s'arrête, il faut une pièce sur mesure pour conduire l'eau.",
          "Ces pièces portent des noms que personne n'emploie hors du métier — noue, solin, abergement, rive, bande de doublis — et c'est précisément pour cela qu'on ne pense jamais à les faire vérifier.",
        ],
        table: {
          caption: "Le vocabulaire du métier, traduit. Ces cinq pièces expliquent la plupart des infiltrations.",
          head: ["Pièce", "Où elle se trouve", "Ce qui arrive quand elle fatigue"],
          rows: [
            ["Noue", "Angle rentrant entre deux versants", "Se perce ou se bouche, l'eau déborde latéralement"],
            ["Solin", "Jonction couverture / maçonnerie de cheminée", "Se fissure, l'eau longe la souche"],
            ["Abergement", "Contour de cheminée ou de fenêtre de toit", "Se décolle, l'eau passe en partie haute"],
            ["Rive", "Bord de pignon", "Se soulève au vent, l'eau entre par le côté"],
            ["Bande de doublis", "Bas de pente, au niveau de l'égout", "Se corrode, l'eau ruisselle derrière la gouttière"],
          ],
        },
      },
      {
        h2: "Comment savoir si votre zinguerie est en fin de vie ?",
        capsule:
          "Cherchez les traces de rouille, les perforations ponctuelles, les soudures ouvertes et les déformations de noue. Le signal le plus parlant reste une infiltration récurrente le long d'une cheminée alors qu'aucune ardoise n'est cassée à proximité.",
        body: [
          "La corrosion du zinc vient rarement du matériau lui-même. Elle vient de la stagnation d'eau chargée de débris végétaux dans les noues, et du contact avec certains métaux.",
          "C'est pour cette raison que l'entretien des noues fait partie du travail de couverture, et pas d'une prestation à part.",
        ],
      },
      {
        h2: "Peut-on reprendre une noue sans déposer toute la toiture ?",
        capsule:
          "Oui, et c'est une intervention courante. On dépose les éléments de couverture sur une bande de part et d'autre de la noue, on remplace la pièce, puis on repose — sans toucher au reste du versant.",
        body: [
          "Le coût est donc sans commune mesure avec une réfection, à condition d'intervenir avant que l'eau n'ait attaqué le liteaunage et la charpente sous la noue.",
          "Si le bois est déjà noirci sous la pièce, le chantier change de nature : voir notre page [charpente](/services/charpente).",
        ],
      },
      {
        h2: "Pourquoi travailler le zinc plutôt qu'un autre matériau ?",
        capsule:
          "Parce qu'il se façonne à la main sur le chantier, ce qui permet de suivre exactement la géométrie du bâti ancien — angles rentrants, lucarnes, souches désaxées. Il se patine sans se dégrader et tient plusieurs décennies.",
        body: [
          "Les maisons des Andelys en comptent beaucoup, de ces formes qu'aucune pièce standard ne peut couvrir.",
          "Le plomb reste préférable sur les maçonneries très irrégulières, où il se moule mieux ; le zinc se prête davantage aux lignes droites. Nous employons les deux selon la configuration.",
        ],
        list: [
          "Noues neuves ou reprises, en zinc ou en plomb selon la configuration.",
          "Solins et abergements de cheminée.",
          "Habillage de souche de cheminée.",
          "Rives, bandes de doublis, bandes d'égout.",
          "Gouttières et descentes en zinc — voir [gouttières](/services/gouttieres).",
          "Couverture en zinc à joint debout pour les faibles pentes.",
        ],
      },
    ],
    experienceQuestion:
      "Quelle pièce de zinguerie avez-vous dû façonner sur mesure récemment, et pourquoi aucune pièce standard ne convenait ?",
    faq: [
      {
        q: "Zinc ou plomb pour les solins ?",
        a: "Cela dépend de la configuration et de l'existant. Le plomb se moule mieux sur les maçonneries irrégulières du bâti ancien, le zinc se prête mieux aux lignes droites.",
      },
      {
        q: "Faites-vous les toitures en zinc à joint debout ?",
        a: "Oui, notamment sur les faibles pentes, les appentis et les lucarnes où l'ardoise ne peut pas être posée.",
      },
      {
        q: "À quelle fréquence entretenir la zinguerie ?",
        a: "Un contrôle visuel annuel des noues et des solins suffit dans la plupart des cas, idéalement en même temps que le nettoyage des gouttières avant l'automne.",
      },
      {
        q: "Une noue bouchée peut-elle provoquer une fuite ?",
        a: "Oui, et c'est fréquent. L'eau retenue par les débris déborde latéralement et passe sous les éléments de couverture, loin de toute ardoise cassée.",
      },
    ],
    related: ["gouttieres", "fuite-toiture", "faitage"],
  },
];
