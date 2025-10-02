const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

app.post('/login', (req, res) => {
    res.send('Authentification utilisateur');
});

app.listen(PORT, () => {
    console.log(`Service utilisateur en fonctionnement sur le port ${PORT}`);
});