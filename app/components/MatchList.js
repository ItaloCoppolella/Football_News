// Componente che mostra le partite

export default function MatchList({ matches }) {
  if (!matches || !Array.isArray(matches)) {
    return <p>Caricamento partite...</p>;
  }

  //  Raggruppiamo le partite per "round" (Matchday)
  const grouped = {};

  matches.forEach((match) => {
    if (!grouped[match.round]) {
      grouped[match.round] = [];
    }
    grouped[match.round].push(match);
  });

  const rounds = Object.entries(grouped); // [["Matchday 1", [...matches]], ...]


  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Partite</h2>

      {rounds.map(([roundName, roundMatches]) => (
        <div key={roundName} style={{ marginBottom: "20px" }}>
          <h3>{roundName}</h3>

          {roundMatches.map((match, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              <p>
                <strong>{match.team1}</strong> vs{" "}
                <strong>{match.team2}</strong>
              </p>

              {match.score?.ft ? (
                <p>Risultato: {match.score.ft[0]} - {match.score.ft[1]}</p>
              ) : (
                <p>Da giocare</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}