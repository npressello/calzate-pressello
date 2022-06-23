import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  const [itemsToAdd, setItemsToAdd] = useState(0);

  const addToCart = (value) => {
    console.log(value);
    setItemsToAdd(value);
  };

  return(
    <div className="container items-center mx-auto mt-10 text-center">
      <h1 className="font-bold">Bienvenido a Calzate, {props.name}</h1>
      <h2>Probando diferentes versiones de ItemCount</h2>

      <h3>Inicial: 1 - Stock: 10</h3>
      <ItemCount stock={10} initial={1} onAdd={addToCart} />

      <h3>Inicial: 1 - Stock: 0</h3>
      <ItemCount stock={0} initial={1} onAdd={addToCart} />

      <h3>Inicial: 5 - Stock: 20</h3>
      <ItemCount stock={20} initial={5} onAdd={addToCart} />

      <span className="font-bold text-lg">¡Se agregaron {itemsToAdd} al carrito!</span>
    </div>
  );  
}

export default ItemListContainer;