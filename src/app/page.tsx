import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { pageMeta } from "@/lib/seo";

import { site } from "@/lib/site";
import { services, p1Services, groupesResolus } from "@/content/services";
import { villes } from "@/content/villes";
import { avisAccueil } from "@/content/avis";
import { photoHero, galerie, photoBande, photoPourService } from "@/content/photos";
import { intro, contexteLocal, demarche, prix, atouts, faq as faqAccueil } from "@/content/accueil";
import { LocalBusinessSchema, FaqSchema } from "@/components/schema/LocalBusiness";
import {
  CtaPair,
  Section,
  Eyebrow,
  SectionTitle,
  Lead,
  RatingBadge,
  PhotoBlock,
  Faq,
  CheckIcon,
  ArrowIcon,
  StarIcon,
} from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Couvreur aux Andelys (27700) — Couvreur zingueur Eure",
  description: "Couvreur zingueur aux Andelys (27700) : rénovation de toiture, fuite, démoussage, zinguerie, gouttières. Devis gratuit, 5,0★ sur 48 avis.",
  path: "/",
});


export default function Home() {

  return (
    <>
      <LocalBusinessSchema />
      <FaqSchema items={faqAccueil} />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950">
        {/* Halo chaud derrière la composition, côté droit. */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-3/5 opacity-45 [background:radial-gradient(70%_60%_at_70%_35%,rgba(210,80,10,0.30),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            {/* — Colonne texte — */}
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                Votre toiture, notre métier
              </p>
              {/* Le H1 porte le mot-clé principal : c'est le signal on-page le
                  plus fort, un slogan y serait du gâchis. */}
              <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.92] sm:text-7xl">
                Couvreur{" "}
                <span className="block text-brand-400">
                  aux Andelys <span className="text-4xl sm:text-5xl">(27700)</span>
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300 sm:text-xl">
                Entreprise de couverture établie aux Andelys : rénovation de toiture, réparation de fuite,
                démoussage, zinguerie et pose de fenêtres de toit, dans tout l&apos;Eure. Diagnostic et devis
                gratuits.
              </p>
              <RatingBadge className="mt-7" />
              <CtaPair className="mt-9" />
              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-300">
                {["Devis gratuit sous 24 h", "Ardoise et tuile", "Artisan local"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-brand-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/*
              — Visuel —
              Une seule photo. Le cadre orange décalé derrière elle donne la
              profondeur sans ajouter d'image : c'est le seul ornement du bloc.
            */}
            <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
              <div
                className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full border border-brand-500/45"
                aria-hidden="true"
              />
              <figure className="relative aspect-[4/5] overflow-hidden shadow-[0_40px_70px_-25px_rgba(0,0,0,0.85)]">
                <Image
                  src={photoHero.src}
                  alt={photoHero.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INTRODUCTION ---------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              {intro.h2}
            </h2>
            <div className="mt-6 space-y-5">
              {intro.paragraphes.map((t) => (
                <p key={t.slice(0, 40)} className="max-w-2xl text-[17px] leading-relaxed text-ink-300">
                  {t}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <dl className="grid grid-cols-2 gap-px border border-ink-800 bg-ink-800">
              {[
                { k: "Adresse", v: "Rue Guynemer, 27700 Les Andelys" },
                { k: "Note Google", v: `${site.rating.value.replace(".", ",")} sur 5 · ${site.rating.count} avis` },
                { k: "Prestations", v: `${services.length} services de couverture` },
                { k: "Devis", v: "Gratuit, sous 24 h ouvrées" },
              ].map((f) => (
                <div key={f.k} className="bg-ink-950 p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400">{f.k}</dt>
                  <dd className="mt-2 font-display text-lg font-bold uppercase leading-tight">{f.v}</dd>
                </div>
              ))}
            </dl>
            {/* La colonne de droite s'arrêtait 200 px avant le texte : la photo
                termine la hauteur au lieu de laisser un trou. */}
            <PhotoBlock
              label={photoPourService("renovation-toiture")!.titre}
              photo={photoPourService("renovation-toiture")!}
              ratio="aspect-[16/10]"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="flex-1"
            />
          </div>
        </div>
      </Section>

      {/* ---------- SERVICES ---------- */}
      <Section>
        <Eyebrow>Nos prestations</Eyebrow>
        <SectionTitle>Nos travaux de couverture aux Andelys</SectionTitle>
        <Lead>
          Du démoussage d&apos;entretien à la réfection complète, nous couvrons l&apos;ensemble des travaux
          de toiture sur le secteur des Andelys. Les six prestations ci-dessous sont les plus demandées.
        </Lead>

        <div className="mt-10 grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
          {p1Services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-ink-950 p-7 transition-colors hover:bg-ink-900"
            >
              <h3 className="font-display text-2xl font-bold uppercase text-ink-50 transition-colors group-hover:text-brand-300">
                {s.name}
              </h3>
              <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-400">{s.lead}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-400">
                En savoir plus <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>

        {/* Les 18 prestations en clair : chaque page enfant reçoit un lien
            depuis l'accueil, c'est ce maillage qui les fait remonter. */}
        <div className="mt-12 border-t border-ink-800 pt-10">
          <h3 className="font-display text-xl font-bold uppercase">Toutes nos prestations</h3>
          <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {groupesResolus.map((g) => (
              <div key={g.titre}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                  {g.titre}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((x) => (
                    <li key={x.slug}>
                      <Link
                        href={`/services/${x.slug}`}
                        className="text-[15px] leading-snug text-ink-300 transition-colors hover:text-brand-300"
                      >
                        {x.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-10 inline-flex items-center gap-2 border-2 border-ink-700 px-6 py-3 font-display text-lg font-bold uppercase text-ink-100 transition-colors hover:border-brand-400 hover:text-brand-300"
          >
            Voir le détail des {services.length} services <ArrowIcon />
          </Link>
        </div>
      </Section>

      {/* ---------- CONTEXTE LOCAL ---------- */}
      <Section className="border-y border-ink-800 bg-ink-900">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>Le terrain</Eyebrow>
            <SectionTitle>{contexteLocal.h2}</SectionTitle>
            <div className="mt-7 space-y-5">
              {contexteLocal.paragraphes.map((t) => (
                <p key={t.slice(0, 40)} className="max-w-2xl text-[17px] leading-relaxed text-ink-300">
                  {t}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            {/* Le pan gauche encore couvert de mousse, le droit nettoyé :
                l'image dit la même chose que le paragraphe. */}
            <PhotoBlock
              label={photoPourService("reparation-toiture")!.titre}
              photo={photoPourService("reparation-toiture")!}
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <ul className="space-y-4 border-l-2 border-brand-500/60 pl-6">
              {contexteLocal.points.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed text-ink-200">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------- DÉMARCHE ---------- */}
      <Section>
        <Eyebrow>Notre façon de travailler</Eyebrow>
        <SectionTitle>Du premier appel à la fin du chantier</SectionTitle>
        <Lead>
          Quatre étapes, toujours les mêmes. C&apos;est ce qui permet de vous dire à l&apos;avance ce qui va
          se passer, et combien cela va coûter.
        </Lead>
        <ol className="mt-10 grid border-l border-t border-ink-800 sm:grid-cols-2 lg:grid-cols-4">
          {demarche.map((e) => (
            <li key={e.n} className="border-b border-r border-ink-800 p-7">
              <span className="font-display text-4xl font-extrabold leading-none text-brand-500/70">
                {e.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{e.titre}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-400">{e.texte}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------- PRIX ---------- */}
      <Section className="border-y border-ink-800 bg-ink-900">
        <Eyebrow>Budget</Eyebrow>
        <SectionTitle>{prix.h2}</SectionTitle>
        <div className="mt-6 space-y-5">
          {prix.paragraphes.map((t) => (
            <p key={t.slice(0, 40)} className="max-w-3xl text-[17px] leading-relaxed text-ink-300">
              {t}
            </p>
          ))}
        </div>
        <div className="mt-10 grid border-l border-t border-ink-800 sm:grid-cols-2 lg:grid-cols-3">
          {prix.facteurs.map((f) => (
            <div key={f.titre} className="border-b border-r border-ink-800 bg-ink-950 p-7">
              <h3 className="font-display text-lg font-bold uppercase text-brand-300">{f.titre}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-400">{f.texte}</p>
            </div>
          ))}
          {/* Cinq facteurs sur une grille de trois : la sixième case est un
              appel à l'action plutôt qu'un trou. */}
          <div className="flex flex-col justify-center border-b border-r border-ink-800 bg-ink-950 p-7">
            <h3 className="font-display text-lg font-bold uppercase">Le chiffre exact, sur place</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-400">
              Nous montons, nous mesurons, et vous recevez un devis écrit sous 24 h ouvrées.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-2 self-start bg-brand-500 px-5 py-2.5 font-mono text-sm font-semibold text-white transition-colors hover:bg-brand-400"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </Section>

      {/* ---------- POURQUOI NOUS ---------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div>
            <Eyebrow>Pourquoi nous choisir</Eyebrow>
            <SectionTitle>Choisir Lazar Couverture 27 aux Andelys</SectionTitle>
            <div className="mt-8 space-y-6">
              {atouts.map((b) => (
                <div key={b.titre} className="flex gap-4">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand-400" />
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase">{b.titre}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-300">{b.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PhotoBlock
            label={photoPourService("zinguerie")!.titre}
            photo={photoPourService("zinguerie")!}
            ratio="aspect-[4/5]"
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="lg:sticky lg:top-28"
          />
        </div>
      </Section>

      {/* ---------- NOS CHANTIERS ---------- */}
      {/*
        Toutes les photos sont des chantiers de l'entreprise. Chaque ALT decrit
        ce qui est reellement visible : c'est ce qui sert la recherche d'images
        et les lecteurs d'ecran, pas une liste de mots-cles.
      */}
      <Section className="border-t border-ink-800">
        <Eyebrow>Nos chantiers</Eyebrow>
        <SectionTitle>Le travail, en photos</SectionTitle>
        <Lead>
          Ardoise, tuile, zinguerie, liteaunage : des chantiers que nous avons realises, photographies sur
          place.
        </Lead>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galerie.map((ph) => (
            <figure key={ph.src} className="group">
              <div className="relative aspect-[3/4] overflow-hidden border border-ink-800">
                <Image
                  src={ph.src}
                  alt={ph.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-lg font-bold uppercase leading-tight text-ink-100">
                  {ph.titre}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-400">{ph.legende}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Photo panoramique : elle est basse en resolution, on la sert donc
            en bande large plutot qu'en vignette agrandie. */}
        <figure className="mt-10">
          <div className="relative aspect-[2/1] overflow-hidden border border-ink-800 sm:aspect-[128/45]">
            <Image
              src={photoBande.src}
              alt={photoBande.alt}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[15px] leading-relaxed text-ink-400">
            {photoBande.legende}
          </figcaption>
        </figure>

        <div className="mt-10">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 border-2 border-ink-700 px-6 py-3 font-display text-lg font-bold uppercase text-ink-100 transition-colors hover:border-brand-400 hover:text-brand-300"
          >
            Voir toutes nos realisations <ArrowIcon />
          </Link>
        </div>
      </Section>

      {/* ---------- AVIS ---------- */}
      <Section>
        <Eyebrow>Avis clients</Eyebrow>
        <SectionTitle>Ce qu&apos;en disent nos clients</SectionTitle>
        <Lead>
          {site.rating.count} avis Google, {site.rating.value.replace(".", ",")} de moyenne. Aucun témoignage
          inventé sur cette page.
        </Lead>

        {avisAccueil.length > 0 ? (
          <div className="mt-10 grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
            {avisAccueil.map((a) => (
              <figure key={a.auteur} className="bg-ink-950 p-7">
                <div className="flex gap-0.5 text-brand-300" aria-label={`${a.note} sur 5`}>
                  {Array.from({ length: a.note }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-ink-200">
                  <p>{a.texte}</p>
                </blockquote>
                <figcaption className="mt-5 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-bold uppercase">{a.auteur}</span>
                  <span className="font-mono text-xs text-ink-400">{a.dateLabel}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          /* Aucun avis recopié pour l'instant : on renvoie vers la source. */
          <div className="mt-10 border border-ink-700 bg-ink-950 p-8 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-12">
              <div>
                <p className="font-display text-6xl font-extrabold leading-none text-brand-400">
                  {site.rating.value.replace(".", ",")}
                </p>
                <div className="mt-3 flex gap-1 text-brand-300" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-400">
                  {site.rating.count} avis Google
                </p>
              </div>
              <div>
                <p className="max-w-xl leading-relaxed text-ink-300">
                  Plutôt que de choisir nous-mêmes les extraits qui nous arrangent, nous vous envoyons à la
                  source. Chaque avis est signé du nom de son auteur et daté.
                </p>
                <a
                  href={site.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-2 border-brand-300 px-6 py-3 font-display text-lg font-bold uppercase text-brand-300 transition-colors hover:bg-brand-300 hover:text-ink-950"
                >
                  Lire les {site.rating.count} avis <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* ---------- ZONE ---------- */}
      <Section className="border-y border-ink-800 bg-ink-900">
        <Eyebrow>Zone d&apos;intervention</Eyebrow>
        <SectionTitle>Couvreur aux Andelys, à Vernon, Gaillon et Gisors</SectionTitle>
        <Lead>
          Basés aux Andelys, nous couvrons la vallée de la Seine, la vallée de l&apos;Andelle et le Vexin
          normand.
        </Lead>
        <ul className="mt-9 grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
          {villes.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/couvreur/${v.slug}`}
                className="flex items-baseline justify-between gap-3 bg-ink-900 px-5 py-4 transition-colors hover:bg-ink-800"
              >
                <span className="font-display text-lg font-semibold uppercase text-ink-100">{v.nom}</span>
                <span className="font-mono text-xs text-ink-400">{v.cp}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section>
        <Eyebrow>Questions fréquentes</Eyebrow>
        <SectionTitle>Questions fréquentes sur les travaux de toiture</SectionTitle>
        <Faq items={faqAccueil} />
      </Section>

      {/* ---------- CTA FINAL ---------- */}
      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase sm:text-5xl">
            Une question sur votre toiture ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Nous passons, nous regardons, et nous vous disons franchement ce qui est urgent et ce qui peut
            attendre. Le diagnostic est gratuit.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
