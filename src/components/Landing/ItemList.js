import Item from "./Item";

const ItemList = () => {

  const importAll = (r) => {
    let img = {};
    r.keys().map((item, index) => { img[item.replace('./', '').replace('.jpg', '')] = r(item); });
    return img;
  }

  const images = importAll(require.context('../../assets/images/products', false, /\.(png|jpe?g|svg)$/));

  const product = [
    {
      id: '00',
      brand: 'Nike',
      title: 'Max F4',
      description: 'Zapatillas Nike elegante para hombre',
      size: [38, 39, 40, 41, 42],
      score: '4.5',
      color: ['Gris', 'Azul', 'Negro'],
      price: 12999,
      imgUrl: images['00']
    }, {
      id: '01',
      brand: 'Nike',
      title: 'Runner Z8',
      description: 'Zapatillas Nike deportivas para hombre y mujer',
      size: [38, 39, 40, 41, 42],
      score: '4.2',
      color: ['Naranja', 'Azul', 'Negro'],
      price: 15999,
      imgUrl: images['01']
    },
    {
      id: '02',
      brand: 'Andina',
      title: 'Terrain',
      description: 'Zapatillas Andina deportivas para Mujer',
      size: [38, 39, 40, 41, 42],
      score: '2.7',
      color: ['Amarilla'],
      price: 8999,
      imgUrl: images['02']
    },
    {
      id: '03',
      brand: 'Scandinavian',
      title: 'Street Blue',
      description: 'Zapatillas Scandinavian deportivas para hombre',
      size: [38, 39, 40, 41, 42],
      score: '4.5',
      color: ['Azul'],
      price: 4699,
      imgUrl: images['03']
    }
  ];


  return(
    <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Item item={product[0]} />
      <Item item={product[1]} />
      <Item item={product[2]} />
      <Item item={product[3]} />
      <Item item={product[0]} />
      <Item item={product[1]} />
      <Item item={product[2]} />
      <Item item={product[3]} />
      <Item item={product[0]} />
      <Item item={product[1]} />
      <Item item={product[2]} />
      <Item item={product[3]} />
      <Item item={product[0]} />
      <Item item={product[1]} />
      <Item item={product[2]} />
      <Item item={product[3]} />
      <Item item={product[0]} />
      <Item item={product[1]} />
      <Item item={product[2]} />
      <Item item={product[3]} />
    </div>
  );
}

export default ItemList;