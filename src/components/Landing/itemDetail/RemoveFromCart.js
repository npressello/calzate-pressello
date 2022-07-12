import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const RemoveFromCart = ({ onRemove }) => {

  return (
    <div className="items-center text-center w-fit pl-2">
      <button onClick={onRemove} className='p-2 rounded border-2 border-calzate-500 font-semibold text-xl text-calzate-900 bg-calzate-500 hover:bg-calzate-400 hover:shadow-lg'>
        <FontAwesomeIcon className='text-xl' icon={faTrashCan} />
      </button>
    </div>
  );
}

export default RemoveFromCart;