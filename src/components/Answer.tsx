import { parseInline } from "./RichText";

/**
 * Capsule de réponse : les deux phrases placées directement sous le H2, qui
 * répondent entièrement à la question posée par ce H2, sans mise en route.
 *
 * C'est le bloc qu'un moteur de recherche ou un assistant reprend. Tout ce qui
 * suit (nuance, détail, exemple) vient après et n'est plus indispensable pour
 * que la réponse tienne debout.
 */
export function Answer({ children }: { children: string }) {
  return (
    <p className="mt-4 border-l-4 border-brand-500 bg-ink-900/60 py-3 pl-5 pr-4 text-[17px] font-medium leading-relaxed text-ink-100">
      {parseInline(children)}
    </p>
  );
}

export type TableData = {
  caption?: string;
  head: string[];
  rows: string[][];
};

/** Tableau de données — un seul par page, là où une comparaison se lit mieux qu'un paragraphe. */
export function DataTable({ data }: { data: TableData }) {
  return (
    <div className="mt-6 overflow-x-auto border border-ink-700">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
        {data.caption && (
          <caption className="caption-bottom border-t border-ink-800 px-4 py-3 text-left text-[13px] text-ink-400">
            {parseInline(data.caption)}
          </caption>
        )}
        <thead>
          <tr className="bg-ink-900">
            {data.head.map((h) => (
              <th
                key={h}
                scope="col"
                className="whitespace-nowrap border-b border-ink-700 px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <tr key={row.join("|")} className="border-b border-ink-800 last:border-b-0">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 align-top leading-relaxed ${
                    i === 0 ? "font-semibold text-ink-100" : "text-ink-300"
                  }`}
                >
                  {parseInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Section « d'expérience » remplie par un humain. */
export function ExperienceBlock({ text }: { text: string }) {
  return (
    <div className="mt-6 border-l-4 border-brand-400 bg-ink-900 p-6">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-300">
        Ce que nous constatons sur le terrain
      </p>
      <p className="mt-3 text-[17px] leading-relaxed text-ink-200">{parseInline(text)}</p>
    </div>
  );
}
