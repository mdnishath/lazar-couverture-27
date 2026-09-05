/**
 * Photothèque du site — UNIQUEMENT des photos de l'entreprise.
 *
 * Generee par prepare-photos.py depuis le dossier `new/`. Aucune image
 * tierce : le site ne doit jamais publier la photo d'une autre entreprise.
 *
 * Les ALT decrivent ce qui est reellement visible sur la photo. Ils ont ete
 * ecrits apres l'avoir regardee, pas deduits du nom de fichier.
 */
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  titre: string;
  legende: string;
  service: string;
  role: "hero" | "grid" | "band";
};

export const photos: Photo[] = [
  {
    src: "/photos/chantiers/couvreur-toiture-ardoise-maison-de-maitre-eure-27.jpg",
    width: 1200,
    height: 1600,
    alt: "Couvreur en nacelle sur la toiture en ardoise d'une maison de maître en brique, avec tourelle, lucarnes ouvragées et épi de faîtage",
    titre: "Rénovation de toiture en ardoise sur maison de maître",
    legende: "Toiture en ardoise, tourelle et lucarnes : le bâti bourgeois du secteur demande une reprise à l'identique.",
    service: "toiture-ardoise",
    role: "hero",
  },
  {
    src: "/photos/chantiers/refection-toiture-tuiles-reparties-liteaunage-eure-27.jpg",
    width: 1170,
    height: 1560,
    alt: "Couvreur posant des tuiles neuves réparties par piles sur le liteaunage d'une toiture en cours de réfection, sur écran de sous-toiture noir",
    titre: "Tuiles réparties sur le liteaunage avant pose",
    legende: "Les tuiles sont réparties par piles avant la pose : c'est ce qui donne des rangs réguliers.",
    service: "renovation-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/couverture-zinc-joint-debout-toit-terrasse-verriere-eure-27.jpg",
    width: 1200,
    height: 900,
    alt: "Couverture en zinc à joint debout sur toiture à faible pente, avec verrière encastrée, chapeau de ventilation et relevés en zinc en périphérie",
    titre: "Couverture en zinc à joint debout avec verrière",
    legende: "Zinc à joint debout sur faible pente : la solution quand l'ardoise ou la tuile ne peuvent pas être posées.",
    service: "etancheite-toit-terrasse",
    role: "grid",
  },
  {
    src: "/photos/chantiers/zinguerie-solin-zinc-toiture-tuile-eure-27.jpg",
    width: 900,
    height: 1600,
    alt: "Solin en zinc neuf façonné à la main le long d'une toiture en tuiles, assurant l'étanchéité entre la couverture et le mur",
    titre: "Solin en zinc façonné sur toiture en tuiles",
    legende: "Un solin en zinc façonné sur place : c'est ce raccord, et non la tuile, qui laisse passer l'eau quand il fatigue.",
    service: "zinguerie",
    role: "grid",
  },
  {
    src: "/photos/chantiers/lucarne-habillage-zinc-toiture-ardoise-eure-27.jpg",
    width: 740,
    height: 1248,
    alt: "Lucarne en cours de reprise sur une toiture en ardoise, avec habillage neuf en zinc sur les joues et le fronton, vue depuis l'échafaudage",
    titre: "Habillage en zinc d'une lucarne sur toiture ardoise",
    legende: "Reprise complète d'une lucarne : habillage zinc des joues, du fronton et raccord sur l'ardoise.",
    service: "zinguerie",
    role: "grid",
  },
  {
    src: "/photos/chantiers/reparation-toiture-remplacement-tuiles-cassees-eure-27.jpg",
    width: 900,
    height: 1600,
    alt: "Tuiles neuves posées en remplacement d'éléments cassés sur une toiture ancienne couverte de lichen, près d'une souche de cheminée",
    titre: "Remplacement de tuiles cassées sur toiture ancienne",
    legende: "Remplacement ciblé des tuiles cassées : les éléments neufs se repèrent à leur teinte.",
    service: "reparation-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/depose-ancienne-couverture-voliges-chantier-eure-27.jpg",
    width: 1200,
    height: 1600,
    alt: "Deux couvreurs déposant l'ancienne couverture en tuiles d'une maison, mettant à nu les voliges et posant un liteau neuf",
    titre: "Dépose de l'ancienne couverture",
    legende: "Dépose de l'ancienne couverture : c'est à ce moment que l'état réel de la charpente apparaît.",
    service: "renovation-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/ecran-sous-toiture-contre-lattes-renovation-eure-27.jpg",
    width: 1170,
    height: 1560,
    alt: "Écran de sous-toiture posé sur toute la surface d'un toit, avec contre-lattes en bois en cours de fixation avant le liteaunage",
    titre: "Écran de sous-toiture et contre-lattage",
    legende: "L'écran de sous-toiture, absent de la plupart des maisons anciennes, est la seconde barrière contre l'eau.",
    service: "renovation-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/pose-tuiles-neuves-liteaunage-toiture-tuile-eure-27.jpg",
    width: 1200,
    height: 1600,
    alt: "Premiers rangs de tuiles neuves posés sur le liteaunage et le contre-lattage d'une toiture, le reste de l'écran de sous-toiture encore visible",
    titre: "Pose des tuiles neuves sur liteaunage",
    legende: "Les premiers rangs donnent l'alignement de toute la couverture.",
    service: "toiture-tuile",
    role: "grid",
  },
  {
    src: "/photos/chantiers/liteaunage-ecran-sous-toiture-couverture-neuve-eure-27.jpg",
    width: 1200,
    height: 900,
    alt: "Liteaunage neuf en bois posé sur un écran de sous-toiture noir, avec voliges au faîtage, vu depuis l'échafaudage de chantier",
    titre: "Liteaunage neuf sur écran de sous-toiture",
    legende: "Liteaunage neuf posé au pas de la tuile retenue : l'écartement conditionne le recouvrement.",
    service: "charpente",
    role: "grid",
  },
  {
    src: "/photos/chantiers/chevrons-neufs-isolation-toiture-sarking-eure-27.jpg",
    width: 1200,
    height: 675,
    alt: "Chevrons en bois neufs posés au-dessus d'une couche d'isolant en laine minérale, lors d'une isolation de toiture par l'extérieur",
    titre: "Chevrons neufs posés sur isolation de toiture",
    legende: "Isoler par l'extérieur ne se fait qu'une fois la couverture déposée : après, il faut tout redéposer.",
    service: "isolation-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/renovation-toiture-isolation-echafaudage-velux-eure-27.jpg",
    width: 1200,
    height: 1600,
    alt: "Maison sous échafaudage dont la toiture est ouverte en partie basse, laissant voir l'isolant en place entre les chevrons, avec deux fenêtres de toit",
    titre: "Toiture ouverte en partie basse et isolation apparente",
    legende: "Couverture ouverte en partie basse : l'isolant devient accessible sans toucher à l'intérieur.",
    service: "isolation-combles",
    role: "grid",
  },
  {
    src: "/photos/chantiers/faitage-aretier-scelle-mortier-toiture-tuile-eure-27.jpg",
    width: 1200,
    height: 900,
    alt: "Arêtier d'une toiture en tuiles fraîchement scellé au mortier, vu depuis le faîtage, avec les tuiles d'arêtier alignées jusqu'à l'égout",
    titre: "Arêtier scellé au mortier sur toiture en tuiles",
    legende: "Un arêtier repris au mortier : c'est la ligne la plus exposée au vent et au gel.",
    service: "faitage",
    role: "grid",
  },
  {
    src: "/photos/chantiers/renovation-toiture-tuiles-pavillon-lucarnes-eure-27.jpg",
    width: 900,
    height: 1600,
    alt: "Rénovation de la couverture en tuiles d'un pavillon à trois lucarnes, couvreur sur échelle au niveau de l'égout et tuiles neuves stockées au sol",
    titre: "Rénovation de toiture sur pavillon à lucarnes",
    legende: "Reprise de l'égout au faîtage sur un pavillon à lucarnes.",
    service: "diagnostic-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/couvreur-echelle-de-toit-faitage-pavillon-eure-27.jpg",
    width: 828,
    height: 1104,
    alt: "Couvreur assis sur le faîtage d'un pavillon, échelle de toit crochetée sur la couverture en tuiles, au-dessus d'un chien-assis vitré",
    titre: "Contrôle de toiture à l'échelle de toit",
    legende: "Échelle de toit crochetée au faîtage : on monte voir avant de chiffrer, jamais l'inverse.",
    service: "fuite-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/couverture-tuiles-plates-pilier-portail-pierre-eure-27.jpg",
    width: 900,
    height: 1600,
    alt: "Petite couverture en tuiles plates refaite à neuf sur un pilier de portail en pierre, avec rives en zinc et faîtage",
    titre: "Couverture en tuiles plates sur pilier de portail",
    legende: "Petits ouvrages en tuiles plates : mêmes règles de recouvrement qu'un toit entier, à une autre échelle.",
    service: "nettoyage-toiture",
    role: "grid",
  },
  {
    src: "/photos/chantiers/chantier-refection-toiture-tuiles-liteaunage-bande-eure-27.jpg",
    width: 588,
    height: 288,
    alt: "Vue large d'une toiture en cours de réfection, tuiles neuves réparties par piles sur le liteaunage jaune",
    titre: "Réfection de toiture en cours",
    legende: "Réfection en cours : tuiles réparties sur le liteaunage, prêtes à être posées.",
    service: "demoussage-toiture",
    role: "band",
  },
  {
    src: "/photos/chantiers/pose-fenetre-de-toit-velux-maison-pierre-eure-27.jpg",
    width: 739,
    height: 656,
    alt: "Fenêtre de toit posée sur la couverture en tuiles d'une maison en pierre meulière, avec gouttière et descente le long de la façade",
    titre: "Fenêtre de toit sur maison en pierre",
    legende: "Une fenêtre de toit bien abergée sur une couverture en tuiles : le raccord ne se voit pas, et c'est le but.",
    service: "pose-velux",
    role: "grid",
  },
  {
    src: "/photos/chantiers/traitement-toiture-maison-couvreur-faitage-eure-27.jpg",
    width: 727,
    height: 520,
    alt: "Couvreur debout au faîtage d'une maison à toiture en tuiles, nacelle télescopique déployée sur le côté du bâtiment",
    titre: "Intervention sur l'ensemble d'une couverture",
    legende: "Traitement d'une couverture entière : on travaille du faîtage vers l'égout, jamais l'inverse.",
    service: "traitement-hydrofuge",
    role: "grid",
  },
  {
    src: "/photos/chantiers/acces-toiture-echelle-crochetee-gouttiere-eure-27.jpg",
    width: 480,
    height: 640,
    alt: "Vue depuis une toiture en tuiles avec échelle de couvreur crochetée sur le versant, descendant vers la gouttière et la rue en contrebas",
    titre: "Accès à la toiture par échelle crochetée",
    legende: "Échelle crochetée sur le versant : l'accès conditionne le prix autant que le travail lui-même.",
    service: "gouttieres",
    role: "grid",
  },
];

export const photoHero = photos.find((p) => p.role === "hero")!;
export const photoBande = photos.find((p) => p.role === "band")!;
export const galerie = photos.filter((p) => p.role === "grid");

/** Photo rattachee a un service ; retombe sur la galerie si le service n'en a pas. */
export function photoPourService(slug: string): Photo {
  return photos.find((p) => p.service === slug) ?? galerie[0] ?? photoHero;
}

/**
 * Jeu de photos pour une page : celle du service en premier, puis les autres,
 * pour qu'aucune page ne montre exactement la meme serie que sa voisine.
 */
export function photosPourService(slug: string, max = 4): Photo[] {
  const principale = photos.find((p) => p.service === slug);
  const reste = galerie.filter((p) => p.src !== principale?.src);
  const debut = photos.findIndex((p) => p.service === slug);
  const tourne = debut > 0 ? [...reste.slice(debut % reste.length), ...reste.slice(0, debut % reste.length)] : reste;
  return [principale, ...tourne].filter(Boolean).slice(0, max) as Photo[];
}
