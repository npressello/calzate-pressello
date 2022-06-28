import { useState } from "react";
import ItemList from "./ItemList";
import image from '../../assets/images/products/00.jpg';
import { useEffect } from "react";

const ItemListContainer = (props) => {
  const [itemsToAdd, setItemsToAdd] = useState(0);

  const addToCart = (value) => {
    console.log(value);
    setItemsToAdd(value);
  };  

  return(
    <div className="container items-center mx-auto mt-10 text-center">
      <ItemList />
    </div>
  );  
}

export default ItemListContainer;