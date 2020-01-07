const pg = require('pg');

const config = {
    user: 'postgres',
    database: 'test1',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const client = new pg.Client(config);

client.connect();

// client.query('SELECT * FROM students', function(err, data){
// if(err){
//     console.log(error)
// }
// console.log(data.rows)

// process.exit()
// })
var number = 12

client.query( `INSERT INTO students (name, grade, gender, sport) VALUES ('Sam', ${Number(number)},  True, 'Football');`, function(err){
    if(err){
        console.log(err)
    }
})
