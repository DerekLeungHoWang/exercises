// let promiseAdd = new Promise ((happy, sad) => {
//     let answer = 1 + 4 

//     if(answer === 5){
//         happy (answer +  " SUCCCESSSSSSS")
//     } else {
//         sad('Failure!!!!')
//     }
// });

// promiseAdd.then((message) => {
//     console.log('This is in the then, ', message);
// }).catch((message)=>{
//     console.log('This is in the catch, ', message);
// })

// let p = new Promise ((res, rej) => {
//     let data = $.get(`https://restcountries.eu/rest/v2/ame/japan`)

//     if(data){
//         res(data)
//     } else {
//         rej('No data received')
//     }

// })

// p.then((data)=>{
//     console.log(data)
//     let unpacked = data[0]
//     console.log(unpacked.name + "  has alot of information including its currency " + unpacked.currencies[0].name)
// }).catch((message)=>{
//     console.log('ERROR')
//     console.log(message)
// })

const markCanvas1 = new Promise ((res, rej) => {
    let data = $.get(`https://restcountries.eu/rest/v2/name/japan`)
 res(data)
});

const markcanvas2 = new Promise ((res, rej)=>{
    res('marked group 2')
})

const markcanvas3 = new Promise ((res, rej)=>{
    res('marked group 3')
})

Promise.all([
    markCanvas1,
    markcanvas2,
    markcanvas3
]).then((responses)=>{
    console.log(responses)
}).catch((error)=>{
    console.log(error)
})