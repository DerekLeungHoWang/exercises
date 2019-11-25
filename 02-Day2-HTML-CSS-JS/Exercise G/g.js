
// Given that x = 8 and y = 3. Answer the following:

// x == y      //=> false
// x && y < 10  //=> true
// x || y =< 8  //=> true
// y === '3'    //=> false, '3' is string, 3 is number.
// !(x == 5)    //=> true

// //Bonus

// function area(height,width) {
//     console.log(height * width);
// }

// area(10,10);


function getStock(stock, callback){


    console.log(`Getting the stock: ${stock}.`);

    callback(stock);

}



getStock('HSBC', function(stock){

    console.log(`Got the stock: ${stock}`)

});