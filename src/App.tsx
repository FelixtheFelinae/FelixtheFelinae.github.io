import { BackgroundLayer } from "./components/BackgroundLayer";
import { HeroLayout } from "./components/HeroLayout";
import { ObserverPanel } from "./components/ObserverPanel";
import { SignalArchive } from "./components/SignalArchive";

export function App() {
  return (
    <main>
      <BackgroundLayer />
      <HeroLayout observer={<ObserverPanel />} archive={<SignalArchive />} />
    </main>
  );
}

