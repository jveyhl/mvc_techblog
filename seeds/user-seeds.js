const { User } = require("../models");

const userData = [
  {
    username: "sam_taylor",
    twitter: "samt",
    github: "samt",
    email: "sam_t@test.com",
    password: "password1",
  },
  {
    username: "john_miller",
    twitter: "johnm",
    github: "johnm",
    email: "john_m@test.com",
    password: "password2",
  },
  {
    username: "jen_walker",
    twitter: "jenw",
    github: "jenw",
    email: "jen_w@test.com",
    password: "password3",
  },
  {
    username: "mike_johnson",
    twitter: "mikej",
    github: "mikej",
    email: "mike_j@test.com",
    password: "password4",
  },
  {
    username: "kate_morgan",
    twitter: "katem",
    github: "katem",
    email: "kate_m@test.com",
    password: "password5",
  },
  {
    username: "ben_harris",
    twitter: "benh",
    github: "benh",
    email: "ben_h@test.com",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
