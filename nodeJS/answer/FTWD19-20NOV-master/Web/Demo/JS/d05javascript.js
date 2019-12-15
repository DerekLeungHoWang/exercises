
let i;
let j;

/*
// Example ForLoop

function forLoop () {
    for (i = 0; i < 31; i ++){
        console.log(i)
    }
}

forLoop();

*/


// Example ForLoop on an Array

let lunch = ['Fish and Chips', 'Sausages and Mash', 'Bad bad Pizza', 'Steak and Ale Pie', 'Poorly made fried rice'];

function whatsForLunch(array){
    for(i = 0; i<array.length; i ++){
        switch(i){
            case 0: console.log(`Monday: ${array[i]}`);
            break;
            case 1: console.log(`Tuesday: ${array[i]}`);
            break;
            case 2: console.log(`Wednesday: ${array[i]}`);
            break;
            case 3: console.log(`Thursday: ${array[i]}`);
            break;
            case 4: console.log(`Friday: ${array[i]}`);
            break;
            default: console.log(array)
        }
    }
}

// whatsForLunch(lunch);




// Same output as above, but with two forloops and two array.

let dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

for(i=0;i<lunch.length; i++){
    for(j=0;j<dayOfTheWeek.length; j++){
        if(i === j ){
            console.log(`${dayOfTheWeek[j]} : ${lunch[i]}`)
        }
    }
}



/*
// Example While loop

let count = 0;

function makeOver1000000(number){

    while(number < 1000000){
        count ++
        number += 2000;
        console.log(number);
    }
    console.log(number, count);
}

makeOver1000000(9000)

*/