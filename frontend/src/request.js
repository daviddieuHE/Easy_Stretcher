import axios from "axios"


function getPatients(jour) {
    return axios.get(`/api/patients/${jour}`).then(resp => resp.data);
}

function updateStatus({id_patient, status}) {
    return axios.get(`/api/changementStatus/${id_patient}/${status}`).then(resp => resp.data)
}

function requestPatient({id_patient, isBed}) {
    return axios.get(`/api/requestPatient/${id_patient}/${isBed}`).then(resp => resp.data)
}

function resetTable() {
    return axios.get("/api/reset")
}

export {getPatients, updateStatus, resetTable, requestPatient}