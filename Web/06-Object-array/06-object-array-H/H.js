// const move =(str)=>{

//     var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     console.log(letterArray);
//     console.log(str);

//     let dogArr = str.split('');
//     console.log(dogArr);

 
//     dogArr.forEach(element => {
        
//         let indexStr = letterArray.indexOf(element)
//         console.log(indexStr);

//         let indexOfStr = [];
//         indexOfStr.push(indexStr);


//     });


     
// }

// move('dog');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'; //declare alphabet 

function moveTen(input){ //declare function with its input
    return input.split('').map((element)=>{ //split the input word then for each element do this
        return alphabet[(alphabet.indexOf(element) + 10 % 26)] // return the alphabet index of: indexOfElement + 10 % 26 -- to loop it back round.
    }).join('')
}

console.log(moveTen('dog'));




