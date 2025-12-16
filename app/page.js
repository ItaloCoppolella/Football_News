// Pagina di benvenuto e punto di ingresso dell’app
/* app/page.js */

import LeagueSelector from "./components/LeagueSelector";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
  <div className={styles.card}>
    <h1 className={styles.title}>Calcio Info Viewer</h1>

    <p className={styles.subtitle}>
      Risultati e classifica aggiornati della Serie A
    </p>

    <LeagueSelector />
  </div>
</main>
  );
}
