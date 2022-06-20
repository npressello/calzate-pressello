

const ItemListContainer = (props) => {
  return(
    <div className="container items-center mx-auto mt-10 text-center">
      <h1 className="font-bold">Bienvenido a Calzate, {props.name}</h1>
    </div>
  );  
}

export default ItemListContainer;