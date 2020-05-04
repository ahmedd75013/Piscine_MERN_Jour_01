var express = require("express");
var app = express();

app.set('view engine' , 'ejs')

app.get('/name/:name/:age' , function(req,res)
{
    var name =req.params.name;
    var age = req.params.age;

    res.render('index',{name:name ,age :age});
});

app.listen(4242);

