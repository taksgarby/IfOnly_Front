import React, {useState} from 'react';
import styled from 'styled-components';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Button from './reusable/Button';
import { Link } from "react-router-dom";
import Stock_img from "./stock_img.png";

const Stock = ({ stock, user, onBasketAdd }) => {


  const StockItem = styled.div `

  display: flex;
  flex-direction: column;
  height: 270px;
  width: 150px;
  box-shadow: 2px 2px 4px grey;
  margin: 15px;
  background-color: white;
  font-family: roboto;
`

  const CompanyName = styled.div `
    padding: 0.5rem;
    margin-top: 0.5rem;
    color: Pet rock;
    font-size: 1.5rem;
  `
  const StockDetails = styled.div `
    padding: 0.3rem;
    color: Snorlax;

  `

  const StockImage = styled.image`
    margin: 5px;
  `
  // const StockImg = styled.img`
  //   width: 100px;
  //   height: 80px;
    
  // `

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
    <StockImage><img src={Stock_img} width="100" height="80"/></StockImage>

    <Link to="/result"><Button onClick={onClick} text={"If Only"}></Button></Link>

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