
exports.up = function(knex) {
    return knex.schema.createTable('transactions',(table)=>{
        table.increments();
        table.date('transaction date');
        table.date('amount');
        table.string('receiver');
        table.decimal('balance', 14, 2);
        table.timestamps(false,true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('transactions');
};
