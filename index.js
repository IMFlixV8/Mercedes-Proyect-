// Importa el módulo express
const express = require('express');
const path = require('path');
const app = express();

// Configura el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear datos JSON
app.use(express.json());

// Middleware para parsear datos URL-encoded
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/Comprar', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Comprar.html'));
});

app.get('/Reserva', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Reserva.html'));
});

// Configura el puerto en el que el servidor escuchará
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
