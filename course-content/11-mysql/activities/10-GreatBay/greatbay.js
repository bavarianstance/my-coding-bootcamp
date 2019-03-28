var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "iseeyoutoorsql",
  database: "greatbay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  initialPrompt();
});

function initialPrompt() {
  inquirer
    .prompt([
    {
      type: "list",
      message: "Please select an option.",
      choices: ["Post a new item.", "Bid on an item"],
      name: "option"
    }
      ])
    .then(function(response) {
      if (response.option === "Post a new item."){
          promptItemEntry();
        } else {
          enterBid();
        }
    })
}

function enterBid(){
  inquirer
    .prompt([
    {
      type: "list",
      message: "Please select an item to bid on.",
      choices: results,
      name: "listings"
    }
      ]).then(function(response) {
       console.log(response);
      });
}


function ItemEntry(name, price) {
  this.name = name;
  this.price = price;
}

ItemEntry.prototype.printInfo = function() {
  console.log("Title: " + this.name + "\nStarting Price: " + this.price);
};

function postNewItem(newItem) {
  console.log("Inserting a new item...\n");
  var query = connection.query(
    "INSERT INTO items SET ?",
    {
      name: newItem.name,
      minimumBid: newItem.price,
    },
    function(err, res) {
      console.log(res.affectedRows + " item inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      // updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function promptItemEntry(){
    console.log("\n--------\npromptItemCreation: ENTER NEW ITEM!\n--------\n");
    inquirer
      .prompt([
      {
        name: "name",
        message: "Please enter item name: "
       },
       {
        name: "price",
        message: "Please enter your starting bid price: "
      }
        ]).then(function(entry){
          var newItem = new ItemEntry(entry.name, entry.price);
          newItem.printInfo();
          postNewItem(newItem);
          // readItems();
          listItems();
        });
}


// function updateSong() {
//   console.log("Updating all song listings...\n");
//   var query = connection.query(
//     "UPDATE playlist SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " songs updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

function listItems() {
  connection.query("SELECT * FROM items", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++) {
      var results = [];
      results.push(res[i].name);
      console.log(results);
      // return results;
    }
  });
}

function readItems() {
  console.log("Showing all available items...\n");
  connection.query("SELECT * FROM items", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    console.log(res[0].id);
    connection.end();
  });
}
