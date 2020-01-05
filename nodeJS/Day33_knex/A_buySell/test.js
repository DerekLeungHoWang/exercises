const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "howangleung",
        user: "howangleung",
        password: "postgres"
    }
});

// async function callDatabase(){
// let query = await knex.select('quantity', 'price').from('stock').whereIn('citrus_id', function (){
//     this.select('id').from('citrus').then((data)=>{
//         console.log('callback')
//         console.log(data)
//     })
// })
// console.log('query?')
// console.log(query)
// }

// callDatabase()
let query = knex.select("*").from("users")

console.log(query.toSQL());

query.then((rows)=>{
    console.log(rows);
    
}).catch((error)=>{
    console.log(error);
    //Handle the error here.
});