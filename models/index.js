const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Users can have multiple posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// Posts only belong to one user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Each comment can only belong to one user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Each comment can only belong to one post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// Users can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Each post can have multiple comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
