import React from "react"
import "./patient.css"

function Patient({ nom, prenom, id_patient, status, user, handleClick }) {
    return (
        <div id={nom} className="patient-container">
            <div className="patient-info">
                {nom} {prenom}
            </div>
            <div className="patient-action">
                <div>N°{id_patient}</div>
                <div className="action"> {
                    user == "infirmier" ? <InfirmierActionStatus status={status} handleClick={() => handleClick(id_patient)} />
                        : <BrancardierActionStatus status={status} handleClick={(status) => handleClick(id_patient, status)} />
                }

                </div>
            </div>
        </div>
    )
}

function InfirmierActionStatus({ status, handleClick }) {
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

function BrancardierActionStatus({ status, handleClick }) {
    switch (status) {
        case 0:
            return <div></div>
        case 1:
        case 4:
            return <button onClick={() => handleClick(status + 1)} className="action-button">accepter</button>
        case 2:
        case 5:
            return <button onClick={() => handleClick(status + 1)} className="action-button">déposé</button>
    }
}
export default Patient