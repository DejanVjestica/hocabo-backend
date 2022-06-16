var express = require("express");
var router = express.Router();
const db = require("../db");
/* GET home page. */
router.post("/", function(req, res, next) {
    // console.log("1 login body: ", req.body);
    // console.log("2 login session: ", req.session);
    db
        .getUserByEmail(req.body.email)
        .then(function(user) {
            return db
                .checkPassword(req.body.password, user.rows[0].hash_password)
                .then(function(doesMatch) {
                    if (doesMatch) {
                        // console.log("3 login session: ", req.session);
                        // req.session.userId = user.rows[0].userid;
                        // req.session.firstName = user.rows[0].firstName;
                        // req.session.lastName = user.rows[0].lastName;
                        // req.session.email = req.body.email;
                        console.log("login result: ", user.rows[0]);
                        res.json({
                            success: true,
                            userId: user.rows[0].userid,
                            first: user.rows[0].first,
                            last: user.rows[0].last,
                            email: req.body.email
                        });
                        // res.json({
                        //     success: true,
                        //     userId: req.session.userId,
                        //     firstName: req.session.firstName,
                        //     lastName: req.session.lastName,
                        //     email: req.session.email
                        // });
                    } else {
                        res.json({
                            err: true
                        });
                    }
                });
        })
        .catch(function(err) {
            console.log("route login main catch/ login user: ", err);
            res.json({
                err: true
            });
        });
});

module.exports = router;
