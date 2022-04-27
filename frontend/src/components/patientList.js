import React from "react"
import Patient from "./patient"

function PatientList({title, posts, user, handleClick}) {
    return(
        <div id={title} className='box'>
            <h1>{title}</h1>
            <div id={`${title}--box`} className='patient'>
                {posts.map(post => <Patient {...post} user={user} handleClick={handleClick} key={post.id_patient} />)}         
            </div>
        </div>  
    )
}

export default PatientList