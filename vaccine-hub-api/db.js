const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");

const db = new Client({ connectionString: getDatabaseUri });

db.connect((err) => {
  if (err) {
    console.error("Connection error".red);
  } else {
    console.log("Successfully connected to postgres db!".blue);
  }
});

module.export = db;
