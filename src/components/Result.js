import React from 'react';
import Button from './reusable/Button';
import styled from 'styled-components';

const Result = ( { user, onRemoveItem } ) => {


    const ResultBox = styled.div`
        width:80%;
        margin: auto;
        padding: 10px;
        background-color: lightgrey;
        color: #003049;
        box-shadow: 4px 4px 4px 4px grey;
    `

    const KeyWordRed = styled.div`
        color: #780000;
        padding: 0.5rem;
    `

    const KeyWordBlue = styled.div`
        color: #03045e;
        padding: 0.5rem;
    `

    const RemoveButton = styled.button `
        background-color: #495057;
        color: #fdf0d5;
        margin: 5px;
        padding: 5px;

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
        <div>
            <hr />
            <span>
               
                <p>If you had only bought 
                <KeyWordRed><strong> {user.currency} {user.amount} </strong></KeyWordRed>
                worth of 
                <KeyWordBlue><strong>{item.companyName} stock </strong></KeyWordBlue>
                in <KeyWordBlue>{item.minPriceDate}</KeyWordBlue> and sold it 
                in <KeyWordBlue>{item.maxPriceDate}</KeyWordBlue> ...
                <br/>
                You could have made 
            
                {/* 
                    numberOfShares = user.amount / item.minPrice
                saleValue = numberOfShares * item.maxPrice
                profit =  saleValue - user.amount

                saleValue = (user.amount*item.maxPrice) / item.
                            =(user.amount/item.minPrice)*item.maxPrice */}

                <KeyWordRed><strong>{user.currency}  {Math.round(((user.amount/item.minPrice)*item.maxPrice - user.amount)*100)/100}</strong></KeyWordRed>
            </p>
                {/* <img src={ require( "../images/" + item.image ) } alt="item" /> */}
            </span>


            <RemoveButton onClick={ () => removeItem( item ) } >Bye Bye  &#128557;</RemoveButton>
        </div >
    ) );




    return (
        <ResultBox>
        <h2>If Only: </h2>
        { user.basket.length > 0
            ? <ul >
                { basketComponents }
            </ul>
            : <p>Try another stock</p> } 
       

  
    </ResultBox>
    );
};

export default Result;
