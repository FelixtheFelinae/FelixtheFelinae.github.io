import type { ReactNode } from "react";

type HeroLayoutProps = { observer: ReactNode; archive: ReactNode };

export function HeroLayout({ observer, archive }: HeroLayoutProps) {
  return (
    <div className="observatory-shell">
      <section className="observer-column" aria-label="FelixtheFelinae observer portrait">
        {observer}
      </section>
      <section className="archive-column" aria-label="Research signal archive">
        {archive}
      </section>
    </div>
  );
}
