import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { guidesBySlug, guideSlugs, guides } from "@/content/guides";
import { servicesBySlug } from "@/content/services";
import { getPhotoSet } from "@/content/images";
import { ArticleSchema, FaqSchema, BreadcrumbSchema } from "@/components/schema/LocalBusiness";
import {
  Section,
  SectionTitle,
  Eyebrow,
  CtaPair,
  PhotoBlock,
  Faq,
  Breadcrumb,
  CheckIcon,
  ArrowIcon,
} from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = guidesBySlug.get(slug);
  if (!g) return {};
  return {
    // Requête informationnelle : la marque en suffixe volerait 22 caractères
    // utiles sans rien apporter au clic.
    title: { absolute: g.title },
    description: g.metaDescription,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: g.title,
      description: g.metaDescription,
      url: `${site.url}/guides/${slug}`,
      type: "article",
      publishedTime: g.datePublished,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = guidesBySlug.get(slug);
  if (!g) notFound();

  const lies = g.services
    .map((s) => servicesBySlug.get(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const autres = guides.filter((x) => x.slug !== g.slug).slice(0, 4);
  const illustration = lies[0] ? getPhotoSet(lies[0].photoDir).files[0] ?? null : null;

  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: g.titreCourt, href: `/guides/${g.slug}` },
  ];

  return (
    <>
      <ArticleSchema
        headline={g.h1}
        description={g.metaDescription}
        url={`${site.url}/guides/${g.slug}`}
        datePublished={g.datePublished}
      />
      <FaqSchema items={g.faq} />
      <BreadcrumbSchema trail={trail} />
      <Breadcrumb trail={trail} />

      {/* ---------- EN-TÊTE ---------- */}
      <Section className="pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>Guide</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              {g.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{g.lead}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-400">
              Mis à jour le {g.maj} · Lazar Couverture 27, Les Andelys
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0 lg:ml-auto">
            <div
              className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full border border-brand-500/45"
              aria-hidden="true"
            />
            <PhotoBlock
              label={g.titreCourt}
              photo={illustration}
              ratio="aspect-[4/3]"
              className="relative shadow-[0_40px_70px_-25px_rgba(0,0,0,0.85)]"
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </div>
        </div>
      </Section>

      {/* ---------- CORPS + COLONNE ---------- */}
      <Section className="border-t border-ink-800">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="max-w-3xl">
            {/* Sommaire : utile au lecteur, et il donne à Google la structure. */}
            <nav aria-label="Sommaire" className="mb-12 border border-ink-800 bg-ink-900 p-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                Dans ce guide
              </p>
              <ol className="mt-4 space-y-2">
                {g.blocks.map((b, i) => (
                  <li key={b.h2} className="flex gap-3 text-[15px] leading-snug text-ink-300">
                    <span className="font-mono text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
                    <a href={`#${slugifie(b.h2)}`} className="transition-colors hover:text-brand-300">
                      {b.h2}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {g.blocks.map((b) => (
              <div key={b.h2} className="mb-12 scroll-mt-28" id={slugifie(b.h2)}>
                <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">{b.h2}</h2>
                {b.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-ink-300">
                    {p}
                  </p>
                ))}
                {b.list && (
                  <ul className="mt-5 space-y-3">
                    {b.list.map((li) => (
                      <li key={li} className="flex gap-3 leading-relaxed text-ink-300">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mb-12">
              <h2 className="font-display text-3xl font-bold uppercase">Questions fréquentes</h2>
              <Faq items={g.faq} />
            </div>
          </article>

          {/* La colonne collante évite le vide sous un article long. */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-ink-700 bg-ink-900 p-6">
              <h2 className="font-display text-2xl font-bold uppercase">Une question sur votre toit ?</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
                Nous montons voir, nous vous disons ce qui est urgent et ce qui peut attendre. Diagnostic et
                devis gratuits.
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
                  Devis gratuit
                </Link>
              </div>
            </div>

            {lies.length > 0 && (
              <div className="mt-6 border border-ink-800 p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                  Prestations concernées
                </p>
                <ul className="mt-4 space-y-2">
                  {lies.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-[15px] text-ink-300 transition-colors hover:text-brand-300"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 border border-ink-800 p-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                Autres guides
              </p>
              <ul className="mt-4 space-y-3">
                {autres.map((x) => (
                  <li key={x.slug}>
                    <Link
                      href={`/guides/${x.slug}`}
                      className="text-[15px] leading-snug text-ink-300 transition-colors hover:text-brand-300"
                    >
                      {x.titreCourt}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/guides"
                className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-400 transition-colors hover:text-brand-300"
              >
                Tous les guides <ArrowIcon />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle className="!mt-0">Un doute sur votre toiture ?</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Un guide ne remplace pas un coup d&apos;œil sur place. Le déplacement et le devis sont gratuits
            aux Andelys et dans l&apos;Eure.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}

/** Ancre lisible pour le sommaire. */
function slugifie(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
