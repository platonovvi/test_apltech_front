const express = require('express');
const path = require('path');
const cors = require('cors');
let fetch = require('node-fetch');
if (process.env.NODE_ENV !== 'production') {
    fetch = require('node-fetch');
}
const app = express();

// Используем cors middleware для настройки CORS для конкретного домена
app.use(cors({
    origin: 'https://tranquil-island-01847-9479261fef91.herokuapp.com', // Замените на ваш домен фронтенда
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    allowedHeaders: '*',
    credentials: true,
    maxAge: 86400,
}));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Redirect all requests to the 'index.html'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});