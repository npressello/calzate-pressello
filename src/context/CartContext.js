import React, { createContext } from "react";
import { useState } from "react";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) return;
  }

  const removeItem = (itemId) => {
    return;
  }

  const clear = () => {
    return;
  }

  const isInCart = (itemId) => {
    return;
  }

  const getQuantity = () => {
    return;
  }

  return (
    <Provider value={{ products, addItem, removeItem, clear, getQuantity }} >
      {children}
    </Provider>
  )
}

export default CustomProvider