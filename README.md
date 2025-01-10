# Crypto Data Fetcher API -
A Node.js and MongoDB-based API that fetches and stores cryptocurrency data (Bitcoin, Ethereum, and Matic) at regular intervals. It also provides endpoints to retrieve statistics and calculate the standard deviation of prices.

# Features-
Fetches the current price, market cap, and 24-hour change for Bitcoin, Ethereum, and Matic every 2 hours using CoinGecko API.
Stores fetched data in a MongoDB database.
Provides APIs to:
Retrieve the latest statistics of a cryptocurrency.
Calculate the standard deviation of the last 100 price records for a cryptocurrency.
Deployed Link
The API is publicly accessible at:
Crypto Data Fetcher API

# API Endpoints
1. Fetch Latest Statistics
Endpoint: /api/crypto/stats
Method: GET
Copy code
GET https://crypto-data-fetcher.onrender.com/api/crypto/stats?coin=bitcoin
2. Calculate Standard Deviation
Endpoint: /api/crypto/deviation
Method: GET
Copy code
GET https://crypto-data-fetcher.onrender.com/api/crypto/deviation?coin=bitcoin

# How It Works
 1. A cron job runs every 2 hours to fetch the latest cryptocurrency data using the CoinGecko API and stores it in MongoDB.

 2. Stores cryptocurrency details such as price, market cap, and 24-hour change.


# Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (MongoDB Atlas for deployment)
Scheduler: Node-Cron
Hosting: Render
API: CoinGecko API



Set up an account on Render.
Create a new web service and link it to your GitHub repository.
Add environment variables in the Render dashboard.
Deploy your application.

