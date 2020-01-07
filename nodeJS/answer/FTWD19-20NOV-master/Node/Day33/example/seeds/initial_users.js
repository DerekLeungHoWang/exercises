
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Jim', email: 'Jim@im.com'},
        { name: 'Tim', email: 'Tim@im.com'},
        { name: 'Dim', email: 'Dim@im.com'}
      ]);
    });
};
