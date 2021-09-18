const { Sequelize } = require("sequelize");
require("dotenv").config();
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/db_movie",
  {
    logging: false,
    dialect: "postgres",
  }
);

module.exports = db;
