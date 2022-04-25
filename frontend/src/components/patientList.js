import React from "react"
import Patient from "./patient"


//Composant qui retourne l'affichage de tous les patients du jour, avec leurs actions.
function PatientList({title, posts, user, handleClick}) {
    return(
        <div id={title} className='box'>
            <h1>{title}</h1>
            <div id={`${title}--box`} className='patient'>
                {posts.map(post => <Patient {...post} user={user} handleClick={handleClick} />)}         
            </div>
        </div>  
    )
}

export default PatientList