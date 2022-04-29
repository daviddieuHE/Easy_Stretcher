import { render, screen, cleanup } from '@testing-library/react';
import Log from '../login';


test('should render Log component', () => {
    render(<Log/>);
    const logElement = screen.getByText(/name/i);
    expect(logElement).toBeInTheDocument();
})