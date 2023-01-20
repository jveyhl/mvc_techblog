const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "This is GREAT!",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Whoa, excellent job!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Wicked! Much thanks to everyone!",
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: "So many subscribers! Amazing!",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "So happy about this!",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "Been waiting for this! Keep up the good work!",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: "This tool helped me so much!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Awesome!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
