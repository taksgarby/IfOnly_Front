import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Result from './Result';

const Input = ({stock, onInputSubmit}) => {

    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredCurrency, setEnteredCurrency] = useState('');

    const handleAmountChange = (evt) => {
        setEnteredAmount(evt.target.value);
      }
    
      const handleCurrencyChange = (evt) => {
        setEnteredCurrency(evt.target.value);
      }
    
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        // const amountToSubmit = amount;
        // const currencyToSubmit = currency;
        // 
    
        const inputData = {						// NEW
          amount: enteredAmount,				// NEW
          currency: enteredCurrency					// NEW
        };

        if (!enteredAmount || !enteredCurrency){
              return <Result/>
            }
    
        // console.log(inputData)
        // setEnteredAmount("");
        // setEnteredCurrency("");

     }

     return (
        <form className='inputForm' onSubmit={handleFormSubmit}>
          <input 
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
          {/* <Link to="/result" 
          element={<Result handleFormSubmit={handleFormSubmit} />}> */}
            <input 
            type="submit"
            value="Post"/>
            {/* </Link> */}
        </form>
      )
       }
    
    export default Input;

//     const [amount, setAmount] = useState('');
//     const [currency, setCurrency] = useState('');
//     // const [data, setData] = useState('')


//     // const Data = {
//     //     AMOUNT: 'amount',
//     //     CURRENCY: 'currency'
//     //   }
    
//       const handleAmountChange = (event) => {
//         setAmount(event.target.value)
//       }
    
//       const handleCurrencyChange = (event) => {
//         setCurrency(event.target.value)
//       }
    
//     //   const handleDataChange = (event) => {
//     //     setData(event.target.value)
//     //   }
    
//       const resetForm = () => {
//         setAmount('')
//         setCurrency('')
//         // setData('')
//       }
    
//       const handleFormSubmit = (event) => {
//         event.preventDefault()
//         const payload = {
//           amount, 
//           currency 
//         }
//          onAmountSubmit(payload)
//         onCurrencySubmit(payload)
//         resetForm()
//       }
    

    
//     // const formSubmit = event => {
//     //     setAmount(event.target.amount.value);
//     //     setCurrency(event.target.currency.value);

//     //     console.log('value is', event.target.value)
//     // }

//     // const handleSubmit = (event) => {
//     //     event.preventDefault();

//     // }
//     const Button = styled.button `
//     background-color: white;
//     color: black;
//     margin: 5px;
//     border: 2px solid grey; 
//     border-radius: 8px;
//   `

//     return ( 
    
//     // <form >
//     //     <label>Currency</label>
//     //     <select id="currency" value={currency} 
//     //     onChange={(e) => setCurrency(e.target.value)}>
//     //         <option id="USA" value="USD">USD</option>
//     //         <option id="GBP" value="GBP">GBP</option>
//     //     </select>
//     //     <label>Amount</label>
//     //     <input type="number" id="amount" value={amount} placeholder="1000" 
//     //     onChange={(e) => setAmount(e.target.value)}/>
//     //     {/* <button type="submit">Submit</button> */}
//     //     {/* <Button><Link to={`/result/${stock.companyName}`}>Submit</Link></Button> */}
//     //     <Button><Link to="/result" element={<Result currency={currency} 
//     //     amount={amount} stock={stock} />}>Submit</Link></Button>
//     // </form>
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="amount">Amount:</label>
//       <input type="number" name="amount" value={amount} onChange={handleAmountChange} />

//       <label htmlFor="curency">Currency:</label>
//       <select id="currency" value={currency} onChange={handleCurrencyChange}>
//       <option value="" disabled>Choose...</option>
//         <option id="USA" value="USD">USD</option>
//         <option id="GBP" value="GBP">GBP</option>
//      </select> 
      

//       <input type="submit" value="If Only" />
//     </form>

//      );
// }
 
// export default Input;