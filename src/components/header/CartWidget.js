import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { context } from "../../context/CartContext";
import { useContext } from 'react';

const CartWidget = () => {

  const { getQuantity } = useContext(context);

  return (
    <>
      <button className='relative h-8 w-8 my-auto text-calzate-100 opacity-75 hover:opacity-100' id="cart-toggle">
        <FontAwesomeIcon className='text-xl' icon={faCartShopping} />
        <span className='absolute w-4 right-0 bottom-0 text-xs rounded-full bg-black text-calzate-900'>{getQuantity()}</span>
      </button>
    </>
  );
}

export default CartWidget;