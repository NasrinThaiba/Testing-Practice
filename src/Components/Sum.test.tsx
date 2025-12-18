import { render, screen } from '@testing-library/react';
import Sum from './Sum';

describe('Sum', () => {
  test('Sum of the numbers', () => {
    render(<Sum a={2} b={6}/>);
    expect(screen.getByText("8")).toBeInTheDocument();
  });
});
