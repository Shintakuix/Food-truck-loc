var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

var orm = {
  selectLocations: function (tableInput, cb) {
    var queryString = "SELECT DISTINCT location FROM " + tableInput;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectTrucks: function (table, condition, cb) {
    var queryString = "SELECT DISTINCT name, location FROM " + table + " WHERE " + condition;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  menuTrucks: function (table, condition, cb) {
    var queryString = "SELECT * FROM " + table + " WHERE " + condition;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

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
