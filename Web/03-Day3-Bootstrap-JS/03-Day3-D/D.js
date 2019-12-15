const multiplyNumber =(num)=>{

    if(num <=0 || isNaN(num)){
        return "Error"
    }
    if(num >= 1000000){
        return 1000000
    }
    else {

        while(num <= 1000000){
            num*=10;
            
            console.log(num);
        }

        }
     }

     multiplyNumber(9);
 


// console.log(multiplyNumber(9));

// var x = 1000000

// console.log(x.toString().length);