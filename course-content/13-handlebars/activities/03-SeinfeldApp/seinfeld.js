var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "iseeyoutoorsql",
  database: "seinfield_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/cast", function (request, response) {
	connection.query("SELECT * FROM characters ORDER BY id", function(err, result){
		var html = "<h1> Seinfeld Cast by ID </h1>";

		html += "<ul>";

		for (var i = 0; i < result.length; i++){
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Name: " + result[i].name + " </p></li>";
			html += "<p>Cool Factor: " + result[i].coolness_pts + " </p><li>"
			html += "<p>Attitude: " + result[i].attitude + " </p></li>"
		}

		html += "</ul>";

		response.send(html);
	});
});

app.get("/coolness", function (request, response) {
	connection.query("SELECT * FROM characters ORDER BY coolness_pts", function(err, result){
		var html = "<h1> Seinfeld Cool Pts </h1>";

		html += "<ul>";

		for (var i = 0; i < result.length; i++){
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Name: " + result[i].name + " </p></li>";
			html += "<p>Cool Factor: " + result[i].coolness_pts + " </p><li>"
			html += "<p>Attitude: " + result[i].attitude + " </p></li>"
		}

		html += "</ul>";

		response.send(html);
	});
});

app.get("/attitude/:att", function (request, response) {
	connection.query("SELECT * FROM characters WHERE ?", 
{
 attitude: request.params.att
},
		function(err, result){
			console.log(result);
		var html = "<h1> Seinfeld 'Tudes </h1>";

		html += "<ul>";

		for (var i = 0; i < result.length; i++){
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Name: " + result[i].name + " </p></li>";
			html += "<p>Cool Factor: " + result[i].coolness_pts + " </p><li>"
			html += "<p>Attitude: " + result[i].attitude + " </p></li>"
		}

		html += "</ul>";

		response.send(html);
	});
});


app.listen(PORT, function(){
	console.log("Server listening on: http://localhost:" + PORT);
})