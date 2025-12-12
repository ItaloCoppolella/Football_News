// Mostra la classifica aggiornata in base ai risultati.

import styles from "./LeagueTable.module.css";

export default function LeagueTable({ matches }) {
  if (!matches || !Array.isArray(matches)) {
    return <p>Caricamento classifica...</p>;
  }

  const table = {};

  const ensureTeam = (team) => {
    if (!table[team]) {
      table[team] = {
        team,
        points: 0,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDiff: 0,
      };
    }
  };

  matches.forEach((match) => {
    const { team1, team2, score } = match;

    if (!score?.ft) return;

    const [g1, g2] = score.ft;

    ensureTeam(team1);
    ensureTeam(team2);

    table[team1].played++;
    table[team2].played++;
    table[team1].goalsFor += g1;
    table[team1].goalsAgainst += g2;
    table[team2].goalsFor += g2;
    table[team2].goalsAgainst += g1;

    table[team1].goalDiff = table[team1].goalsFor - table[team1].goalsAgainst;
    table[team2].goalDiff = table[team2].goalsFor - table[team2].goalsAgainst;

    if (g1 > g2) {
      table[team1].won++;
      table[team2].lost++;
      table[team1].points += 3;
    } else if (g1 < g2) {
      table[team2].won++;
      table[team1].lost++;
      table[team2].points += 3;
    } else {
      table[team1].draw++;
      table[team2].draw++;
      table[team1].points += 1;
      table[team2].points += 1;
    }
  });

  const sortedTeams = Object.values(table).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
    return b.goalsFor - a.goalsFor;
  });

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.title}>Classifica Serie A</h2>

      <table className={styles.table}>
        <thead>
          <tr className={styles.theadRow}>
            <th className={`${styles.theadCell} ${styles.firstHeadCell}`}>#</th>
            <th className={styles.theadCell}>Squadra</th>
            <th className={styles.theadCell}>Pt</th>
            <th className={styles.theadCell}>G</th>
            <th className={styles.theadCell}>V</th>
            <th className={styles.theadCell}>N</th>
            <th className={styles.theadCell}>P</th>
            <th className={styles.theadCell}>GF</th>
            <th className={styles.theadCell}>GS</th>
            <th className={`${styles.theadCell} ${styles.lastHeadCell}`}>DR</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((t, i) => (
            <tr
              key={t.team}
              className={styles.tbodyRow}
            >
              <td className={`${styles.cell} ${styles.cellBold}`}>{i + 1}</td>
              <td className={styles.cell}>{t.team}</td>
              <td className={`${styles.cell} ${styles.cellBold}`}>{t.points}</td>
              <td className={styles.cell}>{t.played}</td>
              <td className={`${styles.cell} ${styles.cellWin}`}>{t.won}</td>
              <td className={`${styles.cell} ${styles.cellDraw}`}>{t.draw}</td>
              <td className={`${styles.cell} ${styles.cellLost}`}>{t.lost}</td>
              <td className={styles.cell}>{t.goalsFor}</td>
              <td className={styles.cell}>{t.goalsAgainst}</td>
              <td className={`${styles.cell} ${styles.cellBold}`}>{t.goalDiff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}