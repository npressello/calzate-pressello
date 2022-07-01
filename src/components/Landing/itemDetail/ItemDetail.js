import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

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
    <div className=" mx-auto mt-10 text-center flex md:flex-row">
      <div>
        <img src={ item.imgUrl } alt={ item.title } />
      </div>
      <div>
        <h1>{ item.brand } - { item.title }</h1>
        <span>SKU: 12341241241</span>
        <h2>$ { item.price }</h2>
        <h3>Talle:</h3>
        <ul>
          { item.size.map((shoeSize, index) => <li key={index} className='rounded-full w-4 h-4 mr-1'>{ shoeSize }</li>) }
        </ul>
        <h3>Color:</h3>
        <ul>
          { item.color.map((c, index) => <li key={index} className={`${ color[c] } rounded-full w-4 h-4 mr-1`}></li>) }
        </ul>
        <h3>Stock: <span>{ item.stock } unidades</span></h3>
        <ItemCount initial={1} stock={ item.stock } />
      </div>
    </div>
  );
}

export default ItemDetail;