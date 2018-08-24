// function Pizza(name, topping, cost) {
//   this.name = name;
//   this.toppings = toppings;
//   this.cost = cost;
// }
// var newPizza = new Pizza("Pepperoni", ["pepperoni", "cheese"], 10 );
//
//














// user interface

  $(document).ready(function() {
      $("#carry").click(function(){
      $("#infos").show();

  });

      $("#delivery").click(function(){
      $("#infos").show();
      $("#hide-address").show();

  });

      $("#infos").submit(function(event)  {
      event.preventDefault()
      var firstnameInput = $("input#firstname").val();
      var lastnameInput = $("input#lastname").val();
      var addressInput = $("input#address").val();

      $(".firstname").text(firstnameInput);
      $(".lastname").text(lastnameInput);
      $(".address").text(addressInput);
      $("#text2").show();
  });

  $("#refresh").click(function(event) {
  location.reload(true);
});
});
