import { Welcome } from './welcome';
import { render, screen } from '@testing-library/react';

describe('Welcome', () => {
  test('renders', () => {
    render(<Welcome />);

    expect(screen.getByText('React Router Docs')).toBeInTheDocument();
  })
})