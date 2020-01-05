const express = require("express");
var router = express.Router();

class OrderRouter{
    constructor(orderService){
        this.orderService = orderService;
    }
    router(){
        router.get("/",this.get.bind(this));
    
        return router
    }
    
    get(req,res){
        console.log("LINE 16 router router .js <<<<>>>");
        return this.orderService.list()
        
    }
}



module.exports = OrderRouter;