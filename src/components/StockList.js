import React from 'react';
import styled from 'styled-components';
import Stock from './Stock';
import "./components.css";


const StockList = ({ ifOnlyStocks, user, onBasketAdd }) => {

  const StockList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `

    const stockComponents = ifOnlyStocks.map(stock => (
      <Stock key={stock.id} stock={stock} user={user} onBasketAdd={onBasketAdd} />
    ));

  // const UserInfo = styled.div`
  //     font-family: 'Open Sans';
  // ` 

    const UserInfo = styled.div`
      font-family: 'Amatic SC', cursive;
      font-size: 2rem;
      margin: 0px;
      padding: 0px;
    `
  

    return (
<>
<UserInfo>
<p class="welcome">Welcome { user.name }</p>
<h3>You have { user.amount } { user.currency } you could have invested</h3>
</UserInfo>
<StockList>
      {stockComponents}
</StockList>

{/* <Link to="/result">Check your result</Link> */}


</>
  );
};


export default StockList;