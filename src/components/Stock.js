import React, {useState} from 'react';
import styled from 'styled-components';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Button from './reusable/Button';

const Stock = ({ stock, user, onBasketAdd }) => {

  const StockItem = styled.div `

    display: flex;
    flex-direction: column;
    height: 220px;
    width: 150px;
    box-shadow: 2px 2px 4px grey;
    margin: 15px;
    background-color: #669bbc;
  `

  const CompanyName = styled.div `
    padding: 1rem;
    margin-top: 1rem;
    color: #fdf0d5;
    font-size: 1.5rem;
  `
  const StockDetails = styled.div `
    padding: 0.5rem;
    color: #000814;
  `

  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredCurrency, setEnteredCurrency] = useState('');

  // const handleAmountChange = (evt) => {
  //   setEnteredAmount(evt.target.value);
  // }

  // const handleCurrencyChange = (evt) => {
  //   setEnteredCurrency(evt.target.value);
  // }

const onClick = () => {
  const updatedUser = { ...user };
  updatedUser.basket = [...updatedUser.basket, stock]
  onBasketAdd(updatedUser);
};



return (

  <StockItem>
   
    {/* <form onSubmit ={onClick}> */}

    <CompanyName>{stock.companyName}</CompanyName>
    <StockDetails>{stock.country}</StockDetails>
 
    <StockDetails>{stock.industryType}</StockDetails>
   

    <Button onClick={onClick} text={"If Only"}></Button>

    {/* <input 
          type="number"
          placeholder="Amount"
          value={enteredAmount}
          onChange={handleAmountChange}			// NEW
        />
        <input 
          type="text"
          placeholder="Currency"
          value={enteredCurrency}
          onChange={handleCurrencyChange}				// NEW
        />
         <input 
          type="submit"
          value="Post" />
</form> */}
  </StockItem>

);
};



//   const onClick = () => {
//     const updatedUser = { ...user };
//     updatedUser.basket = [...updatedUser.basket, item];
//     onBasketAdd(updatedUser);
//   };

//   return (
//     <StockItem >
//       {/* <ItemImage src={require("../images/" + item.image)} alt="item" /> */}
//       {/* <Button onClick={onClick}>Add To Basket</Button> */}
//       <CompanyName>{stock.companyName}</CompanyName>
//       <Input stock ={stock} />

//     </StockItem>
//   );
// };

export default Stock;
