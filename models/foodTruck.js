var orm = require("../config/orm.js");

var trucks = {
  selectLocations: function(cb) {
    orm.selectLocations("trucks", function(res) {
      cb(res);
    });
  },

  selectTrucks: function(condition, cb) {
    orm.selectTrucks("trucks", condition, function(res) {
      cb(res);
    });
  },

  menuTrucks: function(condition, cb) {
    orm.menuTrucks("trucks", condition, function(res) {
      cb(res);
    });
  },
  insertTruck: function(objColVals, condition, cb) {
    orm.insertTruck("trucks", objColVals, condition, function(res) {
      cb(res);
    });
  },

  insertMenu: function(objColVals, condition, cb) {
    orm.insertMenu("trucks", objColVals, condition, function(res) {
      cb(res);
    });
  },

  showDish: function(cb) {
    orm.showDish("trucks", function(res) {
      cb(res);
    });
  },

  showTruck: function(cb) {
    orm.showTruck("trucks", function(res) {
      cb(res);
    });
  }
  
};


module.exports = trucks;
