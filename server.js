const http = require('http');
var bodyParser = require('body-parser'); //translates everything into the same language so back and front can easily communicate
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override'); //Allows use of HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

var app = express();
var PORT = process.env.PORT || 8080

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// extended allows the choice between parsing the URL-encoded data with the querystring library (when false)
// or the qs library (when true).
app.use(bodyParser.urlencoded({ extended: false }));


//reference to burgers_controller.js
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
