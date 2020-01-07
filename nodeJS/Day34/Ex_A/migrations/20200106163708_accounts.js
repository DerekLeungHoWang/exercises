
exports.up = function(knex) {
    return knex.schema.createTable('accounts',(table)=>{
        table.increments();
        table.string("username");
        table.string("password");
        table.date('birthday')
        table.integer('age')
        table.timestamps(false,true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('accounts');
};
