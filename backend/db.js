const { Client } = require("pg");

let config;

if (process.env.DATABASE_URL) {
  config = {
    connectionString: process.env.DATABASE_URL,
  };
} else {
  config = {
    connectionString: "postgresql:///jobbox",
  };
}

const client = new Client(config);

client.connect();

module.exports = client;
