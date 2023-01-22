const { Post } = require("../models");

const postData = [
  {
    title: "Public launch of SuperTask!",
    content:
      "Get more done with the SuperTask mobile app. Manage, capture, and edit your tasks from anywhere, at anytime, with to-dos that sync across all your devices. Integrations with your email accounts and calendar help you get tasks done FASTER.",
    user_id: 3,
  },
  {
    title: "PetShop Simulator subscribers reaches 1 million!",
    content:
      "Love animal games? Then this is the app for you! Welcome to your new Pet Shop simulator! Build your own animal store and take care of cute pets! Play with, care for, feed, wash, groom and dress up little cats and dogs to maximize happiness and grow",
    user_id: 1,
  },
  {
    title: "MegaNews tool now available!",
    content:
      "MegaNews has correspondents and bureaus reporting from across the world to keep you updated and informed on what matters most. Never miss a breaking news story or important update again. Personalize your experience and choose the news you want by category: Politics, Business, Health, Entertainment and more. Get the news you want, the way you want. Stay informed with MegaNews!",
    user_id: 2,
  },
  {
    title: "EZtech Blog finally released!",
    content:
      "Fast, simple and immediate mobile news feed reader for Tech News! Choose and read the most famous Tech News blogs and sites with your mobile in the fastest way possible. If you want to stay up to date with what happens in the world of Technology, Hardware, smartphones, newest games and apps, updates and reviews, latest geek stories and use as little time as possible, then this app is what you need!",
    user_id: 5,
  },
  {
    title: "Anime+ now available!",
    content:
      "Stream the world's largest anime library. Watch over 1,000 titles - from past seasons to new episodes fresh from Japan, including critically acclaimed original content.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
