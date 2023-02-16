import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Stock = ({ stock }) => {

  const StockItem = styled.div `

    display: flex;
    flex-direction: column;
    height: 200px;
    width: 150px;
    box-shadow: 2px 2px 4px grey;
    margin: 15px;
    background-color: lightgray;
  `

  const CompanyName = styled.div `
    padding: 1rem;
    margin-top: 1rem;
    color: darkblue;
  `

  const ItemImage = styled.img `
    height: 300px;
    box-shadow: 2px 2px 4px grey;
  `

  const ItemPara = styled.p `
     margin: 5px;
  `



//   const onClick = () => {
//     const updatedUser = { ...user };
//     updatedUser.basket = [...updatedUser.basket, item];
//     onBasketAdd(updatedUser);
//   };

  return (
    <StockItem >
      {/* <ItemImage src={require("../images/" + item.image)} alt="item" /> */}
      {/* <Button onClick={onClick}>Add To Basket</Button> */}
      <CompanyName>{stock.companyName}</CompanyName>
      <Input stock ={stock} />

    </StockItem>
  );
};

export default Stock;
