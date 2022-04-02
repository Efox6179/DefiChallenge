const router = require("express").Router();

// Clicking the login button will render the login page
router.get("/login", (req, res) => {
  res.render("login");
});
