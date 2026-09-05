import { p1 } from "./p1";

export type Faq = { q: string; a: string };

/**
 * Un bloc = une question (h2) + une reponse complete en deux phrases (capsule)
 * + le detail. La capsule est ce qu'un moteur reprend : elle doit tenir seule,
 * sans le h2 et sans ce qui suit.
 *
 * Les liens inline s'ecrivent `[libelle](url)` dans capsule, body et table.
 * Chaque source a ete ouverte et verifiee, jamais citee de memoire.
 */
export type Block = {
  h2: string;
  capsule?: string;
  body: string[];
  list?: string[];
  table?: { caption?: string; head: string[]; rows: string[][] };
};

export type Service = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  metaDescription: string;
  keyword: string;
  priority: 1 | 2 | 3;
  photoDir: string;
  lead: string;
  blocks: Block[];
  priceNote?: string;
  /** Question posee au client pour obtenir son vecu de terrain. */
  experienceQuestion?: string;
  /** Vecu de terrain, ecrit par un humain. Jamais genere. */
  experience?: string;
  faq: Faq[];
  related: string[];
};

export const services: Service[] = [
  ...p1,

  {
    slug: "traitement-hydrofuge",
    name: "Traitement hydrofuge",
    h1: "Traitement hydrofuge de toiture dans l'Eure",
    title: "Traitement hydrofuge de toiture — Les Andelys, Eure",
    metaDescription:
      "Traitement hydrofuge de toiture aux Andelys et dans l'Eure : l'eau perle au lieu d'être absorbée. Incolore ou coloré. Devis gratuit.",
    keyword: "traitement hydrofuge toiture Eure",
    priority: 2,
    photoDir: "05-nettoyage-demoussage-toiture",
    lead:
      "L'hydrofuge ne bouche pas la toiture. Il modifie la surface du matériau pour que l'eau y perle et s'écoule, au lieu d'être absorbée par la porosité de la tuile ou de l'ardoise.",
    blocks: [
      {
        h2: "Ce que fait réellement un hydrofuge",
        body: [
          "Une tuile ou une ardoise ancienne est poreuse. Elle absorbe l'eau, la garde, et la restitue lentement. En hiver, cette eau gèle dans la masse et fait éclater le matériau : c'est le phénomène de gélivité, la première cause de casse sur les couvertures du secteur.",
          "L'hydrofuge s'applique après nettoyage complet. Il pénètre dans la porosité et la rend déperlante. Résultat : la couverture sèche plus vite, retient moins de saleté, et la mousse met beaucoup plus longtemps à revenir.",
        ],
      },
      {
        h2: "Incolore ou coloré",
        body: [
          "L'hydrofuge incolore conserve l'aspect existant et se contente de protéger. C'est le choix par défaut, et le seul envisageable aux abords des sites protégés.",
          "L'hydrofuge coloré uniformise en plus la teinte d'une couverture marquée. Il donne un résultat très net mais engage l'aspect du bâtiment : nous en discutons avant, jamais pendant.",
        ],
      },
      {
        h2: "Toujours après un nettoyage",
        body: [
          "Appliquer un hydrofuge sur une couverture encrassée revient à sceller la saleté sous le produit. L'ordre est donc toujours : nettoyage, traitement anti-mousse, séchage complet, puis hydrofuge.",
          "C'est la raison pour laquelle nous prévoyons systématiquement deux passages.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure un traitement hydrofuge ?",
        a: "Selon le produit, l'exposition et le support, l'effet déperlant se maintient généralement plusieurs années. Un contrôle visuel régulier permet de savoir quand renouveler.",
      },
      {
        q: "L'hydrofuge empêche-t-il la mousse de revenir ?",
        a: "Il la ralentit fortement en supprimant l'humidité stagnante dont elle a besoin, mais il ne la supprime pas définitivement.",
      },
      {
        q: "Peut-on appliquer un hydrofuge sur ardoise ?",
        a: "Oui, avec un produit adapté. L'ardoise est moins poreuse que la terre cuite, le gain porte surtout sur la reprise de la mousse.",
      },
      {
        q: "Est-ce compatible avec la récupération d'eau de pluie ?",
        a: "Signalez-le nous avant l'intervention : nous adaptons le produit et déconnectons la cuve pendant l'application et le rinçage.",
      },
    ],
    related: ["demoussage-toiture", "nettoyage-toiture", "peinture-toiture"],
  },

  {
    slug: "gouttieres",
    name: "Gouttières",
    h1: "Pose, réparation et nettoyage de gouttières aux Andelys",
    title: "Réparation de gouttière aux Andelys et dans l'Eure",
    metaDescription:
      "Pose, réparation et nettoyage de gouttières aux Andelys et dans l'Eure : PVC, aluminium, zinc, descentes. Devis gratuit sous 24 h.",
    keyword: "réparation gouttière Les Andelys",
    priority: 2,
    photoDir: "04-gouttiere-descente-eau",
    lead:
      "Une gouttière qui déborde ne se voit pas depuis l'intérieur. Elle se remarque au printemps, sur la façade tachée, l'enduit qui cloque et l'humidité en pied de mur.",
    blocks: [
      {
        h2: "Ce que nous réalisons",
        body: [],
        list: [
          "Nettoyage complet des gouttières, chéneaux et descentes.",
          "Réparation des fuites, reprise des joints et des soudures.",
          "Remplacement en zinc ou en PVC.",
          "Pose de crapaudines et de pare-feuilles.",
          "Reprise des dauphins et raccordement aux réseaux.",
        ],
      },
      {
        h2: "Zinc ou PVC ?",
        body: [
          "Le zinc dure beaucoup plus longtemps, se façonne sur mesure et convient au bâti ancien, dont les longueurs et les angles ne sont jamais standards. C'est notre recommandation par défaut aux Andelys.",
          "Le PVC coûte moins cher à la pose et se justifie sur une annexe, un garage ou une construction récente aux formes régulières.",
        ],
      },
      {
        h2: "L'entretien d'automne",
        body: [
          "Chaque automne, feuilles et mousses remplissent les gouttières. Un nettoyage avant les pluies coûte une fraction d'un ravalement de façade, et évite les débordements qui gèlent en hiver et déforment les crochets.",
          "C'est l'intervention la plus simple et la plus rentable de tout l'entretien de toiture.",
        ],
      },
    ],
    faq: [
      {
        q: "À quelle fréquence nettoyer ses gouttières ?",
        a: "Une fois par an suffit dans la plupart des cas. Deux fois si votre maison est entourée d'arbres.",
      },
      {
        q: "Les pare-feuilles sont-ils efficaces ?",
        a: "Ils réduisent nettement l'accumulation mais ne suppriment pas l'entretien. Ils facilitent surtout le nettoyage.",
      },
      {
        q: "Une gouttière qui déborde est-elle forcément bouchée ?",
        a: "Pas toujours. Une pente insuffisante, un crochet descendu ou une section sous-dimensionnée produisent le même symptôme.",
      },
      {
        q: "Intervenez-vous sur les chéneaux encaissés ?",
        a: "Oui, y compris pour la reprise d'étanchéité en zinc, fréquente sur le bâti ancien du secteur.",
      },
    ],
    related: ["zinguerie", "nettoyage-toiture", "fuite-toiture"],
  },

  {
    slug: "pose-velux",
    name: "Fenêtres de toit",
    h1: "Pose et remplacement de fenêtres de toit aux Andelys",
    title: "Pose de Velux aux Andelys — Fenêtre de toit (27)",
    metaDescription:
      "Pose et remplacement de fenêtres de toit aux Andelys et dans l'Eure : Velux sur ardoise comme sur tuile, raccords étanches. Devis gratuit.",
    keyword: "pose Velux Les Andelys",
    priority: 2,
    photoDir: "07-pose-velux-fenetre-de-toit",
    lead:
      "À surface égale, une fenêtre de toit apporte nettement plus de lumière qu'une fenêtre verticale. C'est souvent elle qui transforme des combles inutilisés en vraie pièce de vie.",
    blocks: [
      {
        h2: "Ce que nous réalisons",
        body: [],
        list: [
          "Pose de fenêtres de toit sur couverture ardoise et tuile.",
          "Remplacement d'anciens modèles devenus fuyards.",
          "Raccords d'étanchéité et abergements adaptés au matériau.",
          "Habillage intérieur et finitions.",
          "Pose de volets roulants et de stores.",
        ],
      },
      {
        h2: "Tout se joue sur le raccord",
        body: [
          "La fenêtre elle-même fuit rarement. Ce qui fuit, c'est le raccord entre le cadre et la couverture. Un abergement mal dimensionné, un recouvrement insuffisant en partie haute, une gorge de drainage bouchée, et l'eau passe.",
          "Posée avec les bons abergements et un écran correctement relevé, une fenêtre de toit dure aussi longtemps que la couverture qui l'entoure.",
        ],
      },
      {
        h2: "Remplacer une ancienne fenêtre",
        body: [
          "Les joints d'étanchéité des modèles posés dans les années 1990 et 2000 arrivent en fin de vie. Le symptôme typique est une trace d'humidité en partie basse du cadre, souvent confondue avec de la condensation.",
          "Le remplacement se fait en conservant l'ouverture existante quand la dimension le permet, ce qui limite fortement le coût.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour créer une fenêtre de toit ?",
        a: "Oui, une déclaration préalable est nécessaire car l'aspect extérieur est modifié. Des prescriptions particulières s'appliquent aux abords des sites protégés des Andelys.",
      },
      {
        q: "Combien de temps prend une pose ?",
        a: "Une journée pour une fenêtre en remplacement, un peu plus pour une création qui nécessite de reprendre le chevronnage.",
      },
      {
        q: "Peut-on poser une fenêtre de toit sur ardoise ?",
        a: "Oui, avec un abergement spécifique pour couverture plate. C'est le cas le plus fréquent sur le secteur.",
      },
      {
        q: "Ma fenêtre coule : faut-il la remplacer ?",
        a: "Pas nécessairement. Dans beaucoup de cas, c'est l'abergement ou la gorge de drainage qu'il faut reprendre. Nous diagnostiquons avant de proposer un remplacement.",
      },
    ],
    related: ["zinguerie", "isolation-combles", "renovation-toiture"],
  },

  {
    slug: "isolation-toiture",
    name: "Isolation de toiture",
    h1: "Isolation de toiture aux Andelys et dans l'Eure",
    title: "Isolation de toiture aux Andelys et dans l'Eure",
    metaDescription:
      "Isolation de toiture aux Andelys et dans l'Eure : par l'extérieur lors d'une réfection, ou par l'intérieur sous rampants. Devis gratuit.",
    keyword: "isolation toiture Eure",
    priority: 2,
    photoDir: "01-couverture-toiture",
    lead:
      "La toiture est le premier poste de déperdition d'une maison ancienne. C'est aussi le seul qu'on peut traiter sans toucher à l'intérieur, à condition de le faire au bon moment : pendant la réfection de la couverture.",
    blocks: [
      {
        h2: "Par l'intérieur ou par l'extérieur",
        body: [
          "L'isolation par l'intérieur se pose sous rampants, depuis les combles. Elle est moins coûteuse et n'exige pas de déposer la couverture, mais elle réduit le volume habitable et laisse subsister les ponts thermiques au niveau de la charpente.",
          "L'isolation par l'extérieur, en sarking, se pose sur la charpente avant la couverture neuve. Elle supprime les ponts thermiques, conserve le volume et laisse la charpente apparente à l'intérieur. Elle n'a de sens que si la toiture est déposée — donc pendant une rénovation.",
        ],
      },
      {
        h2: "Pourquoi le calendrier compte autant",
        body: [
          "Isoler par l'extérieur coûte cher si l'on doit déposer une couverture en bon état uniquement pour cela. En revanche, si la couverture doit être refaite de toute façon, la dépose est déjà au devis et le surcoût de l'isolation devient bien plus raisonnable.",
          "C'est pour cette raison que nous posons systématiquement la question de l'isolation au moment du devis de rénovation, et pas après.",
        ],
      },
      {
        h2: "Ventilation : le point qu'on oublie",
        body: [
          "Une isolation posée sans lame d'air correctement ventilée piège l'humidité contre la sous-face de la couverture. Le résultat apparaît quelques années plus tard : bois noirci, isolant tassé, performance perdue.",
          "L'écran de sous-toiture, la lame d'air et les entrées d'air en égout font partie du travail, pas des options.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle épaisseur d'isolant faut-il ?",
        a: "Cela dépend du matériau et de la performance visée. Nous dimensionnons selon la configuration réelle de vos combles et la réglementation en vigueur au moment des travaux.",
      },
      {
        q: "Y a-t-il des aides financières ?",
        a: "Les dispositifs d'aide à la rénovation énergétique évoluent chaque année et dépendent de vos revenus, du logement et des performances atteintes. Nous faisons le point avec vous au moment du devis.",
      },
      {
        q: "Peut-on isoler sans déposer la toiture ?",
        a: "Oui, par l'intérieur. C'est la solution la plus courante quand la couverture est saine.",
      },
      {
        q: "Isolation de toiture ou de combles perdus ?",
        a: "Si les combles ne sont pas aménagés, on isole le plancher : c'est nettement moins cher et tout aussi efficace. Voir notre page isolation des combles.",
      },
    ],
    related: ["isolation-combles", "renovation-toiture", "charpente"],
  },

  {
    slug: "isolation-combles",
    name: "Isolation des combles",
    h1: "Isolation des combles aux Andelys et dans l'Eure",
    title: "Isolation des combles aux Andelys et dans l'Eure",
    metaDescription:
      "Isolation des combles aux Andelys et dans l'Eure : laine de verre ou de roche, combles perdus ou aménagés. Diagnostic et devis gratuits.",
    keyword: "isolation des combles Eure",
    priority: 2,
    photoDir: "08-travaux-de-charpente",
    lead:
      "Des combles mal isolés laissent partir une part importante de la chaleur d'une maison. C'est le chantier au meilleur rapport gain sur coût de toute la rénovation énergétique.",
    blocks: [
      {
        h2: "Combles perdus et combles aménagés",
        body: [
          "Dans des combles perdus, non habitables, l'isolant se pose au niveau du plancher. L'intervention est rapide, peu coûteuse, et n'entraîne aucune perte de surface habitable.",
          "Dans des combles aménagés ou destinés à l'être, l'isolant se pose sous rampants, entre et sous chevrons. Le travail est plus technique : il faut préserver une lame d'air ventilée et traiter le pare-vapeur sans le percer.",
        ],
      },
      {
        h2: "Le confort d'été, pas seulement l'hiver",
        body: [
          "Une isolation choisie uniquement pour sa résistance thermique peut donner des combles invivables en été. Le déphasage — le temps que met la chaleur à traverser l'isolant — compte autant que la performance hivernale dans une pièce sous toiture.",
          "Nous en tenons compte dans le choix du matériau quand les combles sont habités.",
        ],
      },
      {
        h2: "Ce qui doit être vérifié avant",
        body: [
          "Isoler des combles au-dessus d'une couverture qui fuit revient à jeter l'isolant. Nous contrôlons systématiquement l'état de la couverture et de la charpente avant de chiffrer une isolation.",
          "Un isolant taché ou tassé est d'ailleurs le meilleur indicateur d'une infiltration ancienne que personne n'avait repérée.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure le chantier ?",
        a: "Une journée pour des combles perdus de taille courante, plusieurs jours pour des combles aménagés.",
      },
      {
        q: "Faut-il vider les combles avant ?",
        a: "Oui, la zone à traiter doit être dégagée. Nous vous indiquons ce qui doit être déplacé lors de la visite.",
      },
      {
        q: "Quel matériau isolant utilisez-vous ?",
        a: "Le choix dépend de la configuration, de l'usage des combles et du budget. Nous vous présentons les options avec leurs avantages réels, pas seulement leur coefficient.",
      },
      {
        q: "L'isolation change-t-elle quelque chose à la ventilation ?",
        a: "Oui, et c'est essentiel. Une isolation renforcée sans ventilation adaptée crée de la condensation. Nous traitons les deux ensemble.",
      },
    ],
    related: ["isolation-toiture", "pose-velux", "charpente"],
  },

  {
    slug: "charpente",
    name: "Charpente",
    h1: "Travaux et réfection de charpente aux Andelys",
    title: "Charpente : réparation et renfort aux Andelys (27)",
    metaDescription:
      "Charpente aux Andelys et dans l'Eure : réparation, renfort, traitement du bois, pose de charpente traditionnelle. Diagnostic gratuit.",
    keyword: "réfection charpente Eure",
    priority: 2,
    photoDir: "08-travaux-de-charpente",
    lead:
      "La charpente porte tout. Elle est aussi la partie de la maison qu'on ne voit qu'au moment où la couverture est déposée — ou quand il est déjà trop tard.",
    blocks: [
      {
        h2: "Ce que nous réalisons",
        body: [],
        list: [
          "Diagnostic de charpente lors d'une réfection de couverture.",
          "Traitement curatif et préventif du bois.",
          "Remplacement de chevrons, pannes et liteaux attaqués.",
          "Renfort de structure et reprise d'assemblages.",
          "Création d'ouvertures et de chevêtres pour fenêtres de toit.",
        ],
      },
      {
        h2: "Les signaux d'alerte",
        body: [
          "Bois noirci ou spongieux, sciure fine au sol, galeries visibles, déformation de la ligne de faîtage, portes de combles qui coincent : ce sont les signes classiques d'une charpente attaquée par l'humidité ou par les insectes xylophages.",
          "Dans le bâti ancien du Vexin normand, l'attaque provient presque toujours d'une infiltration ancienne, pas d'un défaut d'origine. Traiter le bois sans traiter la fuite ne sert à rien.",
        ],
      },
      {
        h2: "Le bon moment pour intervenir",
        body: [
          "Une charpente se contrôle quand la couverture est déposée. C'est le seul moment où tout est accessible, et le seul où le remplacement d'une panne ne coûte pas une dépose supplémentaire.",
          "C'est pourquoi le contrôle de charpente fait partie de nos devis de rénovation de toiture, et n'est pas facturé séparément.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il tout remplacer si une pièce est attaquée ?",
        a: "Rarement. On remplace les pièces atteintes et on traite l'ensemble. Une réfection complète ne s'impose que si la structure est globalement compromise.",
      },
      {
        q: "Le traitement du bois est-il obligatoire ?",
        a: "Il n'est pas obligatoire mais il est fortement recommandé dès qu'une attaque est constatée, et lors de toute réfection de couverture.",
      },
      {
        q: "Intervenez-vous sur charpente traditionnelle et fermettes ?",
        a: "Oui. Les fermettes industrielles demandent une attention particulière : on ne coupe jamais un élément sans renfort calculé.",
      },
    ],
    related: ["renovation-toiture", "isolation-toiture", "pose-velux"],
  },

  {
    slug: "toiture-ardoise",
    name: "Toiture en ardoise",
    h1: "Toiture en ardoise aux Andelys",
    title: "Toiture en ardoise aux Andelys — Pose & rénovation",
    metaDescription:
      "Toiture en ardoise aux Andelys et dans l'Eure : pose, rénovation, reprise des crochets et des ardoises déplacées. Devis gratuit.",
    keyword: "toiture ardoise Normandie",
    priority: 2,
    photoDir: "03-pose-tuile-ardoise-zinc",
    lead:
      "L'ardoise est le matériau du bâti ancien des Andelys et du Vexin normand. Fine, légère et très durable, elle demande en retour une pose rigoureuse : tout se joue sur le recouvrement et sur la qualité des fixations.",
    blocks: [
      {
        h2: "Pourquoi l'ardoise domine ici",
        body: [
          "Le paysage bâti de la vallée de la Seine, entre Les Andelys et Vernon, est très majoritairement couvert en ardoise. Ce n'est pas seulement une habitude : la finesse de l'ardoise convient aux fortes pentes traditionnelles, et son poids réduit ménage les charpentes anciennes.",
          "Aux abords des sites protégés, l'ardoise est en outre souvent imposée par les règles d'urbanisme.",
        ],
      },
      {
        h2: "Pose au crochet, pose au clou",
        body: [
          "La pose au crochet inox est aujourd'hui la référence : elle permet le remplacement d'un élément isolé sans démonter la rangée, et résiste durablement à la corrosion.",
          "La pose au clou, traditionnelle, se rencontre sur les couvertures anciennes. Elle donne une ligne très pure mais rend chaque réparation plus lourde. Nous la pratiquons quand l'aspect l'exige.",
        ],
      },
      {
        h2: "Ce qui fait vieillir une couverture ardoise",
        body: [
          "Ce n'est presque jamais l'ardoise elle-même, qui dure très longtemps. Ce sont les fixations. Des crochets en acier non protégé rouillent, cassent, et les ardoises glissent une à une.",
          "Quand nous voyons plusieurs ardoises descendues sur un même versant, le diagnostic est en général celui-là — et il annonce une réfection à court terme.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une toiture en ardoise ?",
        a: "L'ardoise naturelle est un matériau très durable. Ce sont les fixations et la zinguerie qui déterminent en pratique la durée de vie de l'ensemble.",
      },
      {
        q: "Peut-on remplacer quelques ardoises seulement ?",
        a: "Oui, c'est une intervention courante, particulièrement simple sur une pose au crochet.",
      },
      {
        q: "Ardoise naturelle ou fibrociment ?",
        a: "L'ardoise naturelle offre un aspect et une longévité supérieurs. Le fibrociment coûte moins cher. Le choix dépend du budget et des règles d'urbanisme applicables.",
      },
    ],
    related: ["renovation-toiture", "toiture-tuile", "demoussage-toiture"],
  },

  {
    slug: "toiture-tuile",
    name: "Toiture en tuile",
    h1: "Toiture en tuile aux Andelys et dans l'Eure",
    title: "Toiture en tuile aux Andelys — Pose & rénovation",
    metaDescription:
      "Toiture en tuile aux Andelys et dans l'Eure : terre cuite, béton, tuile plate de petit format. Pose et rénovation. Devis gratuit.",
    keyword: "toiture tuile Eure",
    priority: 3,
    photoDir: "03-pose-tuile-ardoise-zinc",
    lead:
      "La tuile terre cuite couvre une grande partie des constructions récentes du secteur et de nombreux hameaux du plateau. Elle se répare élément par élément, ce qui en fait une couverture économique à entretenir.",
    blocks: [
      {
        h2: "Tuile plate ou tuile mécanique",
        body: [
          "La tuile plate, petit format, se rapproche de l'ardoise dans son principe de pose par recouvrement. Elle demande une forte pente et beaucoup d'éléments au mètre carré.",
          "La tuile mécanique, à emboîtement, couvre plus vite et accepte des pentes plus faibles. C'est la solution la plus répandue sur les constructions des cinquante dernières années.",
        ],
      },
      {
        h2: "Le point faible : la gélivité",
        body: [
          "Une tuile poreuse absorbe l'eau. En hiver, cette eau gèle et fait éclater la terre cuite en surface. Le phénomène s'accélère quand la mousse maintient l'humidité au contact.",
          "C'est la raison pour laquelle démoussage et hydrofuge ont un effet particulièrement net sur les couvertures en tuile du secteur.",
        ],
      },
      {
        h2: "Rives, faîtage et points singuliers",
        body: [
          "Sur une couverture en tuile, les désordres commencent presque toujours par les rives et le faîtage, plus exposés au vent et scellés au mortier.",
          "La pose de faîtage à sec, ventilée, évite les descellements récurrents liés au gel.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on remplacer une tuile isolée ?",
        a: "Oui, c'est l'un des avantages de la tuile. Encore faut-il retrouver un modèle compatible, ce qui devient difficile sur les couvertures très anciennes.",
      },
      {
        q: "Peut-on passer de la tuile à l'ardoise ?",
        a: "Techniquement oui, mais cela suppose de vérifier la charpente et de respecter les règles d'urbanisme de la commune.",
      },
      {
        q: "Quelle pente minimale pour la tuile ?",
        a: "Elle dépend du modèle et de l'exposition. Nous vérifions la compatibilité avant toute proposition.",
      },
    ],
    related: ["toiture-ardoise", "renovation-toiture", "faitage"],
  },

  {
    slug: "faitage",
    name: "Faîtage",
    h1: "Réfection de faîtage aux Andelys",
    title: "Faîtage de toiture : réfection aux Andelys (27)",
    metaDescription:
      "Réfection de faîtage aux Andelys et dans l'Eure : faîtage scellé fissuré, faîtières descellées, pose à sec ventilée. Devis gratuit.",
    keyword: "réfection faîtage",
    priority: 3,
    photoDir: "03-pose-tuile-ardoise-zinc",
    lead:
      "Le faîtage est la ligne de crête du toit. C'est la partie la plus exposée au vent et au gel, et la première à se desceller sur les couvertures anciennes.",
    blocks: [
      {
        h2: "Pourquoi un faîtage se descelle",
        body: [
          "Le mortier de scellement se fissure sous les cycles de gel et de dégel, puis l'eau s'infiltre dans les fissures et accélère le phénomène. Les tuiles faîtières finissent par bouger, puis par tomber lors d'un coup de vent.",
          "Sur le couloir venté de la vallée de la Seine, c'est un désordre que nous traitons très régulièrement.",
        ],
      },
      {
        h2: "Faîtage scellé ou faîtage à sec",
        body: [
          "Le faîtage scellé au mortier reste la solution traditionnelle et s'impose sur certains bâtis anciens pour des raisons d'aspect.",
          "Le faîtage à sec, posé sur closoir ventilé, ne se fissure pas, ventile la sous-face de la couverture et supprime le problème à la racine. Quand l'aspect le permet, c'est ce que nous recommandons.",
        ],
      },
    ],
    faq: [
      {
        q: "Un faîtage descellé provoque-t-il des fuites ?",
        a: "Oui, et souvent de façon diffuse, tout le long de la crête. C'est une cause d'infiltration fréquemment attribuée à tort aux ardoises.",
      },
      {
        q: "Peut-on reprendre le faîtage sans toucher au reste ?",
        a: "Oui, c'est une intervention indépendante et relativement rapide.",
      },
      {
        q: "Le faîtage à sec est-il plus cher ?",
        a: "Le matériel coûte davantage, la pose est plus rapide, et la durée de vie est nettement supérieure. Sur la durée, il est plus économique.",
      },
    ],
    related: ["reparation-toiture", "zinguerie", "toiture-tuile"],
  },

  {
    slug: "etancheite-toit-terrasse",
    name: "Étanchéité toit terrasse",
    h1: "Étanchéité de toit terrasse dans l'Eure",
    title: "Étanchéité de toit terrasse — Les Andelys, Eure",
    metaDescription:
      "Étanchéité de toit terrasse aux Andelys et dans l'Eure : recherche de fuite, reprise des relevés, résine ou membrane. Devis gratuit.",
    keyword: "étanchéité toit terrasse Eure",
    priority: 3,
    photoDir: "06-fuite-etancheite-toiture",
    lead:
      "Une toiture plate ne pardonne pas l'approximation. Sans pente pour évacuer l'eau, tout repose sur la qualité du complexe d'étanchéité et sur le bon fonctionnement des évacuations.",
    blocks: [
      {
        h2: "Où les toits terrasses fuient",
        body: [
          "Presque jamais au milieu. Les désordres se concentrent sur les relevés en périphérie, autour des évacuations, et aux jonctions avec les murs et les acrotères.",
          "Une évacuation obstruée transforme la terrasse en bassin : la charge d'eau trouve alors le moindre défaut de relevé.",
        ],
      },
      {
        h2: "Nos interventions",
        body: [],
        list: [
          "Diagnostic et recherche de point d'entrée.",
          "Reprise de relevés d'étanchéité.",
          "Remplacement ou renforcement du complexe.",
          "Nettoyage et remise en état des évacuations et crapaudines.",
          "Traitement des jonctions avec les ouvrages maçonnés.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on réparer sans tout refaire ?",
        a: "Oui, quand le désordre est localisé et le complexe globalement sain. Un diagnostic préalable est indispensable.",
      },
      {
        q: "À quelle fréquence entretenir un toit terrasse ?",
        a: "Un contrôle annuel des évacuations et des relevés, et un nettoyage avant l'automne.",
      },
      {
        q: "Intervenez-vous sur les petites terrasses de garage ?",
        a: "Oui, y compris sur les appentis et les toitures d'annexes.",
      },
    ],
    related: ["fuite-toiture", "zinguerie", "gouttieres"],
  },

  {
    slug: "peinture-toiture",
    name: "Peinture de toiture",
    h1: "Peinture de toiture dans l'Eure",
    title: "Peinture de toiture aux Andelys et dans l'Eure",
    metaDescription:
      "Peinture de toiture aux Andelys et dans l'Eure : toujours après nettoyage, jamais à sa place. Teinte homogène et durable. Devis gratuit.",
    keyword: "peinture de toiture",
    priority: 3,
    photoDir: "05-nettoyage-demoussage-toiture",
    lead:
      "La peinture de toiture redonne une teinte homogène à une couverture marquée par le temps. Elle vient toujours après le nettoyage, jamais à la place.",
    blocks: [
      {
        h2: "Ce que la peinture fait, et ce qu'elle ne fait pas",
        body: [
          "Elle uniformise l'aspect et apporte une protection de surface supplémentaire. Sur une maison dont la couverture est saine mais dépareillée après des réparations successives, le résultat est net.",
          "Elle ne répare rien. Peindre une couverture gélive ou fissurée masque le problème quelques saisons et complique le diagnostic ultérieur. Nous refusons ce type de chantier.",
        ],
      },
      {
        h2: "Un engagement sur l'aspect du bâtiment",
        body: [
          "Changer la teinte d'une toiture modifie l'aspect extérieur de la maison. Aux abords des sites protégés des Andelys, cela peut être encadré, voire interdit.",
          "Nous vérifions ce point avant de proposer une peinture colorée, et nous orientons vers un hydrofuge incolore quand c'est la seule option acceptable.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps tient une peinture de toiture ?",
        a: "Plusieurs années, selon l'exposition, le produit et la qualité de la préparation. La préparation compte davantage que la peinture elle-même.",
      },
      {
        q: "Peut-on peindre une toiture en ardoise ?",
        a: "Ce n'est généralement pas recommandé. Sur ardoise, nous privilégions le nettoyage et l'hydrofuge incolore.",
      },
      {
        q: "Peinture ou hydrofuge coloré ?",
        a: "L'hydrofuge coloré pénètre le matériau, la peinture forme un film en surface. Sur tuile poreuse, l'hydrofuge coloré vieillit généralement mieux.",
      },
    ],
    related: ["traitement-hydrofuge", "demoussage-toiture", "nettoyage-toiture"],
  },

  {
    slug: "diagnostic-toiture",
    name: "Diagnostic de toiture",
    h1: "Diagnostic de toiture gratuit aux Andelys",
    title: "Diagnostic de toiture gratuit — Les Andelys, Eure",
    metaDescription:
      "Diagnostic de toiture gratuit aux Andelys et dans l'Eure : nous montons voir, photos à l'appui, et vous savez ce qui est urgent.",
    keyword: "diagnostic toiture gratuit Eure",
    priority: 3,
    photoDir: "01-couverture-toiture",
    lead:
      "Vous ne savez pas où en est votre toiture. C'est normal : on ne la voit pas. Nous montons, nous photographions, et nous vous disons franchement ce qui est urgent et ce qui peut attendre.",
    blocks: [
      {
        h2: "Ce que nous contrôlons",
        body: [],
        list: [
          "État général de la couverture : éléments cassés, glissés, manquants.",
          "Fixations : crochets, clous, scellements.",
          "Zinguerie : noues, solins, abergements, rives.",
          "Faîtage et points singuliers.",
          "Gouttières, descentes et évacuations.",
          "Charpente et isolant, depuis les combles quand l'accès le permet.",
          "Présence de mousse, de lichen et de traces d'infiltration.",
        ],
      },
      {
        h2: "Ce que vous recevez",
        body: [
          "Des photos de chaque point relevé, une explication en langage clair, et une hiérarchisation en trois niveaux : à traiter maintenant, à surveiller, sans urgence.",
          "Si des travaux sont nécessaires, le devis est détaillé poste par poste. Si rien ne l'est, nous vous le disons aussi.",
        ],
      },
    ],
    faq: [
      {
        q: "Le diagnostic est-il vraiment gratuit ?",
        a: "Oui, le déplacement et le diagnostic sont gratuits et sans engagement dans notre zone d'intervention.",
      },
      {
        q: "Combien de temps cela prend-il ?",
        a: "Comptez une heure environ pour une maison individuelle, davantage si les combles sont accessibles et méritent un examen.",
      },
      {
        q: "Dois-je être présent ?",
        a: "C'est préférable, pour que nous puissions vous montrer directement ce que nous avons relevé.",
      },
    ],
    related: ["fuite-toiture", "renovation-toiture", "demoussage-toiture"],
  },
];

export const servicesBySlug = new Map(services.map((s) => [s.slug, s]));
export const p1Services = services.filter((s) => s.priority === 1);
export const serviceSlugs = services.map((s) => s.slug);

/**
 * Regroupement des 18 services, partagé par le méga-menu de l'en-tête et par
 * la page /services. Un seul endroit à modifier : ajouter un service ici le
 * fait apparaître aux deux endroits.
 */
export type GroupeService = { titre: string; slugs: string[] };

export const groupesServices: GroupeService[] = [
  { titre: "Entretien et nettoyage", slugs: ["demoussage-toiture", "nettoyage-toiture", "traitement-hydrofuge", "peinture-toiture"] },
  { titre: "Réparation et urgence", slugs: ["fuite-toiture", "reparation-toiture", "faitage", "etancheite-toit-terrasse"] },
  { titre: "Rénovation et pose", slugs: ["renovation-toiture", "toiture-ardoise", "toiture-tuile", "charpente"] },
  { titre: "Zinguerie et évacuation", slugs: ["zinguerie", "gouttieres"] },
  { titre: "Confort et énergie", slugs: ["pose-velux", "isolation-toiture", "isolation-combles"] },
  { titre: "Conseil", slugs: ["diagnostic-toiture"] },
];

/** Les groupes résolus en objets Service, sans les slugs introuvables. */
export const groupesResolus = groupesServices.map((g) => ({
  titre: g.titre,
  items: g.slugs
    .map((s) => servicesBySlug.get(s))
    .filter((x): x is Service => Boolean(x)),
}));
