import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/Landing/itemList/ItemListContainer';
import ItemDetailContainer from './components/Landing/itemDetail/ItemDetailContainer';
import Cart from './components/Landing/Cart/Cart';
import CustomProvider from './context/CartContext';
import NotFound from './components/Error/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
