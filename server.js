const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

// Используем cors middleware для настройки CORS для конкретного домена
app.use(cors({
    origin: 'https://tranquil-island-01847-9479261fef91.herokuapp.com', // Замените на ваш домен фронтенда
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    allowedHeaders: '*',
    credentials: true,
    maxAge: 86400,
}));

// Парсим JSON входящего запроса
app.use(express.json());

// Путь для обработки GET-запросов
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Путь для обработки POST-запросов
app.post('*', (req, res) => {
    const postData = req.body;

    // Просто перенаправляем данные на тот же URL, на который пришел запрос
    fetch(req.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => {
            // Обработка ответа от сервера, если необходимо
            return response.json();
        })
        .then(data => {
            // Отправляем ответ обратно клиенту, если необходимо
            res.json(data);
        })
        .catch(error => {
            // Обработка ошибки, если отправка данных не удалась
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to send data' });
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});