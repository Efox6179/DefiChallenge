const router = require("express").Router();
<<<<<<< HEAD
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
=======
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
>>>>>>> 29aef313c37f516f38886c116ce284c969f91769

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> 29aef313c37f516f38886c116ce284c969f91769
