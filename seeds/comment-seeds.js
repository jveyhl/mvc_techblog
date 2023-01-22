const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    content: "This is GREAT!",
  },
  {
    user_id: 4,
    post_id: 4,
    content: "Whoa, excellent job!",
  },
  {
    user_id: 1,
    post_id: 4,
    content: "Wicked! Much thanks to everyone!",
  },
  {
    user_id: 3,
    post_id: 5,
    content: "So many subscribers! Amazing!",
  },
  {
    user_id: 3,
    post_id: 2,
    content: "So happy about this!",
  },
  {
    user_id: 3,
    post_id: 4,
    content: "Been waiting for this! Keep up the good work!",
  },
  {
    user_id: 5,
    post_id: 3,
    content: "This tool helped me so much!",
  },
  {
    user_id: 2,
    post_id: 1,
    content: "Awesome!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
