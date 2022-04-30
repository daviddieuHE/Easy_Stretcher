import React from "react"
import Patient from "../patient/patient"


//Composant qui retourne l'affichage de tous les patients du jour, avec leurs actions.
function PatientList({title, patients, user, handleClick}) {
    return(
        <div id={title} className='box'>
            <h1>{title}</h1>
            <div id={`${title}--box`} className='patient'>
                {patients.map(patient => <Patient {...patient} user={user} handleClick={handleClick} key={patient.id_patient} />)}         
            </div>
        </div>  
    )
}
//<Patient key={patient.id_patient} /> key: permet de distinguer 2 patient

export default PatientList