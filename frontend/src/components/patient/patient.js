import React, { useEffect, useState } from "react"
import "./patient.css"
import bed from "../../img/bed.png"
import chair from "../../img/chair.png"

//Fonction Patient retourne la structure de l'affichage d'un patient.
function Patient({ nom, prenom, id_patient, last_changed_status, bed, status, chambre, date_naiss, user, handleClick }) {
    const [timer, setTimer] = useState(0)
    const [audio, setAudio] = useState(false)

    //permet d'écouter l'état (modification) d'une variable (ici status) et d'exécuter une fonction
    useEffect(() => {
        if(status == 0 || status == 3) return;//on affiche pas le timer en 0 et 3
        //interval permet de répéter une fonction toute les x ms (ici 1000)
        const interval = setInterval(() => {
            setTimer(Math.abs((Date.now() - new Date(last_changed_status)) / 1000).toFixed(0))
        }, 1000)

        return () => clearInterval(interval) //permet de supprimer un interval, dans note cas quand un status change il faut retirer le précédent interval
    }, [status])

    useEffect(() => {
        if ((status == 1 || status == 4) && user == "brancardier") {
            if (audio) return;
            const sound = new Audio("/api/static/dong.mp3")
            setAudio(true)
            sound.play()
            sound.addEventListener("ended", () => {
                setAudio(false)
            })
        }
        if (user == "infirmier" && status == 3) {
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(`Le patient ${nom} ${prenom} est arrivé !`)
            }
        }
    }, [status])
    
    function TimeToMinutes(time){
        let timeMin = Math.floor(time/60);
        return timeMin;
    }

    let timerText;
    if(timer < 60) {
        timerText = `${timer} s`
    } else {
        timerText = `${TimeToMinutes(timer)} m`
    }


    return (
        <div id={nom} className="patient-container">
            <div className="patient-info">
                <div>{nom} {prenom} / {(new Date (date_naiss)).toISOString().slice(0, 10)}</div>
                {status != 0 && status != 3 && <div>{timerText}</div>}
            </div>
            <div className="patient-action">
                <div>N°{id_patient} / {chambre}</div>
                <div>
                    <div className="action"> {
                        user == "infirmier" ? <InfirmierActionStatus status={status} handleClick={(isBed) => handleClick(id_patient, isBed)} />
                            : <BrancardierActionStatus status={status} isBed={bed} handleClick={() => handleClick(id_patient, status + 1)} />
                    }

                    </div>
                </div>
            </div>
        </div>
    )
}

function InfirmierTransportButton({ handleClick, id_patient, data_testid}) {
    const [isBed, setIsBed] = useState(true)

    return (
        <div className="action" style={{
            background: "transparent",
            display: "flex",
            alignItems: "center"
        }}>
            <img src={isBed ? bed : chair} style={{
                width: "35px",
                height: "35px",
                marginRight: "10px",
                background: "white",
                borderRadius: "5px",
                padding: "5px",
                cursor: "pointer"
            }} onClick={() => setIsBed(prevStatus => !prevStatus)} />
            <button onClick={() => handleClick(isBed)} data_testid={id_patient} className="action-button">demander</button>
        </div>
    )
}

//Fonction qui selon le status du patient retourne un boutton ou un état.
function InfirmierActionStatus({ status, handleClick, id_patient }) {
    switch (status) {
        case 0:
            return <InfirmierTransportButton handleClick={handleClick} />
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
            return <button onClick={handleClick} data-testid={id_patient} className="action-button">retour</button>

        case 4:
            return <div style={{
                backgroundColor: "rgb(192, 199, 58)",
                color: "black"
            }}>demandé</div>
    }
}

//Fonction qui selon le status du patient retourne un boutton ou rien.
function BrancardierActionStatus({ status, isBed, handleClick, id_patient }) {
    switch (status) {
        case 1:
        case 4:
            return (
                <div className="action" style={{
                    background: "transparent",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <img src={isBed ? bed : chair} style={{
                        width: "35px",
                        height: "35px",
                        marginRight: "10px"
                    }} />
                    <button onClick={handleClick} data-testid={id_patient} className="action-button">accepter</button>
                </div>)
        case 2:
        case 5:
            return <button onClick={handleClick} data-testid={id_patient} className="action-button">déposer</button>
    }
}
export default Patient