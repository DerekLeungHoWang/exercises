
function informMe(endpoint, value, callback){
    let http = new XMLHttpRequest();
http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`);

http.onreadystatechange = function () {
    if (http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if (http.status == 200) {
        callback(http.responseText)
    } else {
        console.log('error occurred' + http.status);
    }
}
http.send();
}

// function logger(unparsedText){
//     console.log(JSON.parse(unparsedText));
// }

// informMe('currency', 'usd', logger);


informMe('capital', 'paris', function(unparsedText){

    let country = JSON.parse(unparsedText)


      console.log(country);
    
      let placeOnDocument = document.getElementById('placeHolder');

      let countryName = country[0].name;
      let countryRegion = country[0].region;
      let countryPopulation = country[0].population

      placeOnDocument.innerHTML = `We found information about ${countryName}, its within the region of ${countryRegion}, it has many people living inside, around this many: ${countryPopulation}`

})