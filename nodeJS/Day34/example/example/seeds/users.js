
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {username: "sam", password:"123456"},
        {username: "test", password:"test"}
      ]);
    });
};
