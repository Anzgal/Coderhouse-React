//1. Importamos el hook de Ciclo de Vida
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite bg-red-600" : "card-favicon";

  let urlDetail = `/detalle/${product.id}`;

  return (



    <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        </div>
        <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-300">
            <Link to={urlDetail}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
            </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-200">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-100">${product.price}</p>
        </div>
    </div>







/*     <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        ♥
      </button>
      <div className="card-img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Link to={urlDetail}>
        <button>Ver más!</button>
      </Link>
    </div> */
  );
}

export default Item;
