import React from 'react';
import styled from 'styled-components';
import Stock from './Stock';

const StockList = ({ ifOnlyStocks, onFormClick }) => {

  const StockList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `
  const stockComponents = ifOnlyStocks.map((stock, id) => (
    <Stock key={stock.id} stock={stock} />
  ));
  // const stockComponents = ifOnlyStocks.map((stock, id) => (
  //   <li key={stock.id}>{stock.companyName}</li>
  // ))


  return (
    <StockList>
      {stockComponents}
    </StockList>
  );
};

export default StockList;
