import { Link } from "react-router-dom";

const GoToCart = () => {

  return(
    <div className="items-center text-center bg-neutral-100 w-fit p-2">
      <Link exact='true' to={'/cart'}><button className='p-2 rounded border-2 border-calzate-500 font-semibold text-xl text-calzate-900 bg-calzate-500 hover:bg-calzate-400 hover:shadow-lg'>Finalizar compra</button></Link>
    </div>
  );  
}

export default GoToCart;