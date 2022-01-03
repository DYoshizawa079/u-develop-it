const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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