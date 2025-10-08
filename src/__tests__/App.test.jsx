
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders OIDC Demo title', () => {
  render(<App />);
  const linkElement = screen.getByText(/CIAM Demo/i);
  expect(linkElement).toBeInTheDocument();
});
