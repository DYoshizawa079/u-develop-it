const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express.js middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection (
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'wuosjf7998',
        database: 'election'
    },
    console.log('Connected to the election database')
);

// Creates a GET test route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Starts express.js on port 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});