import { context } from "../../../context/CartContext";
import { useContext } from "react";
import './Cart.css';
import RemoveFromCart from "../itemDetail/RemoveFromCart";

const Cart = () => {
  const { products, addItem, removeItem, clear, isInCart, getQuantity } = useContext(context);

  return (
    <div className="container mx-auto text-center">
      <h1 className="my-10 underline italic">Carrito de compras</h1>
      <table className="table-fixed mx-auto rounded-t-lg overflow-hidden">
        <thead className="border-b-2 bg-neutral-100">
          <th className="px-10 py-4"></th>
          <th className="px-10 py-4">Producto</th>
          <th className="px-10 py-4">Talle</th>
          <th className="px-10 py-4">Color</th>
          <th className="px-10 py-4">Precio Unitario</th>
          <th className="px-10 py-4">Cantidad</th>
          <th className="px-10 py-4">Subtotal</th>
          <th className="px-10 py-4">Eliminar</th>
        </thead>
        <tbody className="font-roboto">
          {products.map(product =>
            <tr className="border-b">
              <td className="px-10 py-4"><img className="w-16 h-16 object-cover" src={product.item.imgUrl} /></td>
              <td className="px-10 py-4">{product.item.brand} - {product.item.title}</td>
              <td className="px-10 py-4">{product.item.size[product.size]}</td>
              <td className="px-10 py-4">{product.item.color[product.color]}</td>
              <td className="px-10 py-4">{product.item.price}</td>
              <td className="px-10 py-4">{product.quantity}</td>
              <td className="px-10 py-4">{product.item.price * product.quantity}</td>
              <td className="px-10 py-4"><div className=""><RemoveFromCart /></div></td>
            </tr>
          )}
          <tr className="border-b">
            <td className="px-10 py-4"></td>
            <td className="px-10 py-4"></td>
            <td className="px-10 py-4"></td>
            <td className="px-10 py-4"></td>
            <td className="px-10 py-4"></td>
            <td className="px-10 py-4">Total</td>
            <td className="px-10 py-4">12999</td>
            <td className="px-10 py-4">Finalizar Compra</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;