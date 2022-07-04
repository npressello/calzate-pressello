import { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const { id } = useParams();
  const [itemsToAdd, setItemsToAdd] = useState(0);

  console.log(id);

  const addToCart = (value) => {
    console.log(value);
    setItemsToAdd(value);
  };  

  return(
    <>
      <Hero />
      <div className="container items-center mx-auto mt-10 text-center">
        <ItemList productCat={id} />
      </div>
    </>
  );  
}

export default ItemListContainer;