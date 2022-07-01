import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [itemsToAdd, setItemsToAdd] = useState(0);

  const addToCart = (value) => {
    console.log(value);
    setItemsToAdd(value);
  };  

  return(
    <div className="container items-center mx-auto mt-10 text-center">
      <ItemList productCat="all" imgUrls={props.imgUrls} />
    </div>
  );  
}

export default ItemListContainer;