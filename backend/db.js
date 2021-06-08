/** Database setup for jobly. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

let config = {
  connectionString: DB_URI
};

if (process.env.DATABASE_URL) {
  config['ssl'] = {
    rejectUnauthorized: false
  };
}
console.log('this is', config)
const client = new Client(config);

client.connect();

module.exports = client;
