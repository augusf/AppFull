var MongoClient = require('mongodb').MongoClient;

function startBaseDeDatos(callback) {

    var url = 'mongodb://localhost:27017/default';

    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.error(err);
            callback(err);
            return;
        }

        console.log("Connected correctly to mongodb");
        callback(null, db);
    });

};

module.exports = startBaseDeDatos;