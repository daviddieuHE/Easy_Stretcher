import axios from "axios"


function getPatients(jour) {
    return axios.get(`/patients/${jour}`).then(resp => resp.data);
}

function updateStatus({id_patient, status}) {
    return axios.get(`/changementStatus/${id_patient}/${status}`).then(resp => resp.data)
}

function resetTable() {
    return axios.get("/reset")
}

export {getPatients, updateStatus, resetTable}