const express = require('express');
const Crypto = require('../models/Crypto');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const data = await Crypto.find().sort({ updated_at: -1 });
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});


router.get('/stats', async (req, res) => {
    try {
        const { coin } = req.query;

       
        if (!coin) {
            return res.status(400).json({ error: 'Coin parameter is required.' });
        }

        
        const cryptoData = await Crypto.findOne({ name: coin });

        
        if (!cryptoData) {
            return res.status(404).json({ error: 'Cryptocurrency not found.' });
        }

      
        res.json({
            price: cryptoData.current_price,
            marketCap: cryptoData.market_cap,
            "24hChange": cryptoData.change_24h,
        });
    } catch (err) {
        console.error('Error fetching stats:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});


router.get('/deviation', async (req, res) => {
    try {
        const { coin } = req.query; 
       

        if (!coin) {
            return res.status(400).json({ error: 'Coin parameter is required.' });
        }

    
        const cryptoRecords = await Crypto.find({ name: coin })
            .sort({ updated_at: -1 }) 
            .limit(100);

     
        if (cryptoRecords.length === 0) {
            return res.status(404).json({ error: 'No records found for the requested cryptocurrency.' });
        }

     
        const prices = cryptoRecords.map(record => record.current_price);

      
        const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;

    
        const variance =
            prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
        const standardDeviation = Math.sqrt(variance);

      
        res.json({ deviation: standardDeviation.toFixed(2) });
    } catch (err) {
        console.error('Error calculating deviation:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;
