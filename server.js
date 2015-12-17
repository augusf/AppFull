var express = require("express");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var startRouter = require('./router');
var startBaseDeDatos = require('./baseDeDatos');

var app = express();

app.use(helmet());
app.use(bodyParser.json());

startBaseDeDatos(function(err, db) {
    if (err) {
        process.exit(1);
    }

    startRouter(db, function(router) {
        app.use('/', router);

        app.listen(3000, function(err, inst) {
            console.log("Connected correctly to server");
        });
    });

});