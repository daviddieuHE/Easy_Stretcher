import React from "react";
import Patient from "../patient/patient";

//Composant qui retourne l'affichage de tous les patients du jour, avec leurs actions.
function PatientList({ title, patients, user, handleClick }) {
  return (
    <div id={title} className="box">
      <h1>{title}</h1>
      <div id={`${title}--box`} className="patient">
        {patients.map((patient) => (
          <Patient
            patient={patient}
            user={user}
            handleClick={handleClick}
            key={`${patient.id_patient}-${patient.id_examen}`}
          />
        ))}
      </div>
    </div>
  );
  //key est pour donner un id a chaque elements d'une liste
  // Patient étant un objet, '...patient" récupère l'ensemble des attribus de l'objet pour ne pas devoir y acceder individuellement.
  // .map permet de parcourir les différents objets patients, la liste des patients donc en extraire les patients individuellement et les afficher 1 a 1
}
//<Patient key={patient.id_patient} /> key: permet de distinguer 2 patient

export default PatientList;
