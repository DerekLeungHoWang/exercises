const fs = require('fs');


class OrderService{
    constructor(file){
        this.file = file;
    }

    

    read(user){
        console.log('read function running');
        console.log(user, 'line 13')
        return new Promise((resolve,reject)=>{
            fs.readFile(this.file,'utf-8',(err,data)=>{
                console.log(data, "line 18 , orderService");
                if(err){
                    reject(err)
                }
                try{     
                    this.orders = JSON.parse(data);
                    console.log(this.orders, "line 24 orderService");
                    console.log(user, 'line 23')
                 
                } catch (e) {
                    return reject(e)
                }
                return resolve(this.orders[user]);
            })

        })  
    }

    list(user){
        console.log(user, "line 10 orderService");
    
        return this.read(user)
    }

    add(newOrder,user){
        console.log('add function running ?????????????????????????');
        console.log(newOrder,user);
        console.log(this.orders, 'line 43 ===========>>>>>');
        console.log(this.orders[user]);
        if(typeof this.orders[user] === 'undefined'){
            console.log('the user is undefined');
            
            this.orders[user] = [];
     } this.orders[user].push(newOrder)
        console.log(this.orders[user],"after push");
        
        return this.write();
    }

    write(){
        console.log('write function running ');
        return new Promise((resolve,reject)=>{
            fs.writeFile(this.file, JSON.stringify(this.orders),(err)=>{
                console.log(this.file, 'line 52 orderserviceJS');
                
                console.log(this.orders, "line 54 orderservice JS")
                if(err){
                    return reject(err);
                }
                resolve(this.orders);
            })
        })
    }

}

module.exports = OrderService;