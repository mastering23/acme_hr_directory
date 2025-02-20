const { Client } = require('pg');
const port = 5432;
const client = new Client (`postgres://localhost:${port}/`);
module.exports = client;


