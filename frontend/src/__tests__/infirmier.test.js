import { render, screen, cleanup } from '@testing-library/react';
import Infirmier from '../pages/infirmier/infirmier';


test('should render every Log elements', () => {
    render(<Infirmier/>);
    const loginWindow = screen.getByTestId('loginDiv');
    
    expect(loginButton).toBeInTheDocument();
})