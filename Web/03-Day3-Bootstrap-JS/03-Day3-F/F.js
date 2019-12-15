const countChar =(string1, character )=>{
    let count = 0, char,lowerCaseStr;

    lowerCaseStr = string1.toLowerCase();


    for( char of lowerCaseStr){
        
    if(char == character){count++;}
  
    }
    
    return count;

}

console.log(countChar("fiZZbuzz","z"));

