exports.up = function(knex) {
    return knex.schema.createTable('creditCards',(table)=>{
        table.increments();
        table.integer("cardNumber");
        table.date('start date')
        table.date('expiry date')
        table.integer('csv-number')
        table.timestamps(false,true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('creditCards');
};
