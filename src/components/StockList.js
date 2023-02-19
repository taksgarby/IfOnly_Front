import React from 'react';
import styled from 'styled-components';
import Stock from './Stock';
import { Link } from "react-router-dom";

const StockList = ({ ifOnlyStocks, user, onBasketAdd }) => {

  const StockList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `

    const stockComponents = ifOnlyStocks.map(stock => (
      <Stock key={stock.id} stock={stock} user={user} onBasketAdd={onBasketAdd} />
    ));

  const UserInfo = styled.div`
      font-family: Merriweather;
  ` 


    return (
<>
<UserInfo>
<h2>Welcome { user.name }</h2>
<h3>You have { user.currency } { user.amount } you could have invested</h3>
<StockList>
      {stockComponents}
</StockList>

<Link to="/result">Check your result</Link>

</UserInfo>
</>
  );
};


export default StockList;
