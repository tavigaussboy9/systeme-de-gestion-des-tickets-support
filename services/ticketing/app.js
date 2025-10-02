const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

app.get('/tickets', (req, res) => {
    res.send('Liste des tickets');
});

app.listen(PORT, () => {
    console.log(`Service de ticketing en fonctionnement sur le port ${PORT}`);
});