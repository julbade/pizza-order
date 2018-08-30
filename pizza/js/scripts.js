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
        var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}
            x[myIndex-1].style.display = "block";
            setTimeout(carousel, 3000);
        }




  $(".active").click(function(event) {
  location.reload(true);
});
});
