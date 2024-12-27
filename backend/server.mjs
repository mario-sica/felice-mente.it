import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('../frontend'));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;");
  next();
});

app.get('/api/appointments', async (req, res) => {
  try {
    const data = await fs.readFile('../appuntamenti.json', 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).send('Errore nel caricamento degli appuntamenti');
  }
});

app.post('/api/book', async (req, res) => {
  const { date, time, name, email, phone } = req.body;

  try {
    const data = await fs.readFile('../appuntamenti.json', 'utf-8');
    const appointments = JSON.parse(data).appointments;

    const appointment = appointments.find(app => app.date === date);

    if (!appointment) {
      return res.status(400).send('Giorno non disponibile');
    }

    if (appointment.times.includes(time)) {
      return res.status(400).send('Orario non disponibile');
    }

    appointment.times.push(time);
    appointment.clients.push({ name, email, phone, time });

    await fs.writeFile('../appuntamenti.json', JSON.stringify({ appointments }, null, 2));
    res.status(200).send('Il tuo appuntamento è confermato!');
  } catch (error) {
    res.status(500).send('Errore nella prenotazione dell\'appuntamento');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
