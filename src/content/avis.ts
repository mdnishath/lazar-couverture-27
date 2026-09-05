/**
 * AVIS CLIENTS — RÈGLE ABSOLUE
 *
 * Ce fichier ne contient QUE des avis Google réels, recopiés mot pour mot
 * depuis la fiche Google Business Profile de Lazar Couverture 27
 * (https://maps.app.goo.gl/bWSMBmM5kD6fdLCWA), relevés le 1er septembre 2026.
 *
 * Les fautes de frappe, accents manquants et doubles espaces des auteurs sont
 * conservés tels quels : c'est ce qu'exige le balisage Review, et c'est aussi
 * ce qui rend les avis crédibles. Ne les « corrigez » pas.
 *
 * L'ancien site affichait « Jean Dupont » et « Marie Lefevre », des noms
 * d'espace réservé : c'est exactement ce qu'il ne faut jamais refaire.
 *
 * `date` est la date de publication approximative sur Google, déduite de
 * l'ancienneté affichée ; `dateLabel` est ce qui s'affiche sur le site.
 * Les avis avec `verbatim: false` ne sont jamais publiés.
 */

export type Avis = {
  auteur: string;
  note: 1 | 2 | 3 | 4 | 5;
  date: string; // ISO — date de publication sur Google
  dateLabel: string;
  commune?: string;
  service?: string; // slug du service concerné, pour filtrer par page
  texte: string;
  verbatim: boolean;
};

export const avis: Avis[] = [
  {
    auteur: "Adrien Perrin",
    note: 5,
    date: "2026-04-01",
    dateLabel: "avril 2026",
    service: "demoussage-toiture",
    texte:
      "Ils ont  fait le  demoussage et le traitement  hydrofuge  de notre toit. Le resultat  est vraiment  visible, les tuiles sont propres et l eau perle  dessus. Franchement ca a  redonne un bel  aspect a la maison",
    verbatim: true,
  },
  {
    auteur: "Didier Lecomte",
    note: 5,
    date: "2026-02-01",
    dateLabel: "février 2026",
    service: "traitement-hydrofuge",
    texte:
      "Première intervention de traitement de toiture : pulvérisation de produits chimiques puissants. Une équipe technique compétente explique la formule, sans COV nocifs ni cancérigènes, et applique une fine pulvérisation protectrice et uniforme. Séchage complet en 1 heure, habitabilité immédiate sans dépose de la toiture. Une confiance totale, désormais garantie par une garantie constructeur écrite de 10 ans. Résultats visibles immédiatement, qualité professionnelle exemplaire !",
    verbatim: true,
  },
  {
    auteur: "ISMAIL RABIU",
    note: 5,
    date: "2026-01-01",
    dateLabel: "janvier 2026",
    service: "traitement-hydrofuge",
    texte:
      "j'ai constaté que le nettoyage de ma toiture est devenu beaucoup plus facile. Elle offre un effet auto-nettoyant qui repousse saletés et mousses, et en plus, elle a gardé son efficacité depuis plusieurs années.",
    verbatim: true,
  },
  {
    auteur: "Béranger Royer",
    note: 5,
    date: "2026-02-01",
    dateLabel: "février 2026",
    service: "zinguerie",
    texte:
      "Des vrais pros du toit et du zinc. Le travail est précis et les finitions sont magnifiques. Je n'hésiterai pas à les rappeler.",
    verbatim: true,
  },
  {
    auteur: "Mathieu Hubert",
    note: 5,
    date: "2026-01-01",
    dateLabel: "janvier 2026",
    service: "renovation-toiture",
    texte:
      "Toit compliqué avec plusieurs pans  et cheminées entièrement repris. Adaptation parfaite aux contraintes. Résultat esthétique et fonctionnel.",
    verbatim: true,
  },
  {
    auteur: "Leala Trépanier",
    note: 5,
    date: "2026-01-01",
    dateLabel: "janvier 2026",
    service: "renovation-toiture",
    texte:
      "Très satisfaite de la prestation globale de rénovation de toiture. Ils sont ponctuels et le devis a été respecté à la lettre.",
    verbatim: true,
  },
  {
    auteur: "Marc Millet",
    note: 5,
    date: "2026-01-01",
    dateLabel: "janvier 2026",
    service: "fuite-toiture",
    texte: "Résultat impeccable. Aucun problème après plusieurs mois de fortes pluies.",
    verbatim: true,
  },
  {
    auteur: "Aubert Garnier",
    note: 5,
    date: "2026-03-01",
    dateLabel: "mars 2026",
    service: "charpente",
    texte:
      "Le bois de notre toit avait besoin d une bonne protection. Intervention rapide, travail soigne, et le prix etait dans la moyenne. On est contents du resultat.",
    verbatim: true,
  },
  {
    auteur: "Monique Lamoureux",
    note: 5,
    date: "2025-11-01",
    dateLabel: "novembre 2025",
    service: "isolation-combles",
    texte:
      "J’ai choisi l’isolation des combles avec de la laine de roche et je ne regrette pas. Les travaux ont été faits rapidement et sans souci. Je ressens déjà le changement dans la maison, il fait meilleur",
    verbatim: true,
  },
  {
    auteur: "Julien Moreau",
    note: 5,
    date: "2025-12-01",
    dateLabel: "décembre 2025",
    service: "peinture-toiture",
    texte:
      "Ma toiture a été repeinte d'un rouge tuile éclatant, remplaçant ainsi le gris terne d'avant. C'est magnifique ! L'équipe a pris grand soin de protéger les murs et les gouttières avant de peindre afin d'éviter les taches. J'apprécie vraiment leur attention.\n\nUn travail très professionnel.",
    verbatim: true,
  },
  {
    auteur: "Caroline Thibault",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "faitage",
    texte:
      "Service intervention rapide pour la rénovation de faîtage et la rénovation de rives. Travail propre, rapide et très professionnel. Le toit a retrouvé toute son étanchéité, je suis vraiment satisfait du résultat final. Je recommande fortement !",
    verbatim: true,
  },
  {
    auteur: "Aurélie Leroy",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "faitage",
    texte:
      "Rénovation de faîtage et de rives réalisée avec professionnalisme. L’équipe a su détecter et réparer les problèmes rapidement. Le toit est maintenant comme neuf. Excellent service et communication tout au long du chantier.",
    verbatim: true,
  },
  {
    auteur: "Bruno Foucher",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "faitage",
    texte:
      "Une belle réussite sur ce chantier. Les tuiles ont été repeintes avec soin, la cheminée stabilisée et le faîtage refait à la perfection. Le toit donne une impression de neuf.",
    verbatim: true,
  },
  {
    auteur: "Pascal Masson",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "charpente",
    texte:
      "Très bon travail pour notre installation de charpente traditionnelle. Résultat de qualité,  équipe agréable et très compétente. Ils ont respecté les délais et ont toujours été disponibles pour nos questions. Une belle expérience que je recommande volontiers",
    verbatim: true,
  },
  {
    auteur: "Bruno Collin",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "nettoyage-toiture",
    texte:
      "J’ai contacté cette entreprise pour un nettoyage et rénovation de toiture. Tout a été parfaitement exécuté. Le toit est impeccable et la façade a retrouvé son éclat. Un service rapide, professionnel et efficace. Merci à toute l’équipe.",
    verbatim: true,
  },
  {
    auteur: "Vincent Fayard",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "toiture-ardoise",
    texte:
      "Ma toiture en ardoise a retrouvé son éclat grâce à cette rénovation. L’équipe a travaillé avec soin et professionnalisme, le rendu est impeccable et durable.",
    verbatim: true,
  },
  {
    auteur: "Vincent Chapel",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "gouttieres",
    texte:
      "L’équipe est intervenue rapidement, nettoyage soigné et durable. Les gouttières en PVC sont bien fixées et le tout est harmonieux.",
    verbatim: true,
  },
  {
    auteur: "Marc Fournier",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "gouttieres",
    texte:
      "Nettoyage rapide mais détaillé, aucun recoin oublié. Les gouttières PVC neuves assurent un écoulement irréprochable.",
    verbatim: true,
  },
  {
    auteur: "Gilles Renard",
    note: 5,
    date: "2025-08-01",
    dateLabel: "août 2025",
    service: "renovation-toiture",
    texte:
      "Très heureux du travail réalisé pour la réfection complète de notre toiture. L’équipe était ponctuelle, sérieuse et très compétente. Chaque étape s’est déroulée dans de bonnes conditions et le résultat est à la hauteur de nos attentes. Le toit est maintenant solide, bien isolé et esthétique. Nous conseillons cette entreprise fiable et professionnelle sans hésiter.",
    verbatim: true,
  },
  {
    auteur: "Laëtitia Benoit",
    note: 5,
    date: "2025-08-01",
    dateLabel: "août 2025",
    service: "reparation-toiture",
    texte:
      "Service irréprochable du début à la fin. L’équipe a réparé ma toiture endommagée et effectué une pose de tuiles avec une grande minutie. J’ai été impressionné par leur organisation, leur ponctualité et la propreté du chantier après intervention. Le résultat final est magnifique et je me sens désormais en sécurité avec une toiture robuste. Un grand merci à toute l’équipe pour leur excellent travail.",
    verbatim: true,
  },
  {
    auteur: "Margaux Colin",
    note: 5,
    date: "2025-06-01",
    dateLabel: "juin 2025",
    service: "toiture-ardoise",
    texte:
      "Rénovation de toiture en ardoise réalisée avec excellence. Les délais ont été respectés, le chantier bien tenu et le résultat est bluffant. Merci à cette entreprise compétente et fiable pour ce travail de qualité. À recommander sans hésitation.",
    verbatim: true,
  },
  {
    auteur: "Louis Girard",
    note: 5,
    date: "2025-06-01",
    dateLabel: "juin 2025",
    texte:
      "Très bon travail de Lazar Couverture 27, couvreurs sérieux et efficaces.\nIntervention rapide, finitions impeccables et chantier propre.\nJe recommande vivement pour tous vos projets de toiture dans l’Eure.",
    verbatim: true,
  },
  {
    auteur: "Sandrine Lefevre",
    note: 5,
    date: "2025-05-01",
    dateLabel: "mai 2025",
    service: "nettoyage-toiture",
    texte:
      "Un travail de qualité pour le nettoyage et la rénovation. L’équipe a respecté les délais, a effectué un travail minutieux et a laissé le chantier propre. Le résultat final est magnifique. Je recommande vivement cette entreprise pour son sérieux et son professionnalisme.",
    verbatim: true,
  },
  {
    auteur: "Jean Dubois",
    note: 5,
    date: "2025-09-01",
    dateLabel: "septembre 2025",
    service: "nettoyage-toiture",
    texte:
      "Le résultat du nettoyage de toiture à haute pression est spectaculaire.  L’équipe a fait un travail soigné et rapide.  Très bon rapport qualité-prix.  Je suis ravi d’avoir choisi cette entreprise.",
    verbatim: true,
  },
  {
    auteur: "Céline Deschamps",
    note: 5,
    date: "2025-02-01",
    dateLabel: "février 2025",
    service: "nettoyage-toiture",
    texte:
      "L'équipe de Nettoyage de toiture à haute pression a fait un travail remarquable sur ma toiture. Très professionnels, efficaces et ponctuels. Ma toiture est comme neuve. Je recommande vivement leurs services pour toute rénovation de toit",
    verbatim: true,
  },
  {
    auteur: "Patricia Rousse",
    note: 5,
    date: "2025-10-01",
    dateLabel: "octobre 2025",
    service: "etancheite-toit-terrasse",
    texte:
      "Travail très soigné sur la rénovation de faîtage et la rénovation de rives. Le couvreur a tout refait avec précision. Résultat parfait, aucune infiltration depuis. Très bon rapport qualité-prix, je recommande sans hésiter.",
    verbatim: true,
  },
];

/** Seuls les avis vérifiés mot pour mot sont publiés. */
export const avisPublies = avis.filter((a) => a.verbatim);

/** Avis à afficher sur une page service donnée. */
export function avisPourService(slug: string, max = 2): Avis[] {
  const cibles = avisPublies.filter((a) => a.service === slug);
  return (cibles.length ? cibles : avisPublies).slice(0, max);
}

/** Sélection pour l'accueil : les plus récents, tous services confondus. */
export const avisAccueil = [...avisPublies]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 6);
