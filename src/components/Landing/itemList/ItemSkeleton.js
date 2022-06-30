

const ItemSkeleton = () => {

  return(
    <div className="relative w-44 md:w-60 2xl:w-72 mt-4 mx-auto bg-neutral-700 flex flex-col">
      <div className="w-44 h-44 md:w-60 md:h-60 2xl:w-72 2xl:h-72 border border-white bg-neutral-600">
      </div>
      <div className="relative my-4 mx-4">
        <p className="w-16 h-4 rounded bg-neutral-400"></p>
        <h3 className="w-24 h-6 mt-4 rounded bg-neutral-400" ></h3>
        <span className="w-16 h-8 absolute right-0 -top-8 p-1 border border-neutral-600 rounded-md bg-neutral-400"></span>
        <p className='h-4 mt-4 rounded bg-neutral-400'></p>
        <ul className='flex mt-4'>
          <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
          <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
          <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
        </ul>
      </div>
    </div>
  );
};

export default ItemSkeleton;