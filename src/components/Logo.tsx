import Image from "next/image";

/**
 * LOGO LAZAR COUVERTURE 27
 *
 * Le logo est le fichier fourni par l'entreprise : `public/logo.png`.
 * Il n'est pas redessine ici — une marque se reproduit, elle ne s'interprete pas.
 *
 * Deposer le fichier dans public/, puis relancer `python prepare-logo.py`
 * (a la racine du projet) pour generer les declinaisons : favicon, icones
 * d'application et image Open Graph.
 */

/** Dimensions du fichier source, mises a jour par prepare-logo.py. */
export const LOGO = { src: "/logo.png", width: 1050, height: 309 };

export function Logo({
  className = "",
  height = 44,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const width = Math.round((LOGO.width / LOGO.height) * height);
  return (
    <Image
      src={LOGO.src}
      alt="Lazar Couverture 27, couvreur aux Andelys"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
