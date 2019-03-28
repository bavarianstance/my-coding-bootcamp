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
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  promptSongEntry();
});

function SongEntry(title, artist, genre) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}

SongEntry.prototype.printInfo = function() {
  console.log("Title: " + this.title + "\nArtist: " + this.artist + "\nGenre: " +
  this.genre);
};

function insertNewSong(newSong) {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO playlist SET ?",
    {
      title: newSong.title,
      artist: newSong.artist,
      genre: newSong.genre
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      // updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function promptSongEntry(){
    console.log("\n--------\npromptSongCreation: ENTER NEW SONG!\n--------\n");
    inquirer
      .prompt([
      {
        name: "title",
        message: "Please enter song title: "
       },
       {
        name: "artist",
        message: "Please enter artist name: "
      },
      {
      name: "genre",
      message: "Please enter genre: "
    }
        ]).then(function(entry){
          var newSong = new SongEntry(entry.title, entry.artist, entry.genre);
          newSong.printInfo();
          insertNewSong(newSong);
          // readSongs();
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

function readSongs() {
  console.log("Showing all songs...\n");
  connection.query("SELECT * FROM playlist", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
