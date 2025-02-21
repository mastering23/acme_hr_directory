require('dotenv').config({ path: `${__dirname}/env/.env` });

const { Client } = require("pg");

//TESTING 
// console.log(__dirname);
// console.log('PGHOST:', process.env.PGHOST);
// console.log('PGDATABASE:', process.env.PGDATABASE);
// console.log('PGPASSWORD:', process.env.PGPASSWORD);
// console.log('PGPORT:', process.env.PGPORT);

const client = new Client({
  user: process.env.PGUSER,        // PostgreSQL username
  host: process.env.PGHOST,        // PostgreSQL server host
  database: process.env.PGDATABASE,// PostgreSQL database
  password: process.env.PGPASSWORD,// PostgreSQL password
  port: process.env.PGPORT         // PostgreSQL port 
  
});

const clientConnecting = async () => {
  try {
    await client.connect();
    console.log("Client connected......✅");
  } catch (err) {
    console.log("Error connecting:", err, '⚠️');
  } finally {
    await client.end();
    console.log("Client disconnected ......❌");
  }
};

clientConnecting();

module.exports = client;
