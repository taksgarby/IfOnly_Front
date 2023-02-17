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
  
    // const stockComponents = ifOnlyStocks.map((stock, id) => (
  //   <Stock key={stock.id} stock={stock} />
  // ));
  // const stockComponents = ifOnlyStocks.map((stock, id) => (
  //   <li key={stock.id}>{stock.companyName}</li>
  // ))


    return (
<>
<div id="user-info">
<h3>Welcome { user.name }</h3>
<h4>You have { user.currency } { user.amount } you could have invested</h4>
<StockList>
      {stockComponents}
</StockList>

<Link to="/result">Go to Basket</Link>

</div>
</>
  );
};
//   return (
//     <StockList>
//       {stockComponents}
//     </StockList>
//   );
// };

export default StockList;
