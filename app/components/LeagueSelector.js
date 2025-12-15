// Permette all’utente di scegliere un campionato.

import Link from "next/link";
import styles from "./LeagueSelector.module.css";

export default function LeagueSelector() {
  const leagues = [
    { id: "serie-a-2023", label: "Serie A 2023/24" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Seleziona un campionato</h2>
      <ul className={styles.list}>
        {leagues.map((league) => (
          <li key={league.id} className={styles.item}>
            <Link href={`/league/${league.id}`} className={styles.link}>
              {league.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}