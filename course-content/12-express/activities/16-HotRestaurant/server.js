var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
	name: "Calvin Chau",
	phone: "408-555-5555",
	email: "calvin.chau@mail.com",
	id: "88"
  },
  {
  	name: "Noah Glasser",
  	phone: "510-555-5555",
  	email: "noah.glasser@gmail.com",
  	id: "35"
  },
  {
  	name: "Nick Tom",
  	phone: "415-555-5555",
  	email: "nick.tom@gmail.com",
  	id: "66"
  },
  {
  	name: "Liam Neeson",
  	phone: "215-555-5555",
  	email: "specialsetofskills@gmail.com",
  	id: "33"
  }
];

var waitList = [];

app.use(express.static('public'))

app.get("/", function(request, response){
response.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/tables", function(request, response){
  response.json(reservations);
});

app.get("/api/waitlist", function(request, response) {
  response.json(waitList);
});

app.post("/api/clear", function(request, response){
 reservations = [];
 waitList = [];
})

app.get("/reserve", function (request, response){
  response.sendFile(path.join(__dirname, "make.html"));
});

app.get("/tables", function (request,response){
	response.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/tables", function (request, response){
	newReservation = request.body;
	if (reservations.length > 4) {
		console.log("Sorry, you will be placed on the waitlist.");
		waitList.push(newReservation);
		response.json(false);
	} else {
	console.log("Congrats! You have successfully reserved a table.");
	reservations.push(newReservation);
	response.json(true);
	}
})

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
})