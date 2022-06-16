var express = require("express");
var router = express.Router();

const db = require("../db");

router.post("/", function(req, res, next) {
    console.log("1 register body: ", req.body);
    // console.log("2 register session: ", req.session);

    db
        .hashPassword(req.body.password)
        .then(function(hashedPassword) {
            return db.registerUser(
                req.body.first,
                req.body.last,
                req.body.email,
                hashedPassword
            );
        })
        .then(function(user) {
            // console.log("3 register session: ", req.session);
            // console.log("inside route result.rows[0]; ", result.rows[0]);
            // req.session.userId = result.rows[0].id;
            // req.session.firstName = req.body.first;
            // req.session.lastName = req.body.last;
            res.json({
                success: true,
                userId: user.rows[0].userid,
                first: user.rows[0].first,
                last: user.rows[0].last,
                email: req.body.email
            });
        })
        .catch(function() {
            // console.log("/register: ", err);
            res.json({
                err: true
            });
        });
});

module.exports = router;
