function callURLRequest(url){
     var http = new XMLHttpRequest();
    http.open('GET', `${url}`)
    http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
    return;
    } else if(http.status == 200) {
    console.log(JSON.parse(http.responseText));
    } else {
    console.log('error occurred' + http.status);
        }
    }
    http.send();
}

callURLRequest('https://pokeapi.co/api/v2/pokemon/grimer')
   