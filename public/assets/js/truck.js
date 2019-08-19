
//Wait for DOM to run first before executing the onclick
$(function () {

  $(".create-truck").on("submit", function (event) {

    event.preventDefault();
    //stores information from a form to a variable
    var newTruck = {
      truck_name: $("#truckName").val().trim(),
      truck_location: $("#truckLocation").val().trim(),
      truck_type: $("#cuisineName").val().trim(),
      dish_name: $("#dish").val().trim(),
      dish_price: $("#price").val().trim(),
      submitted: false,
      approved: true
    };
    //sent information from forms to /api/trucks
    $.ajax("/api/trucks", {
      type: "POST",
      data: newTruck
    }).then(
      function () {
        console.log("created new Truck");
        console.log(newTruck)
        alert("Your dish was succesfully added");
        //return false prevents the for from reloading
        return false;
      }
    );
  });
});

