const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Используем cors middleware для настройки CORS для конкретного домена
app.use(cors({
    origin: 'https://tranquil-island-01847-9479261fef91.herokuapp.com',
    methods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
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
app.post('/user/signup', async (req, res) => {
    try {
        const dataFromVue = req.body;
        const response = await axios.post('https://sleepy-dawn-85022-dfcee393bc59.herokuapp.com/user/signup', dataFromVue);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.post('/user/login', async (req, res) => {
    try {
        const dataFromVue = req.body;
        const response = await axios.post('https://sleepy-dawn-85022-dfcee393bc59.herokuapp.com/user/login', dataFromVue);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});