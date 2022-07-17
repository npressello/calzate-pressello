import { context } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
import Purcharse from "./Purcharse";
import RemoveFromCart from "../itemDetail/RemoveFromCart";

const Cart = () => {
  const { products, addItem, removeItem, clear, isInCart, getQuantity } = useContext(context);

  const totalPrice = products.reduce((acc, product) => acc + (product.item.price * product.quantity), 0);

  const onRemoveItem = (itemId) => {
    removeItem(itemId);
  }

  return (
    <div className="container mx-auto text-center">
      <h1 className="my-10 underline italic">Carrito de compras</h1>
      <table className="table-fixed mx-auto rounded-t-lg overflow-hidden">
        <thead className="border-b-2 bg-neutral-100">
          <th className="px-4 py-4"></th>
          <th className="px-4 py-4">Producto</th>
          <th className="px-4 py-4">Talle</th>
          <th className="px-4 py-4">Color</th>
          <th className="px-4 py-4">Precio Unitario</th>
          <th className="px-4 py-4">Cantidad</th>
          <th className="px-4 py-4">Subtotal</th>
          <th className="px-4 py-4">Eliminar</th>
        </thead>
        <tbody className="font-roboto">
          {products.map(product =>
            <tr className="border-b">
              <td className="px-2 py-4"><img className="w-16 h-16 object-cover" src={product.item.imgUrl} /></td>
              <td className="px-2 py-4">{product.item.brand} - {product.item.title}</td>
              <td className="px-2 py-4">{product.item.size[product.size]}</td>
              <td className="px-2 py-4">{product.item.color[product.color]}</td>
              <td className="px-2 py-4">${product.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</td>
              <td className="px-2 py-4">{product.quantity}</td>
              <td className="px-2 py-4">${(product.item.price * product.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</td>
              <td className="px-2 py-4"><RemoveFromCart onRemove={onRemoveItem} itemId={product.item.id} /></td>
            </tr>
          )}
          <tr className="border-b">
            <td className="px-4 py-4"></td>
            <td className="px-4 py-4"></td>
            <td className="px-4 py-4"></td>
            <td className="px-4 py-4"></td>
            <td className="px-4 py-4"></td>
            <td className="px-4 py-4">Total</td>
            <td className="px-4 py-4">${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</td>
            <td className="px-4 py-4"><Purcharse /></td>
          </tr>
        </tbody>
      </table>
      {products.length === 0 && <p className="my-10">No hay productos en el carrito. <Link className="text-lg underline font-roboto font-semibold bg-calzate-400 text-calzate-900 p-2 rounded hover:bg-calzate-300 hover:shadow-lg" exact='true' to={'/'}>Explora la tienda</Link></p>}
    </div >
  );
}

export default Cart;