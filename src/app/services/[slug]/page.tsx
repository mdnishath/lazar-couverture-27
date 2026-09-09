import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { servicesBySlug, serviceSlugs } from "@/content/services";
import { villes, villesBySlug } from "@/content/villes";
import { combosParService } from "@/content/combos";
import { avisPourService } from "@/content/avis";
import { getPhotoSet, galerie, photoPrincipale } from "@/content/images";
import { pageMeta } from "@/lib/seo";
import { ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/schema/LocalBusiness";
import { Answer, DataTable, ExperienceBlock } from "@/components/Answer";
import { parseInline } from "@/components/RichText";
import {
  Section,
  SectionTitle,
  Eyebrow,
  CtaPair,
  RatingBadge,
  PhotoBlock,
  PhotoGrid,
  Faq,
  Breadcrumb,
  CheckIcon,
  ArrowIcon,
  StarIcon,
} from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesBySlug.get(slug);
  if (!s) return {};
  return pageMeta({
    title: s.title,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
    image: photoPrincipale(s.photoDir),
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = servicesBySlug.get(slug);
  if (!s) notFound();

  const related = s.related
    .map((r) => servicesBySlug.get(r))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const photos = getPhotoSet(s.photoDir);
  // Les autres photos du dossier, complétées par la galerie si besoin (3 max).
  const chantiers = [
    ...photos.files.slice(1),
    ...galerie.filter((g) => !photos.files.some((f) => f.src === g.src)),
  ].slice(0, 3);
  const reviews = avisPourService(s.slug);
  const combos = combosParService(s.slug);

  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: s.name, href: `/services/${s.slug}` },
  ];

  return (
    <>
      <ServiceSchema name={s.name} description={s.metaDescription} url={`${site.url}/services/${s.slug}`} />
      <FaqSchema items={s.faq} />
      <BreadcrumbSchema trail={trail} />
      <Breadcrumb trail={trail} />

      {/* HERO */}
      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <Eyebrow>{s.name}</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              {s.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{s.lead}</p>
            <CtaPair className="mt-8" />
            <RatingBadge className="mt-7" />
          </div>
          {/* Même traitement que l'accueil : format haut et cadre orange
              décalé, pour que la colonne de droite tienne la hauteur du texte
              au lieu de laisser un vide sous la photo. */}
          <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ml-auto">
            <div
              className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full border border-brand-500/45"
              aria-hidden="true"
            />
            <PhotoBlock
              label={photos.label}
              photo={photos.files[0]}
              ratio="aspect-[4/5]"
              className="relative shadow-[0_40px_70px_-25px_rgba(0,0,0,0.85)]"
              priority
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 100vw"
            />
          </div>
        </div>
      </Section>

      {/* CONTENU */}
      <Section className="border-t border-ink-800 pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
          <article className="max-w-3xl">
            {s.blocks.map((b, bi) => (
              <div key={b.h2} className="mb-12">
                <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">{b.h2}</h2>
                {/* La capsule repond entierement au h2 en deux phrases : c'est ce
                    qu'un moteur reprend, elle passe donc avant tout le reste. */}
                {b.capsule && <Answer>{b.capsule}</Answer>}
                {b.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-ink-300">
                    {parseInline(p)}
                  </p>
                ))}
                {b.table && <DataTable data={b.table} />}
                {/* Vecu de terrain, apres la premiere capsule : c'est la que le
                    lecteur decide s'il fait confiance. Rien ne s'affiche tant que
                    `experience` n'est pas renseigne — pas de consigne a l'ecran. */}
                {bi === 0 && s.experience && <ExperienceBlock text={s.experience} />}
                {b.list && (
                  <ul className="mt-5 space-y-3">
                    {b.list.map((li) => (
                      <li key={li} className="flex gap-3 leading-relaxed text-ink-300">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                        <span>{parseInline(li)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {s.priceNote && (
              <div className="mb-12 border-l-4 border-brand-500 bg-ink-900 p-6">
                <h2 className="font-display text-2xl font-bold uppercase">Combien ça coûte ?</h2>
                <p className="mt-3 leading-relaxed text-ink-300">{parseInline(s.priceNote)}</p>
              </div>
            )}

            {reviews.length > 0 && (
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold uppercase">Ce qu&apos;en disent nos clients</h2>
                <div className="mt-6 space-y-5">
                  {reviews.map((a) => (
                    <figure key={a.auteur} className="border border-ink-800 bg-ink-900 p-6">
                      <div role="img" className="flex gap-0.5 text-brand-300" aria-label={`${a.note} sur 5`}>
                        {Array.from({ length: a.note }).map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <blockquote className="mt-3 leading-relaxed text-ink-200">
                        <p>{a.texte}</p>
                      </blockquote>
                      <figcaption className="mt-4 font-mono text-xs text-ink-400">
                        {a.auteur} — {a.dateLabel}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-12">
              <h2 className="font-display text-3xl font-bold uppercase">Questions fréquentes</h2>
              <Faq items={s.faq} />
            </div>

            <div>
              {combos.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-display text-3xl font-bold uppercase">
                    {s.name} : le détail commune par commune
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-300">
                    Le bâti n&apos;est pas le même d&apos;une commune à l&apos;autre, et les désordres non
                    plus. Ces pages détaillent ce qui change sur le terrain.
                  </p>
                  <ul className="mt-6 grid border-l border-t border-ink-800 sm:grid-cols-2">
                    {combos.map((c) => {
                      const w = villesBySlug.get(c.ville);
                      return (
                        <li key={c.ville} className="border-b border-r border-ink-800">
                          <Link
                            href={`/interventions/${c.service}-${c.ville}`}
                            className="flex items-baseline justify-between gap-3 px-5 py-4 text-[15px] text-ink-300 transition-colors hover:bg-ink-900 hover:text-brand-300"
                          >
                            <span>{s.name} {w?.nomAvec}</span>
                            <span className="font-mono text-xs text-ink-500">{w?.cp}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <h2 className="font-display text-3xl font-bold uppercase">Nous intervenons à…</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {villes.map((v) => (
                  <li key={v.slug}>
                    <Link
                      href={`/couvreur/${v.slug}`}
                      className="inline-block border border-ink-700 px-3.5 py-2 font-mono text-xs text-ink-300 transition-colors hover:border-brand-400 hover:text-brand-300"
                    >
                      {v.nom} ({v.cp})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ASIDE */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-ink-700 bg-ink-900 p-6">
              <h2 className="font-display text-2xl font-bold uppercase">Devis gratuit</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
                Diagnostic sur place, devis détaillé, sans engagement. Réponse sous 24 h ouvrées.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="bg-brand-500 px-5 py-3 text-center font-display text-lg font-bold uppercase text-white transition-colors hover:bg-brand-400"
                >
                  {site.phone}
                </a>
                <Link
                  href="/devis-gratuit"
                  className="border-2 border-brand-300 px-5 py-3 text-center font-display text-lg font-bold uppercase text-brand-300 transition-colors hover:bg-brand-300 hover:text-ink-950"
                >
                  Demander un devis
                </Link>
              </div>
              <p className="mt-5 font-mono text-xs leading-relaxed text-ink-400">{site.hours.label}</p>
            </div>

            {related.length > 0 && (
              <div className="mt-6 border border-ink-800 p-6">
                <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Prestations liées
                </h2>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="inline-flex items-center gap-2 font-display text-lg font-semibold uppercase text-ink-200 transition-colors hover:text-brand-300"
                      >
                        {r.name} <ArrowIcon className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      {/* CHANTIERS */}
      {chantiers.length > 0 && (
        <Section className="border-t border-ink-800 pt-14">
          <Eyebrow>En chantier</Eyebrow>
          <SectionTitle>{s.name} : nos interventions</SectionTitle>
          <PhotoGrid photos={chantiers} className="mt-8" />
        </Section>
      )}

      {/* CTA */}
      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle>{s.name} : parlons-en</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Nous nous déplaçons aux Andelys et dans toute l&apos;Eure pour établir un diagnostic et un devis
            gratuits.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
