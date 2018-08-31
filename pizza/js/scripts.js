//back end
var inputSize = {"small":10, "medium":12, "large":15};
var inputCheese = {"less cheese":1, "normal cheese":4, "extra cheese":6};
var inputSauce = {"bbq":2, "sauce":2, "alfredo":2};
var inputMeat = {"chicken":3, "pepperoni":2, "sardines":4};

function pizza(size, cheese, sauce, meat) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.meat = meat;
}

pizza.prototype.calculatePrice = function ()
{
  return inputSize[this.size] + inputCheese[this.cheese] + inputSauce[this.sauce] + inputMeat[this.meat]
}

// front end

  $(document).ready(function() {
    $("#delivery").click(function(event){
      event.preventDefault()
      $("#frontpage").hide();
      $("#nextpage").show();
      $(".details").show();
      $(".menu").show();
  });

  $("#menu").click(function(event){
    event.preventDefault()
    $("#frontpage").hide();
    $("#nextpage").hide();
    $(".details").hide();
    $(".menu").show();

  });

  $("form#makePizza").submit(function(event){
    event.preventDefault()
  var pizzaSize = $("#size").val();
  var pizzaCheese = $("#cheese").val();
  var pizzaSauce = $("#sauce").val();
  var pizzaMeat= $("#meat").val();
  var newPizza = new pizza(pizzaSize, pizzaCheese, pizzaSauce, pizzaMeat);
  $("#totalPrice").text(newPizza.calculatePrice() + " dollars");

});
    $("form#infos").submit(function(event)  {
    event.preventDefault()
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var addressInput = $("input#address").val();

        $(".firstname").text(firstnameInput);
        $(".lastname").text(lastnameInput);
        $(".address").text(addressInput);

  });





  $(".active").click(function(event) {
  location.reload(true);
});
});
