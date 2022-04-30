import React from 'react';
import "./brancardier.css"
import PatientList from '../../components/patientList/patientList';
import { getPatients, updateStatus } from '../../request';
import { useQuery, useMutation } from "react-query"


//Page Brancardier, recupp les données depuila db toutes les sec.
function Brancardier({jour, token}) {
    const patientsQuery = useQuery(["patients", jour], () => getPatients(jour, token), {
        refetchInterval: 1000
    })
    const statusMutation = useMutation((values) => updateStatus(values, token), {
        onSuccess: patientsQuery.refetch
    });

    return (
            <div className="Brancardier">
                <PatientList
                    title="Demande de transport"
                    user="brancardier"//est ce qu'on aurait pu utiliser du get pour le filtre ? 
                    patients={patientsQuery.isLoading ? [] : patientsQuery.data.filter(patient => patient.status == 1 || patient.status == 4)}
                    handleClick={(id_patient, status) => statusMutation.mutate({ id_patient, status })}
                />
                <PatientList
                    title="Transport en cours"
                    user="brancardier"
                    patients={patientsQuery.isLoading ? [] : patientsQuery.data.filter(patient => patient.status == 2 || patient.status == 5 )}
                    handleClick={(id_patient, status) => statusMutation.mutate({ id_patient, status })}

                />
                <PatientList
                    title="Liste de travail"
                    user="brancardier"
                    patients={patientsQuery.isLoading ? [] : patientsQuery.data.filter(patient => patient.status == 0 || patient.status == 3)} />
            </div>

    )
}

export default Brancardier;