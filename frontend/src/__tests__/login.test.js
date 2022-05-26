import { render, screen, cleanup } from '@testing-library/react';
import Log from '../pages/login/login';


test('should render login window elements', () => {
    render(<Log/>);
    const loginWindow = screen.getByTestId('loginDiv');
    expect(loginWindow).toBeInTheDocument();
})

test('should render mail textbox elements', () => {
    render(<Log/>);
    const mailTextbox = screen.getByRole('textbox', {  name: /email/i});
    expect(mailTextbox).toBeInTheDocument();
})

test('should render password textbox elements', () => {
    render(<Log/>);
    const passwdTextbox = screen.getByLabelText(/password/i);
    expect(passwdTextbox).toBeInTheDocument();
})

test('should render login button elements', () => {
    render(<Log/>);
    const loginButton = screen.getByRole('button', {  name: /login/i});
    expect(loginButton).toBeInTheDocument();
})