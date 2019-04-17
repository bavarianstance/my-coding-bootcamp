/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  console.log(data);
  // Add to the table here...
  for (var i = 0; i < data.length; i++) {
    var row = $("<tr>");
    row.append($("<td>").text(data[i].name));
    row.append($("<td>").text(data[i].numLegs));
    row.append($("<td>").text(data[i].class));
    row.append($("<td>").text(data[i].weight));
    row.append($("<td>").text(data[i].whatIwouldReallyCallIt));
    $("#results").append(row);

  // $("#animal-name").append("<td>" + data[i].name + "</td>");
  // $("#animal-legs").append("<td>" + data[i].numLegs + "</td>");
  // $("#animal-class").append("<td>" + data[i].class + "</td>");
  // $("#animal-weight").append("<td>" + data[i].weight + "</td>");
  // $("#animal-new-name").append("<td>" + data[i].whatIwouldReallyCallIt "</td>");
  }
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});
