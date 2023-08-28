const express = require('express');
const path = require('path');
const app = express();

// Middleware для настройки CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://tranquil-island-01847-9479261fef91.herokuapp.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
});

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