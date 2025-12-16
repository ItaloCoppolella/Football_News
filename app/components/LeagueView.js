"use client";

import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import MatchList from "./MatchList";
import LeagueTable from "./LeagueTable";

/**
 * Restituisce l'ULTIMA giornata
 * che ha ALMENO una partita con risultato finale (ft)
 */
function getLastRoundWithAtLeastOneFT(matches) {
  let maxRound = null;

  matches.forEach((match) => {
    if (match.score?.ft && match.score.ft.length === 2) {
      const roundNumber = parseInt(match.round.replace(/\D/g, ""), 10);

      if (!isNaN(roundNumber)) {
        if (maxRound === null || roundNumber > maxRound) {
          maxRound = roundNumber;
        }
      }
    }
  });

  return maxRound;
}

export default function LeagueView({ data }) {
  const [view, setView] = useState("latest");

  const matches = data?.matches ?? [];

  /**
   * Calcolo memoizzato dell'ultima giornata valida
   */
  const lastRoundNumber = useMemo(() => {
    return getLastRoundWithAtLeastOneFT(matches);
  }, [matches]);

  /**
   * Partite dell'ultima giornata valida
   */
  const latestMatches = useMemo(() => {
    if (!lastRoundNumber) return [];

    return matches.filter((match) => {
      const roundNumber = parseInt(match.round.replace(/\D/g, ""), 10);
      return roundNumber === lastRoundNumber;
    });
  }, [matches, lastRoundNumber]);

  return (
    <>
      <Navbar view={view} setView={setView} />

      {view === "latest" && (
        <MatchList
          title={`Ultima giornata – Matchday ${lastRoundNumber}`}
          matches={latestMatches}
        />
      )}

      {view === "table" && (
        <LeagueTable matches={matches} />
      )}
    </>
  );
}
