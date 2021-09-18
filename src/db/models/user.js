const { DataTypes } = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

const User = db.define(
  "user",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "This email has been registered already!",
      },
      get() {
        return this.getDataValue("email");
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
      },
    },
  }
);

User.prototype.comparePassword = function (plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password);
};

module.exports = User;
