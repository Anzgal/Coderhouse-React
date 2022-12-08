import React, { useContext } from "react";
import { createBuyOrderFirestoreWithStock } from "../../services/firebase";
import cartContext from "../../storage/CartContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import BuyForm from "./BuyForm";

function CartView() {
  const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext);
  const navigate = useNavigate();

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  function createBuyOrder(userData) {
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };

    createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
      clear();
      navigate(`/checkout/${orderId}`);
      Swal.fire({
        title: `Gracias por tu compra`,
        text: `El identificador de tu orden es ${orderId}`,
        icon: "success",
      });
    });
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-left">
        Carrito de compras
      </h1>
      <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cart.map((cartItem) => (
              <li key={cartItem.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={cartItem.thumbnail}
                    alt={cartItem.title}
                    className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link
                            to={"/detalle/" + cartItem.id}
                            className="font-medium text-gray-300 hover:text-gray-400"
                          >
                            {cartItem.title}
                          </Link>
                        </h3>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-100 text-left">
                        $ {cartItem.price}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label
                        htmlFor={`quantity-${cartItem.id}`}
                        className="sr-only"
                      >
                        Quantity, {cartItem.count}
                      </label>
                      <select
                        id={`quantity-${cartItem.id}`}
                        name={`quantity-${cartItem.id}`}
                        value={cartItem.count}
                        disabled={true}
                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select>

                      <div className="absolute top-0 right-0">
                        <button
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => removeItem(cartItem.id)}
                        >
                          <span className="sr-only">Remove</span>x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-2 hover:text-gray-400" type="danger" onClick={clear}>
            Vaciar Carrito
          </button>
        </section>

        <BuyForm onSubmit={createBuyOrder} totalPrice={totalPriceInCart()}/>
      </form>

      {/* {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <img src={cartItem.thumbnail} alt={cartItem.title} />
          <h3>{cartItem.title}</h3>
          <h4>$ {cartItem.price}</h4>
          <h4>Cantidad: {cartItem.count}</h4>
          <h4>Precio a pagar: {cartItem.count * cartItem.price}</h4>
          <button onClick={() => removeItem(cartItem.id)} type="danger">
            X
          </button>
        </div>
      ))} */}

    </div>
  );
}

export default CartView;
