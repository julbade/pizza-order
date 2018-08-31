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
    $("#delivery").click(function(event){
      event.preventDefault()
      $("#frontpage").hide();
      $("#nextpage").show();
      $(".details").show();
  });
  $("#menu").click(function(event){
    event.preventDefault()
    $("#frontpage").hide();
    $("#nextpage").hide();
    $(".details").hide();
    $(".menu").show();
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



      $("form#pizza-toppings").submit(function(event){
          event.preventDefault();
      var newPizza = 0



        if  (newPizza === 0) {
            alert("Please Check Toppings!");
          }
        });




  $(".active").click(function(event) {
  location.reload(true);
});
});
