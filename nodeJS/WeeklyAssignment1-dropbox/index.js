var time = 0;

var timer = setInterval(() => {
    
    time+=1;
    console.log(time + "seconds passed");
    if(time > 5){
        clearInterval(timer);
        console.log('cleared');
        
    }
    
}, 1000);