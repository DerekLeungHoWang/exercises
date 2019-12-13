var arr = [1,2,3,4]
var sum = 0;
var express = require("express");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  let arr = {
    arr: [1, 2, 3, 4]
  };

  res.send(req.body);
});

app.post("/profile", function(req, res) {
  console.log(req.body);
  
  for(i=0;i<arr.length;i++){
      sum+= arr[i]
  }


  res.json({"sum":sum});
});
app.listen(8080);
