var express = require("express");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(helmet());
app.use(bodyParser.json());

var url = 'mongodb://localhost:27017/default';


MongoClient.connect(url, function(err,db) {
  if(err){
  	console.error(err);
    process.exit(1);
  }
  console.log("Connected correctly to mongodb");
  app.get("/addData",function(req,res){
  	var collection = db.collection('documents');
    collection.insert([ {a : 1}, {a : 2}, {a : 3} ], function(err, result) {
      if(err){
        res.json(err);
      }
      res.json(result);
    }); 

  });

  app.get("/getData",function(req,res){
  	var collection = db.collection('documents');  
    collection.find({"a":1}).toArray(function(err, result) {
       if(err){
        res.json(err);
      }

      res.json(result);
    }); 
  });



  var server = app.listen(3000,function(err,inst){
  	console.log("Connected correctly to server");
  });
});