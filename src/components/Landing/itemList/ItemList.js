import Item from "./Item";
import { useEffect, useState } from "react";
import ItemSkeleton from "./ItemSkeleton";

const ItemList = (prop) => {
  const [productCat, setCategory] = useState(prop.productCat);
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const cat = [
    {id: '0', name: 'todos'},
    {id: '1', name: 'hombre'},
    {id: '2', name: 'mujer'},
    {id: '3', name: 'marcas'}
  ]

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
    })
    .catch(err => console.log(err))
    .finally(() => setLoaded(true))
  };

  useEffect(() => {
    setTimeout(() => {
      getProductsData();
    }, 2000);
  }, [productCat]);

  // Temporal way to load the dynamics urls of the products' images
  const importAll = (r) => {
    let img = {};
    r.keys().map((item, index) => { img[item.replace('./', '').replace('.jpg', '')] = r(item); });
    return img;
  }

  const importProducts = (r) => {
    let prodUrl = {};
    r.keys().map((p, index) => {prodUrl[index] = r(p);});
    console.log(r(r.keys()[0]));
    return prodUrl;
  }

  const images = importAll(require.context('../../../assets/images/products', false, /\.(png|jpe?g|svg)$/));
  const productsUrl = importProducts(require.context('../../../data', false, /\.(json)$/));

  return(
    <div className="container mx-auto gap-x-0.5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      { loaded ?
        products.map((prod, index) => <Item key={index} item={prod} />):
        [...Array(10)].map((e, i) => <ItemSkeleton key={i} />)       
      }
    </div>
  );
}

export default ItemList;