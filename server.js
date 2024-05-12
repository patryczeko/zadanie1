const express = require('express');
const app = express();

const authorName = "Patryk Skocz";
const port = 8080;
const serverStartTime = new Date();

app.get('/', (req, res) => {
    const clientIP = req.ip;
    const clientTime = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
    const startTime = serverStartTime.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
    const message = `Adres IP klienta: ${clientIP}<br/>Czas klienta w strefie czasowej Europa/Warszawa: ${clientTime}<br/> Start serwera: ${startTime}`;
    res.send(message);
});

app.listen(port, () => {
    const currentTime = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
    const startTime = serverStartTime.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
    console.log(`Serwer uruchomiony przez ${authorName} na porcie ${port} o godzinie ${currentTime}`);
    console.log(`Czas startu serwera w strefie czasowej Warszawa: ${startTime}`);
});
