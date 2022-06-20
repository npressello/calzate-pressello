import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <>
      <button className='h-8 w-8 my-auto text-calzate-100 opacity-75 hover:opacity-100' id="cart-toggle">
        <FontAwesomeIcon icon={ faCartShopping } />
      </button>          
    </>
  );
}

export default CartWidget;