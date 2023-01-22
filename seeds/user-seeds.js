const { User } = require("../models");

const userData = [
  {
    name: "nancy_gauthier",
    password: "password1",
  },
  {
    name: "martin_leblanc",
    password: "password2",
  },
  {
    name: "zach_roy",
    password: "password3",
  },
  {
    name: "joe_veyhl",
    password: "password4",
  },
  {
    name: "dan_feingold",
    password: "password5",
  },
  {
    name: "anne_jang",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
