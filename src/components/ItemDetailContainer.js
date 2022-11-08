import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../mockService/mockService";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => alert(error));
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto mt-8 px-5">
      <div className="flex justify-center">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="mt-4">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
