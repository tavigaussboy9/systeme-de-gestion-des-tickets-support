const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

app.post('/send-notification', (req, res) => {
    res.send('Notification envoyée');
});

app.listen(PORT, () => {
    console.log(`Service notification en fonctionnement sur le port ${PORT}`);
});