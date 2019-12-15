// Exercise A Demo with adding info to the DOM

// $.ajax({
//     url: 'http://127.0.0.1:8080/data.json',
//     type: 'GET'
// }).done(function(data){
//     console.log("This function will be run if the ajax is successful");
//     let arrayData = data.data
//     let string = ''

//     arrayData.forEach(element => {
//         let name = element.name
//         let occupation = element.occupation

//         let responseString = `We have recieved data concerning ${name}. The characters occupation is: ${occupation}. <br>`

//         console.log(responseString)

//         string += responseString
//     });

//     console.log(string)

//     $('#test').html(string)


// }).fail(function(data){
//     console.log("This function will be run if the ajax if failed");
// }).always(function(data){
//     console.log("This function runs no matter success or fail.");
// });
function tellMeMore(endpoint, value){
$.ajax({
url: `https://restcountries.eu/rest/v2/${endpoint}/${value}`,
type: 'GET'

}).done(function(data){
console.log("This function will be run if the ajax is successful");
console.log(data)
}).fail(function(data){
console.log("This function will be run if the ajax if failed");
}).always(function(data){
console.log("This function runs no matter success or fail.");
});

}

tellMeMore('name', 'United Kingdom')