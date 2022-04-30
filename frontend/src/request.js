import axios from "axios"


//getPatients renvoie les patients du jour depuis la db 
function getPatients(jour, token) {
    return axios.get(`/api/patients/${jour}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(resp => resp.data);
}

//Change le status d'un patient dans la db
function updateStatus({ id_patient, status }, token) {
    return axios.post(`/api/changementStatus/${id_patient}/${status}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(resp => resp.data)
}

function requestPatient({ id_patient, isBed }, token) {
    return axios.post(`/api/requestPatient/${id_patient}/${isBed}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(resp => resp.data)
}

//Remet les status de tous les patients à 0
function resetTable(token) {
    return axios.post("/api/reset", {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

//Ajout d'utilisateur dans la DB : INSERT INTO `tb_login`(`username`, `password`, `id_role`) VALUES ('[email]',PASSWORD('[password]'),'[role (0 = inf, 1 = bran]')
function logUser(data) {
    return axios.post("/api/login", data).then(resp => resp.data)
}

export { getPatients, updateStatus, resetTable, requestPatient, logUser }