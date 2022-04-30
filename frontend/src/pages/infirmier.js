import React from 'react';
import "./infirmier.css"
import PatientList from '../components/patientList/patientList';
import { getPatients, requestPatient, updateStatus } from '../request';
import { useQuery, useMutation } from "react-query"


//Page infirmier, récupp les données depuis la db toutes les secondes.
function Infirmier({jour, token}) {
    const { data, isLoading, refetch } = useQuery(["patients", jour], () => getPatients(jour, token), {
        refetchInterval: 1000
    })
    const statusMutation = useMutation((values) => updateStatus(values, token), {
        onSuccess: refetch
    });

    const requestMutation = useMutation((values) => requestPatient(values, token), {
        onSuccess: refetch
    })

    return (
            <div className="Infirmier">
                <PatientList
                    title="Worklist"
                    user="infirmier"
                    posts={isLoading ? [] : data.filter(post => post.status == 0)}
                    handleClick={(id_patient, isBed) => requestMutation.mutate({ id_patient, isBed })}
                />
                <PatientList
                    title="Patients demandés"
                    user="infirmier"
                    posts={isLoading ? [] : data.filter(post => post.status == 1 || post.status == 2)}
                />
                <PatientList
                    title="Patients arrivés"
                    user="infirmier"
                    posts={isLoading ? [] : data.filter(post => post.status == 3 || post.status == 4)}
                    handleClick={(id_patient) => statusMutation.mutate({ id_patient, status: 4 })} />
            </div>

    )
}

export default Infirmier;