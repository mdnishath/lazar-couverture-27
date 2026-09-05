export type Ville = {
  slug: string;
  nom: string;
  nomAvec: string; // "aux Andelys", "à Vernon" — pour les phrases
  cp: string;
  distanceKm: number;
  wave: 1 | 2 | 3;
  intro: string;
  contexte: string[];
  hameaux: string[];
  voisines: string[]; // slugs
};

export const villes: Ville[] = [
  {
    slug: "les-andelys",
    nom: "Les Andelys",
    nomAvec: "aux Andelys",
    cp: "27700",
    distanceKm: 0,
    wave: 1,
    intro:
      "Les Andelys est notre commune d'implantation. C'est ici que nous intervenons le plus souvent, et c'est le bâti que nous connaissons le mieux : maisons de bourg en pierre calcaire, fortes pentes couvertes en ardoise, lucarnes et souches de cheminée nombreuses.",
    contexte: [
      "Le tissu ancien du Petit Andely et du Grand Andely présente des toitures à forte pente, majoritairement en ardoise, avec beaucoup de points singuliers : noues, lucarnes, souches désaxées. Ce sont exactement les endroits où les infiltrations commencent.",
      "La proximité de la Seine et l'encaissement de la vallée entretiennent une humidité élevée toute l'année. Le démoussage y est un entretien courant, pas un luxe.",
      "Aux abords de Château-Gaillard et des périmètres protégés, les travaux modifiant l'aspect extérieur sont encadrés. Nous en tenons compte dès le devis.",
    ],
    hameaux: ["Le Grand Andely", "Le Petit Andely", "Radeval", "Villers"],
    voisines: ["ecouis", "vexin-sur-epte", "gaillon", "fleury-sur-andelle"],
  },
  {
    slug: "vernon",
    nom: "Vernon",
    nomAvec: "à Vernon",
    cp: "27200",
    distanceKm: 20,
    wave: 1,
    intro:
      "Vernon est le plus grand marché limitrophe de notre zone. Nous y intervenons régulièrement, aussi bien sur le bâti ancien du centre que sur les pavillons des quartiers périphériques.",
    contexte: [
      "Le centre ancien de Vernon mêle maisons à pans de bois et constructions en pierre, souvent couvertes en ardoise ou en tuile plate, avec des toitures complexes et mitoyennes.",
      "Les quartiers pavillonnaires des années 1960 à 1990 arrivent aujourd'hui à l'âge où la couverture d'origine et sa zinguerie demandent une reprise complète.",
      "La proximité immédiate de la Seine explique la même problématique de mousse qu'aux Andelys.",
    ],
    hameaux: ["Vernonnet", "Blanchères", "Boutardes"],
    voisines: ["gaillon", "vexin-sur-epte", "les-andelys"],
  },
  {
    slug: "gaillon",
    nom: "Gaillon",
    nomAvec: "à Gaillon",
    cp: "27600",
    distanceKm: 15,
    wave: 1,
    intro:
      "Gaillon se situe à une quinzaine de kilomètres des Andelys, sur l'autre rive de la Seine. Nous y intervenons sur l'ensemble des travaux de couverture, de la réparation ponctuelle à la réfection complète.",
    contexte: [
      "Le bâti de Gaillon combine un centre ancien et des extensions pavillonnaires importantes, ce qui donne une grande variété de couvertures : ardoise, tuile mécanique, et quelques toitures en zinc.",
      "Les maisons construites dans les années 1970 et 1980 présentent aujourd'hui des désordres classiques de faîtage scellé et de gouttières PVC déformées.",
    ],
    hameaux: ["Aubevoye", "Le Val", "Saint-Aubin"],
    voisines: ["vernon", "les-andelys", "val-de-reuil"],
  },
  {
    slug: "gisors",
    nom: "Gisors",
    nomAvec: "à Gisors",
    cp: "27140",
    distanceKm: 30,
    wave: 1,
    intro:
      "Gisors marque la limite est de notre zone d'intervention régulière. Le bâti y est très marqué par le Vexin : pierre, brique, et couvertures à forte pente.",
    contexte: [
      "Les maisons du centre de Gisors comportent beaucoup de toitures en tuile plate de petit format, sensibles à la gélivité et donc au démoussage.",
      "Les couvertures en ardoise des maisons bourgeoises du XIXe siècle demandent une attention particulière aux crochets, souvent en acier non protégé à cette époque.",
    ],
    hameaux: ["Neaufles-Saint-Martin", "Bézu-Saint-Éloi"],
    voisines: ["etrepagny", "vexin-sur-epte", "lyons-la-foret"],
  },
  {
    slug: "etrepagny",
    nom: "Étrépagny",
    nomAvec: "à Étrépagny",
    cp: "27150",
    distanceKm: 18,
    wave: 2,
    intro:
      "Étrépagny et les communes du plateau du Vexin normand font partie de notre secteur d'intervention courant, à moins de vingt minutes des Andelys.",
    contexte: [
      "Le plateau est plus exposé au vent que la vallée. Les désordres de rive et de faîtage y sont plus fréquents, et les contrôles après coup de vent plus utiles.",
      "Les fermes et longères du secteur présentent souvent de grandes surfaces de couverture en tuile, où l'entretien régulier fait une vraie différence de coût sur la durée.",
    ],
    hameaux: ["Hacqueville", "Doudeauville", "Bézu-la-Forêt"],
    voisines: ["gisors", "ecouis", "lyons-la-foret"],
  },
  {
    slug: "ecouis",
    nom: "Écouis",
    nomAvec: "à Écouis",
    cp: "27440",
    distanceKm: 12,
    wave: 2,
    intro:
      "Écouis est l'une des communes les plus proches de notre siège. Nous y intervenons rapidement, y compris pour des réparations ponctuelles de faible ampleur.",
    contexte: [
      "Le bourg s'organise autour de sa collégiale, avec un bâti ancien en pierre couvert principalement en ardoise et en tuile plate.",
      "La proximité de la forêt de Lyons entretient l'ombre et l'humidité : les toitures d'Écouis se réencrassent plus vite que la moyenne du secteur.",
    ],
    hameaux: ["Bacqueville", "Mesnil-Verclives"],
    voisines: ["les-andelys", "etrepagny", "fleury-sur-andelle"],
  },
  {
    slug: "fleury-sur-andelle",
    nom: "Fleury-sur-Andelle",
    nomAvec: "à Fleury-sur-Andelle",
    cp: "27380",
    distanceKm: 18,
    wave: 2,
    intro:
      "Fleury-sur-Andelle et la vallée de l'Andelle constituent un secteur où nous intervenons régulièrement, notamment pour du démoussage et des reprises de zinguerie.",
    contexte: [
      "La vallée de l'Andelle est encaissée et boisée. C'est le contexte le plus favorable qui soit à la mousse et au lichen : beaucoup de nos chantiers de démoussage se situent ici.",
      "Le bâti industriel ancien de la vallée présente des toitures de grande portée, souvent en tuile mécanique, avec des chéneaux encaissés qui demandent un entretien suivi.",
    ],
    hameaux: ["Radepont", "Douville-sur-Andelle"],
    voisines: ["romilly-sur-andelle", "ecouis", "les-andelys"],
  },
  {
    slug: "lyons-la-foret",
    nom: "Lyons-la-Forêt",
    nomAvec: "à Lyons-la-Forêt",
    cp: "27480",
    distanceKm: 22,
    wave: 2,
    intro:
      "Lyons-la-Forêt est classé parmi les plus beaux villages de France. Les travaux de couverture y sont particulièrement encadrés, et nous adaptons systématiquement nos propositions à cette contrainte.",
    contexte: [
      "Les maisons à pans de bois et les couvertures en tuile plate de petit format dominent le bourg. Le respect de l'aspect existant est ici une obligation, pas une préférence.",
      "L'environnement forestier immédiat entretient une humidité forte et un dépôt végétal constant : l'entretien de toiture et de gouttières y est plus fréquent qu'ailleurs.",
      "Nous privilégions dans ce secteur l'hydrofuge incolore et les reprises à l'identique.",
    ],
    hameaux: ["Le Tronquay", "Lisors"],
    voisines: ["etrepagny", "fleury-sur-andelle", "gisors"],
  },
  {
    slug: "romilly-sur-andelle",
    nom: "Romilly-sur-Andelle",
    nomAvec: "à Romilly-sur-Andelle",
    cp: "27610",
    distanceKm: 20,
    wave: 2,
    intro:
      "Romilly-sur-Andelle fait partie de notre zone d'intervention courante dans la basse vallée de l'Andelle.",
    contexte: [
      "Le bâti mêle maisons anciennes de vallée et lotissements récents, avec des couvertures en tuile mécanique majoritaires sur le pavillonnaire.",
      "Comme dans toute la vallée de l'Andelle, l'humidité ambiante rend le démoussage et le traitement hydrofuge particulièrement rentables.",
    ],
    hameaux: ["Pont-Saint-Pierre", "Amfreville-sous-les-Monts"],
    voisines: ["fleury-sur-andelle", "pont-de-larche", "les-andelys"],
  },
  {
    slug: "pont-de-larche",
    nom: "Pont-de-l'Arche",
    nomAvec: "à Pont-de-l'Arche",
    cp: "27340",
    distanceKm: 25,
    wave: 2,
    intro:
      "Pont-de-l'Arche marque la limite ouest de notre secteur régulier, à la confluence de la Seine et de l'Eure.",
    contexte: [
      "Le centre ancien présente des maisons à pans de bois et des toitures complexes, mitoyennes, où chaque intervention demande de la précaution.",
      "L'humidité de la confluence et la densité du bâti ancien rendent les problèmes de noue et de chéneau particulièrement fréquents.",
    ],
    hameaux: ["Igoville", "Alizay"],
    voisines: ["romilly-sur-andelle", "val-de-reuil", "louviers"],
  },
  {
    slug: "val-de-reuil",
    nom: "Val-de-Reuil",
    nomAvec: "à Val-de-Reuil",
    cp: "27100",
    distanceKm: 28,
    wave: 3,
    intro:
      "Val-de-Reuil est une commune récente, dont le parc immobilier arrive aujourd'hui à l'âge des premières grandes rénovations de toiture.",
    contexte: [
      "Le bâti date majoritairement des années 1970 et suivantes : tuile mécanique, charpentes en fermettes industrielles, gouttières PVC.",
      "Sur ce type de construction, les désordres les plus fréquents sont la déformation des gouttières, le descellement du faîtage et le vieillissement des fenêtres de toit d'origine.",
    ],
    hameaux: ["Les Noés", "Le Chant des Oiseaux"],
    voisines: ["louviers", "pont-de-larche", "gaillon"],
  },
  {
    slug: "louviers",
    nom: "Louviers",
    nomAvec: "à Louviers",
    cp: "27400",
    distanceKm: 30,
    wave: 3,
    intro:
      "Nous intervenons à Louviers pour les travaux de couverture, de la réparation à la réfection complète, sur bâti ancien comme sur pavillonnaire.",
    contexte: [
      "Louviers possède un centre ancien dense, avec beaucoup de maisons mitoyennes et de toitures à forte pente en ardoise.",
      "Les extensions pavillonnaires plus récentes présentent les problématiques classiques de tuile mécanique et de zinguerie de première génération.",
    ],
    hameaux: ["Saint-Hildevert", "La Villette"],
    voisines: ["val-de-reuil", "pont-de-larche", "evreux"],
  },
  {
    slug: "vexin-sur-epte",
    nom: "Vexin-sur-Epte",
    nomAvec: "à Vexin-sur-Epte",
    cp: "27630",
    distanceKm: 20,
    wave: 3,
    intro:
      "Vexin-sur-Epte regroupe plusieurs anciennes communes du plateau. Nous y intervenons sur l'ensemble des travaux de couverture.",
    contexte: [
      "Le bâti rural du Vexin — longères, fermes, dépendances — offre de grandes surfaces de couverture, souvent en tuile, où l'entretien préventif est particulièrement rentable.",
      "L'exposition au vent du plateau rend les contrôles de rive et de faîtage après épisode venteux particulièrement utiles.",
    ],
    hameaux: ["Écos", "Tourny", "Berthenonville"],
    voisines: ["les-andelys", "vernon", "gisors"],
  },
  {
    slug: "evreux",
    nom: "Évreux",
    nomAvec: "à Évreux",
    cp: "27000",
    distanceKm: 45,
    wave: 3,
    intro:
      "Évreux, préfecture de l'Eure, se situe à la limite de notre rayon d'intervention. Nous y intervenons sur devis, principalement pour des chantiers de rénovation complète.",
    contexte: [
      "Le parc immobilier d'Évreux est varié : centre reconstruit, quartiers pavillonnaires étendus, bâti ancien résiduel.",
      "Compte tenu de la distance, nous privilégions les chantiers d'une certaine ampleur plutôt que les interventions ponctuelles.",
    ],
    hameaux: ["Navarre", "Nétreville", "La Madeleine"],
    voisines: ["louviers", "gaillon"],
  },
  {
    slug: "rouen",
    nom: "Rouen",
    nomAvec: "à Rouen",
    cp: "76000",
    distanceKm: 40,
    wave: 3,
    intro:
      "Nous intervenons sur la périphérie sud et est de Rouen pour des chantiers de couverture, principalement en rénovation.",
    contexte: [
      "Le bâti ancien rouennais, à pans de bois et forte pente, demande un savoir-faire traditionnel en ardoise et en zinguerie.",
      "Comme pour Évreux, la distance nous conduit à privilégier les chantiers de rénovation plutôt que les petites réparations.",
    ],
    hameaux: ["Bonsecours", "Belbeuf", "Amfreville-la-Mi-Voie"],
    voisines: ["pont-de-larche", "romilly-sur-andelle"],
  },
];

export const villesBySlug = new Map(villes.map((v) => [v.slug, v]));
export const villeSlugs = villes.map((v) => v.slug);
export const villesWave1 = villes.filter((v) => v.wave === 1);
