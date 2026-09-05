import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { combosBySlug, comboSlugs, combosParService, combosParVille } from "@/content/combos";
import { servicesBySlug } from "@/content/services";
import { villesBySlug } from "@/content/villes";
import { avisPourService } from "@/content/avis";
import { getPhotoSet, galerie } from "@/content/images";
import { ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/schema/LocalBusiness";
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
  return comboSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = combosBySlug.get(slug);
  if (!c) return {};
  return {
    title: { absolute: c.title },
    description: c.metaDescription,
    alternates: { canonical: `/interventions/${slug}` },
    openGraph: {
      title: c.title,
      description: c.metaDescription,
      url: `${site.url}/interventions/${slug}`,
      type: "article",
    },
  };
}

export default async function ComboPage({ params }: Props) {
  const { slug } = await params;
  const c = combosBySlug.get(slug);
  if (!c) notFound();

  const s = servicesBySlug.get(c.service);
  const v = villesBySlug.get(c.ville);
  if (!s || !v) notFound();

  const photos = getPhotoSet(s.photoDir).files;
  const hero = photos[0] ?? null;
  const secondaire = photos[1] ?? photos[0] ?? null;
  // Trois vues de chantier, en évitant celles déjà utilisées plus haut.
  const chantiers = [...photos.slice(2), ...galerie].slice(0, 3);

  const reviews = avisPourService(c.service, 2);
  const memeVille = combosParVille(c.ville).filter((x) => x.service !== c.service);
  const memeService = combosParService(c.service).filter((x) => x.ville !== c.ville);
  const voisines = v.voisines
    .map((slug) => villesBySlug.get(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Zone d'intervention", href: "/zone-intervention" },
    { name: v.nom, href: `/couvreur/${v.slug}` },
    { name: s.name, href: `/interventions/${slug}` },
  ];

  return (
    <>
      <ServiceSchema
        name={`${s.name} ${v.nomAvec}`}
        description={c.metaDescription}
        url={`${site.url}/interventions/${slug}`}
      />
      <FaqSchema items={c.faq} />
      <BreadcrumbSchema trail={trail} />
      <Breadcrumb trail={trail} />

      {/* ---------- HERO ---------- */}
      <Section className="pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>
              {s.name} — {v.nom} ({v.cp})
            </Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              {c.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{c.lead}</p>
            <CtaPair className="mt-8" />
            <RatingBadge className="mt-7" />
          </div>
          <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ml-auto">
            <div
              className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full border border-brand-500/45"
              aria-hidden="true"
            />
            <PhotoBlock
              label={`${s.name} — ${v.nom}`}
              photo={hero}
              ratio="aspect-[4/5]"
              className="relative shadow-[0_40px_70px_-25px_rgba(0,0,0,0.85)]"
              priority
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 60vw, 100vw"
            />
          </div>
        </div>
      </Section>

      {/* ---------- L'ANGLE LOCAL ---------- */}
      <Section className="border-y border-ink-800 bg-ink-900">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>Le terrain</Eyebrow>
            <SectionTitle>{c.angle.h2}</SectionTitle>
            <div className="mt-7 space-y-5">
              {c.angle.body.map((t) => (
                <p key={t.slice(0, 40)} className="max-w-2xl text-[17px] leading-relaxed text-ink-300">
                  {t}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <PhotoBlock
              label={`${s.name} ${v.nomAvec}`}
              photo={secondaire}
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
            <ul className="space-y-4 border-l-2 border-brand-500/60 pl-6">
              {v.contexte.slice(0, 3).map((t) => (
                <li key={t.slice(0, 30)} className="flex gap-3 text-[15px] leading-relaxed text-ink-200">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------- MÉTHODE + SECTEURS ---------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Notre méthode</Eyebrow>
            <SectionTitle className="!text-3xl sm:!text-4xl">
              Comment nous procédons
            </SectionTitle>
            {s.blocks[0] && (
              <div className="mt-6 space-y-4">
                {s.blocks[0].body.slice(0, 2).map((t) => (
                  <p key={t.slice(0, 40)} className="text-[16px] leading-relaxed text-ink-300">
                    {t}
                  </p>
                ))}
                {s.blocks[0].list && (
                  <ul className="mt-5 space-y-2.5">
                    {s.blocks[0].list.slice(0, 5).map((li) => (
                      <li key={li} className="flex gap-3 text-[15px] leading-relaxed text-ink-300">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <Link
              href={`/services/${s.slug}`}
              className="mt-7 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-400 transition-colors hover:text-brand-300"
            >
              Tout savoir sur {s.name.toLowerCase()} <ArrowIcon />
            </Link>
          </div>

          <div>
            <Eyebrow>Secteurs desservis</Eyebrow>
            <SectionTitle className="!text-3xl sm:!text-4xl">
              {v.nom} et alentour
            </SectionTitle>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-300">{v.intro}</p>

            {v.hameaux.length > 0 && (
              <>
                <h3 className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                  Hameaux et quartiers
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {v.hameaux.map((h) => (
                    <li
                      key={h}
                      className="border border-ink-700 px-3.5 py-2 font-mono text-xs text-ink-300"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {voisines.length > 0 && (
              <>
                <h3 className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                  Communes voisines
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {voisines.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/couvreur/${n.slug}`}
                        className="inline-block border border-ink-700 px-3.5 py-2 font-mono text-xs text-ink-300 transition-colors hover:border-brand-400 hover:text-brand-300"
                      >
                        {n.nom} ({n.cp})
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link
              href={`/couvreur/${v.slug}`}
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-400 transition-colors hover:text-brand-300"
            >
              Couvreur {v.nomAvec} : toutes nos prestations <ArrowIcon />
            </Link>
          </div>
        </div>
      </Section>

      {/* ---------- CHANTIERS ---------- */}
      {chantiers.length > 0 && (
        <Section className="border-y border-ink-800 bg-ink-900">
          <Eyebrow>En chantier</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl">{s.name} en images</SectionTitle>
          <PhotoGrid photos={chantiers} className="mt-8" />
        </Section>
      )}

      {/* ---------- AVIS ---------- */}
      {reviews.length > 0 && (
        <Section>
          <Eyebrow>Avis clients</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl">
            Ce qu&apos;en disent nos clients
          </SectionTitle>
          <div className="mt-8 grid gap-px bg-ink-800 sm:grid-cols-2">
            {reviews.map((a) => (
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
        </Section>
      )}

      {/* ---------- MAILLAGE ---------- */}
      <Section className="border-t border-ink-800">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {memeVille.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold uppercase">
                Nos autres interventions {v.nomAvec}
              </h2>
              <ul className="mt-5 grid border-l border-t border-ink-800 sm:grid-cols-2">
                {memeVille.map((x) => (
                  <li key={x.ville + x.service} className="border-b border-r border-ink-800">
                    <Link
                      href={`/interventions/${x.service}-${x.ville}`}
                      className="block px-5 py-4 text-[15px] text-ink-300 transition-colors hover:bg-ink-900 hover:text-brand-300"
                    >
                      {servicesBySlug.get(x.service)?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {memeService.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold uppercase">
                {s.name} dans les communes voisines
              </h2>
              <ul className="mt-5 grid border-l border-t border-ink-800 sm:grid-cols-2">
                {memeService.map((x) => {
                  const w = villesBySlug.get(x.ville);
                  return (
                    <li key={x.ville + x.service} className="border-b border-r border-ink-800">
                      <Link
                        href={`/interventions/${x.service}-${x.ville}`}
                        className="flex items-baseline justify-between gap-3 px-5 py-4 text-[15px] text-ink-300 transition-colors hover:bg-ink-900 hover:text-brand-300"
                      >
                        <span>{w?.nom}</span>
                        <span className="font-mono text-xs text-ink-500">{w?.cp}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section className="border-t border-ink-800">
        <Eyebrow>Questions fréquentes</Eyebrow>
        <SectionTitle className="!text-3xl sm:!text-4xl">
          {s.name} {v.nomAvec} : vos questions
        </SectionTitle>
        <Faq items={c.faq} />
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle className="!mt-0">
            {s.name} {v.nomAvec} : parlons-en
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Nous nous déplaçons {v.nomAvec}, nous montons voir la toiture, et vous recevez un devis écrit
            sous 24 h ouvrées. Le diagnostic est gratuit.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
