import { render, screen, cleanup } from '@testing-library/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Brancardier from '../pages/brancardier/brancardier';



const queryClient = new QueryClient();

const MockBrancardier = () => {
    return (
        <QueryClientProvider client={queryClient} >

            <Brancardier
                date ='2022-05-26'
                token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjowfQ.y8b7k9nCOsHOQiFhSN04wsqIDss-jQoljFPyFZ3DarU'
            />

        </QueryClientProvider>
    )}


test('should render the demande de transport element', async () => {
    render (<MockBrancardier/>)
    const demandeDeTransportElement = await screen.findByText(/demande de transport/i)
    expect(demandeDeTransportElement).toBeInTheDocument();
})

test('should render the transport en cours element', async () => {
    render (<MockBrancardier/>)
    const transportEnCoursElement = await screen.findByText(/transport en cours/i)
    expect(transportEnCoursElement).toBeInTheDocument();
})

test('should render the liste de travail element', async () => {
    render (<MockBrancardier/>)
    const listeDeTravailElement = await screen.findByText(/liste de travail/i)
    expect(listeDeTravailElement).toBeInTheDocument();
})