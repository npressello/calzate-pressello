import ItemDetail from "./ItemDetail";
import ItemDetailSkeleton from "./ItemDetailSkeleton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();

  const getProductData = () => {
    const consult = doc(db, 'items', id);
    getDoc(consult)
      .then((result) => {
        if (result.exists()) {
          setProduct({ id: result.id, ...result.data() })
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoaded(true))
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  return (
    <div className="container mx-auto flex flex-col">
      {loaded ? <ItemDetail item={product} /> : <ItemDetailSkeleton />}
    </div>
  );
}

export default ItemDetailContainer;