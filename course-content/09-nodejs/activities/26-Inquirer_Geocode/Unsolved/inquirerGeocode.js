// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");
var inquirer = require("inquirer");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "8L1Qrsn02SvGhGoz2UoxTrxXwHBhM857"
};

var geocoder = NodeGeocoder(options);
var address;
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your street address?",
      name: "street"
    },
    // Here we create a basic password-protected text prompt.
    {
    	type: "input",
    	message: "What is your city?",
    	name: "city"
    },
    {
    	type: "input",
    	message: "What is your state?",
    	name: "state"
    }
  ])
  .then(function(inquirerResponse) {
  	address = inquirerResponse.street + inquirerResponse.city + inquirerResponse.state

  	console.log(address);
// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address

// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data) {

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
});
  });



