// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    //calling orm.all from orm.js file and running function(res) as a callback function -- will be sent into the burgers_controller.js
    //'burgers' is the tableInput
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    //calling orm.update and passing in burgers table & the id...then use a callback function
    orm.update('burgers', id, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    //calling orm.create and passing in burgers table & the name...then use a callback function
    orm.create('burgers', name, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
