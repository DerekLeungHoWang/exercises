// let jsTitle = document.getElementsByClassName('title');

// let jsText = document.getElementById('text')


// // console.log(jsText);

// // console.log(jsTitle);

// let jQTitle = $('.title, .test');

// let jQText = $('#text');

// // console.log(jQText);

// // console.log(jQTitle);

// /*  

// * = select all elements that contain the name attribute with the value: “value”

// ^ = select all elements that contain the name attribute that start with value: “value”

// $ = select all elements that contain the name attribute that ends with the value: “value”


// $(‘<element-type-you’re-selecting>[name*=“value”]’);

// */

// let emailInput = $('input[name*="email"]');

// emailInput[0].style.borderColor = "red";

// console.log(emailInput);

// let allNames = $('input[name$="Name"]');
// console.log(allNames);

// allNames[1].style.border = "black solid 5px"

// let pass = $('input[name^="pass"]');
// console.log(pass);


// let appendElement = $('.append')

// appendElement.append("<p>This is the new appended stuff</p>")

// appendElement.before('<button style="display: block">I am a button</button>');

// $('.jquery').empty();

// let appendElement = $('.append');

// appendElement.append('<p>This is the new appended stuff</p>');

// appendElement.before('<button style="display: block">I am a button</button>')


// console.log($('.jquery').html("I am new string"))

// $('h1').html('This is a lot better')

// function emptyThisId(id){
//     document.getElementById(id).innerHTML = ""
// }


// emptyThisId('testFunc')


// $(()=>{

// $('h1').on('mouseenter', function(){
//     $('h1').html('you hover me')
// })

// $('h1').on('mouseleave', function(){
//     $('h1').html("you've neglected to hover.")
// })

// })
let emailInput = $('input[name*="email"]');   

emailInput.on('blur',function(){
    let check = emailInput.val()
    if(check === "" ){
        // alert('INSERT YOUR EMAIL!!!!!!!!')
        emailInput[0].style.border = 'red solid 10px'
    }

})



$('#submit').on('click',function(event){
    event.preventDefault();

    let name = $('input[name*="name"]');
    let phoneNumber = $('input[name*="phoneNumber"]');


    ei = emailInput.val()
    ni = name.val()
    pi = phoneNumber.val()


    alert(`Welcome user ${ni}, your email is: ${ei}, your phone number is: ${pi}`)


})