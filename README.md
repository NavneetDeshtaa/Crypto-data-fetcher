Crypto Data Fetcher API -
A Node.js and MongoDB-based API that fetches and stores cryptocurrency data (Bitcoin, Ethereum, and Matic) at regular intervals. It also provides endpoints to retrieve statistics and calculate the standard deviation of prices.

Features-
Fetches the current price, market cap, and 24-hour change for Bitcoin, Ethereum, and Matic every 2 hours using CoinGecko API.
Stores fetched data in a MongoDB database.
Provides APIs to:
Retrieve the latest statistics of a cryptocurrency.
Calculate the standard deviation of the last 100 price records for a cryptocurrency.
Deployed Link
The API is publicly accessible at:
Crypto Data Fetcher API

API Endpoints
1. Fetch Latest Statistics
Endpoint: /api/crypto/stats
Method: GET
Query Parameters:
coin (string): One of bitcoin, ethereum, or matic-network.
Response:
json
Copy code
{
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
}
Example:
ruby
Copy code
GET https://crypto-data-fetcher.onrender.com/api/crypto/stats?coin=bitcoin
2. Calculate Standard Deviation
Endpoint: /api/crypto/deviation
Method: GET
Query Parameters:
coin (string): One of bitcoin, ethereum, or matic-network.
Response:
json
Copy code
{
    "deviation": 4082.48
}
Example:
ruby
Copy code
GET https://crypto-data-fetcher.onrender.com/api/crypto/deviation?coin=bitcoin
How It Works
Background Job:

A cron job runs every 2 hours to fetch the latest cryptocurrency data using the CoinGecko API and stores it in MongoDB.
Database:

Stores cryptocurrency details such as price, market cap, and 24-hour change.
Endpoints:

Serve data from the database and perform calculations as needed.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (MongoDB Atlas for deployment)
Scheduler: Node-Cron
Hosting: Render
API: CoinGecko API
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/crypto-data-fetcher.git
cd crypto-data-fetcher
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root directory with the following variables:

makefile
Copy code
MONGO_URI=<Your MongoDB connection string>
PORT=5000
4. Run Locally
bash
Copy code
npm start
5. Test APIs
Use tools like Postman or cURL to test the endpoints.
Deployment
The project is deployed on Render.

To deploy yourself:

Set up an account on Render.
Create a new web service and link it to your GitHub repository.
Add environment variables in the Render dashboard.
Deploy your application.

