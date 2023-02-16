import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import Button from '../reusable/Button';

const Input = () => {

    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    
    const formSubmit = event => {
        setAmount(event.target.amount.value);
        setCurrency(event.target.currency.value);

        console.log('value is', event.target.value)
    }
    

    return ( 
    
    <form>
        <label>Currency</label>
        <select id="currency" value={currency}>
            <option id="USA" value="USD">USD</option>
            <option id="GBP" value="GBP">GBP</option>
        </select>
        <label>Amount</label>
        <input type="number" id="amount" value={amount} placeholder="1000" />
            


    </form>


     );
}
 
export default Input;