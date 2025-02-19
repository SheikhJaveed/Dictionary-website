require('dotenv').config(); // Load API key from .env file
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(express.json());

const API_KEY = process.env.API_KEY; // Secure API key

// Dictionary API route
app.get('/dictionary', async (req, res) => {
    const word = req.query.word; 
    if (!word) {
        return res.status(400).json({ error: "Word is required" });
    }

    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,  
                'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        });

        const data = await response.json();

       
        if (!data.definition || data.definition.trim() === "") {
            return res.json({ word, definition: "❌ No definition found for this word." });
        }

        res.json(data); // Return valid word & definition
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});


// Start the backend server on port 3000
app.listen(3000, () => console.log('✅ Server running on http://localhost:3000'));
