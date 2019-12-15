/*It’s the academic year’s end, fateful moment of your school report.   The averages must be calculated.   All the students come to you and entreat you to calculate their average for them.   The function takes an array as parameter, return the average of the array rounded down to its nearest integer.

Hint: How could you the .reduce() method for this exercise? Remember to round the result. The function should output a single number, the average of the array or marks. 

Given this array, */

/*
    var marks = [

    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },

    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ]

    console.log(marks[0].mark);

    let total = marks.reduce((acc, index)=>{
        console.log(acc, index.mark)
        return acc + index.mark
    }, 0)

    console.log((total/ marks.length).toFixed());

*/
// The output of the function that takes this array of objects is 70.

/*
Move every letter in the provided string forward 10 letters through the alphabet. If it goes past ‘z’, start again at ‘a’.

move('dog') // the result should be 'nyq' as 'd' -> 'n' and so forth
You may consider first building an array of characters from a to z. You can easily make one using the following:
var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
Maybe you can first split the input string then move each letter forward 10 letters using the index of the array you built above? How will you handle the case when the letterindex+10 is larger than 25?
Another method you can look into is to use the fromCharCode() and charCodeAt()
*/

let alphabet = "abcdefghijklmnopqrstuvwyxz"

function letter10(letter){
    for(let i=0; i < alphabet.length; i ++){
        if(letter == alphabet[i]){
           let nextLetterIndex = alphabet.indexOf(letter) + 10 ;
           console.log(nextLetterIndex);
           console.log(alphabet[nextLetterIndex]);
        }
    }
}

letter10('c')

