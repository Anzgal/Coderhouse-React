import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);

  const { cart, addToCart } = useContext(cartContext);

  let itemInCart = cart.find((item) => product.id === item.id);
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.count;

  function onAddToCart(count) {
    const itemForCart = {
      ...product,
      count,
    };

    addToCart(itemForCart);
    setIsInCart(true);
  }

  return (
    <div className="max-w-7xl mx-auto mt-8 px-5">
      <div className="flex justify-center">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="mt-4">
        <h2 className="font-bold">{product.title}</h2>
        <p className="font-light">{product.description}</p>
        <h4 className="font-black">$ {product.price}</h4>
      </div>
      {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={stock}
        />
      ) : (
        <div className="flex flex-col">
          <Link to="/cart">
            <button className="bg-red-400 p-2 rounded-md mt-4">
              Ir al Carrito
            </button>
          </Link>
          <Link to="/">
            <button className="bg-amber-400 p-2 rounded-md mt-4 max-w-max mx-auto">
              Volver al catálogo
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
