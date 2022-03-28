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

/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});*/

app.get('/posts', (req, res) => {
  db.query("CALL patientsJours;", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

//http://localhost:3000/changementStatus/20220001
app.get('/changementStatus/:id_patient', (req, res) => {
  console.log(req.params.id_patient);
  db.query(`CALL changementStatus(${req.params["id_patient"]}, ${2});`, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

/*
Commandes: npm start
           node src/server.js
*/

module.exports = db;
