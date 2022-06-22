import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';

const ItemCount = (props) => {

  const addItem = () => {
    let input = document.getElementById("itemQuantityInput");
    props.onAdd(input.value);
  };

  return(
    <div className="my-4 mx-auto items-center text-center bg-neutral-100 w-fit p-2">
      <div className='mr-auto border-2 border-neutral-400 rounded p-1 w-40 bg-white'>
        <button className='w-8 h-8 rounded hover:bg-neutral-100'>
          <FontAwesomeIcon className='text-lg text-calzate-300' icon={ faMinus } />
        </button>
        <input id="itemQuantityInput" defaultValue={props.initial} min={1} max={props.stock} type={'number'} className='w-16 mx-2 rounded text-center appearance-text hover:outline-0 focus:outline-0' />
        <button className='w-8 h-8 rounded hover:bg-neutral-100'>
          <FontAwesomeIcon className='text-lg text-calzate-300' icon={ faPlus } />
        </button>
      </div>
      <button onClick={addItem} className='mt-2 w-40 rounded border-2 border-calzate-500 font-semibold text-neutral-600 hover:text-calzate-900 bg-white hover:bg-calzate-500'>Agregar</button>
    </div>
  );  
}

export default ItemCount;