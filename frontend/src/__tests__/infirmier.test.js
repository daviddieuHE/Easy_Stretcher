import { render, screen, cleanup } from '@testing-library/react';
import Infirmier from '../pages/infirmier/infirmier';


test('should render every infirmier elements', () => {
    render(<Infirmier date={date} token={user}/>);
    const infiWindow = screen.getByTestId('infiDiv');
    const worklistElement = screen.getByRole('heading', {  name: /worklist/i})
    const PatientsDemandesElement = screen.getByRole('heading', {  name: /patients demandés/i})
    const PatientsArrivesElement = screen.getByRole('heading', {  name: /patients arrivés/i})
    

    expect(infiWindow).toBeInTheDocument();
    expect(worklistElement).toBeInTheDocument();
    expect(PatientsDemandesElement).toBeInTheDocument();
    expect(PatientsArrivesElement).toBeInTheDocument();

})