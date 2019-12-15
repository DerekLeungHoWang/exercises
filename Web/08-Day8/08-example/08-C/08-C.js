
const whoIsinSpace=(callback)=>{
    
    var http = new XMLHttpRequest();
    http.open('GET', 'http://api.open-notify.org/astros.json',true)

    http.onreadystatechange = function() {

    if(http.readyState != XMLHttpRequest.DONE) {

    return;

    } else if(http.status == 200) {

    callback(http.responseText);

    } else {

    console.log('error occurred' + http.status);
        }

    }
    http.send();
}



whoIsinSpace(function(unparsedText){

    
    let data = JSON.parse(unparsedText)


for(let i = 0 ;i< data.people.length ;i++){
   console.log(data.people[i].name);
}
})