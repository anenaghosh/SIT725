const express = require('express');
const app = express();  // Ensure 'app' is declared only once
const port = 3000;  // Ensure 'port' is declared only once

// Middleware to parse query parameters
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API Server!');
});

// API Endpoint to Add Two Numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const sum = num1 + num2;
    res.json({ num1, num2, sum });
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
