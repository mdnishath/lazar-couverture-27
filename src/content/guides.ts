/**
 * GUIDES — haut du funnel.
 *
 * Ces pages visent les requêtes de recherche qui précèdent le devis :
 * « prix rénovation toiture m2 », « quand refaire sa toiture », « aides
 * 2026 », « ardoise ou tuile ». Elles n'ont pas vocation à vendre, mais à
 * répondre — c'est ce qui les fait remonter et c'est ce qui amène ensuite
 * sur les pages service.
 *
 * ⚠️ RÈGLE DE PRUDENCE
 * Aucun montant d'aide, aucun barème, aucun délai légal chiffré n'est avancé :
 * ces informations changent chaque année et une page qui les affiche faux fait
 * plus de mal que de bien. Les guides expliquent COMMENT vérifier, et
 * renvoient vers la source officielle. Ne les « complétez » pas avec des
 * chiffres trouvés ailleurs sans les avoir vérifiés à la source.
 */

export type BlocGuide = { h2: string; body: string[]; list?: string[] };

export type Guide = {
  slug: string;
  titreCourt: string;
  h1: string;
  title: string;
  metaDescription: string;
  datePublished: string;
  maj: string;
  lead: string;
  blocks: BlocGuide[];
  faq: { q: string; a: string }[];
  services: string[]; // slugs, pour le maillage vers les pages service
};

export const guides: Guide[] = [
  {
    slug: "prix-renovation-toiture-m2",
    titreCourt: "Prix d’une rénovation de toiture au m²",
    h1: "Prix d’une rénovation de toiture au m² : ce qui fait vraiment varier le devis",
    title: "Prix rénovation toiture au m² : ce qui fait varier le devis",
    metaDescription:
      "Pourquoi deux toitures de même surface ne coûtent pas le même prix : pente, accès, matériau, état de la charpente. Guide d’un couvreur de l’Eure.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "C’est la première question que tout le monde pose, et la seule à laquelle personne ne peut répondre honnêtement au téléphone. Voici ce qui compose réellement le prix, pour que vous puissiez lire un devis au lieu de le subir.",
    blocks: [
      {
        h2: "Pourquoi le prix au m² annoncé en ligne est presque toujours faux",
        body: [
          "Un prix au mètre carré n’a de sens que si l’on précise de quelle surface on parle. La surface au sol d’une maison et la surface développée de sa toiture peuvent varier de trente pour cent selon la pente. Un site qui annonce un tarif sans préciser lequel des deux il utilise vous donne un chiffre invérifiable.",
          "Deuxième problème : le prix au mètre carré suppose que le coût est proportionnel à la surface. Il ne l’est pas. L’installation — échafaudage, protection, benne — se paie presque pareil sur 60 m² et sur 90 m². C’est pour cette raison qu’une petite toiture coûte proportionnellement plus cher, et qu’un devis honnête sépare les postes.",
        ],
      },
      {
        h2: "Les cinq facteurs qui font le prix",
        body: [
          "Quand nous chiffrons une réfection, ce sont ces cinq éléments qui déterminent l’essentiel du montant. Vous pouvez les vérifier sur n’importe quel devis, y compris ceux de nos confrères.",
        ],
        list: [
          "La surface développée et la pente. Plus la pente est forte, plus la surface réelle est grande et plus la sécurité coûte cher.",
          "L’accès. Rue étroite, jardin sans passage pour la benne, hauteur importante : le poste installation peut doubler avant le premier matériau.",
          "Le matériau. Ardoise naturelle, tuile terre cuite, tuile béton, zinc : la fourniture et le temps de pose n’ont rien à voir d’un support à l’autre.",
          "L’état du support. Liteaux, chevrons, écran sous-toiture. C’est la mauvaise surprise classique, et elle ne se voit qu’en déposant.",
          "L’étendue réelle des travaux. Reprendre trois solins et un faîtage n’est pas une réfection. Une bonne partie du métier consiste à distinguer les deux.",
        ],
      },
      {
        h2: "Comment comparer deux devis sans se tromper",
        body: [
          "Comparez les postes, pas les totaux. Un devis moins cher qui ne mentionne ni l’écran sous-toiture, ni l’évacuation des gravats, ni la reprise de zinguerie n’est pas moins cher : il est incomplet, et la différence réapparaîtra en cours de chantier.",
          "Vérifiez aussi que le matériau est nommé — marque, modèle, teinte — et pas seulement « tuiles ». Deux tuiles du même format peuvent avoir dix ans d’écart de durée de vie. Enfin, méfiez-vous d’un devis établi sans que personne ne soit monté sur le toit : il ne peut pas tenir compte de l’état du support, et c’est précisément là que se cachent les écarts.",
        ],
      },
    ],
    faq: [
      {
        q: "Pouvez-vous me donner un prix au téléphone ?",
        a: "Non, et personne ne le peut sérieusement. Nous nous déplaçons gratuitement, nous montons voir, et vous recevez un devis écrit et détaillé sous 24 heures ouvrées.",
      },
      {
        q: "Le devis est-il payant ?",
        a: "Non. Le déplacement, le diagnostic et le devis sont gratuits et sans engagement dans notre zone d’intervention.",
      },
    ],
    services: ["renovation-toiture", "reparation-toiture", "diagnostic-toiture"],
  },

  {
    slug: "aides-renovation-toiture",
    titreCourt: "Aides à la rénovation de toiture",
    h1: "Aides à la rénovation de toiture : comment savoir ce à quoi vous avez droit",
    title: "Aides rénovation toiture : comment vérifier vos droits",
    metaDescription:
      "Quels dispositifs existent pour une rénovation de toiture, où vérifier vos droits et quels pièges éviter. Guide neutre d’un couvreur de l’Eure.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "Vous trouverez partout des pages qui annoncent des montants d’aide précis. Nous n’en donnerons aucun, et voici pourquoi — puis voici comment obtenir le vrai chiffre, celui qui vous concerne.",
    blocks: [
      {
        h2: "Pourquoi nous n’affichons pas de montants",
        body: [
          "Les dispositifs d’aide à la rénovation énergétique changent de conditions régulièrement : plafonds, revenus de référence, travaux éligibles, obligation de passer par un professionnel qualifié. Une page qui affiche un barème est juste le jour où elle est écrite, et fausse quelques mois plus tard. Nous préférons vous dire où regarder plutôt que vous donner un chiffre périmé.",
          "Deuxième raison, plus importante : le montant dépend de votre situation, pas de votre toiture. Deux voisins qui font exactement les mêmes travaux peuvent obtenir des aides très différentes. Aucun couvreur ne peut vous annoncer un montant sans connaître votre foyer fiscal.",
        ],
      },
      {
        h2: "Où obtenir l’information officielle",
        body: [
          "Le service public d’information sur la rénovation de l’habitat est le seul point d’entrée fiable et gratuit. Il est indépendant des entreprises, et un conseiller peut examiner votre situation. Renseignez-vous auprès de France Rénov’ avant de signer quoi que ce soit — pas après.",
          "Votre commune, votre intercommunalité et le département de l’Eure peuvent également proposer des dispositifs locaux qui ne figurent nulle part sur les sites nationaux. Un appel en mairie coûte cinq minutes et rapporte parfois davantage qu’une aide nationale.",
        ],
      },
      {
        h2: "Le point qui fait perdre le plus d’aides : l’ordre des étapes",
        body: [
          "La plupart des dispositifs exigent que la demande soit déposée avant le démarrage des travaux, et parfois avant même la signature du devis. Des dossiers sont refusés chaque année pour cette seule raison, alors que les travaux étaient parfaitement éligibles.",
          "Concrètement : demandez le devis, ne le signez pas, montez le dossier, attendez l’accord, puis lancez le chantier. Un devis a une durée de validité — nous prolongeons la nôtre sans difficulté quand un dossier d’aide est en cours, il suffit de nous le dire.",
        ],
      },
      {
        h2: "Attention aux démarchages « travaux financés »",
        body: [
          "Le secteur de la rénovation attire un démarchage agressif qui promet des travaux intégralement financés. Un toit ne se refait pas gratuitement. Une entreprise qui vous appelle sans que vous l’ayez sollicitée, qui insiste pour une signature immédiate, ou qui vous demande de signer avant toute visite sur place, doit vous faire raccrocher.",
          "Une règle simple : personne de sérieux ne vous demandera de signer un devis de toiture sans être monté voir la toiture.",
        ],
      },
    ],
    faq: [
      {
        q: "Un simple remplacement de tuiles ouvre-t-il droit à une aide ?",
        a: "Les dispositifs de rénovation énergétique visent en général l’isolation, pas la couverture seule. Une réfection accompagnée d’une isolation de toiture ou de combles change la situation. Faites vérifier votre cas par un conseiller France Rénov’.",
      },
      {
        q: "Pouvez-vous monter le dossier à ma place ?",
        a: "Nous fournissons les pièces qui relèvent de nous — devis détaillé, descriptif technique, factures. Le dossier lui-même appartient au demandeur, et méfiez-vous des entreprises qui proposent de tout gérer en échange de votre signature immédiate.",
      },
    ],
    services: ["isolation-toiture", "isolation-combles", "renovation-toiture"],
  },

  {
    slug: "ardoise-ou-tuile",
    titreCourt: "Ardoise ou tuile ?",
    h1: "Ardoise ou tuile : comment choisir dans l’Eure",
    title: "Ardoise ou tuile : comment choisir dans l’Eure",
    metaDescription:
      "Durée de vie, poids, pente minimale, entretien, réglementation locale : ce qui doit vraiment décider entre ardoise et tuile en Normandie.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "Dans le Vexin normand et la vallée de la Seine, les deux matériaux coexistent, parfois dans la même rue. Le choix se fait rarement sur le goût : il se fait sur la charpente, la pente et la réglementation.",
    blocks: [
      {
        h2: "Ce n’est pas toujours votre choix",
        body: [
          "Avant toute considération technique : modifier le matériau ou la teinte de votre couverture change l’aspect extérieur du bâtiment. Cela relève d’une déclaration préalable en mairie, et dans les secteurs protégés, de l’avis de l’Architecte des Bâtiments de France. Le refus est possible, et il arrive.",
          "C’est le premier point à vérifier, avant de comparer les prix. Un devis validé sur un matériau qui devra finalement être remplacé par un autre est un devis à refaire entièrement.",
        ],
      },
      {
        h2: "La charpente décide souvent à votre place",
        body: [
          "L’ardoise naturelle et la tuile n’ont pas le même poids au mètre carré, et la tuile béton est plus lourde que la terre cuite. Sur une charpente ancienne dimensionnée pour de l’ardoise, passer à la tuile n’est pas un simple choix esthétique : cela peut demander un renforcement, dont le coût dépasse souvent l’écart de prix entre les deux matériaux.",
          "La pente compte tout autant. Chaque matériau a une pente minimale d’emploi en dessous de laquelle il n’est plus étanche, et cette limite dépend aussi de l’exposition au vent. Une toiture à faible pente réduit fortement le choix disponible.",
        ],
      },
      {
        h2: "Durée de vie et entretien : ce qui les sépare vraiment",
        body: [
          "L’ardoise naturelle est un matériau extrêmement durable — au point que, sur les couvertures anciennes du secteur, ce n’est presque jamais l’ardoise qui lâche mais son crochet de fixation. Sur une réfection d’ardoise, la question du mode de fixation compte donc autant que celle du matériau.",
          "La tuile terre cuite vieillit bien mais devient poreuse en surface avec le temps, surtout dans nos conditions d’humidité. Elle demande un entretien plus régulier — démoussage, parfois hydrofuge — pour tenir sa durée annoncée. La tuile béton se salit et se recolonise plus vite que la terre cuite.",
        ],
      },
      {
        h2: "Le mélange des deux, très courant ici",
        body: [
          "Beaucoup de maisons du secteur ont été reprises par morceaux au fil des décennies et présentent aujourd’hui les deux matériaux, parfois sur des versants voisins. Ce n’est pas un problème en soi ; c’est le raccord entre les deux qui l’est. Ces jonctions se traitent en zinguerie, et c’est très souvent par là que l’eau entre.",
          "Si votre toiture est dans ce cas, faites regarder les raccords avant de vous demander quel matériau choisir : la réponse la plus économique est parfois de ne rien changer et de reprendre les jonctions.",
        ],
      },
    ],
    faq: [
      {
        q: "L’ardoise coûte-t-elle forcément plus cher ?",
        a: "En fourniture et en temps de pose, elle est généralement plus coûteuse. Mais le calcul complet doit intégrer la durée de vie et un éventuel renforcement de charpente si vous changez de matériau.",
      },
      {
        q: "Peut-on poser de la tuile à la place de l’ardoise ?",
        a: "Techniquement, cela dépend de la pente et de la charpente. Administrativement, cela demande une déclaration préalable et n’est pas toujours accordé. Les deux points se vérifient avant le devis.",
      },
    ],
    services: ["toiture-ardoise", "toiture-tuile", "renovation-toiture", "charpente"],
  },

  {
    slug: "duree-de-vie-toiture",
    titreCourt: "Combien de temps dure une toiture ?",
    h1: "Combien de temps dure une toiture, et qu’est-ce qui la raccourcit",
    title: "Durée de vie d’une toiture : ce qui la raccourcit",
    metaDescription:
      "Pourquoi deux toitures du même âge n’ont pas le même état : exposition, entretien, zinguerie, ventilation. Guide d’un couvreur des Andelys.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "Les durées annoncées par les fabricants supposent une pose correcte, un entretien régulier et une bonne ventilation. Dans la vraie vie, c’est ce qui entoure la couverture qui décide de sa durée.",
    blocks: [
      {
        h2: "Ce n’est presque jamais la tuile qui lâche en premier",
        body: [
          "Sur les toitures que nous déposons, l’ordre de défaillance est presque toujours le même : d’abord les ouvrages de zinguerie — solins, noues, faîtages —, ensuite les fixations, et seulement en dernier le matériau de couverture lui-même. C’est pour cette raison qu’une toiture peut fuir alors que ses tuiles sont en parfait état.",
          "Conséquence pratique : entretenir une toiture, ce n’est pas surveiller ses tuiles, c’est surveiller ses jonctions. Et refaire une couverture en conservant une zinguerie de même âge revient à poser du neuf sur ce qui va lâcher.",
        ],
      },
      {
        h2: "Les quatre accélérateurs d’usure",
        body: [
          "Dans notre secteur, quatre facteurs raccourcissent nettement la vie d’un toit. Aucun n’est fatal si on le traite tôt.",
        ],
        list: [
          "La mousse. Elle retient l’eau contre le matériau ; le gel fait le reste en dilatant cette eau prise dans la tuile.",
          "Le nettoyage trop agressif. Un excès de pression retire la couche de surface d’une tuile et la rend poreuse — le remède devient la cause.",
          "Une ventilation insuffisante. Des combles mal ventilés font condenser sous la couverture et pourrissent liteaux et chevrons par en dessous.",
          "Une gouttière qui déborde. L’eau repasse derrière et attaque la sablière : le dégât se voit des années plus tard, quand il coûte cher.",
        ],
      },
      {
        h2: "Ce qui rallonge la durée, concrètement",
        body: [
          "Un démoussage tous les trois à cinq ans selon l’exposition, un contrôle visuel après chaque épisode de vent fort, des gouttières vidées deux fois par an, et une reprise ponctuelle des solins dès qu’ils se décollent. C’est peu de choses, et l’écart cumulé sur vingt ans est considérable.",
          "L’autre levier est la ventilation. Beaucoup de couvertures anciennes n’ont pas d’écran sous-toiture, et beaucoup de rénovations récentes ont fermé la ventilation basse sans le vouloir en isolant. Si votre charpente noircit ou que vos combles sentent l’humidité, ce n’est pas une fuite : c’est de la condensation, et cela se traite différemment.",
        ],
      },
    ],
    faq: [
      {
        q: "Ma toiture a trente ans, faut-il la refaire ?",
        a: "L’âge seul ne décide de rien. Une toiture de trente ans entretenue peut être en meilleur état qu’une de quinze ans négligée. C’est l’état du support et des jonctions qui tranche, et cela se voit en montant.",
      },
      {
        q: "Un hydrofuge prolonge-t-il la durée de vie ?",
        a: "Il limite l’absorption d’eau par la tuile, donc la casse au gel, et ralentit le retour de la mousse. Sur une couverture saine, c’est utile. Sur une couverture en fin de vie, il ne rattrape rien.",
      },
    ],
    services: ["diagnostic-toiture", "demoussage-toiture", "traitement-hydrofuge", "zinguerie"],
  },

  {
    slug: "quand-refaire-sa-toiture",
    titreCourt: "Quand refaire sa toiture ?",
    h1: "Quand faut-il refaire sa toiture ? Les signes qui ne trompent pas",
    title: "Quand refaire sa toiture : les signes qui ne trompent pas",
    metaDescription:
      "Réparer ou refaire ? Les signaux qui indiquent qu’une couverture arrive en fin de vie, et ceux qui ne justifient qu’une réparation ciblée.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "La bonne question n’est pas « ma toiture est-elle vieille ? » mais « est-ce que je paie chaque année pour repousser une dépense que je finirai par faire ? ». Voici comment trancher.",
    blocks: [
      {
        h2: "Les signes qui justifient une simple réparation",
        body: [
          "Un désordre localisé sur une couverture par ailleurs saine se répare, et cela prolonge le toit de plusieurs années pour une fraction du coût d’une réfection. Une tuile cassée par une branche, un solin décollé, une faîtière descellée, une gouttière déformée : ce sont des interventions ponctuelles, pas des signaux de fin de vie.",
          "Le test simple : le problème est-il au même endroit à chaque fois, ou ailleurs ? Un désordre qui revient toujours au même point vient du support ou d’un ouvrage précis, et se traite. Un désordre qui apparaît chaque hiver à un endroit différent est un signal de vieillissement général.",
        ],
      },
      {
        h2: "Les signes qui annoncent une réfection",
        body: [
          "Quatre constats changent le diagnostic. Pris isolément, aucun n’est décisif ; réunis, ils indiquent que la réparation devient un mauvais calcul.",
        ],
        list: [
          "Les tuiles s’effritent ou sont poreuses au toucher, et plusieurs sont fendues sur des versants différents.",
          "Les liteaux ou les chevrons sont vermoulus, ou la couverture ondule vue depuis la rue.",
          "Vous appelez chaque hiver pour une fuite à un nouvel endroit.",
          "Il n’y a pas d’écran sous-toiture, et le moindre défaut de couverture se traduit immédiatement par une infiltration.",
        ],
      },
      {
        h2: "Le calcul honnête",
        body: [
          "Additionnez ce que vous avez payé en réparations sur les cinq dernières années, et projetez la même somme sur les cinq prochaines. Comparez au devis de réfection. Si les deux montants se rapprochent, la réfection gagne — parce qu’elle repart pour plusieurs décennies là où la réparation ne fait que tenir.",
          "Il y a une exception à ce raisonnement : si vous comptez vendre à court terme, une réfection ne se récupère pas toujours au prix de vente. Dans ce cas, remettre la toiture en état de fonctionnement et le documenter par des factures vaut souvent mieux qu’une réfection complète. Nous le disons aux clients qui nous l’annoncent.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on refaire une toiture en plusieurs fois ?",
        a: "Sur un bâtiment à plusieurs corps ou versants, oui, à condition de découper sur des lignes franches — un pignon, un faîtage complet — jamais au milieu d’un pan.",
      },
      {
        q: "Combien de temps peut-on attendre ?",
        a: "Tant qu’il n’y a pas d’infiltration active, vous avez le temps de faire faire plusieurs devis. Dès que l’eau entre, l’isolant puis la charpente sont concernés, et l’attente coûte plus qu’elle n’économise.",
      },
    ],
    services: ["renovation-toiture", "reparation-toiture", "diagnostic-toiture"],
  },

  {
    slug: "fuite-toiture-assurance",
    titreCourt: "Fuite de toiture et assurance",
    h1: "Fuite de toiture : ce que l’assurance prend en charge, et ce qu’elle refuse",
    title: "Fuite de toiture et assurance : ce qui est pris en charge",
    metaDescription:
      "Tempête, dégât des eaux, défaut d’entretien : ce qui change la prise en charge d’une fuite de toiture, et les pièces à réunir dès le constat.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "La règle générale surprend souvent : l’assurance indemnise plus facilement les conséquences d’une fuite que la fuite elle-même. Voici la logique, et ce qu’il faut faire dès le premier constat.",
    blocks: [
      {
        h2: "La distinction qui commande tout : événement ou usure",
        body: [
          "Un contrat d’assurance habitation couvre des événements — une tempête, la chute d’un arbre, la grêle — et leurs conséquences. Il ne couvre pas l’usure normale ni le défaut d’entretien, qui relèvent de la charge du propriétaire. Une couverture qui fuit parce qu’elle est en fin de vie n’est donc pas un sinistre assurable, même si la fuite est apparue un jour de pluie.",
          "Cette distinction explique la plupart des refus. Elle explique aussi pourquoi conserver les factures de vos entretiens — démoussage, contrôle après tempête, reprise de solins — pèse au moment d’un sinistre : elles démontrent que le toit était suivi.",
        ],
      },
      {
        h2: "Ce qu’il faut faire dès le constat",
        body: [
          "Deux réflexes utiles, dans cet ordre. D’abord limiter le dommage : c’est une obligation contractuelle courante, et une protection provisoire posée rapidement joue en votre faveur. Ensuite documenter, avant de nettoyer quoi que ce soit.",
        ],
        list: [
          "Photographiez les dégâts intérieurs et extérieurs, avec la date.",
          "Ne jetez pas les éléments tombés — tuile, ardoise, morceau de zinguerie : ils font partie du constat.",
          "Faites poser une protection provisoire si l’eau entre encore.",
          "Déclarez le sinistre à votre assureur sans attendre : votre contrat fixe un délai de déclaration, souvent court.",
          "Demandez un devis détaillé et daté à un couvreur : c’est la pièce que l’assureur exigera.",
        ],
      },
      {
        h2: "Le cas particulier de la mitoyenneté",
        body: [
          "Sur les maisons mitoyennes du centre ancien, l’eau entre fréquemment par un ouvrage partagé — noue mitoyenne, solin contre le mur voisin — et ressort chez l’autre. La question de la prise en charge devient alors une question entre voisins et entre assureurs, pas une question de couverture.",
          "Notre rôle s’arrête à établir d’où l’eau entre, avec des photos datées et un constat écrit. C’est ce document qui permet ensuite de traiter la suite sereinement, et c’est ce que nous fournissons systématiquement.",
        ],
      },
    ],
    faq: [
      {
        q: "L’assurance paie-t-elle la réparation du toit ou seulement les dégâts intérieurs ?",
        a: "Cela dépend de l’origine. Après un événement couvert comme une tempête, la réparation de la toiture est généralement concernée. En cas d’usure, seuls les dégâts consécutifs peuvent l’être, selon le contrat. Votre assureur reste seul à pouvoir trancher votre cas.",
      },
      {
        q: "Fournissez-vous les documents pour l’assurance ?",
        a: "Oui : photos datées, constat de ce que nous avons trouvé, et devis détaillé poste par poste. C’est ce que votre assureur demandera.",
      },
    ],
    services: ["fuite-toiture", "reparation-toiture", "zinguerie"],
  },

  {
    slug: "demoussage-nettoyage-hydrofuge",
    titreCourt: "Démoussage, nettoyage ou hydrofuge ?",
    h1: "Démoussage, nettoyage, hydrofuge : lequel vous faut-il vraiment ?",
    title: "Démoussage, nettoyage ou hydrofuge : lequel choisir ?",
    metaDescription:
      "Trois prestations souvent confondues, trois usages différents. Ce que chacune fait, dans quel ordre les enchaîner, et ce qu’il ne faut pas faire.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "Ces trois mots sont utilisés l’un pour l’autre par à peu près tout le monde, y compris par des entreprises. Ils ne désignent pourtant pas le même travail, et l’ordre dans lequel on les enchaîne compte.",
    blocks: [
      {
        h2: "Trois prestations, trois objectifs",
        body: [
          "Le démoussage traite le vivant : mousse, lichen, algues. Il combine un retrait mécanique et un produit qui poursuit son action après le passage de l’artisan. Son but n’est pas esthétique, il est de supprimer ce qui retient l’eau contre le matériau.",
          "Le nettoyage retire le dépôt et redonne à la couverture son aspect et sa capacité à évacuer l’eau. C’est une opération d’entretien, pas de décoration. Le traitement hydrofuge, enfin, ne nettoie rien : il modifie la surface du matériau pour que l’eau y perle et s’écoule au lieu d’être absorbée par la porosité.",
        ],
      },
      {
        h2: "L’ordre ne change jamais",
        body: [
          "Démoussage, puis nettoyage, puis séchage complet, puis hydrofuge. Un hydrofuge appliqué sur une toiture sale fixe la saleté sous le film : le résultat est pire qu’avant, et il n’est pas rattrapable sans redécaper. Une entreprise qui propose l’hydrofuge sans nettoyage préalable vous vend une couche de produit, pas une protection.",
          "Selon l’état de départ, les trois ne sont pas toujours nécessaires. Sur une toiture peu colonisée, un nettoyage suivi d’un hydrofuge suffit. Sur une toiture très envahie, le démoussage prend l’essentiel du temps et le reste suit.",
        ],
      },
      {
        h2: "Ce qu’il ne faut pas faire",
        body: [
          "Le premier piège est la pression. Un nettoyeur haute pression mal réglé retire l’émail d’une tuile mécanique avec la saleté : elle devient poreuse, absorbe l’eau et se resalit deux fois plus vite. Le dégât ne se voit pas le jour même, ce qui le rend d’autant plus fréquent.",
          "Le second est le traitement d’une couverture qui n’est plus en état de le recevoir. Sur des tuiles friables ou nombreuses à être fendues, ni le démoussage ni l’hydrofuge ne rattrapent quoi que ce soit : le budget est mieux placé dans une réfection. C’est ce que nous disons sur place quand c’est le cas.",
        ],
      },
    ],
    faq: [
      {
        q: "À quelle fréquence faut-il démousser ?",
        a: "En général tous les trois à cinq ans dans notre secteur, selon l’exposition et la végétation autour. Un pan nord bordé d’arbres se recouvre bien plus vite qu’un pan sud dégagé.",
      },
      {
        q: "L’hydrofuge coloré protège-t-il mieux que l’incolore ?",
        a: "Non, la protection est la même. Le coloré ravive en plus la teinte d’origine : c’est un choix esthétique, pas technique.",
      },
    ],
    services: ["demoussage-toiture", "nettoyage-toiture", "traitement-hydrofuge", "peinture-toiture"],
  },

  {
    slug: "autorisations-travaux-toiture",
    titreCourt: "Quelles autorisations pour vos travaux ?",
    h1: "Travaux de toiture : quelles autorisations faut-il demander ?",
    title: "Autorisations travaux de toiture : ce qu’il faut demander",
    metaDescription:
      "Réparation à l’identique, changement de matériau, création de fenêtre de toit : ce qui demande une déclaration préalable et ce qui n’en demande pas.",
    datePublished: "2026-09-01",
    maj: "1er septembre 2026",
    lead:
      "C’est le sujet que l’on découvre le plus souvent trop tard, une fois le devis signé. La règle générale est simple : ce qui modifie l’aspect extérieur se déclare.",
    blocks: [
      {
        h2: "La ligne de partage : à l’identique, ou pas",
        body: [
          "Une réfection à l’identique — même matériau, même format, même teinte — ne modifie pas l’aspect extérieur du bâtiment et ne demande généralement aucune formalité. C’est le cas de la grande majorité des réparations et de beaucoup de réfections.",
          "Dès que l’aspect change, la logique s’inverse. Changer de matériau, changer de teinte, créer une ouverture, modifier une lucarne : ce sont des modifications de façade au sens de l’urbanisme, et elles relèvent d’une déclaration préalable en mairie. Créer une fenêtre de toit entre dans cette catégorie.",
        ],
      },
      {
        h2: "Les secteurs protégés changent la donne",
        body: [
          "Aux abords d’un monument historique et dans les secteurs patrimoniaux, l’Architecte des Bâtiments de France donne son avis, et cet avis conditionne l’autorisation. Le choix du matériau et de la teinte n’y est alors plus libre — on ne vous demandera pas votre préférence, on vous indiquera ce qui est acceptable.",
          "Les Andelys et plusieurs communes du secteur comportent des zones concernées. La seule façon de savoir est de demander en mairie, en donnant votre adresse précise : la limite passe parfois d’un côté à l’autre d’une même rue.",
        ],
      },
      {
        h2: "Le bon moment pour poser la question",
        body: [
          "Avant le devis, pas après. Un devis établi sur un matériau qui sera refusé doit être entièrement refait, et le délai d’instruction s’ajoute au vôtre. Quand nous voyons que le sujet peut se poser, nous vous le signalons au moment du diagnostic — cela fait partie du travail.",
          "Si vous êtes en copropriété ou en lotissement, un troisième niveau s’ajoute : le règlement de copropriété ou le cahier des charges du lotissement peut imposer des contraintes plus strictes que l’urbanisme communal. Vérifiez les trois.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour poser un Velux ?",
        a: "Créer une ouverture modifie l’aspect extérieur : une déclaration préalable est généralement nécessaire. Le remplacement d’une fenêtre de toit existante par un modèle de mêmes dimensions relève d’un régime différent — demandez en mairie.",
      },
      {
        q: "Qui dépose la déclaration ?",
        a: "Le propriétaire, ou son mandataire. Nous fournissons le descriptif technique et les caractéristiques du matériau nécessaires au dossier.",
      },
    ],
    services: ["pose-velux", "renovation-toiture", "toiture-ardoise", "toiture-tuile"],
  },
];

export const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));
export const guideSlugs = guides.map((g) => g.slug);
