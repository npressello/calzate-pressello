import { Link } from "react-router-dom";
import RemoveFromCart from "../itemDetail/RemoveFromCart";

const Purcharse = ({ onRemove }) => {

  return (
    <div className="items-center text-center bg-neutral-100 w-fit flex">
      <Link exact='true' to={'/cart'}><button className='p-1 md:p-2 rounded border-2 border-calzate-500 font-semibold text-xl text-calzate-900 bg-calzate-500 hover:bg-calzate-400 hover:shadow-lg'>Comprar</button></Link>
    </div>
  );
}

export default Purcharse;