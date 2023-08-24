import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('renders the component', () => {
    const { getByRole } = render(<Footer />);
    const linkElement = getByRole('link', { name: /Mr Blue/i });
    expect(linkElement).toBeInTheDocument();
  });
});
