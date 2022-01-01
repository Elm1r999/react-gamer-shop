import React from 'react'
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingStore from './pages/ShoppingStore';
import Checkout from './pages/Checkout';
import NotFound from './pages/404';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={ <Home/>} />
        <Route path="/store" element={ <ShoppingStore />}></Route>
        <Route path="/checkout" element= { <Checkout /> }></Route>
        <Route path="/product" element={ <Product />}></Route>
        <Route path="*" element={<NotFound />} />      
      </Routes>
    </BrowserRouter>
  );
};

export default App;