// for(i = 0; i < 4;i++){             // Loop 1

//     for(j=0; j<i ; j++){           // Loop 2  
//         console.log(i,j);
//     }
// }

let arr1 = [1,2,3,4,5]
let arr2 = ['a','b','c','d','e']

for (p = 0; p < arr1.length; p ++){
    for(m = 0; m< arr2.length; m ++){
        console.log(arr1[p], arr2[m])
    }
}