const toAlphabet =(num)=> {

    var digits = num.toString().split('')

    var realDigits = digits.map(Number)

let arr =[];

for(let i = 0 ; i < realDigits.length; i++){

    if(realDigits[i] !== 0){
    var alphabet = String.fromCharCode(realDigits[i] + 64);
    arr.push(alphabet)
    }else if(realDigits[i] === 0){
        arr.push("j")
    }

  }  
  console.log(arr.join(''));
}


toAlphabet(123456789);



