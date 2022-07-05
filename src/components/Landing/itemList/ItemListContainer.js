import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {  
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const { id } = useParams(); 

  const cat = [
    {id: '0', name: 'todos'},
    {id: '1', name: 'hombre'},
    {id: '2', name: 'mujer'},
    {id: '3', name: 'marcas'}
  ]

  const getProductsByCategory = (data, catId) => {
    if (catId === undefined || (catId !== '1' && catId !== '2')) return data;
    const gender = catId === '1' ? 'hombre' : 'mujer';
    let prods = {};
    prods = data.filter((item) => item.gender === gender || item.gender === 'unisex');
    return prods;
  }

  const getProductsData = (id) => {    
    let url = (id === undefined) ? 'products.json' : '../../products.json';
    fetch(url, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then( (resp) => resp.json() )
    .then( (data) => {       
      data.forEach(element => {
        element.imgUrl = images[element.imgUrl];
      });
      setProducts(data);
      setSelectedProducts(getProductsByCategory(data, id));
    })
    .catch(err => console.log(err))
    .finally(() => setLoaded(true))
  };

  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      getProductsData(id);      
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
    <>
      <Hero />
      <div className="container items-center mx-auto mt-10 text-center">
        <ItemList items={selectedProducts} loaded={loaded} />
      </div>
    </>
  );  
}

export default ItemListContainer;