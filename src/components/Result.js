import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Result = ( { user, onRemoveItem } ) => {


    const ResultBox = styled.div`
        width:80%;
        margin: auto;
        padding: 10px;
        background-color: lightgrey;
        color: black;
        box-shadow: 4px 4px 4px 4px grey;
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
                { item.companyName } £{ item.country }
                <p>If you had only bought {user.currency} {user.amount} 
                worth of {item.companyName} stock in {item.minPriceDate} and sold it 
                in {item.maxPriceDate} ...
                <br/>
                You could have made {(item.maxPrice - item.minPrice)* user.amount}
            </p>
                {/* <img src={ require( "../images/" + item.image ) } alt="item" /> */}
            </span>
           {/* <Total user={user} item ={item}/> */}

            <Button onClick={ () => removeItem( item ) }>Remove</Button>
        </li >
    ) );




    return (
        <ResultBox>
        <h2>Your items: </h2>
        { user.basket.length > 0
            ? <ul >
                { basketComponents }
            </ul>
            : <p>Basket Is Empty</p> } 
       

  
    </ResultBox>
    );
};

export default Result;
