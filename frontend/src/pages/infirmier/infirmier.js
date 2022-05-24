import React from 'react';
import "./infirmier.css"
import PatientList from '../../components/patientList/patientList';
import { getPatients, requestPatient, updateStatus } from '../../request';
import { useQuery, useMutation } from "react-query"


//Page infirmier, récupp les données depuis la db toutes les secondes.
function Infirmier({date, token}) {
    const { data, isLoading, refetch } = useQuery(["patients", date], () => getPatients(date, token), {
        refetchInterval: 1000
    })
    const statusMutation = useMutation((values) => updateStatus(values, token), {
        onSuccess: refetch
    });

    const requestMutation = useMutation((values) => requestPatient(values, token), {
        onSuccess: refetch
    })

    return (
            <div data-testid="infiDiv" className="Infirmier">
                <PatientList
                    title="Worklist"
                    user="infirmier"
                    patients={isLoading ? [] : data.filter(patient => patient.status == 0)}
                    handleClick={(id_patient, isBed) => requestMutation.mutate({ id_patient, isBed })}
                />
                <PatientList
                    title="Patients demandés"
                    user="infirmier"
                    patients={isLoading ? [] : data.filter(patient => patient.status == 1 || patient.status == 2)}
                    handleClick={(id_patient) => statusMutation.mutate({id_patient, status: 0})}
                />
                <PatientList
                    title="Patients arrivés"
                    user="infirmier"
                    patients={isLoading ? [] : data.filter(patient => patient.status == 3 || patient.status == 4)}
                    handleClick={(id_patient) => statusMutation.mutate({ id_patient, status: 4 })} />
            </div>

    )
}

export default Infirmier;