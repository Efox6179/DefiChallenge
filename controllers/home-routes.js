const router = require("express").Router();

// Clicking the login button will render the login page


router.get('/', function (req,res){
  res.render('homepage');
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});


module.exports = router
