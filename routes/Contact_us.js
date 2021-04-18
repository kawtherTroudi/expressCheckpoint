const express = require("express");
let router = express.Router();

router
.route("/")
.get((req, res) => {
    res.render("Contact");
})

module.exports = router
