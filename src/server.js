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

    password: "jFw-sL8-Ntc-jvQ",

    database: "hopital"

});


db.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/posts', (req, res) => {
  db.query("SELECT id_patient, nom, prenom, date_naiss FROM tb_patients WHERE jour ='Lundi';", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});


module.exports = db;
