/**
 * VOLUMES DE RECHERCHE — relevés via DataForSEO le 3 septembre 2026.
 * Google Ads, localisation France (2250), langue fr.
 *
 * Ce fichier ne sert pas au rendu : il documente sur quoi les balises title
 * et les descriptions sont calées, pour qu'une future modification sache ce
 * qu'elle déplace. Les chiffres sont des moyennes mensuelles France entière.
 *
 * ─────────────────────────────────────────────────────────────────────
 * CE QUE LES DONNÉES ONT CORRIGÉ DANS NOTRE PLAN INITIAL
 *
 * 1. Les requêtes « <service> + les andelys » n'ont AUCUN volume mesurable.
 *    « démoussage toiture les andelys », « nettoyage toiture les andelys »,
 *    « réparation toiture les andelys », « couvreur 27700 »,
 *    « entreprise de couverture les andelys » : toutes sous le seuil.
 *    Le plan de mots-clés du 31 août les classait en priorité 1. C'est faux.
 *    → Les pages service doivent porter le terme métier générique, qui lui a
 *      du volume, et ajouter la commune pour l'intention locale — pas
 *      l'inverse.
 *
 * 2. Les Andelys est un très petit marché de recherche (50/mois).
 *    Les communes voisines pèsent 4 à 10 fois plus. La proximité joue pour
 *    le pack local, mais le volume est ailleurs.
 *
 * 3. « zinguerie » est en concurrence FAIBLE (indice 31) pour 3 600
 *    recherches, et « couvreur zingueur » ajoute 3 600 de plus. C'est le
 *    meilleur rapport volume / difficulté de toute la liste — et c'est déjà
 *    le seul mot-clé où le site se classait 1er avant refonte.
 */

export type Volume = {
  mot: string;
  volume: number | null; // null = sous le seuil de mesure
  concurrence: "LOW" | "MEDIUM" | "HIGH" | null;
  indice: number | null; // 0-100
  cpc: number | null;
};

/** Termes métier génériques — c'est là qu'est le volume. */
export const volumesServices: Volume[] = [
  { mot: "isolation combles", volume: 18100, concurrence: "MEDIUM", indice: 64, cpc: 4.06 },
  { mot: "charpente", volume: 14800, concurrence: "LOW", indice: 14, cpc: 2.6 },
  { mot: "nettoyage toiture", volume: 12100, concurrence: "HIGH", indice: 100, cpc: 4.22 },
  { mot: "démoussage toiture", volume: 8100, concurrence: "HIGH", indice: 100, cpc: 4.25 },
  { mot: "toiture ardoise", volume: 6600, concurrence: "HIGH", indice: 79, cpc: 0.84 },
  { mot: "faîtage toiture", volume: 5400, concurrence: "MEDIUM", indice: 61, cpc: 1.99 },
  { mot: "étanchéité toit terrasse", volume: 4400, concurrence: "HIGH", indice: 100, cpc: 4.55 },
  { mot: "rénovation toiture", volume: 3600, concurrence: "MEDIUM", indice: 50, cpc: 3.55 },
  { mot: "zinguerie", volume: 3600, concurrence: "LOW", indice: 31, cpc: 2.08 },
  { mot: "couvreur zingueur", volume: 3600, concurrence: "MEDIUM", indice: 57, cpc: 3.37 },
  { mot: "peinture toiture", volume: 2400, concurrence: "HIGH", indice: 100, cpc: 1.83 },
  { mot: "pose velux", volume: 1300, concurrence: "MEDIUM", indice: 61, cpc: 3.75 },
  { mot: "aide rénovation toiture", volume: 880, concurrence: "HIGH", indice: 76, cpc: 3.33 },
  { mot: "traitement hydrofuge toiture", volume: 880, concurrence: "HIGH", indice: 100, cpc: 3.19 },
  { mot: "réparation toiture", volume: 880, concurrence: "HIGH", indice: 90, cpc: 4.39 },
  { mot: "réparation gouttière", volume: 720, concurrence: "HIGH", indice: 100, cpc: 5.36 },
  { mot: "prix rénovation toiture m2", volume: 590, concurrence: "HIGH", indice: 68, cpc: 4.16 },
  { mot: "devis couvreur", volume: 210, concurrence: "MEDIUM", indice: 56, cpc: 8.77 },
];

/** « couvreur + commune » — le volume local réel. */
export const volumesCommunes: Volume[] = [
  { mot: "couvreur vernon", volume: 480, concurrence: "MEDIUM", indice: 64, cpc: 6.37 },
  { mot: "couvreur évreux", volume: 390, concurrence: "HIGH", indice: 72, cpc: 2.85 },
  { mot: "couvreur gisors", volume: 260, concurrence: "MEDIUM", indice: 48, cpc: 2.64 },
  { mot: "couvreur louviers", volume: 210, concurrence: "HIGH", indice: 77, cpc: 2.14 },
  { mot: "couvreur gaillon", volume: 70, concurrence: "MEDIUM", indice: 60, cpc: 3.69 },
  { mot: "couvreur les andelys", volume: 50, concurrence: "HIGH", indice: 100, cpc: 1.3 },
  { mot: "couvreur étrépagny", volume: 40, concurrence: "HIGH", indice: 71, cpc: 0.85 },
];

/** Requêtes sans volume mesurable — ne pas construire un title dessus. */
export const sansVolume = [
  "couvreur 27700",
  "entreprise de couverture les andelys",
  "démoussage toiture les andelys",
  "nettoyage toiture les andelys",
  "réparation toiture les andelys",
  "rénovation toiture les andelys",
  "démoussage toiture vernon",
];

/**
 * Note sur la balise meta keywords : Google l'ignore depuis 2009 et l'a
 * confirmé publiquement. Elle n'est pas posée sur ce site — le travail de
 * mots-clés est dans le title, la description, le H1 et le contenu, seuls
 * endroits où il compte.
 */
