
const middle =(numArr)=>{

    let highest = Math.max(...numArr);
    console.log(highest);

    let lowest = Math.min(...numArr);
    console.log(lowest);

for(let i = 0; i< numArr.length;i++){

    if( numArr[i] !== highest && numArr[i] !== lowest){
        console.log(numArr[i]);
    }

}
}





middle([20,100,55]) // 0 -> 2 at index 0 lies between 3 and 1
