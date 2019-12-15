let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("Cleaned The Roome");
  });
};
let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + "remove Garbage");
  });
};
let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + "won Icecream");
  });
};

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
  console.log("ssss");
});
