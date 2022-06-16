var express = require("express");
var router = express.Router();
/* GET users listing. */
router.get("/", function(req, res, next) {
    console.log("1 in getCookies session:", req.session.userId);
    // res.send('respond with a resource');
    res.json({
        success: true,
        userId: req.session.userId || "",
        first: req.session.firstName || "",
        last: req.session.lastName || "",
        email: req.session.email || ""
    });
});
module.exports = router;
