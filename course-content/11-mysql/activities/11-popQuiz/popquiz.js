var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "iseeyoutoorsql",
  database: "popquiz_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

function listQuestions() {
  connection.query("SELECT * FROM questions", function(err, res) {
    if (err) {
      throw err;
    }
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++){
      console.log(res[i].prompt);
    }
          // return results;
    connection.end();
      }
    )};

    listQuestions();
