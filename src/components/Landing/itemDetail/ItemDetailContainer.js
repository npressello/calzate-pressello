import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

const ItemDetailContainer = (props) => {
  const [id, setId] = useState(props.id);
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getProductData = () => {
    fetch('products.json', {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then( (resp) => resp.json() )
    .then( (data) => {      
      let prod = data.filter((el) => el.id === id)[0];
      prod.imgUrl = images[prod.imgUrl];
      setProduct(prod);
      console.log(product);
    })
    .catch(err => console.log(err))
    .finally(() => setLoaded(true))
  };

  useEffect(() => {
    setTimeout(() => {
      getProductData();
    }, 2000);
  }, [id]);

  // Temporal way to load the dynamics urls of the products' images
  const importAll = (r) => {
    let img = {};
    r.keys().map((item, index) => { img[item.replace('./', '').replace('.jpg', '')] = r(item); });
    return img;
  }

  const images = importAll(require.context('../../../assets/images/products', false, /\.(png|jpe?g|svg)$/));

  return(
    <div className="container mx-auto flex">
      { loaded ? <ItemDetail item={ product } /> : <h1>CARGANDO</h1> }      
    </div>
  );
}

export default ItemDetailContainer;