var express = require("express");

var router = express.Router();

var trucks = require("../models/foodTruck.js");

router.get("/", function (req, res) {
  trucks.selectLocations(function (data) {
    var hbsObject = {
      locations: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/addtruck", function (req, res) {
  trucks.showTruck(function (data) {
    var hbsObject = {
      truck: data
    };
    console.log(hbsObject);
    res.render("add-truck", hbsObject);
  });
});

router.get("/:location", function (req, res) {
  var condition = "location = " + '"' + req.params.location + '"';
  console.log("condition", condition);
  trucks.selectTrucks(
    condition,
    function (data) {
      var hbsObject = {
        trucks: data
      };
      console.log(hbsObject);
      res.render("all-trucks", hbsObject);
    });
});

router.get("/:location/:truck", function (req, res) {
  var condition = "location = " + '"' + req.params.location + '"' + " AND name= " + '"' + req.params.truck+'"';

  console.log("condition", condition);
  trucks.menuTrucks(
    condition,
    function (data) {
      var hbsObject = {
        menu: data
      };
      console.log(hbsObject);
      res.render("specific-truck", hbsObject);
    });
});

router.post("/api/trucks", function (req, res) {
  trucks.insertTruck(["name", "location", "type_food", "dish_name", "dish_price"], [req.body.truck_name, req.body.truck_location, req.body.truck_type, req.body.dish_name, req.body.dish_price], function (result) {

    res.json({ id: result.insertId });
  });
});

module.exports = router;
