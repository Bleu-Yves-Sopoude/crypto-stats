import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './navbar';

describe('Header', () => {
  it('renders the component', () => {
    const { getByText } = render(<Navbar />);
    const headerElement = getByText('Crypto Stats');
    expect(headerElement).toBeInTheDocument();
  });
});
