const { Pool } = require("pg");
require("dotenv").config();

const user = process.env.USERNAME;
const password = process.env.PASS;
const host = process.env.EXTERNALLINK;
const port = process.env.PORT;
const database = process.env.DATABASE;

const pool = new Pool({
  user: "postgre",
  host,
  database,
  password,
  port,
  ssl: true,
});

module.exports = pool;
