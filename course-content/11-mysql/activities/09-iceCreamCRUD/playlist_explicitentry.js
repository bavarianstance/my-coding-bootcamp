var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "iseeyoutoorsql",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  insertNewSong();
});


function insertNewSong() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO playlist SET ?",
    {
      title: "Alive",
      artist: "Krewella",
      genre: "Dubstep"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}


function updateSong() {
  console.log("Updating all song listings...\n");
  var query = connection.query(
    "UPDATE playlist SET ? WHERE ?",
    [
      {
        genre: "Electronic"
      },
      {
        genre: "EDM"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all Krewella songs...\n");
  connection.query(
    "DELETE FROM playlist WHERE ?",
    {
      artist: "Krewella"
    },
    function(err, res) {
      console.log(res.affectedRows + " songs deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readSongs();
    }
  );
}

function readSongs() {
  console.log("Showing all songs...\n");
  connection.query("SELECT * FROM playlist", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
