import axios from "axios"


function getPatients(jour) {
    return axios.get(`http://localhost:3000/patients/${jour}`).then(resp => resp.data);
}

function updateStatus({id_patient, status}) {
    return axios.get(`http://localhost:3000/changementStatus/${id_patient}/${status}`).then(resp => resp.data)
}

function resetTable() {
    return axios.get("http://localhost:3000/reset")
}

export {getPatients, updateStatus, resetTable}