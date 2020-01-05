
var ordersTemplate = Handlebars.compile(
  `
  <div class="order">
      <span class="input"><textarea> </textarea></span>

      <button class="remove btn btn-xs"><i class = "fa fa-trash" aria-hidden="true"></i></button>
      </div>

  `
);

const reloadOrders = () => {
  console.log("line15 controller. js");
  $("#orders").html(ordersTemplate({ orders: orders }));  //1st notes is res.data
};

$(document).ready(function(){

    $('.add-to-cart-btn').click(function(){
        reloadOrders();
    });
  });


  function addToCart(event){
      event.preventDefault();
      
  }