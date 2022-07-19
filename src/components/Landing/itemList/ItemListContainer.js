import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import ItemList from "./ItemList";
import { db } from "../../firebase/Firebase";
import { collection, getDocs, query } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const { categoryId } = useParams();

  const getProductsByCategory = (data, catId) => {
    if (catId === undefined || (catId !== 'hombre' && catId !== 'mujer')) return data;
    const gender = catId;
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
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach(element => {
          element.imgUrl = images[element.imgUrl];
        });
        setSelectedProducts(getProductsByCategory(data, id));
      })
      .catch(err => console.log(err))
      .finally(() => setLoaded(true))
  };

  useEffect(() => {
    const productsCollection = collection(db, 'items');
    getDocs(productsCollection)
      .then(result => {
        const data = result.docs.map(doc => {
          return {
            id: doc.id, ...doc.data()
          }
        });
        console.log(data);
      })

    setLoaded(false);
    setTimeout(() => {
      getProductsData(categoryId);
    }, 2000);
  }, [categoryId]);

  // Temporal way to load the dynamics urls of the products' images
  const importAll = (r) => {
    let img = {};
    r.keys().map((item, index) => { img[item.replace('./', '').replace('.jpg', '').replace('.png', '')] = r(item); });
    return img;
  }

  const images = importAll(require.context('../../../assets/images/products', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <Hero />
      <div className="container items-center mx-auto mt-10 text-center">
        <ItemList items={selectedProducts} loaded={loaded} />
      </div>
    </>
  );
}

export default ItemListContainer;