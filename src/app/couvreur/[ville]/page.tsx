import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { villesBySlug, villeSlugs } from "@/content/villes";
import { services, p1Services, servicesBySlug } from "@/content/services";
import { photoVille } from "@/content/images";
import { pageMeta } from "@/lib/seo";
import { combosParVille } from "@/content/combos";
import { FaqSchema, BreadcrumbSchema, VilleSchema } from "@/components/schema/LocalBusiness";
import {
  Section,
  SectionTitle,
  Eyebrow,
  CtaPair,
  RatingBadge,
  PhotoBlock,
  Faq,
  Breadcrumb,
  CheckIcon,
  ArrowIcon,
} from "@/components/ui";

type Props = { params: Promise<{ ville: string }> };

export function generateStaticParams() {
  return villeSlugs.map((ville) => ({ ville }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const v = villesBySlug.get(ville);
  if (!v) return {};
  // Au-dela de ~60 caracteres Google tronque : c'est la commune qui saute.
  // Le suffixe de marque coutait 22 caracteres pour rien sur une requete
  // non-marque, et Google affiche le nom du site a part.
  const title = `Couvreur ${v.nomAvec} (${v.cp}) — Toiture & zinguerie`;
  const description = `Couvreur zingueur ${v.nomAvec} (${v.cp}) : rénovation de toiture, réparation de fuite, démoussage, gouttières. Devis gratuit, 5,0★ sur 48 avis.`;
  return pageMeta({
    title,
    description,
    path: `/couvreur/${v.slug}`,
    image: photoVille(v.slug),
  });
}

export default async function VillePage({ params }: Props) {
  const { ville } = await params;
  const v = villesBySlug.get(ville);
  if (!v) notFound();

  const voisines = v.voisines
    .map((s) => villesBySlug.get(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const combos = combosParVille(v.slug);

  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Zone d'intervention", href: "/zone-intervention" },
    { name: v.nom, href: `/couvreur/${v.slug}` },
  ];

  const faq = [
    {
      q: `Intervenez-vous vraiment ${v.nomAvec} ?`,
      a:
        v.distanceKm === 0
          ? `Oui, ${v.nom} est notre commune d'implantation. C'est là que nous intervenons le plus souvent.`
          : `Oui. ${v.nom} se situe à environ ${v.distanceKm} km de notre siège des Andelys et fait partie de notre zone d'intervention régulière.`,
    },
    {
      q: `Le déplacement ${v.nomAvec} est-il facturé ?`,
      a: "Non. Le déplacement, le diagnostic de toiture et le devis sont gratuits et sans engagement dans notre zone d'intervention.",
    },
    {
      q: "Quels travaux réalisez-vous sur place ?",
      a: `Tous nos travaux de couverture : rénovation et réfection, réparation de fuite, démoussage et nettoyage, traitement hydrofuge, zinguerie, gouttières, fenêtres de toit, charpente et isolation.`,
    },
    {
      q: "Sous quel délai pouvez-vous passer ?",
      a: "Cela dépend de notre planning et de l'urgence. Une infiltration active passe en priorité. Appelez-nous pour un créneau réaliste.",
    },
  ];

  return (
    <>
      <FaqSchema items={faq} />
      <BreadcrumbSchema trail={trail} />
      <VilleSchema
        ville={v.nom}
        cp={v.cp}
        url={`${site.url}/couvreur/${v.slug}`}
        prestations={p1Services.map((s) => ({ name: s.name, slug: s.slug }))}
      />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <Eyebrow>
              {v.nom} — {v.cp}
            </Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              Couvreur {v.nomAvec}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{v.intro}</p>
            <CtaPair className="mt-8" />
            <RatingBadge className="mt-7" />
          </div>
          <PhotoBlock
            label={`Chantier — ${v.nom} (${v.cp})`}
            photo={photoVille(v.slug)}
            ratio="aspect-[4/3]"
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </Section>

      <Section className="border-t border-ink-800 pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
          <article className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
              Les toitures {v.nomAvec}
            </h2>
            {v.contexte.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-ink-300">
                {p}
              </p>
            ))}

            {v.hameaux.length > 0 && (
              <>
                <h2 className="mt-12 font-display text-3xl font-bold uppercase">
                  Hameaux et quartiers desservis
                </h2>
                <p className="mt-4 leading-relaxed text-ink-300">
                  Nous intervenons dans l&apos;ensemble de la commune et ses écarts, notamment :
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
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

            <h2 className="mt-12 font-display text-3xl font-bold uppercase">
              Nos services {v.nomAvec}
            </h2>
            <div className="mt-6 grid gap-px bg-ink-800 sm:grid-cols-2">
              {p1Services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-ink-950 p-5 transition-colors hover:bg-ink-900"
                >
                  <h3 className="font-display text-xl font-bold uppercase transition-colors group-hover:text-brand-300">
                    {s.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-brand-400">
                    Découvrir <ArrowIcon className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-5">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-brand-400 hover:text-brand-300"
              >
                Voir les {services.length} prestations <ArrowIcon />
              </Link>
            </p>

            {combos.length > 0 && (
              <>
                <h2 className="mt-12 font-display text-3xl font-bold uppercase">
                  Nos interventions détaillées {v.nomAvec}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-300">
                  Pour ces prestations, nous avons détaillé ce qui change précisément {v.nomAvec} :
                  type de bâti, contraintes d&apos;accès, désordres les plus fréquents.
                </p>
                <ul className="mt-6 grid border-l border-t border-ink-800 sm:grid-cols-2">
                  {combos.map((c) => (
                    <li key={c.service} className="border-b border-r border-ink-800">
                      <Link
                        href={`/interventions/${c.service}-${c.ville}`}
                        className="block px-5 py-4 text-[15px] text-ink-300 transition-colors hover:bg-ink-900 hover:text-brand-300"
                      >
                        {servicesBySlug.get(c.service)?.name} {v.nomAvec}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-12 font-display text-3xl font-bold uppercase">Questions fréquentes</h2>
            <Faq items={faq} />

            {voisines.length > 0 && (
              <>
                <h2 className="mt-12 font-display text-3xl font-bold uppercase">Communes voisines</h2>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {voisines.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/couvreur/${n.slug}`}
                        className="inline-block border border-ink-700 px-3.5 py-2 font-mono text-xs text-ink-300 transition-colors hover:border-brand-400 hover:text-brand-300"
                      >
                        Couvreur {n.nom}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-ink-700 bg-ink-900 p-6">
              <h2 className="font-display text-2xl font-bold uppercase">Intervention {v.nomAvec}</h2>
              <ul className="mt-4 space-y-2.5 text-[15px] text-ink-300">
                {[
                  v.distanceKm === 0 ? "Commune d'implantation" : `À ${v.distanceKm} km de notre siège`,
                  "Déplacement et devis gratuits",
                  "Ardoise, tuile et zinc",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                    {t}
                  </li>
                ))}
              </ul>
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
          </aside>
        </div>
      </Section>

      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle>Un couvreur {v.nomAvec} ?</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Diagnostic sur place, devis détaillé, sans engagement.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
