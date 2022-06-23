import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = (props) => {

  const [itemQuantity, setItemQuantity] = useState(props.initial);
  const itemStock = props.stock;
  let input = document.getElementById("itemQuantityInput");

  const checkIfOutStock = () => {
    if (itemStock === 0) document.getElementById("addToCartBtn").disabled = true;
    else document.getElementById("addToCartBtn").disabled = false;
  }  

  const addItemToCart = () => {
    props.onAdd(input.value);
  };

  const addNumber = () => {
    setNumber(itemQuantity+1);
  };

  const substractNumber = () => {
    setNumber(itemQuantity-1);
  };

  const setNumber = (number) => {
    if (number < 0) {
      number = 0;      
      document.getElementById("substractBtn").disabled = true;
    } else if (number > itemStock) {
      number = itemStock;
      document.getElementById("addBtn").disabled = true;
    } else {
      document.getElementById("substractBtn").disabled = false;
      document.getElementById("addBtn").disabled = false;
    }
    setItemQuantity(number);
  };

// *** CORREGIR QUE SI UN BOTON SE ANULA, SE ANULAN TODOS. Hay que evitar usar id y usar algo especifico de react

  return(
    <div className="my-4 mx-auto items-center text-center bg-neutral-100 w-fit p-2">
      <div className='mr-auto border-2 border-neutral-400 rounded p-1 w-40 bg-white'>
        <button id="substractBtn" onClick={substractNumber} className='w-8 h-8 rounded hover:bg-neutral-100 disabled:bg-neutral-200'>
          <FontAwesomeIcon className='text-lg text-calzate-300' icon={ faMinus } />
        </button>
        <input id="itemQuantityInput" defaultValue={props.initial} value={itemQuantity} type={'number'} className='w-16 mx-2 rounded text-center appearance-text hover:outline-0 focus:outline-0' />
        <button id="addBtn" onClick={addNumber} className='w-8 h-8 rounded hover:bg-neutral-100 disabled:bg-neutral-200'>
          <FontAwesomeIcon className='text-lg text-calzate-300' icon={ faPlus } />
        </button>
      </div>
      <button id="addToCartBtn" onLoad={checkIfOutStock} onClick={addItemToCart} className='mt-2 w-40 rounded border-2 border-calzate-500 font-semibold text-neutral-600 hover:text-calzate-900 bg-white hover:bg-calzate-500 disabled:bg-neutral-200 disabled:hover:text-neutral-600'>Agregar</button>
    </div>
  );  
}

export default ItemCount;