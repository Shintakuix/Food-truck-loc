// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  /* $(".create-menu").on("submit", function(event) {
  
    event.preventDefault();
  
      var newDish = {
        truck_name: $("#truckName").val().trim(),
        dish_name: $("#dish").val().trim(),
        dish_price: $("#price").val().trim()
      };
  
      // Send the PUT request.
      $.ajax("/api/menu",{
        type: "POST",
        data: newDish
      }).then(
        function() {
          console.log("dish plate posted");
          console.log(newDish)
        location.reload();
          
        }
      );
    }); */

  $(".create-truck").on("submit", function (event) {

    event.preventDefault();

    var newTruck = {
      truck_name: $("#truckName").val().trim(),
      truck_location: $("#truckLocation").val().trim(),
      truck_type: $("#cuisineName").val().trim(),
      dish_name: $("#dish").val().trim(),
      dish_price: $("#price").val().trim(),
      submitted: false,
      approved: true
    };



    $.ajax("/api/trucks", {
      type: "POST",
      data: newTruck
    }).then(
      function () {
        console.log("created new Truck");
        console.log(newTruck)
        alert("Your dish was succesfully added");
        return false;

      }
    );
  });
});

