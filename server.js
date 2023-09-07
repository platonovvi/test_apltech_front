const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require("node-fetch");
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
/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});*/
app.all('*', (req, res) => {
    // Получите тип запроса (GET, POST, PUT, PATCH, DELETE и т. д.)
    const requestMethod = req.method;
    // В зависимости от типа запроса, выполните разные действия
    if (requestMethod === 'GET') {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    } else if (requestMethod === 'POST') {
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
                res.status(500).json({error: 'Failed to send data'});
            });
    } else if (requestMethod === 'PATCH') {
    } else {
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});