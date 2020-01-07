
exports.up = function(knex) {
  return knex.schema.createTable('users', (table)=>{
      table.increment();
      table.string('username').unique();
      table.string('password');
      table.timestamps(false, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
