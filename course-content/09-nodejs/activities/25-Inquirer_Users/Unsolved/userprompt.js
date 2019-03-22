// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your face?",
      name: "username"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Enter your secret",
      name: "password"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "What car would you like?",
      choices: ["BMW", "Audi", "MBZ"],
      name: "make"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Perform initial dorifto?",
      name: "confirm",
      default: false
    },
    {type: "checkbox",
    message: "check yoself!",
    choices: ["good ish", "better stuff", "best shiznat"],
    name: "check"
	}
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.make + " is ready for dorifto!\n");
      console.log("I have your secret mofo " + inquirerResponse.password);
    }
    else {
      console.log("\nYou fail " + inquirerResponse.username + "! Come back when you got the cojones and wants the\n" + inquirerResponse.check);
    }
  });
