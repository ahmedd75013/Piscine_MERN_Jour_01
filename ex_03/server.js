var express =require('express');
var app =express();

var fs = require('fs');


  fs.readFile('./index.html',(err, data)=>{
    if(err)
    throw err;
    app.get('/' ,(req, res)=>{
      res.set('Content-Type','text/html');
      res.send(data)
    })

});

app.listen(4242);


