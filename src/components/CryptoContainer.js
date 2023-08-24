import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { fetchCurrencyList, selectedCurrency } from '../redux/currencies/currencySlice';
import Filter from './Filter';
import Footer from './Footer';

const CryptoContainer = () => {
  const dispatch = useDispatch();
  const currencyList = useSelector(
    (state) => state.currencyList.filteredCurrencyLists,
  );
  const status = useSelector((state) => state.currencyList.status);
  const error = useSelector((state) => state.currencyList.error);

  useEffect(() => {
    dispatch(fetchCurrencyList());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="loading">Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <Filter />
      <ul className="card-container">
        {currencyList.map((currency) => (
          <div className="card" key={currency.id}>
            <Link
              to={`/details/${currency.id}`}
              onClick={() => dispatch(selectedCurrency(currency))}
            >
              <div className="card-header">
                <img src={currency.icon} alt={currency.name} />
                <RiArrowRightSLine className="arrow-icon" />
              </div>
              <h4 className="currency-text">{currency.name}</h4>
              <h4 className="currency-text">{currency.symbol}</h4>
              <h4 className="currency-text">
                #
                {currency.rank}
              </h4>
            </Link>
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default CryptoContainer;
