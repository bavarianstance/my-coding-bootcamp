// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get("/", function(req, res){
	connection.query("SELECT * FROM chirps;", function(err,data){
		iff (err){
			return res.status(500).end();
		}
		res.sendfile
	});
});

  // Add a chirp


};
