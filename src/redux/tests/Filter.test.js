import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import Filter from './Filter';

const mockStore = configureStore([]);

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Filter', () => {
  let store;
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();

    store = mockStore({
      currencyList: {
        filteredCurrencyLists: [],
      },
    });

    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('dispatches filteredCurrencyLists action on input change', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Filter />
      </Provider>,
    );

    const input = getByPlaceholderText('search currency...');

    fireEvent.change(input, { target: { value: 'btc' } });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'currencyList/filteredCurrencyLists',
      payload: 'btc',
    });
  });
});
