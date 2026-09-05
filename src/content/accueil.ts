/**
 * CONTENU DE LA PAGE D'ACCUEIL
 *
 * L'accueil vise trois requêtes de la liste de priorités :
 *   couvreur les andelys · couvreur 27700 · entreprise de couverture les andelys
 *
 * Règles appliquées ici :
 *  - le mot-clé principal figure dans le H1, dans les cent premiers mots et
 *    dans un H2 ; il n'est jamais répété artificiellement ;
 *  - aucune certification, aucune ancienneté, aucun prix ferme n'est avancé —
 *    seuls la note 5,0, les 48 avis et l'adresse sont vérifiables ;
 *  - le contexte local n'est pas décoratif : c'est ce qu'une page d'annuaire ne
 *    peut pas écrire, et c'est ce qui fait la différence face à elles.
 */

export type Etape = { n: string; titre: string; texte: string };
export type Atout = { titre: string; texte: string };
export type QR = { q: string; a: string };

export const intro = {
  h2: "Entreprise de couverture aux Andelys, dans l’Eure",
  paragraphes: [
    "Lazar Couverture 27 est une entreprise de couverture installée rue Guynemer, aux Andelys (27700). Nous intervenons sur les toitures de la ville et de tout le secteur : rénovation, réparation de fuite, démoussage, nettoyage, traitement hydrofuge, zinguerie, gouttières, charpente et pose de fenêtres de toit.",
    "Notre métier tient en une phrase : garder l’eau dehors, le plus longtemps possible, au coût le plus juste. Cela veut dire monter voir avant de chiffrer, dire quand une réparation suffit, et ne proposer une réfection complète que lorsqu’elle est réellement l’option la moins chère sur la durée.",
    "Nos clients ont laissé 48 avis Google, tous à 5 étoiles. C’est le seul argument de cette page que nous n’avons pas écrit nous-mêmes.",
  ],
};

export const contexteLocal = {
  h2: "Les toitures des Andelys et du Vexin normand",
  paragraphes: [
    "Une toiture aux Andelys ne vieillit pas comme une toiture ailleurs. La vallée de la Seine retient l’humidité : brouillards de fond de vallée, rosée qui sèche tard, ombre portée des coteaux boisés. Sur les pans exposés au nord, la mousse et le lichen s’installent vite, retiennent l’eau contre le matériau, et c’est le gel de l’hiver suivant qui fait le vrai dégât en dilatant l’eau prise dans la tuile ou l’ardoise.",
    "Le bâti ancien du secteur ajoute ses propres contraintes. L’ardoise domine sur les constructions les plus anciennes, la tuile sur les pavillons plus récents ; entre les deux, beaucoup de maisons ont été reprises par morceaux au fil des décennies, avec des matériaux qui ne se raccordent pas naturellement. Les souches de cheminée en pierre, les lucarnes, les décrochés de toiture et les noues multiplient les points de jonction — et une toiture ne fuit presque jamais au milieu d’un pan, elle fuit à une jonction.",
    "Dernier point, souvent découvert trop tard : selon l’emplacement du bien, une modification de l’aspect extérieur peut relever d’une déclaration préalable en mairie, voire de l’avis de l’Architecte des Bâtiments de France dans les secteurs protégés. Le choix du matériau et de la teinte n’y est alors pas libre. Nous le signalons avant le devis, pas au moment de la pose.",
  ],
  points: [
    "Pans nord et abords boisés : démoussage plus fréquent qu’ailleurs.",
    "Ardoise sur le bâti ancien, tuile sur le récent — deux méthodes, deux façons de raccorder.",
    "Souches en pierre et lucarnes : les solins sont le premier point de fuite.",
    "Secteurs protégés : matériau et teinte peuvent être encadrés.",
  ],
};

export const demarche: Etape[] = [
  {
    n: "01",
    titre: "Nous montons voir",
    texte:
      "Aucun chiffrage ne se fait depuis le sol ni au téléphone. Nous inspectons la couverture, nous regardons les combles par en dessous quand il y a une infiltration, et nous photographions ce que nous trouvons.",
  },
  {
    n: "02",
    titre: "Vous voyez ce que nous avons vu",
    texte:
      "Photos à l’appui, nous vous expliquons l’état réel de la toiture : ce qui est urgent, ce qui peut attendre une saison, et ce qui n’a pas besoin d’être touché.",
  },
  {
    n: "03",
    titre: "Un devis écrit et détaillé",
    texte:
      "Poste par poste, avec les matériaux nommés. Gratuit, sans engagement, remis sous 24 heures ouvrées. Rien ne démarre sans votre accord.",
  },
  {
    n: "04",
    titre: "Le chantier, puis les abords",
    texte:
      "Protection des plantations et des descentes avant de commencer, gravats évacués et abords rincés en partant. C’est ce qui revient le plus souvent dans nos avis.",
  },
];

export const prix = {
  h2: "Combien coûtent des travaux de toiture dans l’Eure ?",
  paragraphes: [
    "Nous ne publions pas de tarif au mètre carré, et il faut se méfier de ceux qui le font : sur une toiture, deux chantiers de même surface peuvent avoir un coût du simple au double. Ce qui fait le prix, ce n’est pas la surface seule.",
    "Le déplacement, le diagnostic et le devis sont gratuits partout dans notre zone d’intervention. Vous saurez donc ce que coûtent vos travaux avant d’avoir dépensé quoi que ce soit.",
  ],
  facteurs: [
    {
      titre: "La surface développée et la pente",
      texte:
        "Une forte pente allonge la surface réelle et impose davantage de sécurité. Ce n’est pas la même chose que la surface au sol.",
    },
    {
      titre: "L’accès au chantier",
      texte:
        "Un échafaudage sur rue étroite, un jardin sans passage pour la benne ou une hauteur importante changent le poste installation avant même le premier matériau.",
    },
    {
      titre: "Le matériau",
      texte:
        "Ardoise naturelle, tuile terre cuite, tuile béton, zinc : le coût de fourniture et le temps de pose varient fortement d’un support à l’autre.",
    },
    {
      titre: "L’état de la charpente et des liteaux",
      texte:
        "C’est la mauvaise surprise classique d’une réfection. On ne le sait qu’en déposant, mais on peut souvent l’anticiper au diagnostic.",
    },
    {
      titre: "L’étendue réelle des travaux",
      texte:
        "Reprendre trois solins et un faîtage n’a rien à voir avec une réfection complète. Une bonne partie de notre travail consiste à distinguer les deux.",
    },
  ],
};

export const atouts: Atout[] = [
  {
    titre: "Un diagnostic avant un devis",
    texte:
      "Nous montons sur le toit, nous photographions, et nous vous montrons ce que nous avons vu. Aucun chiffrage n’est fait depuis le sol.",
  },
  {
    titre: "On vous dit ce qui peut attendre",
    texte:
      "Si une réparation suffit, nous ne vendons pas une réfection. Si la réfection est la seule option économique, nous le disons aussi, chiffres à l’appui.",
  },
  {
    titre: "48 avis, 5,0 de moyenne",
    texte:
      "Notre réputation Google est publique et vérifiable, sous le nom de chaque client. C’est le seul argument que nous ne pouvons pas écrire nous-mêmes.",
  },
  {
    titre: "Une entreprise d’ici",
    texte:
      "Nous sommes établis aux Andelys, pas dans une plateforme de mise en relation qui revend votre demande. Vous parlez à celui qui montera sur le toit.",
  },
  {
    titre: "Un chantier laissé propre",
    texte:
      "Plantations et descentes protégées avant de commencer, gravats évacués et abords rincés en partant.",
  },
  {
    titre: "L’ardoise comme la tuile",
    texte:
      "Le bâti du secteur mélange les deux, souvent sur la même maison. Nous posons et rénovons l’une comme l’autre, y compris les raccords entre elles.",
  },
];

export const faq: QR[] = [
  {
    q: "Dans quelles communes intervenez-vous ?",
    a: "Aux Andelys et dans les communes autour : Vernon, Gaillon, Gisors, Étrépagny, Écouis, Fleury-sur-Andelle, Lyons-la-Forêt, Romilly-sur-Andelle, Pont-de-l’Arche, Louviers, Val-de-Reuil, Vexin-sur-Epte, Évreux et Rouen. Si votre commune n’est pas dans la liste, appelez-nous : elle est probablement dans notre secteur.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui. Le déplacement, le diagnostic de toiture et le devis détaillé sont gratuits et sans engagement dans notre zone d’intervention. Vous ne payez rien avant d’avoir accepté un devis écrit.",
  },
  {
    q: "Intervenez-vous en urgence en cas de fuite ?",
    a: "Une infiltration active passe en priorité sur notre planning. Selon la météo et l’ampleur, nous posons d’abord une protection provisoire pour arrêter l’entrée d’eau, puis nous réparons proprement. Appelez-nous : nous vous donnons un créneau réaliste plutôt qu’une promesse intenable.",
  },
  {
    q: "Travaillez-vous l’ardoise et la tuile ?",
    a: "Les deux. L’ardoise domine le bâti ancien des Andelys et du Vexin normand, la tuile est plus présente sur les constructions récentes. Nous posons et rénovons l’une comme l’autre, ainsi que les raccords entre les deux quand une maison a été reprise par morceaux.",
  },
  {
    q: "Faut-il refaire toute la toiture ou une réparation suffit-elle ?",
    a: "Cela dépend de l’état du support, pas seulement du nombre de tuiles cassées. Si la couverture est saine et le désordre ponctuel, une réparation ciblée prolonge le toit de plusieurs années pour une fraction du coût. Si les tuiles sont poreuses, les liteaux vermoulus, ou si vous rappelez chaque hiver pour une fuite différente, réparer revient à repousser la dépense. Nous le disons franchement sur place.",
  },
  {
    q: "À quelle fréquence faut-il démousser une toiture ?",
    a: "En général tous les trois à cinq ans dans notre secteur, selon l’exposition et la végétation autour. Un pan nord bordé de grands arbres se recouvre bien plus vite qu’un pan plein sud dégagé. Nous vous le disons sur place, après avoir vu.",
  },
  {
    q: "Faut-il une autorisation pour des travaux de toiture ?",
    a: "Une réparation à l’identique n’en demande généralement pas. En revanche, créer une ouverture, changer de matériau ou modifier la teinte relève le plus souvent d’une déclaration préalable en mairie, et de l’avis de l’Architecte des Bâtiments de France dans les secteurs protégés. Nous vous le signalons au moment du devis.",
  },
  {
    q: "Sous quel délai répondez-vous à une demande de devis ?",
    a: "Nous rappelons sous 24 heures ouvrées toute demande envoyée depuis le formulaire, et nous convenons ensemble d’un créneau de visite.",
  },
];
