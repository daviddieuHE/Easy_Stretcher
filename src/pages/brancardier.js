import React from 'react';
import "./brancardier.css"
import PatientList from '../components/patientList';
import { getPatients, updateStatus } from '../request';
import { useQuery, useMutation } from "react-query"


function Brancardier({jour}) {
    const { data, isLoading, refetch } = useQuery(["patients", jour], () => getPatients(jour), {
        refetchInterval: 1000
    })
    const statusMutation = useMutation(updateStatus, {
        onSuccess: refetch
    });

    return (
            <div className="Brancardier">
                <PatientList
                    title="Demande de transport"
                    posts={isLoading ? [] : data.filter(post => post.status == 1 || post.status == 4)}
                    handleClick={(id_patient, status) => statusMutation.mutate({ id_patient, status })}
                />
                <PatientList
                    title="Transport en cours"
                    posts={isLoading ? [] : data.filter(post => post.status == 2 || post.status == 5 )}
                    handleClick={(id_patient, status) => statusMutation.mutate({ id_patient, status })}

                />
                <PatientList
                    title="Liste de travail"
                    posts={isLoading ? [] : data.filter(post => post.status == 0 || post.status == 3)} />
            </div>

    )
}

export default Brancardier;