const { User } = require("../models");

const userData = [
  {
    name: "nancy_gauthier",
    twitter: "nancyg",
    github: "nancyg",
    email: "nancy_g@test.com",
    password: "password1",
  },
  {
    name: "martin_leblanc",
    twitter: "martinl",
    github: "martinl",
    email: "martin_l@test.com",
    password: "password2",
  },
  {
    name: "zach_roy",
    twitter: "zachr",
    github: "zachr",
    email: "zach_r@test.com",
    password: "password3",
  },
  {
    name: "joe_veyhl",
    twitter: "joev",
    github: "joev",
    email: "joe_v@test.com",
    password: "password4",
  },
  {
    name: "dan_feingold",
    twitter: "danf",
    github: "danf",
    email: "dan_f@test.com",
    password: "password5",
  },
  {
    name: "anne_jang",
    twitter: "annej",
    github: "annej",
    email: "anne_j@test.com",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
