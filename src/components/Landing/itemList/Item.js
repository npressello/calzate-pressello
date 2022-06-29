import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Item = ({item}) => {
  const [heartClicked, setHeartClicked] = useState(false);

  const clickHeart = () => {
    setHeartClicked(!heartClicked);
  };

  const convertColor = (color) => {
    switch (color) {
      case "gris":
        return "bg-stone-500";
      case "azul":
        return "bg-blue-500";
      case "negro":
        return "bg-black";
      case "naranja":
        return "bg-orange-500";
      case "amarillo":
        return "bg-yellow-500";
      case "rojo":
        return "bg-red-500";
      case "verde":
        return "bg-green-500";
      case "cielo":
        return "bg-sky-500";
      case "violeta":
        return "bg-violet-500";
      case "rosa":
        return "bg-pink-500";
      case "purpura":
        return "bg-purple-500";
      case "lima":
        return "bg-lime-500";
      default:
        return "bg-black";
    }
  }

  return (
    <div className="relative w-44 md:w-60 2xl:w-72 mt-4 mx-auto bg-white flex flex-col overflow-hidden group">
      <button className='absolute w-10 h-10 rounded-full right-2 top-2 bg-calzate-400 hover:bg-calzate-500 z-10' aria-label='favorite'>
        <FontAwesomeIcon onClick={clickHeart} icon={heartClicked ? faHeart : regularHeart} className='align-middle h-8 w-8 text-calzate-900 z-10' />
      </button>
      <a href="#">
        <div className="border-b border-black overflow-hidden">
          <img className="w-44 h-44 md:w-60 md:h-60 2xl:w-72 2xl:h-72 object-cover mx-auto md:group-hover:scale-[1.1] transition-all delay-100" src={item.imgUrl} alt={item.title} />
        </div>
        <div className="relative font-roboto my-4 mx-4 text-left">
          <span className="text-base italic">{item.brand}</span>
          <h3 className="text-lg font-semibold" >{item.title}</h3>
          <span className="absolute right-0 -top-8 shadow-xl p-1 border border-neutral-600 rounded-md font-bold text-xl tracking-wide text-right text-calzate-900 bg-calzate-400">${item.price}</span>
          <p className='mt-4 italic'>Colores disponibles: </p>
          <ul className='flex'>
            {item.color.map((c, index) => <li key={index} className={`${convertColor(c)} rounded-full w-4 h-4 mr-1`}></li>)}
          </ul>
        </div>
      </a>
    </div>
  );
}

export default Item;