import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../components/navbar/navbar';
import React, { useEffect, useState } from 'react';

//const date ='2022-05-09';
const user = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjowfQ.y8b7k9nCOsHOQiFhSN04wsqIDss-jQoljFPyFZ3DarU';

const logout = () => {
    window.sessionStorage.removeItem("TOKEN") 
    setUser(null);}

const [date, setDate] = useState(new Date().toISOString().split('T')[0]);


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