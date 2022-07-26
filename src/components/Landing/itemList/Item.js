import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../../context/CartContext';

const Item = ({ item }) => {
  const { isInCart } = useContext(context);
  const [heartClicked, setHeartClicked] = useState(false);

  const clickHeart = () => {
    setHeartClicked(!heartClicked);
  };

  const color = {
    "gris": "bg-stone-500",
    "azul": "bg-blue-500",
    "negro": "bg-black",
    "naranja": "bg-orange-500",
    "amarillo": "bg-yellow-500",
    "rojo": "bg-red-500",
    "verde": "bg-green-500",
    "cielo": "bg-sky-500",
    "violeta": "bg-violet-500",
    "rosa": "bg-pink-500",
    "purpura": "bg-purple-500",
    "lima": "bg-lime-500",
  }

  return (
    <div className="relative w-44 md:w-60 2xl:w-72 mt-4 mx-auto bg-white flex flex-col overflow-hidden group shadow-md hover:shadow-xl transition-all">
      <button className={`absolute w-10 h-10 rounded-full right-2 top-2 bg-calzate-900 hover:bg-calzate-800 z-10 ${heartClicked ? 'opacity-100' : 'opacity-50'}`} aria-label='favorite'>
        <FontAwesomeIcon onClick={clickHeart} icon={heartClicked ? faHeart : regularHeart} className='align-middle h-5 w-5 text-calzate-300 z-10' />
      </button>
      <Link exact='true' to={`/item/${item.id}`}>
        <div className="relative border-b border-black overflow-hidden">
          <img className="w-44 h-44 md:w-60 md:h-60 2xl:w-72 2xl:h-72 object-cover mx-auto md:group-hover:scale-[1.1] transition-all delay-100" src={item.imgUrl} alt={item.title} />
          {isInCart(item.id) &&
            <div className='absolute top-1/4 w-full h-1/2 bg-neutral-900 opacity-75 flex items-center'>
              <h3 className='mx-auto text-neutral-100 text-xl'>AGREGADO AL CARRITO</h3>
            </div>
          }
        </div>
        <div className="relative font-roboto my-4 mx-4 text-left">
          <span className="text-base italic">{item.brand}</span>
          <h3 className="text-lg font-semibold" >{item.title}</h3>
          <span className="absolute right-0 -top-8 shadow-xl p-1 border border-neutral-600 rounded-md font-bold text-xl tracking-wide text-right text-calzate-900 bg-calzate-400">${item.price}</span>
          <p className='mt-4 italic'>Colores disponibles: </p>
          <ul className='flex'>
            {item.color.map((c, index) => <li key={index} className={`${color[c]} rounded-full w-4 h-4 mr-1`}></li>)}
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default Item;