
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email:"Deerk", password: "123"},
        {email:"tester", password:"tester"}
      ]);
    });
};
