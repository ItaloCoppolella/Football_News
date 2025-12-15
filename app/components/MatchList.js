// Mostra le partite organizzate per giornata
/* app/components/MatchList.js */

"use client"

import styles from './MatchList.module.css';
import { useState, useEffect } from 'react';

export default function MatchList({ matches }) {
  const [selectedRound, setSelectedRound] = useState('all');
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    if (!matches || !Array.isArray(matches)) return;

    const uniqueRounds = [...new Set(matches.map(m => m.round).filter(Boolean))];
    setRounds(['all', ...uniqueRounds.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''));
      const numB = parseInt(b.replace(/\D/g, ''));
      return numA - numB;
    })]);
  }, [matches]);

  if (!matches || !Array.isArray(matches)) {
    return <p>Caricamento partite...</p>;
  }

  const filteredMatches = selectedRound === 'all'
    ? matches
    : matches.filter(m => m.round === selectedRound);

  const grouped = filteredMatches.reduce((acc, match) => {
    const round = match.round || 'Non classificata';
    if (!acc[round]) acc[round] = [];
    acc[round].push(match);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Partite</h2>

      {/* Dropdown filtro giornata */}
      <div className={styles.filterContainer}>
        <label htmlFor="roundFilter" className={styles.label}>
          Giornata:
        </label>
        <select
          id="roundFilter"
          className={styles.select}
          value={selectedRound}
          onChange={(e) => setSelectedRound(e.target.value)}
        >
          {rounds.map((round) => (
            <option key={round} value={round}>
              {round === 'all' ? 'Tutte le giornate' : round}
            </option>
          ))}
        </select>
      </div>

      {/* Partite raggruppate */}
      {Object.entries(grouped).map(([roundName, roundMatches]) => (
        <div key={roundName} className={styles.roundSection}>
          <h3 className={styles.roundHeader}>
            <span className={styles.roundBadge}>{roundName}</span>
          </h3>
          <div className={styles.matchesList}>
            {roundMatches.map((match, index) => (
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
        </div>
      ))}
    </div>
  );
}   