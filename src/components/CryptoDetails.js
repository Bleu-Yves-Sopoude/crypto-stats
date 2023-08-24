import React from 'react';
import { useSelector } from 'react-redux';

import Footer from './Footer';

const CryptoDetails = () => {
  const selectedCurrency = useSelector(
    (state) => state.currencyList.selectedCurrency,
  );

  if (!selectedCurrency) {
    return <div>Loading...</div>;
  }

  const {
    name,
    symbol,
    rank,
    price,
    priceBtc,
    marketCap,
    availableSupply,
    totalSupply,
    websiteUrl,
  } = selectedCurrency;

  return (
    <div className="container">
      <table className="card-details">
        <tr className="bg">
          <td>Name</td>
          <td>{name}</td>
        </tr>
        <tr className="bg">
          <td>Symbol</td>
          <td>{symbol}</td>
        </tr>
        <tr className="bg">
          <td>Rank</td>
          <td>{rank}</td>
        </tr>
        <tr className="bg">
          <td>Price</td>
          <td>{price}</td>
        </tr>
        <tr className="bg">
          <td>Price (BTC)</td>
          <td>{priceBtc}</td>
        </tr>
        <tr className="bg">
          <td>Market Cap</td>
          <td>{marketCap}</td>
        </tr>
        <tr className="bg">
          <td>Available Supply</td>
          <td>{availableSupply}</td>
        </tr>
        <tr className="bg">
          <td>Total Supply</td>
          <td>{totalSupply}</td>
        </tr>
        <tr className="bg">
          <td>WebsiteUrl</td>
          <td>{websiteUrl}</td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default CryptoDetails;
