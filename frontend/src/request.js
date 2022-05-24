import axios from "axios";
import jwt_decode from "jwt-decode";

function getToken() {
  return sessionStorage.getItem("TOKEN");
}

//getPatients renvoie les patients du jour depuis la db
function getPatientsBrancardier(date) {
  return axios
    .get(`/api/patientsbrancardier/${date}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((resp) => resp.data);
}

function getPatientsInfirmier(date) {
  const token = getToken();
  const info = jwt_decode(token);
  return axios
    .get(`/api/patientsinfirmier/${date}/${info.service}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => resp.data);
}

//Change le status d'un patient dans la db
function updateStatus({ id_examen, status }) {
  return axios
    .post(
      `/api/changementStatus/${id_examen}/${status}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    .then((resp) => resp.data);
}

function requestPatient({ id_examen, isBed }) {
  return axios
    .post(
      `/api/requestPatient/${id_examen}/${isBed}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    .then((resp) => resp.data);
}

//Remet les status de tous les patients à 0
function resetTable(token) {
  return axios.post(
    "/api/reset",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

//Ajout d'utilisateur dans la DB : INSERT INTO `tb_login`(`username`, `password`, `id_role`) VALUES ('[email]',PASSWORD('[password]'),'[role (0 = inf, 1 = bran]')
function logUser(data) {
  return axios.post("/api/login", data).then((resp) => resp.data);
}

function addComment(data) {
  return axios
    .post("/api/comment", data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((resp) => resp.data);
}

export {
  getPatientsBrancardier,
  getPatientsInfirmier,
  updateStatus,
  resetTable,
  requestPatient,
  logUser,
  addComment,
};
