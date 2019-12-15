


function getUser(cb){


    var http = new XMLHttpRequest();

 
http.open('GET', 'https://randomuser.me/api/')


http.onreadystatechange = function() {

if(http.readyState != XMLHttpRequest.DONE) {

return;

} else if(http.status == 200) {


    cb(http.responseText)

} else {

console.log('error occurred' + http.status);

    }

}

http.send();
}


getUser(function(data){

    // this is where other developers can write code 

    let user= JSON.parse(data)
let fullName = Object.values(user.results[0].name)

console.log(fullName)

fullName = `${fullName[0]}, ${fullName[1]} ${fullName[2]}`

document.getElementById('newData').innerHTML = `I have met a person called ${fullName}, they are from ${user.results[0].location.country} `


});