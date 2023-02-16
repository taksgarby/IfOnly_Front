import React from 'react';
import styled from 'styled-components';

const Result = ( { stock, amount, currency } ) => {

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





    return (
        <ResultBox>
     Hello
        </ResultBox>
    );
};

export default Result;
