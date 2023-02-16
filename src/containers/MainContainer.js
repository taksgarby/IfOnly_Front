import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import StockList from '../components/StockList';
import Result from '../components/Result';

const MainContainer = () => {
    const [ifOnlyStocks, setIfOnlyStocks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/ifonlystocks")
            .then((res) => res.json())
            .then((ifOnlyStocksData) => setIfOnlyStocks(ifOnlyStocksData));
    }, []);

    const getIfOnlyStockById = (id) => {
        ifOnlyStocks.find((ifOnlyStock) => ifOnlyStock.id === id);
    }


  return (
      <Router>
      <Header />
      <Routes>
      <Route path="/" exact element={ <StockList ifOnlyStocks={ifOnlyStocks} setIfOnlyStocks={ifOnlyStocks} />} />
      <Route path="/result" element={<Result />} />
      </Routes>
      </Router>
    );
    
};

export default MainContainer;