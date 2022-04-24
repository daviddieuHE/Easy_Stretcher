import React from "react"
import "./patient.css"

function Patient({ nom, prenom, id_patient, status, handleClick }) {
    return (
        <div id={nom} className="patient-container">
            <div className="patient-info">
                {nom} {prenom}
            </div>
            <div className="patient-action">
                <div>N°{id_patient}</div>
                <div className="action">
                    <ActionStatus status={status} handleClick={() => handleClick(id_patient)} />
                </div>
            </div>
        </div>
    )
}

function ActionStatus({ status, handleClick }) {
    switch (status) {
        case 0:
            return <button onClick={handleClick} className="action-button">demander</button>
        case 1:
            return <div style={{
                backgroundColor: "rgb(192, 199, 58)",
                color: "black"
            }}>en attente</div>

        case 2:
            return <div style={{
                backgroundColor: "rgb(86, 199, 58)",
                color: "black"
            }}>en transit</div>

        case 3:
            return <button onClick={handleClick} className="action-button">retour</button>

        case 4:
            return <div style={{
                backgroundColor: "rgb(192, 199, 58)",
                color: "black"
            }}>demandé</div>
    }
}

export default Patient