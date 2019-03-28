var mysql = require("mysql");
// var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "iseeyoutoorsql",
  database: "topsongs_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

// function initialPrompt() {
//   inquirer
//     .prompt([
//     {
//       type: "list",
//       message: "Please select an option.",
//       choices: ["Search by artist name", "Multi-Top 5000 artists", "Search by range", "Search by song"],
//       name: "option"
//     }
//       ])
//     .then(function(response) {
//       if (response.option === "Post a new item."){
//           promptItemEntry();
//         } else {
//           enterBid();
//         }
//     })
// }

var artistName = process.argv.slice(2);
var songName = "I believe I can fly";

function artistSearch() {
  connection.query("SELECT song FROM top5000 WHERE ?",
  {
    artist: artistName
  },
   function(err, res) {
    if (err) {
      throw err;
    }
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++){
      console.log(res[i]);
    }
    connection.end();
      }
    )};

  function songSearch(){
    connection.query("SELECT * FROM top5000 WHERE ?",
    {
      song: songName
    },
    function(err,res){
      if (err){
        throw err;
      }
      for (var i = 0; i < res.length; i++){
        console.log(res[i]);
      }
      connection.end();
    })
  }

  function moreThanOnce() {
    connection.query("SELECT artist, COUNT(*) FROM top5000 GROUP BY artist",
    function(err,res){
      if (err) {
        throw err;
      }
      for (var i = 0; i < res.length; i++){
        // console.log(res[i]['COUNT(*)']);
        if (res[i]['COUNT(*)'] > 1) {
          console.log(res[i].artist);
        }
      }
    });
  }

function range() {
  connection.query("SELECT artist FROM top5000 WHERE position BETWEEN 1 and 10",
  function(err,res){
    if (err){
      throw err;
    }
    console.log(res);
  });
}

// range();
// moreThanOnce();
    // artistSearch();
    songSearch();

