import React from "react"

function handleOnClickRetour() {
    let patient = document.getElementById('Retour--patient');
    let worklist = document.getElementById('Retour--box');
  
    worklist.removeChild(patient);
    return true;
}

function Arrive() {
    return (
      <section id='Retour--box' className='patient'>
        <p id='Retour--patient'>
          20220003
          Mathilde Goes
          2001-04-09
          <button onClick={handleOnClickRetour} type='button'>Retour</button>
        </p>     
      </section>
    )
}

export default Arrive;