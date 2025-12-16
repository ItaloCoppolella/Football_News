// Mostra le partite organizzate per giornata
/* app/components/MatchList.js */

"use client";

import styles from "./MatchList.module.css";

export default function MatchList({ matches, title = "Partite" }) {
  if (!matches || !Array.isArray(matches) || matches.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p>Nessuna partita disponibile.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      {matches.map((match, index) => (
        <div key={index} className={styles.matchCard}>
          <div className={`${styles.team} ${styles.teamLeft}`}>
            {match.team1}
          </div>

          <div className={styles.score}>
            {match.score?.ft ? (
              <>
                {match.score.ft[0]} - {match.score.ft[1]}
              </>
            ) : (
              <span className={styles.pending}>Da giocare</span>
            )}
          </div>

          <div className={`${styles.team} ${styles.teamRight}`}>
            {match.team2}
          </div>
        </div>
      ))}
    </div>
  );
}
