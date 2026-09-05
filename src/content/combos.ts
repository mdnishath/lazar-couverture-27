/**
 * PAGES SERVICE × VILLE — 30 combinaisons choisies à la main.
 *
 * 6 services P1 × 5 communes (Vernon, Gisors, Gaillon, Étrépagny, Louviers).
 *
 * Pourquoi 30 et pas 108 : Google filtre les pages générées en masse dont
 * seul le nom de commune change. C'est le motif de pénalité le plus courant
 * du SEO local, et il coûte le site entier. Chaque page ci-dessous part d'un
 * fait vérifiable propre au couple service × commune — la gélivité des tuiles
 * plates de petit format à Gisors, le vent de plateau à Étrépagny, les noues
 * mitoyennes de Louviers. Une page qu'on ne peut pas rendre unique ne doit
 * pas exister : ne complétez cette liste que si vous avez quelque chose de
 * réel à écrire.
 *
 * Les Andelys n'y figure pas volontairement : les pages /services/ visent
 * déjà « <service> les andelys ». Deux pages sur le même mot-clé se
 * cannibalisent et perdent toutes les deux.
 */

export type Combo = {
  service: string; // slug du service
  ville: string; // slug de la commune
  h1: string;
  title: string;
  metaDescription: string;
  lead: string;
  angle: { h2: string; body: string[] };
  faq: { q: string; a: string }[];
};

export const combos: Combo[] = [
  /* ───────────── DÉMOUSSAGE ───────────── */
  {
    service: "demoussage-toiture",
    ville: "vernon",
    h1: "Démoussage de toiture à Vernon (27200)",
    title: "Démoussage de toiture à Vernon (27200) — Lazar 27",
    metaDescription:
      "Démoussage de toiture à Vernon : traitement anti-mousse, protection des abords, gouttières comprises. Centre ancien et pavillons. Devis gratuit.",
    lead:
      "À Vernon comme aux Andelys, c'est la Seine qui commande. L'humidité de fond de vallée entretient la mousse toute l'année, et les pans nord se recouvrent bien plus vite que les autres.",
    angle: {
      h2: "Ce qui change à Vernon",
      body: [
        "Le centre ancien pose une contrainte que les quartiers pavillonnaires n'ont pas : les toitures y sont mitoyennes et souvent complexes. Un démoussage ne s'y arrête pas à la limite de propriété — l'eau de rinçage et la mousse décrochée finissent chez le voisin si les abords ne sont pas protégés des deux côtés. Nous prévenons systématiquement avant de commencer.",
        "Sur les pavillons de Vernonnet, des Blanchères ou des Boutardes, le sujet est différent : ce sont des couvertures des années 1960 à 1990, souvent en tuile béton, dont la surface s'est déjà ouverte avec le temps. La mousse s'y accroche plus fort que sur une terre cuite récente, et le traitement doit être choisi en conséquence.",
      ],
    },
    faq: [
      {
        q: "Faut-il prévenir le voisin avant un démoussage en mitoyenneté ?",
        a: "C'est plus simple pour tout le monde. Nous bâchons de notre côté et nous protégeons les descentes, mais sur une toiture mitoyenne du centre de Vernon, un mot au voisin la veille évite toute discussion sur les projections.",
      },
      {
        q: "Intervenez-vous sur tout Vernon ?",
        a: "Oui, centre ancien comme quartiers périphériques, y compris Vernonnet, les Blanchères et les Boutardes. Vernon est à une vingtaine de kilomètres des Andelys, c'est une de nos communes les plus régulières.",
      },
    ],
  },
  {
    service: "demoussage-toiture",
    ville: "gisors",
    h1: "Démoussage de toiture à Gisors (27140)",
    title: "Démoussage de toiture à Gisors (27140) — Lazar 27",
    metaDescription:
      "Démoussage de toiture à Gisors : tuile plate de petit format, traitement anti-mousse adapté, gouttières comprises. Devis gratuit et sans engagement.",
    lead:
      "À Gisors, le démoussage n'est pas qu'une question d'aspect : beaucoup de toitures du centre sont en tuile plate de petit format, et ce sont précisément celles qui souffrent le plus du gel.",
    angle: {
      h2: "Petit format et gélivité : pourquoi c'est plus urgent ici",
      body: [
        "Une tuile plate de petit format a peu de matière. Quand la mousse retient l'eau contre elle et que le gel arrive, la dilatation n'a nulle part où aller : la tuile éclate. Sur une grande tuile mécanique, le même hiver ne laisse souvent aucune trace. C'est pour cette raison qu'un toit gisorsien mal entretenu perd des tuiles plus vite qu'un toit équivalent ailleurs.",
        "Le retrait mécanique doit donc être doux. Sur ce format, un grattage appuyé décroche autant de tuiles saines que de mousse. Nous travaillons à la brosse, puis nous laissons le traitement finir le travail après notre départ, plutôt que de forcer le jour même.",
      ],
    },
    faq: [
      {
        q: "Le démoussage abîme-t-il les tuiles plates anciennes ?",
        a: "Pas s'il est fait à la bonne pression et sans grattage forcé. Sur du petit format ancien, c'est justement la brutalité du nettoyage qui casse les tuiles, pas la mousse elle-même.",
      },
      {
        q: "Gisors est à 30 km des Andelys, cela change-t-il le prix ?",
        a: "Non, le déplacement et le devis restent gratuits. Nous groupons simplement nos interventions sur le secteur de Gisors, ce qui peut décaler la date de quelques jours.",
      },
    ],
  },
  {
    service: "demoussage-toiture",
    ville: "gaillon",
    h1: "Démoussage de toiture à Gaillon (27600)",
    title: "Démoussage de toiture à Gaillon (27600) — Lazar 27",
    metaDescription:
      "Démoussage de toiture à Gaillon, Aubevoye et Saint-Aubin : traitement adapté au matériau, ardoise, tuile terre cuite ou béton. Devis gratuit.",
    lead:
      "Gaillon a une particularité : dans la même rue, on trouve de l'ardoise ancienne, de la tuile terre cuite et de la tuile béton des années 1970. Trois supports, trois traitements.",
    angle: {
      h2: "Un même produit ne convient pas à tous les toits de Gaillon",
      body: [
        "La tuile béton des extensions pavillonnaires se comporte différemment de la terre cuite du centre ancien : sa surface est plus rugueuse, elle retient davantage, et elle se recouvre plus vite après un nettoyage. L'ardoise, elle, ne se traite pas comme une tuile — un produit trop agressif attaque le matériau au lieu de la mousse.",
        "C'est pour cette raison que nous ne chiffrons pas un démoussage sans être montés voir de quoi la toiture est faite. Sur Aubevoye, Le Val ou Saint-Aubin, deux maisons voisines peuvent demander deux interventions différentes.",
      ],
    },
    faq: [
      {
        q: "Peut-on démousser une toiture en tuile béton comme une terre cuite ?",
        a: "Non. La tuile béton est plus poreuse en surface et se recolonise plus vite. Le traitement et la fréquence ne sont pas les mêmes, et c'est ce que nous regardons en premier sur place.",
      },
      {
        q: "Intervenez-vous à Aubevoye et Saint-Aubin ?",
        a: "Oui, ainsi qu'au Val. Gaillon est à un quart d'heure des Andelys, c'est l'une des communes où nous passons le plus souvent.",
      },
    ],
  },
  {
    service: "demoussage-toiture",
    ville: "etrepagny",
    h1: "Démoussage de toiture à Étrépagny (27150)",
    title: "Démoussage de toiture à Étrépagny (27150) — Lazar 27",
    metaDescription:
      "Démoussage de toiture à Étrépagny et sur le plateau : grandes surfaces de fermes et longères, traitement anti-mousse, devis gratuit au m².",
    lead:
      "Sur le plateau d'Étrépagny, les toitures sont plus grandes qu'en vallée. Fermes et longères présentent des surfaces où l'entretien régulier change vraiment l'économie du toit.",
    angle: {
      h2: "Grandes surfaces : l'entretien coûte moins cher que la réfection",
      body: [
        "Sur une longère, la différence entre un démoussage tous les quatre ans et aucun entretien ne se compte pas en aspect, mais en nombre de tuiles à remplacer au bout de quinze ans. Plus la surface est grande, plus l'écart se creuse — et plus la réfection, le jour où elle arrive, pèse lourd.",
        "Le plateau joue dans les deux sens. Il est plus venté que la vallée, donc les toitures y sèchent plus vite et se couvrent un peu moins qu'aux Andelys. Mais ce même vent expose davantage les rives et les faîtages, que nous contrôlons pendant le démoussage puisque nous y sommes déjà.",
      ],
    },
    faq: [
      {
        q: "Comment se chiffre un démoussage sur une grande longère ?",
        a: "Au mètre carré, avec la pente et l'accès. C'est justement sur les grandes surfaces qu'un devis établi depuis le sol est le plus faux : nous montons mesurer.",
      },
      {
        q: "Intervenez-vous autour d'Étrépagny ?",
        a: "Oui, notamment à Hacqueville, Doudeauville et Bézu-la-Forêt. Le secteur est à moins de vingt kilomètres des Andelys.",
      },
    ],
  },
  {
    service: "demoussage-toiture",
    ville: "louviers",
    h1: "Démoussage de toiture à Louviers (27400)",
    title: "Démoussage de toiture à Louviers (27400) — Lazar 27",
    metaDescription:
      "Démoussage de toiture à Louviers : centre ancien, toitures en ardoise à forte pente, maisons mitoyennes. Abords protégés, devis gratuit.",
    lead:
      "Le centre de Louviers est dense, mitoyen, et couvert d'ardoise à forte pente. Trois caractéristiques qui changent complètement la façon de démousser.",
    angle: {
      h2: "Forte pente et mitoyenneté : la préparation compte plus que le produit",
      body: [
        "Une ardoise à forte pente évacue vite et retient moins la mousse qu'une tuile à faible pente. Le lichen, lui, s'y accroche quand même, surtout au nord. Mais l'intervention y est plus technique : la circulation sur le toit demande davantage de sécurité, et tout ce qui est décroché descend très vite jusqu'à l'égout, donc dans les gouttières.",
        "La mitoyenneté ajoute la contrainte du voisin immédiat : façade, jardin, véranda. Sur ce type de centre ancien, la moitié du temps d'un chantier propre se joue avant de monter, dans le bâchage et la protection des descentes.",
      ],
    },
    faq: [
      {
        q: "Une toiture en ardoise se démousse-t-elle comme une toiture en tuile ?",
        a: "Non. L'ardoise n'accepte pas les mêmes produits ni la même pression : mal traitée, elle se délite en surface. C'est un point que nous vérifions avant tout devis.",
      },
      {
        q: "Louviers est à 30 km : intervenez-vous régulièrement ?",
        a: "Oui, sur devis, en groupant les interventions du secteur. Le déplacement pour établir le devis reste gratuit.",
      },
    ],
  },

  /* ───────────── NETTOYAGE ───────────── */
  {
    service: "nettoyage-toiture",
    ville: "vernon",
    h1: "Nettoyage de toiture à Vernon (27200)",
    title: "Nettoyage de toiture à Vernon (27200) — Lazar 27",
    metaDescription:
      "Nettoyage de toiture à Vernon : pression adaptée au support, tuile béton des pavillons comme ardoise du centre. Gouttières comprises. Devis gratuit.",
    lead:
      "À Vernon, la question du nettoyage se pose surtout sur les pavillons des années 1960 à 1990 — et c'est exactement le type de couverture qu'un excès de pression abîme.",
    angle: {
      h2: "La tuile béton des pavillons ne supporte pas la haute pression",
      body: [
        "Les couvertures posées entre 1960 et 1990 autour de Vernon sont majoritairement en tuile béton. Ce matériau a une couche de surface qui lui donne sa couleur et sa résistance à l'eau. Un nettoyeur réglé trop fort la retire avec la saleté : la tuile ressort plus claire, plus rugueuse, et se resalit deux fois plus vite. Le dégât ne se voit pas le jour même.",
        "Nous réglons donc la pression après avoir identifié le support, jamais avant, et nous descendons franchement sur les couvertures déjà ouvertes. C'est plus long, et c'est la seule façon de ne pas raccourcir la vie du toit en le nettoyant.",
      ],
    },
    faq: [
      {
        q: "Mon toit a été nettoyé trop fort il y a quelques années, que faire ?",
        a: "Un hydrofuge redonne à la tuile une surface qui repousse l'eau et ralentit la resalissure. Cela ne remplace pas la couche d'origine, mais cela stoppe l'aggravation.",
      },
      {
        q: "Les gouttières sont-elles comprises ?",
        a: "Oui, systématiquement. Tout ce qui est décroché du toit finit dedans : nettoyer la couverture sans vider les gouttières n'a pas de sens.",
      },
    ],
  },
  {
    service: "nettoyage-toiture",
    ville: "gisors",
    h1: "Nettoyage de toiture à Gisors (27140)",
    title: "Nettoyage de toiture à Gisors (27140) — Lazar 27",
    metaDescription:
      "Nettoyage de toiture à Gisors : basse pression sur tuile plate de petit format et ardoise du XIXe. Gouttières comprises, devis gratuit.",
    lead:
      "À Gisors, la haute pression est rarement la bonne réponse. Le petit format des tuiles plates du centre et les ardoises des maisons bourgeoises demandent l'inverse.",
    angle: {
      h2: "Pourquoi nous descendons la pression à Gisors",
      body: [
        "Une tuile plate de petit format tient par recouvrement et par son propre poids. Un jet puissant passé sous le recouvrement soulève la tuile au lieu de la nettoyer, et le désordre ne se révèle qu'à la première grosse pluie. Sur ce type de couverture, nous travaillons à faible pression, du faîtage vers l'égout, sans jamais remonter sous le recouvrement.",
        "Sur les ardoises des maisons du XIXe, la prudence porte ailleurs : ce sont les crochets qui lâchent en premier, souvent en acier peu protégé. Un nettoyage est l'occasion de les repérer — nous vous signalons ce que nous voyons, avec les photos, avant que cela devienne une réparation.",
      ],
    },
    faq: [
      {
        q: "Le nettoyage basse pression est-il vraiment efficace ?",
        a: "Sur un toit entretenu, oui. Sur une couverture très encrassée, il faut simplement y passer plus de temps — ce qui reste moins cher que remplacer des tuiles soulevées par un jet trop fort.",
      },
      {
        q: "Vous déplacez-vous jusqu'à Neaufles-Saint-Martin ou Bézu-Saint-Éloi ?",
        a: "Oui, tout le secteur de Gisors est desservi. Le devis et le déplacement sont gratuits.",
      },
    ],
  },
  {
    service: "nettoyage-toiture",
    ville: "gaillon",
    h1: "Nettoyage de toiture à Gaillon (27600)",
    title: "Nettoyage de toiture à Gaillon (27600) — Lazar 27",
    metaDescription:
      "Nettoyage de toiture à Gaillon, Aubevoye et Le Val : couverture et gouttières PVC, pression adaptée au matériau. Devis gratuit sous 24 h.",
    lead:
      "À Gaillon, un nettoyage de toiture s'arrête rarement au toit : sur les maisons des années 1970 et 1980, les gouttières PVC sont souvent le vrai problème.",
    angle: {
      h2: "Le toit et la gouttière se traitent ensemble",
      body: [
        "Les gouttières PVC de première génération, très présentes sur les extensions pavillonnaires de Gaillon, se déforment avec le temps : elles gondolent entre les crochets, retiennent l'eau au lieu de la conduire, et se remplissent d'autant plus vite. Nettoyer la couverture au-dessus d'une gouttière déformée revient à repousser le problème de quelques mois.",
        "Nous vidons et contrôlons systématiquement la ligne complète — gouttière, crochets, naissance, descente. Si un tronçon ne peut plus faire son travail, nous vous le disons avec les photos, et vous décidez. Une reprise ponctuelle coûte bien moins cher qu'une sablière à reprendre plus tard.",
      ],
    },
    faq: [
      {
        q: "Faut-il remplacer une gouttière PVC déformée ou peut-on la redresser ?",
        a: "Cela dépend de l'ampleur. Un défaut de pente se corrige souvent en reprenant les crochets. Une gouttière gondolée sur toute sa longueur, non : elle retiendra toujours l'eau.",
      },
      {
        q: "Intervenez-vous sur Aubevoye et Le Val ?",
        a: "Oui, comme sur Saint-Aubin. Gaillon est à quinze kilomètres des Andelys.",
      },
    ],
  },
  {
    service: "nettoyage-toiture",
    ville: "etrepagny",
    h1: "Nettoyage de toiture à Étrépagny (27150)",
    title: "Nettoyage de toiture à Étrépagny (27150) — Lazar 27",
    metaDescription:
      "Nettoyage de toiture à Étrépagny : grandes surfaces de fermes et longères, chantier organisé en plusieurs jours si besoin. Devis gratuit.",
    lead:
      "Sur les grandes couvertures du plateau, un nettoyage ne se traite pas comme sur un pavillon : c'est un chantier qui s'organise, pas une demi-journée.",
    angle: {
      h2: "Organiser un nettoyage sur une grande couverture",
      body: [
        "Une longère peut représenter plusieurs fois la surface d'un pavillon. Le travail se fait alors par pans, sur deux journées ou plus, en tenant compte de la météo : un pan lavé doit sécher avant tout traitement, et le vent de plateau aide autant qu'il gêne. Nous planifions le chantier avec vous plutôt que d'annoncer une date impossible à tenir.",
        "L'accès à l'eau est l'autre sujet propre au secteur. Sur les corps de ferme, le point d'eau n'est pas toujours proche du pignon à traiter. Nous en parlons au moment du devis, cela évite les mauvaises surprises le premier matin.",
      ],
    },
    faq: [
      {
        q: "Combien de temps pour nettoyer la toiture d'une longère ?",
        a: "Souvent deux jours, parfois davantage selon la surface, la pente et l'état de départ. Nous vous donnons une durée réaliste au devis, pas une durée commerciale.",
      },
      {
        q: "Desservez-vous Hacqueville et Doudeauville ?",
        a: "Oui, ainsi que Bézu-la-Forêt et les hameaux du secteur d'Étrépagny.",
      },
    ],
  },
  {
    service: "nettoyage-toiture",
    ville: "louviers",
    h1: "Nettoyage de toiture à Louviers (27400)",
    title: "Nettoyage de toiture à Louviers (27400) — Lazar 27",
    metaDescription:
      "Nettoyage de toiture à Louviers : centre ancien mitoyen, ardoise à forte pente, abords et voisinage protégés. Devis gratuit et sans engagement.",
    lead:
      "Dans le centre ancien de Louviers, la difficulté d'un nettoyage n'est pas le toit : c'est tout ce qu'il y a autour et en dessous.",
    angle: {
      h2: "Un chantier de centre-ville se prépare depuis le sol",
      body: [
        "Maisons mitoyennes, façades voisines à moins de deux mètres, cours fermées, parfois une rue étroite pour l'accès : à Louviers, la protection des abords représente une part réelle du chantier. Bâchage des façades exposées aux projections, protection des descentes et des regards, gestion de l'accès — c'est ce travail invisible qui distingue un chantier propre d'un litige de voisinage.",
        "La forte pente des ardoises ajoute sa contrainte. Tout ce qui est décroché arrive à l'égout à grande vitesse : sans protection en bas de pente, la cour du voisin reçoit ce qui vient du toit.",
      ],
    },
    faq: [
      {
        q: "Faut-il une autorisation pour occuper la voirie à Louviers ?",
        a: "Si l'échafaudage ou le véhicule empiète sur le domaine public, la mairie demande une autorisation. Nous le signalons au moment du devis, avant que cela bloque le chantier.",
      },
      {
        q: "Intervenez-vous dans le quartier Saint-Hildevert ?",
        a: "Oui, comme à La Villette et dans le reste de Louviers.",
      },
    ],
  },

  /* ───────────── FUITE ───────────── */
  {
    service: "fuite-toiture",
    ville: "vernon",
    h1: "Recherche et réparation de fuite de toiture à Vernon (27200)",
    title: "Fuite de toiture à Vernon (27200) — Intervention rapide",
    metaDescription:
      "Fuite de toiture à Vernon : recherche du point d'entrée, protection provisoire, réparation. Toitures mitoyennes du centre ancien. Appelez-nous.",
    lead:
      "Sur les toitures mitoyennes du centre de Vernon, l'eau qui entre chez vous ne vient pas forcément de votre toit. C'est ce qui rend la recherche indispensable.",
    angle: {
      h2: "En mitoyenneté, la fuite traverse la limite de propriété",
      body: [
        "Une noue mitoyenne, un solin contre le mur du voisin, une gouttière commune : sur le bâti ancien de Vernon, ces points de jonction sont partagés. L'eau entre d'un côté, suit le liteau ou la panne, et ressort de l'autre. On voit régulièrement une tache apparaître chez quelqu'un dont la couverture est parfaitement saine.",
        "C'est pour cette raison que nous ne réparons jamais avant d'avoir cherché. Inspection de la couverture, examen des combles par en dessous, et si nécessaire discussion avec le voisin pour regarder son versant. Chiffrer une réparation sans avoir identifié le point d'entrée, c'est facturer un travail qui ne réglera rien.",
      ],
    },
    faq: [
      {
        q: "La fuite vient du toit du voisin : qui paie ?",
        a: "C'est une question d'assurance et de mitoyenneté, pas de couverture. Notre rôle est d'établir d'où l'eau entre, avec des photos datées — c'est ce document qui permet ensuite de traiter la question entre vous.",
      },
      {
        q: "Intervenez-vous en urgence à Vernon ?",
        a: "Une infiltration active passe en priorité. Selon la météo, nous posons d'abord une protection provisoire, puis nous réparons proprement.",
      },
    ],
  },
  {
    service: "fuite-toiture",
    ville: "gisors",
    h1: "Recherche et réparation de fuite de toiture à Gisors (27140)",
    title: "Fuite de toiture à Gisors (27140) — Intervention rapide",
    metaDescription:
      "Fuite de toiture à Gisors : tuile plate fendue par le gel, crochets d'ardoise corrodés. Diagnostic sur place et réparation. Devis gratuit.",
    lead:
      "À Gisors, deux causes de fuite reviennent plus qu'ailleurs : la tuile plate fendue par le gel, et le crochet d'ardoise qui a rouillé.",
    angle: {
      h2: "Deux fuites typiques du secteur",
      body: [
        "La tuile plate de petit format fendue par le gel est la fuite la plus sournoise. La fissure est fine, invisible depuis le sol, et l'eau ne passe qu'en cas de pluie battante avec le bon vent. On la cherche parfois plusieurs saisons avant de la trouver — sauf si on sait qu'elle est probable et où regarder.",
        "Sur les couvertures en ardoise des maisons du XIXe, le point faible n'est pas l'ardoise mais le crochet. Beaucoup ont été posés en acier peu protégé : quand il cède, l'ardoise glisse et laisse un trou net. Une toiture en ardoise en parfait état peut ainsi fuir uniquement par corrosion de sa fixation.",
      ],
    },
    faq: [
      {
        q: "Comment trouve-t-on une tuile fendue invisible depuis le sol ?",
        a: "En montant, et en recoupant avec ce qu'on voit dans les combles. L'eau ne tombe pas à la verticale de son point d'entrée : c'est le trajet dans la charpente qui indique où chercher.",
      },
      {
        q: "Faut-il remplacer tous les crochets d'un coup ?",
        a: "Si un crochet a cédé par corrosion, ses voisins ont le même âge et le même métal. Nous vous le disons franchement, avec le coût des deux options.",
      },
    ],
  },
  {
    service: "fuite-toiture",
    ville: "gaillon",
    h1: "Recherche et réparation de fuite de toiture à Gaillon (27600)",
    title: "Fuite de toiture à Gaillon (27600) — Intervention rapide",
    metaDescription:
      "Fuite de toiture à Gaillon : faîtage scellé fissuré des maisons des années 1970-1980, solins, gouttières. Diagnostic sur place, devis gratuit.",
    lead:
      "Sur les maisons des années 1970 et 1980 de Gaillon, la fuite commence très souvent au même endroit : le faîtage scellé au mortier.",
    angle: {
      h2: "Le faîtage scellé, désordre classique du secteur",
      body: [
        "Le mortier qui scelle les tuiles faîtières travaille avec le gel et les écarts de température. Au bout de trente ou quarante ans, il se fissure, puis se désolidarise par morceaux. L'eau passe alors directement au sommet du toit, là où elle se répartit ensuite sur les deux versants — ce qui explique des taches très éloignées du point d'entrée.",
        "Le diagnostic est simple une fois qu'on est monté : le faîtage bouge, ou il ne bouge pas. La réparation, elle, mérite une vraie question. Reprendre au mortier reproduit le même désordre dans trente ans ; un faîtage à sec, ventilé, ne se refissure pas. Nous chiffrons les deux et vous laissons choisir.",
      ],
    },
    faq: [
      {
        q: "Faut-il refaire tout le faîtage ou une partie suffit-elle ?",
        a: "Si le mortier est fissuré sur toute la ligne, une reprise partielle ne tiendra pas longtemps. S'il ne s'agit que de deux ou trois faîtières descellées, la reprise ponctuelle est la bonne réponse.",
      },
      {
        q: "Intervenez-vous rapidement à Gaillon ?",
        a: "Gaillon est à quinze kilomètres des Andelys, c'est l'une de nos communes les plus proches. Une infiltration active y passe en priorité.",
      },
    ],
  },
  {
    service: "fuite-toiture",
    ville: "etrepagny",
    h1: "Recherche et réparation de fuite de toiture à Étrépagny (27150)",
    title: "Fuite de toiture à Étrépagny (27150) — Après coup de vent",
    metaDescription:
      "Fuite de toiture à Étrépagny : rives et faîtages soulevés par le vent de plateau, contrôle après tempête, protection provisoire. Devis gratuit.",
    lead:
      "Sur le plateau d'Étrépagny, la fuite arrive rarement toute seule : elle suit un coup de vent. Rives et faîtages sont les premiers à bouger.",
    angle: {
      h2: "Après une tempête, ce qu'il faut regarder en premier",
      body: [
        "Le plateau est nettement plus exposé que la vallée de la Seine. Le vent ne soulève pas une couverture par le milieu : il prend par le bord. Une rive mal fixée, une tuile de rive descellée, une faîtière mobile — c'est par là qu'il s'engouffre, et une fois la première tuile partie, les suivantes suivent vite.",
        "Le réflexe utile après un coup de vent est de faire le tour depuis le sol, jumelles si besoin, et de regarder les lignes : le bord de toit doit être rectiligne, le faîtage régulier. Une irrégularité visible d'en bas signale toujours quelque chose qui a bougé. Appelez-nous avant la pluie suivante, pas après.",
      ],
    },
    faq: [
      {
        q: "Mon assurance couvre-t-elle les dégâts de tempête ?",
        a: "Souvent oui, sous conditions de vitesse de vent. Nous fournissons des photos datées et un devis détaillé, ce que votre assureur demandera de toute façon.",
      },
      {
        q: "Intervenez-vous en urgence sur le plateau ?",
        a: "Oui. Selon la météo et l'ampleur, nous posons une protection provisoire pour arrêter l'entrée d'eau avant de réparer proprement.",
      },
    ],
  },
  {
    service: "fuite-toiture",
    ville: "louviers",
    h1: "Recherche et réparation de fuite de toiture à Louviers (27400)",
    title: "Fuite de toiture à Louviers (27400) — Intervention rapide",
    metaDescription:
      "Fuite de toiture à Louviers : ardoise à forte pente, maisons mitoyennes du centre ancien. Recherche du point d'entrée et réparation. Devis gratuit.",
    lead:
      "Sur les toitures à forte pente du centre de Louviers, une seule ardoise déplacée suffit — et l'eau descend beaucoup plus vite qu'ailleurs.",
    angle: {
      h2: "Forte pente : moins de tolérance, plus de vitesse",
      body: [
        "Une toiture à faible pente pardonne un défaut ponctuel : l'eau stagne un peu, s'évapore, et l'infiltration reste marginale. À forte pente, c'est l'inverse. L'eau arrive avec de la vitesse, s'engouffre dans le moindre passage libre et parcourt une longue distance sous la couverture avant de se manifester. Le point d'entrée est donc presque toujours bien plus haut que la tache au plafond.",
        "Dans le centre ancien mitoyen, cette distance traverse souvent des ouvrages partagés — noues, solins contre le mur voisin, chéneaux encastrés. La recherche prend un peu plus de temps, et c'est ce temps qui évite de réparer au mauvais endroit.",
      ],
    },
    faq: [
      {
        q: "Pourquoi la tache est-elle si loin de la fuite ?",
        a: "Parce que l'eau suit la charpente avant de tomber. Sur une forte pente, elle peut parcourir plusieurs mètres. C'est la raison pour laquelle on ne répare pas à l'aplomb de la tache.",
      },
      {
        q: "Louviers est à 30 km : quel délai d'intervention ?",
        a: "Une infiltration active passe en priorité sur le planning. Nous vous donnons un créneau réaliste au téléphone plutôt qu'une promesse intenable.",
      },
    ],
  },

  /* ───────────── RÉNOVATION ───────────── */
  {
    service: "renovation-toiture",
    ville: "vernon",
    h1: "Rénovation de toiture à Vernon (27200)",
    title: "Rénovation de toiture à Vernon (27200) — Lazar 27",
    metaDescription:
      "Rénovation de toiture à Vernon : pavillons des années 1960-1990 en fin de vie, couverture et zinguerie reprises ensemble. Devis gratuit et détaillé.",
    lead:
      "Une grande partie du parc pavillonnaire de Vernon arrive aujourd'hui au terme de sa première couverture. C'est le moment où la réparation cesse d'être rentable.",
    angle: {
      h2: "Pourquoi couverture et zinguerie se refont ensemble",
      body: [
        "Sur un pavillon des années 1960 à 1990, la couverture et sa zinguerie ont le même âge. Refaire les tuiles en gardant les gouttières, les solins et les rives d'origine revient à poser du neuf sur des ouvrages qui lâcheront dans les cinq ans — et à repayer un échafaudage pour y revenir. C'est l'économie de l'échafaudage, pas celle du matériau, qui commande de tout traiter en une fois.",
        "L'autre point qu'on ne découvre qu'en déposant : l'état des liteaux et de l'écran sous-toiture. Beaucoup de couvertures de cette époque n'ont pas d'écran du tout. C'est le bon moment pour en poser un, et c'est ce que nous chiffrons en option séparée sur le devis, pour que vous puissiez décider.",
      ],
    },
    faq: [
      {
        q: "Peut-on refaire la couverture sans toucher à la zinguerie ?",
        a: "Techniquement oui, économiquement c'est rarement un bon calcul sur un pavillon de cette génération. Nous chiffrons les deux séparément pour que l'arbitrage soit clair.",
      },
      {
        q: "Combien de temps dure une réfection de pavillon ?",
        a: "Cela dépend de la surface, de la pente et de la météo. Nous donnons une fourchette au devis et nous vous prévenons si elle bouge.",
      },
    ],
  },
  {
    service: "renovation-toiture",
    ville: "gisors",
    h1: "Rénovation de toiture à Gisors (27140)",
    title: "Rénovation de toiture à Gisors (27140) — Lazar 27",
    metaDescription:
      "Rénovation de toiture à Gisors : ardoise des maisons bourgeoises du XIXe, crochets à reprendre, tuile plate de petit format. Devis gratuit.",
    lead:
      "À Gisors, une rénovation de toiture en ardoise commence rarement par l'ardoise elle-même. Elle commence par ce qui la tient.",
    angle: {
      h2: "Sur les maisons du XIXe, le sujet est le crochet",
      body: [
        "Les couvertures en ardoise des maisons bourgeoises du secteur ont souvent été fixées avec des crochets en acier peu protégé. L'ardoise, elle, ne vieillit presque pas : on trouve régulièrement des ardoises encore parfaitement saines qui tombent une par une parce que leur crochet a rouillé. Le diagnostic change tout — remplacer une couverture saine coûte cher pour rien.",
        "Quand l'ardoise est récupérable, la rénovation consiste à déposer, trier, reposer avec une fixation durable et compléter avec des ardoises de même format. C'est un travail plus long qu'une pose neuve, mais nettement moins coûteux qu'une réfection complète, et il conserve l'aspect de la maison.",
      ],
    },
    faq: [
      {
        q: "Peut-on réutiliser les ardoises existantes ?",
        a: "Souvent en partie. On dépose, on trie, et on garde ce qui est sain. Le taux de récupération se voit au diagnostic, pas sur catalogue.",
      },
      {
        q: "Une toiture en ardoise dure combien de temps ?",
        a: "L'ardoise naturelle dure très longtemps ; ce sont les fixations et les ouvrages de zinguerie qui déterminent la durée réelle de la couverture.",
      },
    ],
  },
  {
    service: "renovation-toiture",
    ville: "gaillon",
    h1: "Rénovation de toiture à Gaillon (27600)",
    title: "Rénovation de toiture à Gaillon (27600) — Lazar 27",
    metaDescription:
      "Rénovation de toiture à Gaillon, Aubevoye, Le Val : ardoise, tuile terre cuite ou béton, choix du matériau et déclaration préalable. Devis gratuit.",
    lead:
      "À Gaillon, la première question d'une rénovation n'est pas technique mais réglementaire : a-t-on le droit de changer de matériau ou de teinte ?",
    angle: {
      h2: "Garder le matériau d'origine, ou en changer",
      body: [
        "Le bâti de Gaillon mélange centre ancien et extensions pavillonnaires, donc ardoise, tuile terre cuite et tuile béton. Sur une réfection complète, la tentation est de choisir le matériau le moins cher — mais modifier l'aspect extérieur relève d'une déclaration préalable en mairie, et le changement de teinte ou de matériau peut être refusé selon le secteur.",
        "Nous regardons ce point avant de chiffrer, pas après. Rien n'est plus coûteux qu'un devis validé sur un matériau qui devra finalement être remplacé par un autre. Quand la contrainte existe, elle limite le choix ; quand elle n'existe pas, le choix se fait sur la durée de vie et le budget, et nous vous donnons les deux.",
      ],
    },
    faq: [
      {
        q: "Puis-je passer de l'ardoise à la tuile ?",
        a: "Cela modifie l'aspect extérieur : une déclaration préalable est nécessaire, et l'accord n'est pas automatique. Renseignez-vous en mairie avant d'arrêter votre choix — nous vous le signalons au devis.",
      },
      {
        q: "Intervenez-vous sur Aubevoye, Le Val et Saint-Aubin ?",
        a: "Oui, tout le secteur de Gaillon, à quinze kilomètres des Andelys.",
      },
    ],
  },
  {
    service: "renovation-toiture",
    ville: "etrepagny",
    h1: "Rénovation de toiture à Étrépagny (27150)",
    title: "Rénovation de toiture à Étrépagny (27150) — Lazar 27",
    metaDescription:
      "Rénovation de toiture à Étrépagny : fermes et longères, réfection par tranches, fixations renforcées face au vent de plateau. Devis gratuit.",
    lead:
      "Sur une longère du plateau, une réfection complète représente une surface considérable. La bonne nouvelle, c'est qu'elle peut souvent se faire par tranches.",
    angle: {
      h2: "Refaire par tranches, sans refaire deux fois l'échafaudage",
      body: [
        "Un corps de ferme se prête au découpage par corps de bâtiment ou par versant. Cela permet d'étaler la dépense sur deux ou trois exercices sans compromettre l'étanchéité, à condition de découper aux bons endroits : on s'arrête sur une ligne franche — un pignon, un faîtage complet — jamais au milieu d'un pan.",
        "L'exposition au vent oriente aussi la technique. Sur le plateau, les rives et les faîtages sont les points qui reprennent le plus d'efforts. Une réfection sérieuse ici ne se joue pas sur la tuile choisie mais sur la façon dont les bords sont fixés, et c'est le poste que nous détaillons le plus dans le devis.",
      ],
    },
    faq: [
      {
        q: "Peut-on étaler une réfection sur plusieurs années ?",
        a: "Oui, si le découpage est fait sur des lignes franches. Nous vous indiquons au diagnostic où l'on peut s'arrêter sans risque d'infiltration.",
      },
      {
        q: "Faut-il des fixations particulières sur le plateau ?",
        a: "Les rives et les faîtages y demandent plus d'attention qu'en vallée. C'est un poste que nous chiffrons explicitement plutôt que de le noyer dans le prix au mètre carré.",
      },
    ],
  },
  {
    service: "renovation-toiture",
    ville: "louviers",
    h1: "Rénovation de toiture à Louviers (27400)",
    title: "Rénovation de toiture à Louviers (27400) — Lazar 27",
    metaDescription:
      "Rénovation de toiture à Louviers : centre ancien mitoyen, ardoise à forte pente, échafaudage sur voirie. Devis gratuit et détaillé.",
    lead:
      "À Louviers, le coût d'une réfection dans le centre ancien se joue autant sur l'accès que sur la toiture elle-même.",
    angle: {
      h2: "L'installation pèse autant que la couverture",
      body: [
        "Une maison mitoyenne à forte pente, dans une rue étroite, impose un échafaudage complet, parfois une autorisation d'occupation du domaine public, et une organisation d'approvisionnement qui n'a rien à voir avec un pavillon disposant d'un accès de plain-pied. Sur ce type de chantier, le poste installation peut représenter une part importante du devis — et c'est normal.",
        "C'est aussi ce qui rend le regroupement rentable. Si la couverture, la zinguerie et éventuellement le ravalement doivent être repris, les faire dans la même campagne d'échafaudage coûte nettement moins cher que trois interventions séparées. Nous le signalons quand nous le voyons, même si vous ne nous aviez consultés que pour le toit.",
      ],
    },
    faq: [
      {
        q: "L'échafaudage est-il compris dans le devis ?",
        a: "Oui, et il apparaît en poste séparé. Vous voyez ce que coûte l'installation et ce que coûte la couverture.",
      },
      {
        q: "Faut-il une autorisation de voirie à Louviers ?",
        a: "Si l'échafaudage empiète sur le domaine public, oui. Nous vous le signalons au devis pour que la demande soit faite à temps.",
      },
    ],
  },

  /* ───────────── RÉPARATION ───────────── */
  {
    service: "reparation-toiture",
    ville: "vernon",
    h1: "Réparation de toiture à Vernon (27200)",
    title: "Réparation de toiture à Vernon (27200) — Lazar 27",
    metaDescription:
      "Réparation de toiture à Vernon : tuiles et ardoises déplacées, solins, faîtage. Centre ancien à pans de bois et pavillons. Devis gratuit.",
    lead:
      "Dans le centre ancien de Vernon, les tuiles ne se déplacent pas toutes seules : c'est souvent la structure qui a bougé sous elles.",
    angle: {
      h2: "Quand c'est la charpente qui déplace la couverture",
      body: [
        "Les maisons à pans de bois travaillent. Le bois se rétracte, la structure se tasse légèrement, et une couverture posée sur un support qui bouge finit par présenter des tuiles décalées, des recouvrements ouverts, un faîtage qui n'est plus rectiligne. Remettre les tuiles en place sans regarder ce qu'il y a dessous, c'est se garantir de revenir dans deux ans.",
        "La réparation utile commence donc par un contrôle du support depuis les combles : liteaux, chevrons, points d'appui. Si le désordre est structurel, nous vous le disons — et nous chiffrons la reprise du support, pas seulement la remise en place de la couverture.",
      ],
    },
    faq: [
      {
        q: "Mes tuiles glissent régulièrement au même endroit, pourquoi ?",
        a: "Un désordre qui revient toujours au même point vient presque toujours du support, pas de la tuile. C'est ce qu'il faut regarder en premier.",
      },
      {
        q: "Intervenez-vous sur les maisons à pans de bois ?",
        a: "Oui. Elles demandent simplement qu'on regarde la structure avant la couverture.",
      },
    ],
  },
  {
    service: "reparation-toiture",
    ville: "gisors",
    h1: "Réparation de toiture à Gisors (27140)",
    title: "Réparation de toiture à Gisors (27140) — Lazar 27",
    metaDescription:
      "Réparation de toiture à Gisors : remplacement de tuiles plates de petit format, ardoises et crochets. Diagnostic sur place, devis gratuit.",
    lead:
      "À Gisors, la difficulté d'une réparation n'est pas de poser la tuile : c'est d'en trouver une qui aille avec les autres.",
    angle: {
      h2: "Trouver une tuile qui s'accorde au format existant",
      body: [
        "La tuile plate de petit format existe en plusieurs dimensions selon l'époque et le fabricant. Une tuile de remplacement au mauvais format ne se voit pas seulement : elle casse le recouvrement, et le point réparé devient un point faible. Sur une couverture ancienne, il faut donc mesurer avant de commander, et parfois chercher du côté de la récupération.",
        "C'est aussi la raison pour laquelle il vaut la peine de conserver les tuiles saines déposées lors d'un chantier. Nous les mettons de côté quand c'est possible : elles serviront pour les réparations des années suivantes, et elles s'accorderont mieux que n'importe quel produit neuf.",
      ],
    },
    faq: [
      {
        q: "Trouve-t-on encore des tuiles plates anciennes ?",
        a: "Souvent, en neuf compatible ou en récupération. Cela demande de mesurer précisément l'existant, ce que nous faisons au diagnostic.",
      },
      {
        q: "Une réparation ponctuelle vaut-elle le coup sur une vieille toiture ?",
        a: "Si le support est sain et le désordre localisé, oui, largement. Si vous rappelez chaque hiver pour une fuite différente, non — et nous vous le dirons.",
      },
    ],
  },
  {
    service: "reparation-toiture",
    ville: "gaillon",
    h1: "Réparation de toiture à Gaillon (27600)",
    title: "Réparation de toiture à Gaillon (27600) — Lazar 27",
    metaDescription:
      "Réparation de toiture à Gaillon : faîtage descellé, gouttières PVC déformées, tuiles cassées. Diagnostic photo sur place, devis gratuit.",
    lead:
      "Sur les maisons des années 1970 et 1980 de Gaillon, deux réparations reviennent sans cesse : le faîtage descellé et la gouttière PVC déformée.",
    angle: {
      h2: "Les deux réparations les plus fréquentes du secteur",
      body: [
        "Le faîtage scellé au mortier finit par se fissurer et libérer les faîtières une à une. Tant que le désordre reste limité à quelques tuiles, la reprise est rapide et peu coûteuse ; laissée trois hivers, elle se transforme en reprise complète de la ligne de faîte. C'est typiquement le cas où intervenir tôt divise la facture.",
        "La gouttière PVC de première génération, elle, se déforme entre ses crochets. L'eau stagne, déborde par l'arrière et attaque la sablière — un dégât qui ne se voit que des années plus tard, quand le bois est atteint. Reprendre les crochets et redonner la pente coûte peu ; remplacer une sablière coûte beaucoup.",
      ],
    },
    faq: [
      {
        q: "Ma gouttière déborde seulement en cas de grosse pluie, est-ce grave ?",
        a: "C'est le signal d'une pente ou d'une section qui ne suffit plus. Le débordement lui-même n'est pas le problème : c'est l'eau qui repasse derrière la gouttière qui l'est.",
      },
      {
        q: "Combien de temps pour reprendre un faîtage ?",
        a: "Une reprise ponctuelle tient souvent dans la journée. Une ligne complète demande davantage, selon la longueur et l'accès.",
      },
    ],
  },
  {
    service: "reparation-toiture",
    ville: "etrepagny",
    h1: "Réparation de toiture à Étrépagny (27150)",
    title: "Réparation de toiture à Étrépagny (27150) — Lazar 27",
    metaDescription:
      "Réparation de toiture à Étrépagny : rives et faîtages après coup de vent, tuiles envolées, fixations renforcées. Devis gratuit et photos datées.",
    lead:
      "Sur le plateau, la réparation la plus courante est celle du bord de toit — parce que c'est par là que le vent prend.",
    angle: {
      h2: "Réparer une rive en pensant au prochain coup de vent",
      body: [
        "Remettre une tuile de rive en place suffit rarement. Si elle est partie, c'est que sa fixation n'a pas tenu, et remettre la même chose au même endroit garantit le même résultat au prochain épisode venteux. Sur le plateau, une réparation de rive utile passe par une reprise du mode de fixation, pas seulement du matériau manquant.",
        "Le même raisonnement vaut pour les faîtières. Une faîtière mobile est un point d'entrée pour le vent : il se glisse dessous et travaille la ligne entière. Nous contrôlons donc toujours la totalité du faîtage et des rives, même quand l'appel ne portait que sur deux tuiles.",
      ],
    },
    faq: [
      {
        q: "Deux tuiles sont tombées, faut-il vraiment contrôler tout le toit ?",
        a: "Contrôler ne coûte rien puisque nous sommes déjà montés. Ce qui coûte, c'est de revenir trois semaines plus tard pour les trois suivantes.",
      },
      {
        q: "Fournissez-vous des photos pour l'assurance ?",
        a: "Oui, photos datées et devis détaillé. C'est ce que votre assureur demandera après un épisode de vent.",
      },
    ],
  },
  {
    service: "reparation-toiture",
    ville: "louviers",
    h1: "Réparation de toiture à Louviers (27400)",
    title: "Réparation de toiture à Louviers (27400) — Lazar 27",
    metaDescription:
      "Réparation de toiture à Louviers : ardoises déplacées sur forte pente, solins et noues du centre ancien mitoyen. Devis gratuit.",
    lead:
      "Sur une ardoise à forte pente, remplacer une seule ardoise n'a rien d'anodin : il faut atteindre le point sans marcher sur ce qui tient encore.",
    angle: {
      h2: "Accéder au point à réparer sans en créer un second",
      body: [
        "Une couverture en ardoise se traverse mal. Le poids d'un homme mal réparti fend les ardoises voisines, et une réparation d'une ardoise se transforme en réparation de six. Sur les fortes pentes du centre de Louviers, l'accès se fait par échelle de couvreur ou depuis l'échafaudage — jamais en marchant directement sur la couverture.",
        "C'est ce qui explique qu'une petite réparation en centre ancien ne coûte pas le même prix qu'une petite réparation sur un pavillon. Ce n'est pas l'ardoise qui coûte, c'est le moyen d'y accéder proprement. Nous le disons franchement au devis plutôt que de gonfler le prix du matériau.",
      ],
    },
    faq: [
      {
        q: "Pourquoi une réparation d'ardoise coûte-t-elle plus cher qu'une tuile ?",
        a: "Le matériau n'est qu'une partie du prix. C'est l'accès et le mode d'intervention sur forte pente qui font l'essentiel de l'écart.",
      },
      {
        q: "Intervenez-vous sur les maisons mitoyennes du centre ?",
        a: "Oui. Elles demandent simplement de traiter la protection des abords et l'accès avant de monter.",
      },
    ],
  },

  /* ───────────── ZINGUERIE ───────────── */
  {
    service: "zinguerie",
    ville: "vernon",
    h1: "Couvreur zingueur à Vernon (27200)",
    title: "Couvreur zingueur à Vernon (27200) — Lazar 27",
    metaDescription:
      "Zinguerie à Vernon : noues et solins des toitures mitoyennes du centre ancien, gouttières et descentes. Devis gratuit et sans engagement.",
    lead:
      "Les toitures complexes et mitoyennes du centre de Vernon multiplient les jonctions. Et une toiture ne fuit presque jamais au milieu d'un pan : elle fuit à une jonction.",
    angle: {
      h2: "Plus la toiture est découpée, plus la zinguerie compte",
      body: [
        "Une maison isolée à deux pans a peu de points singuliers. Une maison de centre ancien accolée à ses voisines, avec des décrochés, des lucarnes et des souches en pierre, en a beaucoup : noues, solins contre les murs mitoyens, raccords autour des cheminées, chéneaux encastrés. Sur ce type de bâti, l'essentiel du risque d'infiltration est concentré dans la zinguerie, pas dans la couverture.",
        "C'est aussi ce qui rend le zinc irremplaçable ici. Il se façonne sur mesure, épouse un raccord compliqué sans multiplier les pièces, et tient plusieurs décennies. Sur une jonction contre un mur mitoyen en pierre irrégulière, aucun produit standard ne fait le même travail.",
      ],
    },
    faq: [
      {
        q: "Un solin en mortier peut-il remplacer un solin en zinc ?",
        a: "Sur du bâti ancien qui travaille, le mortier se fissure et rouvre le passage. Le zinc accepte le mouvement, c'est ce qui fait la différence dans la durée.",
      },
      {
        q: "Reprenez-vous une zinguerie sans refaire la couverture ?",
        a: "Oui, très souvent. Quand la couverture est saine, reprendre les seules jonctions est la bonne réponse, et la moins chère.",
      },
    ],
  },
  {
    service: "zinguerie",
    ville: "gisors",
    h1: "Couvreur zingueur à Gisors (27140)",
    title: "Couvreur zingueur à Gisors (27140) — Lazar 27",
    metaDescription:
      "Zinguerie à Gisors : chéneaux et ouvrages en zinc des maisons du XIXe, solins, gouttières et descentes. Devis gratuit sur place.",
    lead:
      "Les maisons bourgeoises du XIXe siècle de Gisors ont souvent des ouvrages de zinguerie soignés — et c'est précisément ce qui demande un remplacement à l'identique.",
    angle: {
      h2: "Reprendre un ouvrage ancien sans le banaliser",
      body: [
        "Chéneaux encastrés, corniches habillées, descentes à collier ouvragé : sur ce bâti, la zinguerie fait partie de l'architecture. Remplacer un chéneau en zinc façonné par une gouttière pendante standard règle le problème d'étanchéité et abîme la maison — pour un coût de revente qui, lui, ne se rattrape pas.",
        "Un chéneau encastré demande davantage de travail qu'une gouttière posée : il faut déposer les rangs de couverture qui le recouvrent, refaire le fond, traiter les raccords, puis reposer. C'est plus long, c'est plus cher, et c'est la seule façon de conserver l'ouvrage. Nous chiffrons les deux options et nous vous disons laquelle nous ferions chez nous.",
      ],
    },
    faq: [
      {
        q: "Un chéneau encastré peut-il être réparé ponctuellement ?",
        a: "Parfois, si le fond est sain et la fuite localisée. Mais un chéneau qui a fui longtemps a souvent atteint le bois en dessous, et là, la reprise partielle ne suffit plus.",
      },
      {
        q: "Intervenez-vous à Neaufles-Saint-Martin et Bézu-Saint-Éloi ?",
        a: "Oui, tout le secteur de Gisors.",
      },
    ],
  },
  {
    service: "zinguerie",
    ville: "gaillon",
    h1: "Couvreur zingueur à Gaillon (27600)",
    title: "Couvreur zingueur à Gaillon (27600) — Lazar 27",
    metaDescription:
      "Zinguerie à Gaillon : remplacement de gouttières PVC déformées, solins, descentes. Aubevoye, Le Val, Saint-Aubin. Devis gratuit.",
    lead:
      "À Gaillon, la zinguerie qui pose problème est presque toujours la même : la gouttière PVC de première génération des maisons des années 1970 et 1980.",
    angle: {
      h2: "PVC, aluminium ou zinc : ce qui change vraiment",
      body: [
        "Le PVC de première génération a mal vieilli : il se déforme entre les crochets, devient cassant avec les UV, et sa dilatation finit par ouvrir les jonctions collées. Le remplacer par du PVC actuel reste possible et reste l'option la moins chère — les produits d'aujourd'hui ne sont pas ceux d'il y a quarante ans.",
        "L'aluminium apporte la légèreté et une bonne tenue dans le temps sans le poids du zinc. Le zinc, lui, se justifie surtout sur le centre ancien, pour l'aspect et pour les formes qui ne se trouvent pas en standard. Sur un pavillon d'Aubevoye ou du Val, la question est budgétaire plus qu'esthétique, et nous le disons.",
      ],
    },
    faq: [
      {
        q: "Faut-il forcément passer au zinc ?",
        a: "Non. Sur un pavillon récent, un PVC actuel correctement posé, avec la bonne pente et le bon nombre de crochets, fait très bien le travail.",
      },
      {
        q: "Combien de temps pour remplacer une ligne de gouttière ?",
        a: "Souvent une journée sur un pavillon, selon la longueur, la hauteur et le nombre de descentes.",
      },
    ],
  },
  {
    service: "zinguerie",
    ville: "etrepagny",
    h1: "Couvreur zingueur à Étrépagny (27150)",
    title: "Couvreur zingueur à Étrépagny (27150) — Lazar 27",
    metaDescription:
      "Zinguerie à Étrépagny : rives, faîtages et habillages exposés au vent de plateau, gouttières de grandes longueurs. Devis gratuit.",
    lead:
      "Sur le plateau, la zinguerie ne se juge pas sur son aspect mais sur sa fixation. C'est le vent qui décide.",
    angle: {
      h2: "Ce que le vent de plateau impose aux ouvrages de bord",
      body: [
        "Les rives, les bandes de rive et les habillages de bord sont les ouvrages qui reprennent le plus d'efforts en zone exposée. Un habillage correctement façonné mais insuffisamment fixé se met à battre, puis à ouvrir ses agrafes, et finit par partir en emportant une partie de la couverture avec lui. L'écart entre un ouvrage qui tient trente ans et un ouvrage qui tient cinq ans se joue sur l'espacement des fixations, pas sur l'épaisseur du zinc.",
        "Les grandes longueurs des bâtiments agricoles ajoutent la question de la dilatation. Une gouttière de vingt mètres travaille : sans joint de dilatation, elle se déforme ou casse ses jonctions. C'est un détail que l'on ne voit pas sur un devis au mètre linéaire, et c'est pourtant lui qui fait la différence.",
      ],
    },
    faq: [
      {
        q: "Ma bande de rive claque au vent, est-ce grave ?",
        a: "C'est un signal à traiter rapidement. Un ouvrage qui bat ouvre ses fixations, et la suite est une reprise beaucoup plus large.",
      },
      {
        q: "Traitez-vous les grandes longueurs de bâtiments agricoles ?",
        a: "Oui, avec les joints de dilatation nécessaires. C'est un poste que nous détaillons explicitement au devis.",
      },
    ],
  },
  {
    service: "zinguerie",
    ville: "louviers",
    h1: "Couvreur zingueur à Louviers (27400)",
    title: "Couvreur zingueur à Louviers (27400) — Lazar 27",
    metaDescription:
      "Zinguerie à Louviers : noues et chéneaux du centre ancien mitoyen, zinguerie de première génération des pavillons. Devis gratuit.",
    lead:
      "À Louviers, deux mondes cohabitent : les noues et chéneaux du centre ancien mitoyen, et la zinguerie de première génération des lotissements plus récents.",
    angle: {
      h2: "Deux parcs, deux problèmes de zinguerie",
      body: [
        "Dans le centre dense, la noue mitoyenne concentre l'eau de deux versants et parfois de deux propriétés. C'est l'ouvrage le plus sollicité d'une toiture, et sur forte pente, l'eau y arrive vite. Une noue percée ne se voit pas d'en bas : elle se manifeste par une tache sur un mur intérieur, souvent loin, et parfois chez le voisin.",
        "Sur les extensions pavillonnaires, le sujet est plus simple mais plus répandu : la zinguerie d'origine arrive en fin de vie en même temps que la couverture. Gouttières, descentes, solins de cheminée ont le même âge. Les traiter ensemble, pendant que l'accès est déjà en place, évite de repayer une installation deux ans plus tard.",
      ],
    },
    faq: [
      {
        q: "Comment savoir si une noue est percée ?",
        a: "Rarement depuis le sol. Cela se voit en montant, et cela se recoupe avec l'emplacement des traces à l'intérieur.",
      },
      {
        q: "Intervenez-vous dans les quartiers Saint-Hildevert et La Villette ?",
        a: "Oui, comme dans l'ensemble de Louviers.",
      },
    ],
  },
];

export const combosBySlug = new Map(combos.map((c) => [`${c.service}-${c.ville}`, c]));
export const comboSlugs = combos.map((c) => `${c.service}-${c.ville}`);

/** Combos disponibles pour un service donné — maillage depuis la page service. */
export const combosParService = (service: string) => combos.filter((c) => c.service === service);

/** Combos disponibles pour une commune — maillage depuis la page ville. */
export const combosParVille = (ville: string) => combos.filter((c) => c.ville === ville);
