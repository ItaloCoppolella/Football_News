import Image from "next/image";
import LeagueSelector from "./components/LeagueSelector";

export default function Home() {
  return (
    <main style={{padding: "20px"}}>
      <h1>Calcio Info Viewer</h1>
      <p>Scegli un campionato per iniziare</p>
      <LeagueSelector />
    </main>
  );
}
