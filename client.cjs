const { Client } = require('pg');
const client = new Client('postgres://localhost:5432/acme_icecream_shop')

module.exports = client;
