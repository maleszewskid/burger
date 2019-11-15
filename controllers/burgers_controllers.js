var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//display index.handlebars and the data from mySQL
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject)
    res.render("index", hbsObject)
  });
});

//post route. 
//Posts Burger_name to database
router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result)
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

//PUT route
//updates the in database
router.put("/api/burgers/:id", function (req, res) {
  var condition = req.params.id;

  burger.update(condition, function (result) {
    
    res.sendStatus(200)
  });
});




// Export routes for server.js to use.
module.exports = router;
