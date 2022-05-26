import { render, screen, cleanup } from '@testing-library/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Infirmier from '../pages/infirmier/infirmier';



const queryClient = new QueryClient();

const MockInfirmier = () => {
    return (
        <QueryClientProvider client={queryClient} >

            <Infirmier
                date ='2022-05-26'
                token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjowfQ.y8b7k9nCOsHOQiFhSN04wsqIDss-jQoljFPyFZ3DarU'
            />

        </QueryClientProvider>
    )}


test('should render the worklist element', async () => {
    render (<MockInfirmier/>)
    const worklistElement = await screen.findByText(/worklist/i)
    expect(worklistElement).toBeInTheDocument();
})

test('should render the patients demandes element', async () => {
    render (<MockInfirmier/>)
    const patientDemandeElement = await screen.findByText(/patients demandés/i)
    expect(patientDemandeElement).toBeInTheDocument();
})

test('should render the patients arrives element', async () => {
    render (<MockInfirmier/>)
    const patientArrivesElement = await screen.findByText(/patients arrivés/i)
    expect(patientArrivesElement).toBeInTheDocument();
})