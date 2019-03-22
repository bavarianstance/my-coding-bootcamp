var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function messageGen(argument, thingToGen) {
	console.log("this is a message");
	argument();
}
// Write a function that runs a function argument if
// its other argument is truthy.

function genMe(argument, bool){
	if (bool){
		argument();
		} 	
	}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function wrap(argument, value){
	return function(){
		return argument(value);
	};
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
var message = "this is another message";
fs.writeFile("log.txt", message, function(err){
	if (err){
		console.log(err);
	}
	console.log("write file success.")
});

