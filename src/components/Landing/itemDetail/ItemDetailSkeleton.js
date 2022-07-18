const ItemDetail = () => {

  return (
    <div className="container mx-auto my-10 flex flex-col md:flex-row">
      <div className='ml-auto mr-auto md:mr-10 md:p-10 md:border md:border-neutral-400'>
        <div className="w-96 h-96 bg-neutral-500"></div>
      </div>
      <div className='mx-auto md:ml-2 md:mr-auto'>
        <h1 className='bg-neutral-400 w-56 h-10 mx-auto md:mx-0'></h1>
        <p className='bg-neutral-400 w-64 h-4 my-3'></p>
        <p className='bg-neutral-400 w-44 h-2 mx-auto md:mx-0 my-1'></p>
        <p className='bg-neutral-400 w-44 h-2 mx-auto md:mx-0 my-1'></p>
        <h2 className='bg-neutral-400 w-36 h-8 mx-auto md:mx-0 my-5'></h2>
        <div className='flex mb-6 mx-2 md:mx-0 md:block justify-around '>
          <div className='w-1/2 sm:w-auto'>
            <h3 className="bg-neutral-400 w-16 h-4 my-3"></h3>
            <ul className='flex flex-wrap'>
              <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
              <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
              <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
            </ul>
            <h3 className='bg-neutral-400 w-16 h-4 my-3'></h3>
            <ul className='flex flex-wrap'>
              <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
              <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
              <li className="w-4 h-4 mr-1 rounded-full bg-neutral-400"></li>
            </ul>
          </div>
          <div className='w-1/2 sm:w-auto md:mt-3'>
            <h3 className='bg-neutral-400 w-16 h-4 my-3 md:mt-3'></h3>
            <div className="bg-neutral-400 w-44 h-24 my-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;