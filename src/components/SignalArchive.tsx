import { SignalCard, type SignalRecord } from "./SignalCard";

const signals: SignalRecord[] = [
  {
    slug: "wall-climbing-quadruped",
    title: "Wall-Climbing Quadruped",
    description: "A quadruped robot with active suction feet for free-form surface adhesion, developed at HUST.",
    tech: ["STM32F407", "12× HTD-85H servos", "Active suction"],
    tone: "green",
    state: "active",
    href: "https://github.com/FelixtheFelinae/wall-climbing-quadruped",
  },
  { slug: "vision-tactile", title: "Coming soon", tech: [], tone: "orange", state: "pending" },
  { slug: "humanoid-manipulation", title: "Coming soon", tech: [], tone: "purple", state: "pending" },
];

export function SignalArchive() {
  return (
    <div className="signal-archive">
      <header className="archive-header">
        <div className="archive-title-row">
          <h2>Research Archive</h2>
        </div>
        <div className="archive-intro">
          <p>One active repository. Further research records are in preparation.</p>
        </div>
      </header>

      <div className="signal-list">
        {signals.map((signal) => <SignalCard signal={signal} key={signal.slug} />)}
      </div>

      <div className="archive-end" aria-hidden="true" />
    </div>
  );
}
