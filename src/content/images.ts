/**
 * Ancienne API photo du site, desormais alimentee UNIQUEMENT par les photos de
 * l'entreprise (`photos.ts`).
 *
 * Ce fichier servait auparavant un dossier d'images provenant d'un autre
 * couvreur. Elles ont toutes ete retirees : publier la photo d'une autre
 * entreprise est une contrefacon, et les textes ALT nommaient une autre societe
 * et une autre ville.
 *
 * Les signatures sont conservees pour que les pages existantes continuent de
 * fonctionner sans modification.
 */
import {
  photos,
  galerie as galerieReelle,
  photoHero,
  photoPourService,
  photosPourService,
  type Photo,
} from "./photos";

export type { Photo };

export type PhotoSet = {
  dir: string;
  label: string;
  hasPhoto: boolean;
  files: Photo[];
};

/**
 * Les anciens `photoDir` ("05-nettoyage-demoussage-toiture"…) sont conserves
 * comme cles : chaque page continue de demander son dossier, mais recoit
 * desormais de vraies photos, choisies par service.
 */
const DIR_VERS_SERVICE: Record<string, string> = {
  "01-couverture-toiture": "charpente",
  "02-reparation-renovation-toiture": "renovation-toiture",
  "03-pose-tuile-ardoise-zinc": "toiture-tuile",
  "04-gouttiere-descente-eau": "zinguerie",
  "05-nettoyage-demoussage-toiture": "nettoyage-toiture",
  "06-fuite-etancheite-toiture": "fuite-toiture",
  "07-pose-velux-fenetre-de-toit": "isolation-combles",
  "08-travaux-de-charpente": "charpente",
  "09-travaux-de-zinguerie": "zinguerie",
  "10-ravalement-de-facade": "toiture-ardoise",
  "11-realisations-chantiers": "renovation-toiture",
  "12-villes-zones-intervention": "diagnostic-toiture",
  "00-hero": "toiture-ardoise",
};

const LABELS: Record<string, string> = {
  "charpente": "Charpente et liteaunage",
  "renovation-toiture": "Rénovation de toiture",
  "toiture-tuile": "Couverture en tuiles",
  "toiture-ardoise": "Couverture en ardoise",
  "zinguerie": "Zinguerie",
  "nettoyage-toiture": "Nettoyage de toiture",
  "fuite-toiture": "Recherche de fuite",
  "isolation-combles": "Isolation",
  "isolation-toiture": "Isolation de toiture",
  "diagnostic-toiture": "Diagnostic de toiture",
  "reparation-toiture": "Réparation de toiture",
  "faitage": "Faîtage et arêtier",
  "etancheite-toit-terrasse": "Étanchéité et zinc",
  "demoussage-toiture": "Démoussage",
};

/** Accepte indifferemment un ancien `photoDir` ou un slug de service. */
export function getPhotoSet(cle: string): PhotoSet {
  const service = DIR_VERS_SERVICE[cle] ?? cle;
  const files = photosPourService(service, 4);
  return {
    dir: cle,
    label: LABELS[service] ?? "Chantier",
    hasPhoto: files.length > 0,
    files,
  };
}

export function photoPrincipale(cle: string): Photo {
  const service = DIR_VERS_SERVICE[cle] ?? cle;
  return photoPourService(service);
}

/** Galerie generale : toutes les photos de chantier. */
export const galerie: Photo[] = galerieReelle;

export { photos, photoHero, photoPourService, photosPourService };

/** Conserve pour compatibilite : l'ALT vient maintenant de la photo elle-meme. */
export function altPour(service: string, ville = "Les Andelys", cp = "27700") {
  return `${service} réalisé par Lazar Couverture 27 à ${ville} (${cp})`;
}

/**
 * Photo d'illustration d'une page commune.
 *
 * Il n'existe pas de photo par commune : on repartit la photothèque de facon
 * stable a partir du slug, pour que deux communes voisines n'affichent pas la
 * meme image tout en gardant le meme visuel a chaque visite.
 */
export function photoVille(slug: string): Photo {
  const somme = [...slug].reduce((n, c) => n + c.charCodeAt(0), 0);
  return galerieReelle[somme % galerieReelle.length] ?? photoHero;
}
