
var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://127.0.0.1:27042/',{useUnifiedTopology: true}, function(err, db) {
	if(err){
		console.log('COnnection failed');

	}
	else{
		console.log('Connection successfull');
	}
	db.close();
});


