const router = require("express").Router();
const { Challenge } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all challenges
router.get("/", (req, res) => {
  Challenge.findAll({
    attributes: [
      "id",
      "title",
      "challenge_text",
      "due_date",
      "user_id",
      "created_at",
    ],
  })
    .then((dbChallengeData) => res.json(dbChallengeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST a new challenge
router.post("/", withAuth, (req, res) => {
  Challenge.create({
    title: req.body.title,
    challenge_text: req.body.post_text,
    due_date: req.body.due_date,
    user_id: req.session.user_id,
  })
    .then((dbChallengeData) => res.json(dbChallengeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT/change a challenge
router.put("/:id", withAuth, (req, res) => {
  Challenge.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbChallengeData) => {
      if (!dbChallengeData) {
        res.status(404).json({ message: "No challenge found!" });
        return;
      }
      res.json(dbChallengeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a challenge
router.delete("/:id", (req, res) => {
  Challenge.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbChallengeData) => {
      if (!dbChallengeData) {
        res.status(404).json({ message: "No challenge found!" });
        return;
      }
      res.json(dbChallengeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
