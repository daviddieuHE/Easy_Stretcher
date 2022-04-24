'use strict';
const cors = require('cors');
const apiHopital = require('./APIHopital.js');
var path = require('path');
var express = require('express');


var app = express();
app.use(cors());

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});


const mysql = require('mysql');
const { stringify } = require('querystring');

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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});*/

app.get('/demande', (req, res) => 
{
  db.query("CALL patientsJours;", (err, results, fields) => {
    console.log(results)
    if (err) throw err;
    results[0].forEach(element => 
    {
      let newPatient = new apiHopital.Patient(null, null, null, null, null, null, null);
      newPatient.idPatient = element['id_patient'];
      //apiHopital.Patient.addPatientToList(newPatient);

      //let nouveauPatient = new newModuleAPI.Patient(null, null, null, null, null, null, null);
      //patient.idPatient.idPatient = element['id_patient'];
      //console.log(patient.idPatient);
      //console.log(element['id_patient']);
    });

    //console.log(apiHopital.Patient.totalPatients());
    res.send(results);
  });
  /*db.query("SELECT tb_patients.id_patient, nom, prenom, tb_destination.id_status FROM tb_destination JOIN tb_patients ON tb_patients.id_patient = tb_destination.id_patient WHERE id_status = 2;",
   (err, results, fields) => {
    if (err) throw err;
    console.log(results);*/
    /*results.forEach(element => {
      let nouveauPatient = new Patient(null, null, null, null , null, null ,null);
      nouveauPatient.idPatient = element['id_patient'];
      console.log( nouveauPatient.idPatient);
    }); */
    //res.send(results);
});

app.get("/patients/:jour", (req, res) => {
  db.query(`CALL listPatients("${req.params["jour"]}")`, (err, results, fields) => {
    if (err) throw err;
    res.send(results[0]);
  })
})

app.get("/reset", (req, res) => {
  db.query(`CALL reset()`, (err, results, fields) => {
    if (err) throw err;
    res.send("OK");
  })
})

//http://localhost:3000/changementStatus/20220001
app.get('/changementStatus/:id_patient/:status', (req, res) => {
  db.query(`CALL changementStatus(${req.params["id_patient"]}, ${req.params["status"]});`, (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});


app.post('/createlogin/:jsons', (req, res) => {
  console.log(`${req.params["password"]}, ${2}`)
  });
/********************** Login **********************/



//module.exports = db;