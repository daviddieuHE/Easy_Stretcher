import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../components/navbar/navbar';


test('should render every navbar elements', () => {
    render(<Navbar logout={logout} date={date} handleChange={setDate} token={user} />);
    const logo = screen.getByRole('img')
    const resetButton = screen.getByRole('button', {  name: /reset/i})
    const logoutButton = screen.getByRole('button', {  name: /logout/i})
    const dayPickerElemnt = screen.getByTestId('dayPicker');
    

    expect(logo).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(dayPickerElemnt).toBeInTheDocument();

})