// Pagina che carica i dati del campionato selezionato

import MatchList from "@/app/components/MatchList";
import LeagueTable from "@/app/components/LeagueTable";

async function getLeagueData() {
  const url =
    "https://raw.githubusercontent.com/openfootball/football.json/master/2023-24/it.1.json";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Errore nel fetch dei dati!");

  return res.json();
}

export default async function LeaguePage({ params }) {
  const data = await getLeagueData();

  return (
    <main style={{ padding: "20px" }}>
      <h1>{data.name}</h1>
      <p>Stagione: Serie A 2023/24</p>

      <MatchList matches={data.matches} />
      <LeagueTable matches={data.matches} />
    </main>
  );
}