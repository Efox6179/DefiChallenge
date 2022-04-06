const router = require("express").Router();

// This will render the homepage when the site is visited
router.get("/", function (req, res) {
  res.render("homepage");
});

// GET to send a user to the homepage if they are logged in. If they aren't logged in, then they are taken to the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/group", (req, res) => {
  if (req.session.loggedIn) {
    res.render("group-page");
  } else {
    res.render("login");
  }
});

router.get("/dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard");
  } else {
    res.render("login");
  }
});





module.exports = router;
