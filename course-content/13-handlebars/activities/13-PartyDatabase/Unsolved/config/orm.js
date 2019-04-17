var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function(err, result){
      if (err) throw err;
      console.log(result);
    });
  },

  innerJoin: function(table1, table2, tableForeignKey){
    var queryString = "SELECT * FROM ?? INNER JOIN ?? ON ??.?? = ??.id";
    connection.query(queryString, [table1, table2, table1, tableForeignKey, table2], function(err, result){
      if (err) throw err;
      console.log(result);
    });
  },

  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
