var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    // console.log("1 route logout.js", req.session);
    req.session = null;
    // console.log("2 route logout.js", req.session);
    res.redirect("/");
});

module.exports = router;
