var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', function(err){
    console.log(err);
});


client.LPUSH('drink', 'cola', 'orange juice', 'pepsi', 'apple juice', 'coke zero', 'grape juice','tea','hot chocolate','milk', function(err,data){
    if(err) {
                return console.log(err);
            }
        
            client.LRANGE('drink',0,9, function(err, data){
                if(err) {
                    return console.log(err);
                }
                console.log('The value is ', data);
            });
})
// client.setex('location', 60, 'Hong Kong', function(err, data) {
//     if(err) {
//         return console.log(err);
//     }

//     client.get('location', function(err, data){
//         if(err) {
//             return console.log(err);
//         }
//         console.log('The value is ', data);
//     });
// });