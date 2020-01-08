
var ordersTemplate = Handlebars.compile(
  `
  {{#each orders }}
  
  <div class="cart-area">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <table class="table table-responsive">
                    <tbody >
                        <tr>
                        
                            <td class="cart_product_img d-flex align-items-center">
                            <h5>productID: {{@index}}</h6>
                            <span> &nbsp; &nbsp;</span>
                            <a href="#"><img src="img/2.jpg" alt="Product"></a>
                            <h6>{{this.orders}} </h6>
                                
                            </td>
                            <td class="price"><span>{{price}}</span></td>
                            <td class="qty">
                                <div class="quantity">
                                    <span class="qty-minus"
                                        onclick="var effect = document.getElementById('qty{{@index}}'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i
                                            class="fa fa-minus" aria-hidden="true"></i></span>
                                    <input type="number" class="qty-text" id="qty{{@index}}" step="1" min="1" max="99"
                                        name="quantity" value="1">
                                    <span class="qty-plus"
                                        onclick="var effect = document.getElementById('qty{{@index}}'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
                                            class="fa fa-plus" aria-hidden="true"></i></span>
                                </div>
                            </td>
                            <td class="total_price"><span>{{price}}</span></td>
                          
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    </div>
</div>
{{/each}}

  `
);

const reloadOrders = (orders) => {
  console.log("line15 controller. js");
  console.log(orders)

  let arr = []
  for(let i = 0; i< orders.length; i++){
  arr.push({orders:orders[0], price:'$50'})
}
console.log(arr)
  $("#orders").html(ordersTemplate({ 
    orders: arr ,
  }));  
};

$(document).ready(function () {

  //===============Counter===========================//
  (function($) {
		"use strict";
		function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */	
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)},1);
			}
		}        	
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
		});
   })(jQuery);
    //===============Counter-END===========================//


  axios
    .get("/api/orders/")
    .then(res => {
      console.log("LINE 52 controller.js");
      console.log(`===========================Getting notes: ${res.data}`); 
      reloadOrders(res.data)
    })
    .catch((err) => {
      console.log(err);
    });

  $('.add-to-cart-btn').click(function (event) {
  event.preventDefault()
  

    console.log(event.target);
    var val = event.target.id

    console.log(val);
      addToCart(val)
  });
});


function addToCart(val) {
  event.preventDefault();


  axios.post('/api/orders',{
    order: val
  }).then((res)=>{
    console.log("LINE 77 controller.js");
    
    console.log(res.data);
  }).catch((err)=>{
    console.log(err); 
  })

}


// const calculateTotal =()=>{
//     let sum = 0;

// }


