// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  //selecting everything from whatever the 'tableInput' is and then creating a callback function to return the result
  all: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //update function so we can PUT (add new) data into the database
  update: function(tableInput, condition, cb) {
    connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id =' + condition + ';', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
   create: function(tableInput, val, cb) {
    connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('"+ val +"');", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}

// Export the orm object for the model (cat.js).
module.exports = orm;
