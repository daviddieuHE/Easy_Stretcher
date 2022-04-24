import React from 'react';
import './home.css';
import PatientList from '../components/patientList';
import { getPatients, updateStatus } from '../request';
import { useQuery, useMutation } from "react-query"


function Home({jour}) {
    const { data, isLoading, refetch } = useQuery(["patients", jour], () => getPatients(jour), {
        refetchInterval: 1000
    })
    const statusMutation = useMutation(updateStatus, {
        onSuccess: refetch
    });

    return (
            <div className="App">
                <PatientList
                    title="Worklist"
                    posts={isLoading ? [] : data.filter(post => post.status == 0)}
                    handleClick={(id_patient) => statusMutation.mutate({ id_patient, status: 2 })}
                />
                <PatientList
                    title="Patients demandés"
                    posts={isLoading ? [] : data.filter(post => post.status == 1 || post.status == 2)}
                />
                <PatientList
                    title="Patiens arrivés"
                    posts={isLoading ? [] : data.filter(post => post.status == 3 || post.status == 4)}
                    handleClick={(id_patient) => statusMutation.mutate({ id_patient, status: 4 })} />
            </div>

    )
}

export default Home;