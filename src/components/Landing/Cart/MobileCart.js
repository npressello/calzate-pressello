import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import RemoveFromCart from "../itemDetail/RemoveFromCart";

const MobileCart = ({ products, onRemoveItem, totalPrice }) => {
  const [indexDetailsShowing, setindexDetailsShowing] = useState(-1);

  const onToggleDetail = (index) => {
    if (index === indexDetailsShowing) {
      setindexDetailsShowing(-1);
      return;
    }
    setindexDetailsShowing(index);
  }

  return (
    <table className="table-fixed mx-auto rounded-t-lg overflow-hidden md:hidden">
      <thead className="border-b-2 bg-neutral-100">
        <tr>
          <th className="px-5 py-4"></th>
          <th className="px-3 py-4">Item</th>
          <th className="px-3 py-4">Cant.</th>
          <th className="px-3 py-4">Subt.</th>
          <th className="px-3 py-4">Quitar</th>
        </tr>
      </thead>
      <tbody className="font-roboto">
        {products.map((product, index) =>
          <React.Fragment key={index}>
            <tr key={index} className="border-b">
              <td className="px-2 py-4">
                <button onClick={() => onToggleDetail(index)} className='text-calzate-500 hover:text-calzate-400 hover:shadow-lg'>
                  <FontAwesomeIcon className="text-xl" icon={index === indexDetailsShowing ? faCircleMinus : faCirclePlus} />
                </button>
              </td>
              <td className="px-2 py-4">{product.item.brand} - {product.item.title}</td>
              <td className="px-2 py-4">{product.quantity}</td>
              <td className="px-2 py-4">${(product.item.price * product.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
              <td className="px-2 py-4"><RemoveFromCart onRemove={onRemoveItem} itemId={product.item.id} /></td>
            </tr>
            {index === indexDetailsShowing &&
              <tr className="border-b">
                <td></td>
                <td className=""><img className="w-16 h-16 object-cover" src={product.item.imgUrl} alt={product.item.brand + " " + product.item.title} /></td>
                <td className="px-2 py-4">Talle: {product.item.size[product.size]}</td>
                <td className="px-2 py-4">Color: {product.item.color[product.color]}</td>
              </tr>
            }
          </React.Fragment>
        )}
        <tr className="border-b">
          <td className=""></td>
          <td className="py-4"></td>
          <td className="py-4">Total</td>
          <td className="py-4">${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
          <td className="py-4"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default MobileCart;