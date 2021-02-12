import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('header text renders', () => {
  render(<App />);
  const headerContent = screen.getByText(/Welcome to ChatApp!/i);
  expect(headerContent).toBeInTheDocument();
});
