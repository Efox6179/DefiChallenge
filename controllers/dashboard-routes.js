const router = require("express").Router();
const { Post, User, Comment, Challenge } = require("../models");
const withAuth = require("../utils/auth");

// GET all of a user's posts
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "post_text", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET to allow the user to edit their existing posts
router.get("/posts/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ["id", "title", "post_text", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// GET all of a user's challenges
router.get("/", withAuth, (req, res) => {
  Challenge.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "challenge_text", "due_date", "created_at"],
  })
    .then((dbChallengeData) => {
      const challenges = dbChallengeData.map((challenge) =>
        challenge.get({ plain: true })
      );
      res.render("dashboard", { challenges, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET to allow the user to edit their existing challenges
router.get("/challenges/edit/:id", withAuth, (req, res) => {
  Challenge.findByPk(req.params.id, {
    attributes: ["id", "title", "challenge_text", "due_date", "created_at"],
  })
    .then((dbChallengeData) => {
      if (dbChallengeData) {
        const challenge = dbChallengeData.get({ plain: true });

        res.render("edit-challenge", {
          challenge,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
