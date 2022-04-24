import React from "react"
import Patient from "./patient"

function PatientList({title, posts, handleClick}) {
    return(
        <div id={title} className='box'>
            <h1>{title}</h1>
            <div id={`${title}--box`} className='patient'>
                {posts.map(posts => <Patient {...posts} handleClick={handleClick} />)}         
            </div>
        </div>  
    )
}

export default PatientList