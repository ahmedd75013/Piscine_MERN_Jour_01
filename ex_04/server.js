var express = require("express");
var app = express();

app.set('view engine' , 'ejs')

app.get("/name/:name",function(req,res){
     let name = req.params.name ;
     
   
     res.render('index',{name:name})
 
  });

  app.get("/name/",function(req,res)
  {
    
    let name = "unknown" ;
    
  
    res.render('index',{name:name})

 });

app.listen(4242,function(){
  console.log("done");
});

