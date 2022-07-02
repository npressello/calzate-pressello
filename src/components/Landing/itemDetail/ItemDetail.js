import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({ item }) => {
  const [sizeIndexClicked, setSizeIndexClicked] = useState(0);
  const [colorIndexClicked, setColorIndexClicked] = useState(0);

  const sizeClicked = (index) => {
    setSizeIndexClicked(index);
  };

  const colorClicked = (index) => {
    setColorIndexClicked(index);
  };

  const color = {
    "gris" : "bg-stone-500",
    "azul" : "bg-blue-500",
    "negro" : "bg-black",
    "naranja" : "bg-orange-500",
    "amarillo" : "bg-yellow-500",
    "rojo" : "bg-red-500",
    "verde" : "bg-green-500",
    "cielo" : "bg-sky-500",
    "violeta" : "bg-violet-500",
    "rosa" : "bg-pink-500",
    "purpura" : "bg-purple-500",
    "lima" : "bg-lime-500",
  }

  return(
    <div className="container font-roboto mx-auto mt-10 flex md:flex-row">
      <div className='ml-auto mr-10 p-10 border border-neutral-400'>
        <img className='w-96 h-96 object-cover' src={ item.imgUrl } alt={ item.title } />
      </div>
      <div className='mr-auto'>
        <h1 className='text-3xl font-medium tracking-widest'>{ item.brand } - { item.title }</h1>
        <p className='my-3 italic'>{ item.description }</p>
        <p className='my-1 text-xs'>Categorías: { item.gender }, { item.brand }</p>
        <p className='text-xs'>SKU: { item.sku }</p>
        <h2 className='my-5 font-semibold text-2xl'>$ { item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") },00</h2>
        <h3>Talle:</h3>
        <ul className='flex'>
          { item.size.map((shoeSize, index) => <li onClick={() => {sizeClicked(index)}} role='button' key={index} className={`${index === sizeIndexClicked ? 'border-calzate-300 border-2 w-7 h-7' : 'border-neutral-700 w-6 h-6'} bg-neutral-100 border rounded-full  mr-1 text-center align-middle`}>{ shoeSize }</li>) }
        </ul>
        <h3 className='mt-3'>Color:</h3>
        <ul className='flex'>
          { item.color.map((c, index) => <li onClick={() => {colorClicked(index)}} role='button' key={index} className={`${ color[c] } ${index === colorIndexClicked ? 'border-calzate-300 border-2 w-7 h-7' : 'border-neutral-700'} rounded-full w-6 h-6 mr-1`}></li>) }
        </ul>
        <h3 className='mt-3'>Stock: <span>{ item.stock } unidades</span></h3>
        <div className='mt-3'>
          <ItemCount initial={1} stock={ item.stock } />
        </div>        
      </div>
    </div>
  );
}

export default ItemDetail;