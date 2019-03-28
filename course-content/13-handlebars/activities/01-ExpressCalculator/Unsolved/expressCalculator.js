// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
app.get("/", function(req,res) {
  res.send("Please enter operation and integers in get route for result")
});
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:num1/:num2", function(req, res) {

  // TODO parse out the variables from the request
  var num1 = req.params.num1
  var num2 = req.params.num2
  var operation = req.params.operation
  var intNum1 = parseInt(num1);
  var intNum2 = parseInt(num2);
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
    result = intNum1 + intNum2;
    break;
  case "subtract":
    // Subtract logic
    result = intNum1 - intNum2;
    break;
  case "multiply":
    // Multiply
    result = intNum1 * intNum2;
    break;
  case "divide":
    // Divide
    result = intNum1 / intNum2;
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});