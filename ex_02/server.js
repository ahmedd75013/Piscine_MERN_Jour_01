var express =require('express');
var app =express();

app.get('/' ,function(req,res){
  res.setHeader('Content.Type','text/plain');
    res.send('Great ! It works');
});

console.log('done');

app.listen(4242);
