import axios from "axios"


//getPatients renvoie les patients du jour depuis la db 
function getPatients(jour) {
    return axios.get(`/api/patients/${jour}`).then(resp => resp.data);
}

//Change le status d'un patient dans la db
function updateStatus({id_patient, status}) {
    return axios.get(`/api/changementStatus/${id_patient}/${status}`).then(resp => resp.data)
}

function requestPatient({id_patient, isBed}) {
    return axios.get(`/api/requestPatient/${id_patient}/${isBed}`).then(resp => resp.data)
}

//Remet les status de tous les patients à 0
function resetTable() {
    return axios.get("/api/reset")
}

export {getPatients, updateStatus, resetTable, requestPatient}