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
        var newPizza = 10
        var toppingPrize = $("input:checkbox[name=toppings]:checked").each(function(){
            newPizza++;
          });

        var addOns =  $("input:checkbox[name=add-ons]:checked").each(function(){
            newPizza++;
          });
          if (newPizza === 10) {
            alert("Please check toppings!");
          } else if (newPizza > 10 && newPizza <= 15 ) {
            alert("You ordered DeluxePizza!");
          } else if (newPizza > 15 && newPizza<= 19) {
            alert("You ordered Supreme!");
          }

        });


  $(".active").click(function(event) {
  location.reload(true);
});
});
