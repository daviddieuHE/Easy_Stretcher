import { render, screen, cleanup } from '@testing-library/react';
import Brancardier from '../pages/brancardier/brancardier';

const date ='2022-05-09';
const user = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjowfQ.y8b7k9nCOsHOQiFhSN04wsqIDss-jQoljFPyFZ3DarU';

test('should render every brancardier elements', () => {
    render(<Brancardier date={date} token={user} />);
    const brnaWindow = screen.getByTestId('brnaDiv');
    const demandeDeTrnasportElement = screen.getByRole('heading', {  name: /demande de transport/i})
    const transportEnCoursElement = screen.getByRole('heading', {  name: /transport en cours/i})
    const listeDeTravailElement = screen.getByRole('heading', {  name: /liste de travail/i})
    

    expect(brnaWindow).toBeInTheDocument();
    expect(worklistElement).toBeInTheDocument();
    expect(transportEnCoursElement).toBeInTheDocument();
    expect(listeDeTravailElement).toBeInTheDocument();

})