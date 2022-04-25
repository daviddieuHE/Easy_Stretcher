import axios from "axios"


//getPatients renvoie les patients du jour depuis la db 
function getPatients(jour) {
    return axios.get(`/patients/${jour}`).then(resp => resp.data);
}

//Change le status d'un patient dans la db
function updateStatus({id_patient, status}) {
    return axios.get(`/changementStatus/${id_patient}/${status}`).then(resp => resp.data)
}

//Remet les status de tous les patients à 0
function resetTable() {
    return axios.get("/reset")
}

export {getPatients, updateStatus, resetTable}