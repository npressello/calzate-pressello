import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import ItemList from "./ItemList";
import { db } from "../../firebase/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoaded(false);
    let productsCollection = collection(db, 'items');

    if (!(categoryId !== 'hombre' && categoryId !== 'mujer')) {
      productsCollection = query(productsCollection, where('gender', "in", [categoryId, "unisex"]));
    }

    getDocs(productsCollection)
      .then(result => {
        const data = result.docs.map(doc => {
          return {
            id: doc.id, ...doc.data()
          }
        });
        setSelectedProducts(data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoaded(true))
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