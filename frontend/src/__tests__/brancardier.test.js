import { render, screen, cleanup } from '@testing-library/react';
import Brancardier from '../pages/brancardier/brancardier';


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