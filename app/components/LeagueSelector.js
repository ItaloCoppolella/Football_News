// Permette all’utente di scegliere un campionato.

import Link from "next/link";

export default function LeagueSelector() {
  const leagues = [
    {
      id: "serie-a-2023",
      label: "Serie A 2023/24"
    }
  ];

  return (
    <div>
      <h2>Seleziona un campionato</h2>
      <ul>
        {leagues.map((league) => (
          <li key={league.id}>
            <Link href={`/league/${league.id}`}>{league.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}