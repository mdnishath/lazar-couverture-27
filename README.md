# Lazar Couverture 27 — site

Site de **Lazar Couverture 27**, couvreur zingueur aux Andelys (27700) et dans l'Eure.
Next.js 16 (App Router, Turbopack), React 19, TypeScript strict, Tailwind CSS v4.

86 pages, toutes prerendues a la compilation. Aucune base de donnees, aucun CMS :
le contenu vit dans `src/content/`, ce qui rend chaque modification revisable en diff.

## Demarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner les cles
npm run dev
```

`npm run build` compile la version de production, `npm start` la sert.

## Ou se trouve quoi

| Chemin | Role |
| --- | --- |
| `src/lib/site.ts` | **Source unique du NAP** (nom, adresse, telephone, horaires, note). Ne jamais reecrire ces valeurs ailleurs. |
| `src/content/services.ts` · `p1.ts` | Les prestations. `p1.ts` porte les six pages prioritaires, redigees au format capsule + detail + tableau. |
| `src/content/villes.ts` · `interventions.ts` | Communes couvertes et pages service x ville. |
| `src/content/guides.ts` | Guides de fond (prix au m2, aides, ardoise ou tuile...). |
| `src/content/photos.ts` | **Genere** par `prepare-photos.py`. Seule source de photos du site. Ne pas editer a la main. |
| `src/content/avis.ts` | Avis clients. Un avis n'est publie que si `verbatim: true`, c'est-a-dire si le texte exact a ete releve sur la fiche Google. |
| `src/components/schema/` | Donnees structurees JSON-LD (RoofingContractor, Service, FAQPage, BreadcrumbList...). |
| `src/app/actions/formulaire.ts` | Traitement des formulaires devis et contact. |

## Photos et logo

Les images du site sont **exclusivement** des photos de chantier fournies par
l'entreprise. Aucune banque d'images. Le pipeline (`prepare-photos.py`, a la
racine du projet parent) renomme en slug SEO, recadre, redimensionne, ecrit les
metadonnees EXIF, puis regenere `src/content/photos.ts`.

`prepare-logo.py` part du logo fourni par l'entreprise et en tire `logo.png`,
`logo.webp`, les icones et `og.jpg`. Le logo n'est jamais redessine.

## Formulaires

Deux formulaires, un seul chemin d'envoi (`envoyerFormulaire`) :

- **Resend** si `RESEND_API_KEY` est defini — envoi depuis le domaine, meilleure
  delivrabilite, mais exige un domaine verifie par DNS.
- **Web3Forms** sinon. Son plan gratuit refuse les requetes serveur : l'action
  valide et met en forme, puis le navigateur poste lui-meme. Le destinataire est
  celui auquel la cle est rattachee — l'API n'a pas de parametre `to`. Pour
  toucher plusieurs boites, declarer une cle par adresse, separees par une virgule.

Variables a saisir chez l'hebergeur : voir `.env.example`.

## A completer par l'entreprise

- Numero de TVA (ou mention de franchise) et assurance decennale, dans
  `src/app/mentions-legales/page.tsx`.
- Texte exact des avis Google, dans `src/content/avis.ts` (`verbatim: true`).
- Champ `experience` de chaque prestation : le constat de terrain, en une phrase.
