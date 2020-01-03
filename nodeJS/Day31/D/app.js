const pg = require('pg');

const config ={
    user: 'howangleung',
    database: 'howangleung',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const client = new pg.Client(config);

// client.connect();

// client.query('SELECT * FROM citrus', function(err, results){
//     if(err){
//         console.log(err); 
//     }
//     console.log(results.rows);

// })
//Normal version
// function getQuery(query){
//     client.query(`${query}`, function(err, results){
//         if(err){
//             console.log(err);
            
//         }
//         console.log(results.rows);   
//     })
// }

// getQuery(`SELECT * FROM citrus WHERE color = 'orange';`)

//asyn await version

async function run(){
    try{
        await client.connect();
        let results = await client.query('SELECT * FROM  citrus WHERE color = $1', ['yellow']);
        console.log(results.rows);
        return results
        
    }catch(e){
        console.log(e);
        
    };
}

run();