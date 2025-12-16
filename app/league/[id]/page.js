// Pagina che carica i dati del campionato selezionato

import LeagueView from "@/app/components/LeagueView";

async function getLeagueData() {
  const url =
    "https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/it.1.json";

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // cache intelligente
  });

  if (!res.ok) {
    throw new Error("Errore nel fetch dei dati Serie A");
  }

  return res.json();
}

export default async function LeaguePage() {
  const data = await getLeagueData();

  return <LeagueView data={data} />;
}
