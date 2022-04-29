import { render, screen, cleanup } from '@testing-library/react';
import Log from '../login';


test('should render every Log elements', () => {
    render(<Log/>);
    //const loginWindow = container.querySelector('#root > div > div > form');
    const nameTextbox = screen.getByRole('textbox', {  name: /name/i});
    const mailTextbox = screen.getByRole('textbox', {  name: /email/i});
    const passwdTextbox = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', {  name: /login/i});
    
    //expect(loginWindow).toBeInTheDocument();
    expect(nameTextbox).toBeInTheDocument();
    expect(mailTextbox).toBeInTheDocument();
    expect(passwdTextbox).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
})