import { render, screen, cleanup } from '@testing-library/react';
import Infirmier from '../pages/infirmier/infirmier';

import { getPatients, requestPatient, updateStatus } from '../request';
import { useQuery, useMutation } from "react-query";
import { QueryClient, QueryClientProvider } from 'react-query'

const date ='2022-05-09';
const user = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjowfQ.y8b7k9nCOsHOQiFhSN04wsqIDss-jQoljFPyFZ3DarU';

test('should render every infirmier elements', () => {
    const queryClient = new QueryClient();
    <QueryClientProvider client={queryClient}>
        render(<Infirmier date={date} token={user}/>);
    </QueryClientProvider>
    
    const infiWindow = screen.getByTestId('infiDiv');
    const worklistElement = screen.getByRole('heading', {  name: /worklist/i})
    const PatientsDemandesElement = screen.getByRole('heading', {  name: /patients demandés/i})
    const PatientsArrivesElement = screen.getByRole('heading', {  name: /patients arrivés/i})
    

    expect(infiWindow).toBeInTheDocument();
    expect(worklistElement).toBeInTheDocument();
    expect(PatientsDemandesElement).toBeInTheDocument();
    expect(PatientsArrivesElement).toBeInTheDocument();

})