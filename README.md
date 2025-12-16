📄 README – Descrizione progetto

Calcio Info Viewer è una web app sviluppata con Next.js che permette di consultare informazioni aggiornate su un campionato di calcio.

L’app consente di:

- Visualizzare l’ultima giornata disputata (calcolata dinamicamente in base ai risultati disponibili)
- Consultare la classifica generata automaticamente dai risultati delle partite

I dati provengono da JSON open source e l’interfaccia è pensata per essere semplice, moderna e intuitiva, con una navigazione fluida tra le diverse viste.

Il progetto è stato realizzato come progetto finale per consolidare le basi di React, Next.js, gestione dello stato e componentizzazione.

Struttura web app:

page.js           → fetch server-side
LeagueView.js     → stato, navbar, view
Navbar.js         → navigazione
MatchList.js      → partite
LeagueTable.js    → classifica

## Wireframe

### Home – Selezione campionato
![Wireframe Home](docs/wireframes.png)