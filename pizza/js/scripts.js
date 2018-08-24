//back end


function Pizza(name, cost) {
  this.name = name;
  this.cost = cost;
}

Pizza.prototype.pizzaOrder = function() {
  return this.cost;
}



// front end

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
      $("#frontpage").hide();
      $("#nextpage").show();
    });



      $("form#pizza-toppings").submit(function(event){
          event.preventDefault();
        var newPizza = 1
        var toppingPrize = 1
        var addOns =  2
        $("input:checkbox[name=toppings]:checked").each(function(){
            newPizza++;
          });
        $("input:checkbox[name=add-ons]:checked").each(function(){
            newPizza++;
          });
        var pizzaPrice = new Pizza(toppingPrize + addOns);

          if (newPizza === 0) {
            alert("Please check toppings!");
          } else if (newPizza > 0 && newPizza <= 5 ) {
            $("ul#price").append("<li><span class='orderPrice'>" + pizzaPrice.pizzaOrder() + "</span>");
            $("#price").show();
          } else if (newPizza > 5 && newPizza<= 9) {
            $("ul#price").append("<li><span class='orderPrice'>" + pizzaPrice.pizzaOrder() + "</span>");
          }
        });


  $(".active").click(function(event) {
  location.reload(true);
});
});
