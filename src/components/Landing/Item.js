import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Item = ({item}) => {
  const [heartClicked, setHeartClicked] = useState(false);

  const clickHeart = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <div className="w-60 mt-4 mx-auto bg-white rounded flex flex-col shadow-md overflow-hidden transition delay-100 hover:scale-[1.1] hover:shadow-2xl hover:z-10">
      <div className="relative border-b border-black ">
        <img className="w-60 h-60 object-cover mx-auto " src={item.imgUrl} alt={item.title} />
        <button className='absolute w-10 h-10 rounded-full right-2 top-2 bg-calzate-400 hover:bg-calzate-500'>
          <FontAwesomeIcon onClick={clickHeart} icon={heartClicked ? faHeart : regularHeart} className='align-middle h-8 w-8 text-calzate-900 z-10' />
        </button>        
      </div>
      <div className="relative font-roboto my-4 mx-4 text-left">
        <span className="text-base italic">{item.brand}</span>
        <h3 className="text-lg font-semibold" >{item.title}</h3>
        <p className="absolute right-0 -top-8 shadow-xl p-1 border border-neutral-600 rounded-md font-bold text-xl tracking-wide text-right text-calzate-900 bg-calzate-400">${item.price}</p>
      </div>
    </div>
  );
}

export default Item;