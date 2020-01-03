//connect to database
//{} = .Client
const {Client} = require('pg')
const client = new Client({
    user: "howangleung",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "howangleung"
})

//this returns a promise
client.connect()
.then(()=>console.log('connected successfully'))
.then(()=> client.query("select * from stock"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(()=> client.end())