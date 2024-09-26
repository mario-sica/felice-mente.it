document.getElementById('check-av').addEventListener('click', async () => {
  const date = document.getElementById('date').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const response = await fetch('/api/appointments');
  const data = await response.json();
  const appointment = data.appointments.find(app => app.date === date);

  const timeSlotsDiv = document.getElementById('timeSlots');
  timeSlotsDiv.innerHTML = '';

  if (appointment) {
      const availableTimes = ['09:00', '10:00', '11:00', '12:00', '16:00', '17:00', '18:00'].filter(time => !appointment.times.includes(time));

      if (availableTimes.length > 0) {
          availableTimes.forEach(time => {
              const button = document.createElement('button');
              button.className = 'btn btn-outline-success me-2';
              button.innerText = time;
              button.onclick = async () => {
                  const bookingResponse = await fetch('/api/book', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ date, time, name, email, phone })
                  });

                  if (bookingResponse.ok) {
                      alert('Appuntamento prenotato con successo!');
                      button.className = 'btn btn-danger'; // cambia il colore del pulsante
                      button.disabled = true; // disabilita il pulsante
                  } else {
                      alert('Tempo non disponibile');
                  }
              };
              timeSlotsDiv.appendChild(button);
          });
      } else {
          timeSlotsDiv.innerHTML = '<p class="text-danger">Nessun orario disponibile per questa data.</p>';
      }
  } else {
      timeSlotsDiv.innerHTML = '<p class="text-danger">Data non trovata.</p>';
  }
});
