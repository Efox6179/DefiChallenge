const router = require("express").Router();

// This will render the homepage when the site is visited
router.get("/", function (req, res) {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
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

module.exports = router;
