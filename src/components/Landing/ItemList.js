import Item from "./Item";
import { useEffect, useState } from "react";

const ItemList = (prop) => {
  const [productCat, setCategory] = useState(prop.productCat);
  const [products, setProducts] = useState([]);

  const getProductsData = () => {
    fetch('products.json', {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then( (resp) => resp.json() )
    .then( (data) => {       
      data.forEach(element => {
        element.imgUrl = images[element.imgUrl];
      });
      setProducts(data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getProductsData();
    }, 2000);
  }, [productCat]);

  const importAll = (r) => {
    let img = {};
    r.keys().map((item, index) => { img[item.replace('./', '').replace('.jpg', '')] = r(item); });
    return img;
  }

  const images = importAll(require.context('../../assets/images/products', false, /\.(png|jpe?g|svg)$/));

  return(
    <div className="container mx-auto gap-x-0.5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map(prod => <Item item={prod} />)}
    </div>
  );
}

export default ItemList;