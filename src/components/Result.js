import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Result = ( { user, onRemoveItem } ) => {


    const ResultBox = styled.div`
        width:80%;
        margin: auto;
        padding: 10px;
        background-color: lightgrey;
        color: #000814;
        box-shadow: 4px 4px 4px 4px grey;
    `

    const KeyWordRed = styled.div`
        color: #780000;
    `

    const Button = styled.button `
        background-color: white;
        color: black;
        margin: 5px;
        border: 2px solid grey; 
        border-radius: 8px;
     `
     const removeItem = ( itemToRemove ) => {
        const updatedUser = { ...user };
        updatedUser.basket = [ ...user.basket ];
        const index = updatedUser.basket.indexOf( itemToRemove );
        updatedUser.basket.splice( index, 1 );
        onRemoveItem( updatedUser );
    };

    const basketComponents = user.basket.map( item => (
        <li>
            <hr />
            <span>
               
                <p>If you had only bought 
                <KeyWordRed><strong> {user.currency} {user.amount} </strong></KeyWordRed>
                worth of {item.companyName} stock in {item.minPriceDate} and sold it 
                in {item.maxPriceDate} ...
                <br/>
                You could have made 
                <KeyWordRed><strong>{user.currency} {(item.maxPrice - item.minPrice)* user.amount}</strong></KeyWordRed>
            </p>
                {/* <img src={ require( "../images/" + item.image ) } alt="item" /> */}
            </span>


            <Button onClick={ () => removeItem( item ) }>Remove</Button>
        </li >
    ) );




    return (
        <ResultBox>
        <h2>If Only: </h2>
        { user.basket.length > 0
            ? <ul >
                { basketComponents }
            </ul>
            : <p>Basket Is Empty</p> } 
       

  
    </ResultBox>
    );
};

export default Result;
