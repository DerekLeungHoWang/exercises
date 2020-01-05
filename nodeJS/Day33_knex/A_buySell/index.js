const fs = require('fs');
const CSVReadableStream = require('csv-reader');

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "howangleung",
        user: "howangleung",
        password: "postgres"
    }
});

const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');

async function commands() {
     
    let rows = [];
    inputStream.pipe(CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);
            console.log(rows);
        })
        .on('end', async(data)=>{

            knex.transaction(async (trx) => {
                try{ for (let row of rows) {
                     let [action, name, quantity] = row;
                     if (action === 'SELL') {
                         let rows = await trx.select('quantity').from('stock')
                             .innerJoin('citrus', 'stock.citrus_id', 'citrus.id')
                             .where('citrus.name', name).groupBy('quantity');
                         if (rows[0].quantity < quantity) {
                             throw new Error(`Not enough ${name}'s to make the sale`);
                         }
                     }
                     if (action === 'BUY') {
                         await trx('stock')
                             .whereIn('citrus_id', function () {
                                 return this.select('id')
                                     .from('citrus')
                                     .where('name', '=', name);
                             })
                               .increment('quantity', quantity);
                     } else {
                         await trx('stock')
                             .whereIn('citrus_id', function () {
                                 return this.select('id')
                                     .from('citrus')
                                     .where('name', '=', name);
                             })
                             .decrement('quantity', quantity);
                     }
                 }
                 let knexResult = await knex.select('*').from('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id').then((data)=>{
                     console.log(data, 'uhhh');
                 })
 
                 
                 // append : .toString(); to your knex query to print out the plain SQL version of the query 
                 console.log(knexResult);
                 
                 let trxResult = await trx.select('*').from('stock')
                     .innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
                 console.log(trxResult);
                 trx.commit;
             }catch(err){
                 console.log(err);
                 trx.rollback
             }
 
             })
        })   
}
  
           
commands();