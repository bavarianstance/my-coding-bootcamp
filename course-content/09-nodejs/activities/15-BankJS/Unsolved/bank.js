let fs = require("fs");

let input = process.argv;

let operator = input[2];
let value = parseFloat(input[3]);
let output;
let sum = 0;


fs.readFile("bank.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // Then split it by commas (to make it more readable)
  let dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

  if (operator = "total") {
  	for (let i = 0; i < dataArr.length; i++){
  	let number = parseFloat(dataArr[i])
  	sum += number
  	}
  	console.log(sum);
  }

});


fs.appendFile("bank.txt", value, function(err) {

  // If an error was experienced we will log it.
  if (err) {
    console.log(err);
  }
  else if (operator = "deposit") {
  	console.log("deposit confirmed");

  }
  

});
