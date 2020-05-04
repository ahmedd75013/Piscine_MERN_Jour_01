var express =require('express');
var app =express();

app.get('/' ,(req,res)=>{res.send('hello');
});

console.log('done');
app.listen(4242);
