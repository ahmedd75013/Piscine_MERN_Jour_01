var express = require('express');
var path = require('path');
var mongodb = require('mongodb');
var bodyParser = require ('body-perser');
var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27042/' ,{useUnifiedTopology :true});

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.resolve(__dirname ,'public')));


app.use(express.static(path.resolve(__dirname , 'public')));
app.listen(process.env.PORT || 3000,process.env.IP || '0.0.0.0');


app.post('/register', function (req, res)
{
	dbConn.then(function(db){
		delete req.body._id;
		db.collection('students').insertOne(req.body);
	});
	res.send('data received :\n' +JSON.stringify(req,body));

	});
	
server.listen(process.env.PORT)


