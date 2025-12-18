import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard', () => {
  test('renders user name', () => {
    render(<UserCard name="Thaiba" />);
    expect(screen.getByText('Hello Thaiba')).toBeInTheDocument();
  });
});
