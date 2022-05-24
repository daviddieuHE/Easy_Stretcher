"use strict";
const express = require("express"); // creation de l'API
const cors = require("cors"); // sécurisation d'envois de requête depuis l'URL
const path = require("path"); // acceder aux fichiers du filesystem sur le serveur
const mysql = require("mysql");
const jwt = require("jsonwebtoken"); //https://jwt.io/
const { expressjwt } = require("express-jwt");

const JWT_SECRET = "EASYSTRETCHER";

// Database configuration
const db = mysql.createPool({
  // pool permets d'avoir plusieurs connexion au cas ou en perds une de pas devoir se reco
  connectionLimit: 5,
  host: "devweb.sytes.net",
  user: "mabite",
  password: "jFw-sL8-Ntc-jvQ",
  database: "hopital",
});

// Server configuration
const app = express();
app.use(cors());

const staticPath = path.resolve(__dirname, "../frontend/build");
app.use("/", express.static(staticPath));
app.use("/api/static", express.static(__dirname + "/static")); // acceder aux ressources du dossier static (ici le dong)
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get(
  "/api/patientsbrancardier/:date",
  expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    db.query(
      `CALL listPatientsBrancardier("${req.params["date"]}")`,
      (err, results, fields) => {
        if (err) return res.status(500).send(err);
        const date = new Date();
        const offset = date.getTimezoneOffset();
        res.send(
          results
            ? results[0].map((res) => {
                const last_changed_status =
                  res.last_changed_status - 1000 * 60 * (120 + offset); // 1000 ms * 60 secondes * (120m (timezone of db) + offset (timezone of server))
                return { ...res, last_changed_status: last_changed_status };
              })
            : []
        );
      }
    );
  }
);

app.get(
  "/api/patientsinfirmier/:date/:service",
  expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    db.query(
      `CALL listPatientsInfirmier("${req.params["date"]}", ${req.params["service"]})`,
      (err, results, fields) => {
        if (err) return res.status(500).send(err);
        const date = new Date();
        const offset = date.getTimezoneOffset();
        res.send(
          results
            ? results[0].map((res) => {
                const last_changed_status =
                  res.last_changed_status - 1000 * 60 * (120 + offset); // 1000 ms * 60 secondes * (120m (timezone of db) + offset (timezone of server))
                return { ...res, last_changed_status: last_changed_status };
              })
            : []
        );
      }
    );
  }
);

//http://localhost:3000/changementStatus/20220001
app.post(
  "/api/changementStatus/:id_patient/:status",
  expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    db.query(
      `CALL changementStatus(${req.params["id_patient"]}, ${req.params["status"]});`,
      (err, results, fields) => {
        if (err) return res.status(500).send(err); // 500 renvoit internal server error
        res.send("OK");
      }
    );
  }
);

app.post(
  "/api/requestPatient/:id_patient/:bed",
  expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    db.query(
      `CALL requestPatient(${req.params["id_patient"]}, ${req.params["bed"]});`,
      (err, results, fields) => {
        if (err) return res.status(500).send(err);
        res.send("OK");
      }
    );
  }
);

app.post(
  "/api/reset",
  expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    db.query(`CALL reset()`, (err, results, fields) => {
      if (err) return res.status(500).send(err);
      res.send("OK");
    });
  }
);

app.post("/api/login", (req, res) => {
  db.query(
    `CALL login("${req.body.email}", "${req.body.password}")`,
    (err, results, fields) => {
      if (err) return res.status(500).send(err);
      if (results[0].length > 0) {
        return res.status(200).send(
          jwt.sign(
            JSON.stringify({
              role: results[0][0].id_role,
              service: results[0][0].id_service,
            }),
            JWT_SECRET,
            {
              algorithm: "HS256",
            }
          )
        );
      }
      return res.status(403).send("bad user or password");
    }
  );
});

app.post(
  "/api/inserpatient",
  expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    db.query(
      `CALL ajoutPatient("${req.body.nom}", "${req.body.prenom}", "${req.body.date_naiss}", "${req.body.chambre}", "${req.body.date_exam}")`,
      (err, results, fields) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("OK");
      }
    );
  }
);

app.post(
  "/api/comment",
  expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    db.query(
      `CALL ajoutCommentaire(${req.body.id_examen}, "${req.body.comment}")`,
      (err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("OK");
      }
    );
  }
);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
});

// Allows you to set port in the project properties.
app.set("port", process.env.PORT || 3000); //soit on prend le port environnement donné par le ser (ici Heroku), soit le 3000
app.listen(app.get("port"), function () {
  console.log("listening");
});
