const fs = require('fs');


class OrderService{
    constructor(file){
        this.file = file;
    }

    list(){
        console.log("line 10 orderservice");
        
    }

}

module.exports = OrderService;