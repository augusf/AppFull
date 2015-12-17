var express = require('express');

var router = express.Router();

function startRouter(database, callback) {
    var db = database;

    router.get("/addData", function(req, res) {
        var collection = db.collection('documents');
        collection.insert([{
            a: 1
        }, {
            a: 2
        }, {
            a: 3
        }], function(err, result) {
            if (err) {
                res.json(err);
            }
            res.json(result);
        });

    });

    router.get("/getData", function(req, res) {
        var collection = db.collection('documents');
        collection.find({
            "a": 1
        }).toArray(function(err, result) {
            if (err) {
                res.json(err);
            }
            res.json(result);
        });
    });

    callback(router);
}


module.exports = startRouter;