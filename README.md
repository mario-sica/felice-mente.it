# Felice-Mente Booking System

Felice-Mente è un sistema di prenotazione per appuntamenti, progettato per uno psicologo professionista. L'applicazione permette ai clienti di prenotare appuntamenti in modo semplice e veloce, gestendo disponibilità e informazioni sui clienti.

## Struttura del Progetto

- `backend/`: Contiene il server Express e la logica di gestione delle prenotazioni.
- `frontend/`: Contiene i file statici (HTML, CSS, JS) per l'interfaccia utente.
- `appuntamenti.json`: File di dati contenente gli appuntamenti già prenotati.

## Tecnologie Utilizzate

- Node.js con Express per il backend.
- HTML, CSS, JavaScript con Bootstrap 5 per il frontend.
- JSON per la gestione dei dati delle prenotazioni.

## Requisiti

- Node.js (v14 o superiore)
- NPM (incluso con Node.js)

## Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/tuo-username/felice-mente.git
   cd felice-mente
   ```

2. Installa le dipendenze:

   ```bash
   npm install
   ```

3. Configura il backend: Assicurati che il file `appuntamenti.json` si trovi nella directory corretta e contenga i dati di esempio forniti.

## Utilizzo

1. Avvia il server:

   ```bash
   npm start
   ```

   Il server sarà avviato su `http://localhost:3000`.

2. Accesso al frontend: Apri il browser e vai su `http://localhost:3000` per accedere all'interfaccia utente.

## API Endpoints

- `GET /api/appointments`: Restituisce la lista degli appuntamenti.

- `POST /api/book`: Permette di prenotare un nuovo appuntamento.

  Body della richiesta:

  ```json
  {
    "date": "2024-09-26",
    "time": "10:00",
    "name": "Mario Rossi",
    "email": "mario.rossi@example.com",
    "phone": "1234567890"
  }
  ```

## Risoluzione dei Problemi

- Errore 404: Verifica che i file statici del frontend siano posizionati correttamente nella directory `frontend`.
- CORS Policy: Assicurati che il server Express sia configurato con una corretta Content Security Policy.
- Errore 500: Controlla il formato del file `appuntamenti.json` per eventuali errori di sintassi.

## Contributi

I contributi sono benvenuti! Sentiti libero di fare un fork del progetto, aprire issue o creare pull request per miglioramenti.

## Licenza

Questo progetto è distribuito sotto la licenza MIT. Consulta il file [LICENSE](LICENSE) per ulteriori dettagli.
