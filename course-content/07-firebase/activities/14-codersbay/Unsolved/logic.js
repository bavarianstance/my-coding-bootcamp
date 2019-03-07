// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
    var config = {
    apiKey: "AIzaSyDFgJkt7VNOB1-_UAw0E0FuTlahVeXYQfc",
    authDomain: "testing-calvin-821cf.firebaseapp.com",
    databaseURL: "https://testing-calvin-821cf.firebaseio.com",
    projectId: "testing-calvin-821cf",
    storageBucket: "testing-calvin-821cf.appspot.com",
    messagingSenderId: "405851705918"
  };
  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();


// Initial Values
var highPrice = 0;
var highBidder = "No one :-(";


// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
  highBidder = snapshot.val().highBidder;
  highPrice = parseInt(snapshot.val().highPrice);
}

    // Change the HTML to reflect the stored values
    highPrice = $("#highest-price").val().trim();
    highBidder = $("#highest-bidder").val().trim();
    bidderName = $("#bidder-name").val().trim();
    bidderPrice = $("#bidder-price").val().trim();

    // Print the data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    $("#highest-price").html(highPrice);
    $("#highest-bidder").html(highBidder);

    // Change the HTML to reflect the initial values
    highPrice = $("#highest-price").val().trim();
    highBidder = $("#highest-bidder").val().trim();

    // Print the data to the console.
    console.log(highPrice);
    console.log(highBidder);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  bidderName = $("#bidder-name").val().trim();
  bidderPrice = $("#bidder-price").val().trim();
  console.log(bidderPrice);
  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      bidderName: bidderName,
      bidderPrice: bidderPrice,
      highPrice: highPrice,
      highBidder: highBidder
    });

    // Log the new High Price
    console.log(highPrice);
    console.log(highBidder);

    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
