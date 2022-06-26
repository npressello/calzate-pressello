

const Item = ({item}) => {

  return (
    <div className="w-44 mt-4 bg-white rounded overflow-hidden flex flex-col">
      <div>
        <img className="w-44 h-44 object-cover mx-auto " src={item.imgUrl} alt={item.title} />
      </div>
      <div className="my-2 mx-2 text-left">
        <h3 className="font-roboto" >{item.title}</h3>
        <p className="font-bold text-xl tracking-wide	text-right text-calzate-200">${item.price}</p>
      </div>
    </div>
  );
}

export default Item;