'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});


const mysql = require('mysql');

const db = mysql.createConnection({

    host: "devweb.sytes.net",

    user: "mabite",

    password: "METTEZ LE MDP QUE JAI ENVOYE",

    database: "hopital"

});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    db.query("select * from tb_status", function (err, result) {
        //if (err) throw err;
        console.log(err);
        console.log(result);
    });
});
