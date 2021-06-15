/** Database setup for jobly. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

let config;

if (process.env.DATABASE_URL) {
  config = {
    connectionString: DB_URI,
    ssl: {
      rejectUnauthorized: false
    }
  };
} else {
  config = { connectionString: DB_URI }
}

const client = new Client(config);

client.connect();

module.exports = client;
