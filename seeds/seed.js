const sequelize = require("../config/connection");
const { User, Post, Comment, Challenge } = require("../models");

const userSeedData = require("./userSeedData.json");
const postSeedData = require("./postSeedData.json");
const commentSeedData = require("./commentSeedData.json");
const challengeSeedData = require("./challengeSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  User.bulkCreate(userSeedData);
  Post.bulkCreate(postSeedData);
  Comment.bulkCreate(commentSeedData);
  Challenge.bulkCreate(challengeSeedData);

  process.exit(0);
};

seedDatabase();
