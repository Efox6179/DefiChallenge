const router = require("express").Router();
const homeRoutes = require("./home-routes");
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes");
const groupRoutes = require("./group-routes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/group", groupRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
