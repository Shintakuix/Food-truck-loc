var connection = require("../config/connection.js");
//Function to select the number of columns used
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//list of ORMs used in this application
var orm = {
  //ORM shows truck based on locations
  selectLocations: function (tableInput, cb) {
    var queryString = "SELECT DISTINCT location FROM " + tableInput;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //ORM show tables with unique location and name
  selectTrucks: function (table, condition, cb) {
    var queryString = "SELECT DISTINCT name, location FROM " + table + " WHERE " + condition;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  //ORM selects table with specific truck names
  menuTrucks: function (table, condition, cb) {
    var queryString = "SELECT * FROM " + table + " WHERE " + condition;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //ORM inserts new truck into the database
  insertTruck: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  //ORM shows a table with all the trucks
  showTruck: function (table, cb) {
    var queryString = "SELECT * FROM " + table + " WHERE submitted='false'";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

};

module.exports = orm;
