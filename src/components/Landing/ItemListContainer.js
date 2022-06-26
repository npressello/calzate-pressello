import { useState } from "react";
import Item from "./Item";
import image from '../../assets/images/products/00.jpg';
import { useEffect } from "react";

const ItemListContainer = (props) => {
  const [itemsToAdd, setItemsToAdd] = useState(0);
  const [itemsImages, setItemsImages] = useState({});

  const addToCart = (value) => {
    console.log(value);
    setItemsToAdd(value);
  };

  function importAll(r) {
    let img = {};
    r.keys().map((item, index) => { img[item.replace('./', '')] = r(item); });
    return img;
  }

  const images = importAll(require.context('../../assets/images/products', false, /\.(png|jpe?g|svg)$/));

  const product = {
    id: '00',
    title: 'Nike - Max F4',
    price: 12999,
    imgUrl: images['00.jpg']
  };

  return(
    <div className="container items-center mx-auto mt-10 text-center">
      <h1 className="font-bold">Bienvenido a Calzate, {props.name}</h1>
      <h2>Probando Item</h2>

      <Item item={product} />
    </div>
  );  
}

export default ItemListContainer;