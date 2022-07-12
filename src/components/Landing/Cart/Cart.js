import { context } from "../../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { products, addItem, removeItem, clear, isInCart, getQuantity } = useContext(context);

  return (
    <div className="container mx-auto text-center">
      <h1 className="mx-auto">CARRITO</h1>
    </div>
  );
}

export default Cart;