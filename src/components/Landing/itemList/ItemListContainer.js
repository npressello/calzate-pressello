import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import ItemList from "./ItemList";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

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

  const getProductsData = (catId) => {
    const productsCollection = collection(db, 'items');
    getDocs(productsCollection)
      .then(result => {
        const data = result.docs.map(doc => {
          return {
            id: doc.id, ...doc.data()
          }
        });
        setSelectedProducts(getProductsByCategory(data, catId));
      })
      .catch(err => console.log(err))
      .finally(() => setLoaded(true))
  };

  useEffect(() => {
    setLoaded(false);
    getProductsData(categoryId);
  }, [categoryId]);

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