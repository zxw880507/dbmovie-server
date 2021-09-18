const { DataTypes } = require("sequelize");
const db = require("../db");

const Medium = db.define("medium", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
  },
  title: {
    type: DataTypes.TEXT,
  },
  overview: {
    type: DataTypes.TEXT,
  },
  poster_path: {
    type: DataTypes.STRING,
  },
  backdrop_path: {
    type: DataTypes.STRING,
  },
  original_language: {
    type: DataTypes.TEXT,
  },
  release_date: {
    type: DataTypes.STRING,
  },
  first_air_date: {
    type: DataTypes.STRING,
  },
});

module.exports = Medium;
