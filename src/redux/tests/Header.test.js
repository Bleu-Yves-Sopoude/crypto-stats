import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders the component', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText('Crypto Stats');
    expect(headerElement).toBeInTheDocument();
  });
});
