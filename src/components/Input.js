import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Input = ({stock}) => {

    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    
    // const formSubmit = event => {
    //     setAmount(event.target.amount.value);
    //     setCurrency(event.target.currency.value);

    //     console.log('value is', event.target.value)
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    // }
    const Button = styled.button `
    background-color: white;
    color: black;
    margin: 5px;
    border: 2px solid grey; 
    border-radius: 8px;
  `

    return ( 
    
    <form >
        <label>Currency</label>
        <select id="currency" value={currency} 
        onChange={(e) => setCurrency(e.target.value)}>
            <option id="USA" value="USD">USD</option>
            <option id="GBP" value="GBP">GBP</option>
        </select>
        <label>Amount</label>
        <input type="number" id="amount" value={amount} placeholder="1000" 
        onChange={(e) => setAmount(e.target.value)}/>
        {/* <button type="submit">Submit</button> */}
        <Button><Link to={stock.companyName}>Submit</Link></Button>
    </form>


     );
}
 
export default Input;