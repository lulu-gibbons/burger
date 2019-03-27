var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

// Import the model (burger.js) to use its database functions.
//var cat = require("../models/burgers.js");

// ALL ROUTES
// =============================================================

//base route
router.get('/', function(req, res) {
  //calling burger.all from burger.js file
  //passing burger_data into the function
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render("index", {burger_data});
  })
});


// Export routes for server.js to use.
module.exports = router;
