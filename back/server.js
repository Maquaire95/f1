require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
    } else {
        console.log('Connecté à la base de données MySQL ✅');
    }
});

// Route test
app.get('/', (req, res) => {      
    res.send('API News en ligne 🚀');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
