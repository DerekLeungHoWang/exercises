//     function informUs (endpoint, value, callback){
//     let http = new XMLHttpRequest();

//             http.open('GET',`https://restcountries.eu/rest/v2/${endpoint}/${value}`); 
// //target the file you want to GET

//             http.onreadystatechange = function(){//handle error and success

//                 if(http.readyState != XMLHttpRequest.DONE) {
//                     return;

//                 } else if(http.status == 200) {

//                    callback(JSON.parse(http.responseText)); //get data into console 

//                 } else {

//                     console.log('error occurred ' + http.status); //tell user there is an error 
//                 }
//             }

//             http.send(); //send the request
// }

// informUs('region', 'Europe', function(data){
//     console.log(data)
// })

    
// // let title = document.getElementsByTagName('h1');
// // console.log(title)
// // title[0].innerHTML = "OMFG";

// // let content = document.getElementsByTagName('p');
// // content[0].innerHTML = "what ever message you want. "
// // content[1].innerHTML = "super easy"


// // let listenedElement = document.getElementsByTagName('h2')
// // listenedElement[0].onclick= function (){
// //     alert('I was clicked.')
// //     listenedElement[0].innerHTML = "I have changed, its not you its me"

// //     // listenedElement[0].style.color = "#ffffff";
// //     listenedElement[0].style.border = "1 px";

// // }


/// basic XMLHttpRequest
// let http = new XMLHttpRequest();
// console.log('step 1')
// http.open('GET',`https://pokeapi.co/api/v2/pokemon/geodude`); 
// //target the file you want to GET
// console.log('step 2')

// http.onreadystatechange = function(){//handle error and success
//     console.log('step 5')
//     console.log(http.readyState)

//     if(http.readyState != XMLHttpRequest.DONE) {
//         return;

//     } else if(http.status == 200) {
//         console.log('step 6')


//      console.log(JSON.parse(http.responseText)); //get data into console 

//     } else {

//         console.log('error occurred ' + http.status); //tell user there is an error 
//     }
// }
// console.log('step 3')


// http.send(); //send the request

// console.log('step 4')


let titleHeader = document.getElementById('header');
let body = document.getElementById('body');

let para = document.getElementsByTagName('p');

console.log(para)

console.log(titleHeader)

    titleHeader.innerHTML = "Hello Class Ive changed."


    titleHeader.onclick = function(){
        alert('Wow you clicked it');
        titleHeader.innerHTML = "I am more changed than before."

        body.style.backgroundColor = "#000000"
    }

