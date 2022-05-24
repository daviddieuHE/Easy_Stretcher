import React from "react";
import "./brancardier.css";
import PatientList from "../../components/patientList/patientList";
import { getPatientsBrancardier, updateStatus } from "../../request";
import { useQuery, useMutation } from "react-query";

//Page Brancardier, recupp les données depuis la db toutes les sec.
function Brancardier({ date }) {
  const patientsQuery = useQuery(
    ["patients", date],
    () => getPatientsBrancardier(date),
    {
      refetchInterval: 1000,
    }
  );
  const statusMutation = useMutation((values) => updateStatus(values), {
    // modifie le statut d'un patient
    onSuccess: patientsQuery.refetch, //actualiser la liste de patient
  });

  return (
    <div data-testid="branDiv" className="Brancardier">
      <PatientList
        title="Demande de transport"
        user="brancardier"
        patients={
          patientsQuery.isLoading
            ? []
            : patientsQuery.data.filter(
                (patient) => patient.status == 1 || patient.status == 4
              )
        }
        handleClick={(id_examen, status) =>
          statusMutation.mutate({ id_examen, status })
        }
      />
      <PatientList
        title="Transport en cours"
        user="brancardier"
        patients={
          patientsQuery.isLoading
            ? []
            : patientsQuery.data.filter(
                (patient) => patient.status == 2 || patient.status == 5
              )
        }
        handleClick={(id_examen, status) =>
          statusMutation.mutate({ id_examen, status })
        }
      />
      <PatientList
        title="Liste de travail"
        user="brancardier"
        patients={
          patientsQuery.isLoading
            ? []
            : patientsQuery.data.filter(
                (patient) => patient.status == 0 || patient.status == 3
              )
        }
      />
    </div>
  );
}

export default Brancardier;
