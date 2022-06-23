import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = (props) => {

  const [itemQuantity, setItemQuantity] = useState(props.initial);
  const [substractBtnDisabled, setSubstractBtnDisabled] = useState(false);
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);

  const addItemToCart = () => {
    if (props.stock >= itemQuantity)
      props.onAdd(itemQuantity);
  };

  const addNumber = () => {
    setNumber(itemQuantity+1);
  };

  const substractNumber = () => {
    setNumber(itemQuantity-1);
  };

  const setNumber = (number) => {
    if (number < 1) {
      number = 1;      
      setSubstractBtnDisabled(true);
    } else if (number > props.stock) {
      number = props.stock;
      setAddBtnDisabled(true);
    } else {
      setSubstractBtnDisabled(false);
      setAddBtnDisabled(false);
    }
    setItemQuantity(number);
  };

  return(
    <div className="my-4 mx-auto items-center text-center bg-neutral-100 w-fit p-2">
      <div className='mr-auto border-2 border-neutral-400 rounded p-1 w-40 bg-white'>
        <button onClick={substractNumber} className='w-8 h-8 rounded hover:bg-neutral-100 disabled:bg-neutral-200' disabled={substractBtnDisabled}>
          <FontAwesomeIcon className='text-lg text-calzate-300' icon={ faMinus } />
        </button>
        <input onChange={(event) => setNumber(event.target.value)} value={itemQuantity} type={'number'} className='w-16 mx-2 rounded text-center appearance-text hover:outline-0 focus:outline-0' />
        <button onClick={addNumber} className='w-8 h-8 rounded hover:bg-neutral-100 disabled:bg-neutral-200' disabled={addBtnDisabled}>
          <FontAwesomeIcon className='text-lg text-calzate-300' icon={ faPlus } />
        </button>
      </div>
      <button disabled={props.stock === 0 ? true : false} onClick={addItemToCart} className='mt-2 w-40 rounded border-2 border-calzate-500 font-semibold text-neutral-600 hover:text-calzate-900 bg-white hover:bg-calzate-500 disabled:bg-neutral-200 disabled:hover:text-neutral-600'>Agregar</button>
    </div>
  );  
}

export default ItemCount;