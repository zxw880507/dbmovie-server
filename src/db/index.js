const db = require("./db");
require("./models/user");
require("./models/medium");
require("./models/favorite");
const seeds = require("./seeds");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    db.sync({ force: true }).then(() => {
      console.log("db synced!!!");
      seeds();
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;
