export type SignalRecord = {
  slug: string;
  title: string;
  description?: string;
  tech: string[];
  tone: "purple" | "orange" | "green" | "pink" | "silver";
  state: "active" | "pending";
  href?: string;
};

export function SignalCard({ signal }: { signal: SignalRecord }) {
  const content = (
    <>
      {signal.state === "active" && <div className="signal-scan" aria-hidden="true" />}
      <header className="signal-header">
        <h2>{signal.title}</h2>
      </header>
      {signal.description && <p className="signal-description">{signal.description}</p>}
      {signal.state === "active" && (
        <div className="signal-card-footer">
          <>
            <div className="tech-list" aria-label="Technologies">
              {signal.tech.map((item) => <span key={item}>{item}</span>)}
            </div>
            <span className="record-link">Open repository <i aria-hidden="true" /></span>
          </>
        </div>
      )}
    </>
  );

  if (signal.state === "pending") {
    return (
      <article className={`signal-card signal-card-pending tone-${signal.tone}`} id={signal.slug} aria-label={`${signal.title}, pending`}>
        {content}
      </article>
    );
  }

  return (
    <a
      className={`signal-card signal-card-active tone-${signal.tone}`}
      href={signal.href}
      id={signal.slug}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${signal.title} GitHub repository`}
    >
      {content}
    </a>
  );
}
