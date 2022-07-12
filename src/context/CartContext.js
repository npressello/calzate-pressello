import React, { createContext } from "react";
import { useState } from "react";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const addItem = (item, sizeIndex, colorIndex, quantity) => {
    if (!isInCart(item.id)) return;
    setProducts([...products, { 'item': item, 'size': sizeIndex, 'color': colorIndex, 'quantity': quantity }]);
  }

  const removeItem = (itemId) => {
    if (!isInCart(itemId)) return;
    setProducts(products.filter((product) =>
      product.item.id !== itemId));
  }

  const clear = () => {
    setProducts([]);
  }

  const isInCart = (itemId) => {
    return products.some((product) => product.item.id === itemId);
  }

  const getQuantity = () => {
    return products.reduce((acc, product) =>
      acc + product.quantity, 0
    );
  }

  return (
    <Provider value={{ products, addItem, removeItem, clear, getQuantity }} >
      {children}
    </Provider>
  )
}

export default CustomProvider