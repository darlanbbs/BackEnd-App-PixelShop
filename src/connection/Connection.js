require("dotenv/config");
const user = process.env.USER;
const password = process.env.PASSWORD;
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user,
  password,
  database: "dompixelshop",
});

module.exports = pool;
