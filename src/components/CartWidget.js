import React, { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import cartContext from "../storage/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItemsInCart } = useContext(cartContext);

  return (
    <div className="ml-4 flow-root lg:ml-8">
      <Link to="/cart" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-white"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-white">{totalItemsInCart() > 0 ? totalItemsInCart() : 0}</span>
        <span className="sr-only">items in cart, view bag</span>
      </Link>
    </div>
  );
}

export default CartWidget;
