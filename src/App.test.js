// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AgentTokenX title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AgentTokenX/i);
    expect(titleElement).toBeInTheDocument();
});
