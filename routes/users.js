var express = require("express");
var router = express.Router();
/* GET users listing. */
router.get("/", function(req, res, next) {
    console.log("1 users session:", req.session);
    // res.send('respond with a resource');
    res.json([
        {
            id: 1,
            name: "Hiccup",
            password: "hiccup"
        },
        {
            id: 2,
            name: "King Arthur",
            password: "king-arthur"
        }
    ]);
});
module.exports = router;
