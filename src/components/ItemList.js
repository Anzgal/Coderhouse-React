import React from "react";
import Item from "./Item";

function ItemList(props) {
  return (
    <section className="max-w-7xl mx-auto mt-6 px-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {props.productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ItemList;
