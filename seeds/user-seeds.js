const { User } = require("../models");

const userData = [
  {
    username: "nancy_gauthier",
    twitter: "nancyg",
    github: "nancyg",
    email: "nancy_g@test.com",
    password: "password1",
  },
  {
    username: "martin_leblanc",
    twitter: "martinl",
    github: "martinl",
    email: "martin_l@test.com",
    password: "password2",
  },
  {
    username: "zach_roy",
    twitter: "zachr",
    github: "zachr",
    email: "zach_r@test.com",
    password: "password3",
  },
  {
    username: "joe_veyhl",
    twitter: "joev",
    github: "joev",
    email: "joe_v@test.com",
    password: "password4",
  },
  {
    username: "dan_feingold",
    twitter: "danf",
    github: "danf",
    email: "dan_f@test.com",
    password: "password5",
  },
  {
    username: "anne_jang",
    twitter: "annej",
    github: "annej",
    email: "anne_j@test.com",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
