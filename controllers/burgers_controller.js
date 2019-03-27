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
  });
});

//Put route
router.put('/burgers/update', function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

//Post route
router.post('/burgers/create', function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
