import { context } from "../../../context/CartContext";
import { useContext } from "react";
import DesktopCart from "./DesktopCart";
import { Link } from "react-router-dom"
import MobileCart from "./MobileCart";
import Swal from "sweetalert2";
import CheckOut from "./checkOut/CheckOut";
import { db } from "../../firebase/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Cart = () => {
  const { products, removeItem, getTotalPrice } = useContext(context);

  // const totalPrice = products.reduce((acc, product) => acc + (product.item.price * product.quantity), 0);

  const onRemoveItem = (itemId) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar el prooducto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(itemId);
      }
    })
  }

  const handleCheckOut = (e, buyerData) => {
    e.preventDefault();
    console.log(buyerData);
    /* const salesCollection = collection(db, 'ventas');
    addDoc(salesCollection, {
      buyer: buyerData,
      items: [],
      date: serverTimestamp(),
      total: getTotalPrice()
    }) */
  }

  return (
    <div className="container mx-auto text-center text-sm">
      <h1 className="my-10 underline italic">Carrito de compras</h1>
      <MobileCart products={products} onRemoveItem={onRemoveItem} totalPrice={getTotalPrice} />
      <DesktopCart products={products} onRemoveItem={onRemoveItem} totalPrice={getTotalPrice} />
      {products.length === 0 ?
        <p className="my-10">No hay productos en el carrito. <Link className="text-lg underline font-roboto font-semibold bg-calzate-400 text-calzate-900 p-2 rounded hover:bg-calzate-300 hover:shadow-lg" exact='true' to={'/'}>Explora la tienda</Link></p>
        : <CheckOut handleCheckOut={handleCheckOut} />}
    </div >
  );
}

export default Cart;