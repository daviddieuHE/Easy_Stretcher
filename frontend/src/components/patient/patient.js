import React, { useEffect, useState } from "react";
import "./patient.css";
import bed from "../../img/bed.png";
import chair from "../../img/chair.png";
import message from "../../img/message-solid.svg";
import messageRed from "../../img/message-solid_copie.png";
import { addComment } from "../../request";

//Fonction Patient retourne la structure de l'affichage d'un patient.
function Patient({ patient, user, handleClick }) {
  const [timer, setTimer] = useState(0);
  const [audio, setAudio] = useState(false);

  //permet d'écouter l'état (modification) d'une variable (ici status) et d'exécuter une fonction
  useEffect(() => {
    if (patient.status == 0 || patient.status == 3) return; //on affiche pas le timer en 0 et 3
    //interval permet de répéter une fonction toute les x ms (ici 1000)
    const interval = setInterval(() => {
      setTimer(
        Math.abs(
          (Date.now() - new Date(patient.last_changed_status)) / 1000
        ).toFixed(0)
      );
    }, 1000);

    return () => clearInterval(interval); //permet de supprimer un interval, dans note cas quand un status change il faut retirer le précédent interval
  }, [patient.status]);

  useEffect(() => {
    if ((patient.status == 1 || patient.status == 4) && user == "brancardier") {
      if (audio) return;
      const sound = new Audio("/api/static/dong.mp3");
      setAudio(true);
      sound.play();
      sound.addEventListener("ended", () => {
        setAudio(false);
      });
    }
    if (user == "infirmier" && patient.status == 3) {
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(
          `Le patient ${patient.nom} ${patient.prenom} est arrivé !`
        );
      }
    }
  }, [patient.status]);

  const getDirection = () => {
    if (user == "infirmier") return patient.chambre;
    if (patient.status < 3) return `${patient.chambre} -> ${patient.service}`;
    return `${patient.service} -> ${patient.chambre}`;
  };

  let timerText;
  if (timer < 60) {
    timerText = `${timer} s`;
  } else {
    timerText = `${Math.floor(timer / 60)} m`;
  }
  return (
    //convertion de la donnée date de naissance de la bdd initialement format string, convertie ici au format date, puis redéfinie en string mais cette fois ci au format désiré
    <div id={patient.nom} className="patient-container">
      <div className="patient-info">
        <div>
          {patient.nom} {patient.prenom} /{" "}
          {new Date(patient.date_naiss).toISOString().slice(0, 10)}
        </div>
        {patient.status != 0 && patient.status != 3 && <div>{timerText}</div>}
      </div>
      <div className="patient-action">
        <div>
          N°{patient.id_patient} / {getDirection()}
        </div>
        <div>
          <div className="action">
            {" "}
            {user == "infirmier" ? (
              <InfirmierActionStatus
                {...patient}
                handleClick={(isBed) => handleClick(patient.id_examen, isBed)}
              />
            ) : (
              <BrancardierActionStatus
                {...patient}
                isBed={bed}
                handleClick={(status) => handleClick(patient.id_examen, status)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfirmierTransportButton({
  handleClick,
  id_examen,
  id_patient,
  comment,
}) {
  const [isBed, setIsBed] = useState(true);

  const handleMessage = () => {
    const newComment = prompt("Veuillez entrer un commentaire", comment ?? "");
    if (newComment != null) {
      addComment({
        id_examen: id_examen,
        comment: newComment,
      });
    }
  };

  return (
    <div
      className="action"
      style={{
        background: "transparent",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={message} className="icon-button" onClick={handleMessage} />
      <img
        src={isBed ? bed : chair}
        className="icon-button"
        onClick={() => setIsBed((prevStatus) => !prevStatus)}
      />
      <button
        onClick={() => handleClick(isBed)}
        data-testid={id_patient}
        className="action-button"
      >
        demander
      </button>
    </div>
  );
}

//Fonction qui selon le status du patient retourne un boutton ou un état.
function InfirmierActionStatus({
  status,
  handleClick,
  id_patient,
  comment,
  id_examen,
}) {
  switch (status) {
    case 0:
      return (
        <InfirmierTransportButton
          id_patient={id_patient}
          id_examen={id_examen}
          handleClick={handleClick}
          comment={comment}
        />
      );
    case 1:
      return (
        <div
          className="action"
          style={{
            background: "transparent",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="action-button" onClick={handleClick}>
            annuler
          </div>
          <div
            style={{
              backgroundColor: "rgb(192, 199, 58)",
              color: "black",
              marginLeft: 5,
            }}
          >
            en attente
          </div>
        </div>
      );

    case 2:
      return (
        <div
          style={{
            backgroundColor: "rgb(86, 199, 58)",
            color: "black",
          }}
        >
          en transit
        </div>
      );

    case 3:
      return (
        <button onClick={handleClick} className="action-button">
          retour
        </button>
      );

    case 4:
      return (
        <div
          style={{
            backgroundColor: "rgb(192, 199, 58)",
            color: "black",
          }}
        >
          demandé
        </div>
      );
  }
}

//Fonction qui selon le status du patient retourne un boutton ou rien.
function BrancardierActionStatus({ status, isBed, handleClick, comment }) {
  const handleMessage = () => {
    alert(comment);
  };

  switch (status) {
    case 1:
    case 4:
      return (
        <div
          className="action"
          style={{
            background: "transparent",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="action-button"
            style={{ marginRight: "10px" }}
            onClick={() => handleClick(0)}
          >
            annuler
          </div>
          {comment && status == 1 && (
            <img
              src={messageRed}
              className="icon-button"
              onClick={handleMessage}
            />
          )}
          <img
            src={isBed ? bed : chair}
            style={{
              width: "35px",
              height: "35px",
              marginRight: "10px",
            }}
          />
          <button
            onClick={() => handleClick(status + 1)}
            className="action-button"
          >
            accepter
          </button>
        </div>
      );
    case 2:
    case 5:
      return (
        <button
          onClick={() => handleClick(status + 1)}
          className="action-button"
        >
          déposer
        </button>
      );
  }
}

export default Patient;
