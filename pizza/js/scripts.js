function Pizza(name, topping, cost) {
  this.name = name;
  this.toppings = toppings;
  this.cost = cost;
}

var newPizza = 0
















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
      $("#frontpage").hide();
      $("#nextpage").show();
    });



      $("form#pizza-toppings").submit(function(event){
          event.preventDefault();
          $("input:checkbox[name=toppings]:checked").each(function(){
            newPizza++;
          });

          $("input:checkbox[name=add-ons]:checked").each(function(){
            newPizza++;
          });

          if (newPizza === 0) {
            alert("You are not stressed");
          } else if (newPizza > 0 && newPizza <= 5 ) {
            alert("You're not that stressed, quit bitching");
          } else if (newPizza > 5 && newPizza<= 9) {
            alert("You're kinda stressed. Keep doing those coping methods");
          }

        });


  $(".active").click(function(event) {
  location.reload(true);
});
});
