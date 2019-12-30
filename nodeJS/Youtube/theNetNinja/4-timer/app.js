var time = 0;

var timer = setInterval(() => {
    
    time+=1;
    console.log(time + "seconds passed");
    if(time > 5){
        clearInterval(timer);
        console.log('cleared');
        
    }
    
}, 1000);

console.log(__dirname);
console.log(__filename);

