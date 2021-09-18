const User = require("./models/user");

module.exports = () => {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    data.push({
      email: `test${i}@db.com`,
      password: `test`,
    });
  }

  User.bulkCreate(data, { individualHooks: true }).then(() => {
    console.log("test seeds imported!");
  });
};
