import React from 'react';
import "./brancardier.css"
import PatientList from '../components/patientList/patientList';
import { getPatients, updateStatus } from '../request';
import { useQuery, useMutation } from "react-query"


//Page Brancardier, recupp les données depuila db toutes les sec.
function Brancardier({jour, token}) {
    const { data, isLoading, refetch } = useQuery(["patients", jour], () => getPatients(jour, token), {
        refetchInterval: 1000
    })
    const statusMutation = useMutation((values) => updateStatus(values, token), {
        onSuccess: refetch
    });

    return (
            <div className="Brancardier">
                <PatientList
                    title="Demande de transport"
                    user="brancardier"//est ce qu'on aurait pu utiliser du get pour le filtre ? 
                    posts={isLoading ? [] : data.filter(post => post.status == 1 || post.status == 4)}
                    handleClick={(id_patient, status) => statusMutation.mutate({ id_patient, status })}
                />
                <PatientList
                    title="Transport en cours"
                    user="brancardier"
                    posts={isLoading ? [] : data.filter(post => post.status == 2 || post.status == 5 )}
                    handleClick={(id_patient, status) => statusMutation.mutate({ id_patient, status })}

                />
                <PatientList
                    title="Liste de travail"
                    user="brancardier"
                    posts={isLoading ? [] : data.filter(post => post.status == 0 || post.status == 3)} />
            </div>

    )
}

export default Brancardier;