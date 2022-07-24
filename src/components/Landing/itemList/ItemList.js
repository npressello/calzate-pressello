import Item from "./Item";
import { useEffect, useState } from "react";
import ItemSkeleton from "./ItemSkeleton";

const ItemList = ({ items, loaded }) => {

  return (
    <div className="container mx-auto gap-x-0.5 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {loaded ?
        items.map((prod, index) => <Item key={index} item={prod} />) :
        [...Array(10)].map((e, i) => <ItemSkeleton key={i} />)
      }
    </div>
  );
}

export default ItemList;