import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import StockList from '../components/StockList';
import Input from '../components/Input';
import Result from '../components/Result';
import "./container.css"

const MainContainer = () => {
    const [ifOnlyStocks, setIfOnlyStocks] = useState([]);

    // const [currency, setCurrency] = useState("");
    // const [amount, setAmount] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/ifonlystocks")
            .then((res) => res.json())
            .then((ifOnlyStocksData) => setIfOnlyStocks(ifOnlyStocksData));
    }, []);

    const [user, setUser] = useState({

        name: "Takako",
        amount: 1000,
        currency: "USD",
        basket: []
      });

    const getIfOnlyStockById = (id) => {
        ifOnlyStocks.find((ifOnlyStock) => ifOnlyStock.id === id);
    }




  return (
    <div class="container">
      <Router>
      <Routes>

      <Route path="/welcome" exact element={ <StockList ifOnlyStocks={ifOnlyStocks} user = {user} onBasketAdd={setUser}  />} />
      {/* <Route path="/result" element={<Result onInputSubmit />} /> */}
      {/* <Route path="/result"  element={<Result stock={stock} currency={currency} amount={amount}/>}/> */}
      <Route path="/result" element={<Result user={user} onRemoveItem={setUser} />} />
      <Route path="/" element={<Input />}/>
      </Routes>
      </Router>
      </div>
    );
    
};

export default MainContainer;