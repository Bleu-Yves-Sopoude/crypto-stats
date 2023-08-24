import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import CryptoDetails from './CryptoDetails';
import '@testing-library/jest-dom'

const mockStore = configureStore([]);

describe('CryptoDetails', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      currencyList: {
        selectedCurrency: {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          rank: 1,
          price: '$35,000',
          priceBtc: '1.0',
          marketCap: '$500 billion',
          availableSupply: '18.5 million',
          totalSupply: '21 million',
          websiteUrl: 'https://bitcoin.org/',
        },
      },
    });
  });

  it('renders loading state when selected currency is not available', () => {
    store = mockStore({
      currencyList: {
        selectedCurrency: null,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CryptoDetails />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders selected currency details when available', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CryptoDetails />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Symbol')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('Rank')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('$35,000')).toBeInTheDocument();
    expect(screen.getByText('Price (BTC)')).toBeInTheDocument();
    expect(screen.getByText('1.0')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('$500 billion')).toBeInTheDocument();
    expect(screen.getByText('Available Supply')).toBeInTheDocument();
    expect(screen.getByText('18.5 million')).toBeInTheDocument();
    expect(screen.getByText('Total Supply')).toBeInTheDocument();
    expect(screen.getByText('21 million')).toBeInTheDocument();
    expect(screen.getByText('WebsiteUrl')).toBeInTheDocument();
    expect(screen.getByText('https://bitcoin.org/')).toBeInTheDocument();
  });
});
