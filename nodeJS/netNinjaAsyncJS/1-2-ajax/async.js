window.onload = function(){

    var http = new XMLHttpRequest(); //set up http XMLHttpRequest

    http.onreadyStatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
        }
        
    };
    console.log(JSON.parse(http.response));
    // type fo request, URL to the data, true = async false = sync
    http.open("GET", "./tweets.json", true );
    http.send();
  
    

};


