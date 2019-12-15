let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve('Cleaned The Roome')
    });
};
let removeGarbage = function(p){
    return new Promise(function(resolve,reject){
        resolve('remove Garbage')
    });
};
let winIcecream = function(){
    return new Promise(function(resolve,reject){
        resolve('won Icecream')
    });
};

cleanRoom().then( p =>{
    console.log(p);
    
    return removeGarbage();
}).then(p=>{
    console.log(p);
    
    return winIcecream();
}).then( p=>{
    console.log(p);
  
    
})