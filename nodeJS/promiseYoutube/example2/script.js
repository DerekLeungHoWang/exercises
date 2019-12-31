let p = new Promise((resolve, reject) =>{
    let a = 1 + 3
    if(a == 2){
        resolve('Success')
    } else{
        reject('promise Failed')
    }
})


p.then((message)=>{
    console.log(message);
    
}).catch((err)=>{
    console.log(err,"successfully");
})