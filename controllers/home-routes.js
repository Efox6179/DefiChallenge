const router = require("express").Router();

// Clicking the login button will render the login page
// will need to be replaced once login functionality works
router.get("/login", (req, res) => {
  res.render("login");
});

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

router.get("/group", (req, res) => {
  res.render("group-page");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});



module.exports = router;
