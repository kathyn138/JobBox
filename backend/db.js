/** Database setup for jobly. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

let config;

if (process.env.DATABASE_URL) {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  };
} else {
  config = { connectionString: DB_URI }
}

console.log('this is', config)
const client = new Client(config);

client.connect();

module.exports = client;
