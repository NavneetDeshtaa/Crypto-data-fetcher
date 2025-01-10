const express = require('express');
const connectDB = require('./config/db');
const fetchPrices = require('./jobs/fetchPrices');
const cron = require('node-cron');
require('dotenv').config();
const cryptoRoutes = require('./routes/crypto');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Crypto API. Use endpoints like /api/crypto/stats or /api/crypto/deviation');
});

app.use('/api/crypto', require('./routes/crypto'));
app.use('/api', cryptoRoutes);


// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', async () => {
    console.log('Running fetchPrices job...');
    await fetchPrices();
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
