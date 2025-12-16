// Permette all’utente di scegliere un campionato.
/* app/components/LeagueSelector.js */

import Link from "next/link";
import styles from "./LeagueSelector.module.css";

export default function LeagueSelector() {
  const leagues = [
    {
      id: "serie-a-2025",
      label: "Serie A 2025/26",
    },
  ];

  return (
    <div className={styles.container}>
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