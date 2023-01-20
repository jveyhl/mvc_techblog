const { User } = require("../models");

const userData = [
  {
    username: "nancy_gauthier",
    password: "password1",
  },
  {
    username: "martin_leblanc",
    password: "password2",
  },
  {
    username: "zach_roy",
    password: "password3",
  },
  {
    username: "joe_veyhl",
    password: "password4",
  },
  {
    username: "dan_feingold",
    password: "password5",
  },
  {
    username: "anne_jang",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
