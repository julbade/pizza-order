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
      var newPizza = 0
      var toppingPrize = $("input:checkbox[name=toppings]:checked").val();
      var addOns =  $("input:checkbox[name=add-ons]:checked").val();
      var pizzaPrice = new Pizza(toppingPrize + addOns);


        if ( newPizza === 0) {
            alert("Please Check Toppings!");
          }
        });


  $(".active").click(function(event) {
  location.reload(true);
});
});
