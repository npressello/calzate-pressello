import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import GoToCart from './GoToCart';
import { context } from '../../../context/CartContext';

const ItemDetail = ({ item, addItemToCart }) => {
  const [sizeIndexClicked, setSizeIndexClicked] = useState(0);
  const [colorIndexClicked, setColorIndexClicked] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const sizeClicked = (index) => {
    setSizeIndexClicked(index);
  };

  const colorClicked = (index) => {
    setColorIndexClicked(index);
  };

  const onAddItem = (quantity) => {
    // Las siguientes dos lineas son para el desafio
    setItemQuantity(itemQuantity + quantity);
    setAddedToCart(true);

    // Esto es algo extra que hice para visualizar el nuevo valor en el icono del carrito en CartWidget
    addItemToCart(quantity, item, sizeIndexClicked, colorIndexClicked);
  }

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
    <div className="container font-roboto mx-auto my-10 flex flex-col md:flex-row">
      <div className='ml-auto mr-auto md:mr-10 md:p-10 md:border md:border-neutral-400'>
        <img className='w-96 h-96 object-cover' src={item.imgUrl} alt={item.title} />
      </div>
      <div className='text-center md:text-left md:ml-2 md:mr-auto'>
        <h1 className='text-3xl font-medium tracking-widest'>{item.brand} - {item.title}</h1>
        <p className='my-3 italic'>{item.description}</p>
        <p className='my-1 text-xs'>Categorías: {item.gender}, {item.brand}</p>
        <p className='text-xs'>SKU: {item.sku}</p>
        <h2 className='my-5 font-semibold text-2xl'>$ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</h2>
        <div className='flex mb-6 mx-2 md:mx-0 md:block justify-around '>
          <div className='w-1/2 sm:w-auto'>
            <h3>Talle:</h3>
            <ul className='flex flex-wrap'>
              {item.size.map((shoeSize, index) => <li onClick={() => { sizeClicked(index) }} role='button' key={index} className={`${index === sizeIndexClicked ? 'border-calzate-300 border-2 w-7 h-7' : 'border-neutral-700 w-6 h-6'} bg-neutral-100 border rounded-full  mr-1 mb-1 text-center align-middle`}>{shoeSize}</li>)}
            </ul>
            <h3 className='mt-3'>Color:</h3>
            <ul className='flex flex-wrap'>
              {item.color.map((c, index) => <li onClick={() => { colorClicked(index) }} role='button' key={index} className={`${color[c]} ${index === colorIndexClicked ? 'border-calzate-300 border-2 w-7 h-7' : 'border-neutral-700'} rounded-full w-6 h-6 mr-1`}></li>)}
            </ul>
          </div>
          <div className='w-1/2 sm:w-auto md:mt-3'>
            <h3 className='md:mt-3'>Stock: <span>{item.stock} {item.stock === 1 ? 'unidad' : 'unidades'}</span></h3>
            {addedToCart ? <GoToCart /> : <ItemCount onAdd={onAddItem} initial={1} stock={item.stock} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;