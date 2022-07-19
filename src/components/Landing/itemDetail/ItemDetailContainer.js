import ItemDetail from "./ItemDetail";
import ItemDetailSkeleton from "./ItemDetailSkeleton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import { collection, getDocs, query, where, FieldPath, documentId } from "firebase/firestore";

const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();

  const getProductData = () => {
    const q = query(collection(db, 'items'), where('__name__', "==", id));
    const spanShot = getDocs(q)
      .then(result =>
        result.forEach(doc => setProduct({ id: doc.id, ...doc.data() }))
      )
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