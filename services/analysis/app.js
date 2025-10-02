const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

app.get('/analytics', (req, res) => {
    res.send('Rapports et statistiques des tickets');
});

app.listen(PORT, () => {
    console.log(`Service d'analyse en fonctionnement sur le port ${PORT}`);
});