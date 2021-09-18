const db = require("../db");
const User = require("./user");
const Medium = require("./medium");

const Favorite = db.define("favorite", {}, { timestamps: false });

User.belongsToMany(Medium, { through: Favorite });
Medium.belongsToMany(User, { through: Favorite });

module.exports = Favorite;
