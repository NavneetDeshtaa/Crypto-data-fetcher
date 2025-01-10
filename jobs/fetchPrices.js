const axios = require('axios');
const Crypto = require('../models/Crypto');

const fetchPrices = async () => {
    const axios = require('axios');
    const Crypto = require('../models/Crypto');

    try {
        const response = await axios.get(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true'
        );

        const data = response.data;

     
        const coins = [
            { name: 'bitcoin', symbol: 'BITCOIN' },
            { name: 'ethereum', symbol: 'ETHEREUM' },
            { name: 'matic-network', symbol: 'MATIC' },
        ];

        for (const coin of coins) {
            const newCrypto = new Crypto({
                name: coin.name,
                symbol: coin.symbol,
                current_price: data[coin.name].usd,
                market_cap: data[coin.name].usd_market_cap,
                change_24h: data[coin.name].usd_24h_change,
                updated_at: new Date(),
            });

            await newCrypto.save(); 
        }

        console.log('Prices fetched and saved successfully.');
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
};


module.exports = fetchPrices;
