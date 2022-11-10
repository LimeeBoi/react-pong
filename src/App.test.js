import { render, screen } from '@testing-library/react';
import App from './App';

test('has-easter-egg', () => {
  render(<App />);
  const element = screen.getByText(/OOF/i);
  expect(element).toBeInTheDocument();
});
