import RemoveFromCart from "../itemDetail/RemoveFromCart";
import Purcharse from "./Purcharse";

const DesktopCart = ({ products, onRemoveItem, totalPrice }) => {

  return (
    <table className="table-fixed mx-auto rounded-t-lg overflow-hidden hidden md:table">
      <thead className="border-b-2 bg-neutral-100">
        <th className="px-8 py-4"></th>
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
            <td className=""><img className="w-16 h-16 object-cover" src={product.item.imgUrl} /></td>
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
          <td className=""></td>
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
  );
}

export default DesktopCart;