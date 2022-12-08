import { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(itemData) {
    let itemFound = cart.find((itemInCart) => itemInCart.id === itemData.id);

    if (itemFound) {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart.id === itemData.id) {
          itemInCart.count += itemData.count;
          return itemInCart;
        } else {
          return itemInCart;
        }
      });

      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.push(itemData);
      setCart(newCart);
    }
  }

  function totalItemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function totalPriceInCart() {
    let totalPrice = 0;
    cart.forEach((itemInCart) => {
      totalPrice = totalPrice + itemInCart.count * itemInCart.price;
    });
    return totalPrice;
  }

  function removeItem(itemId) {
    console.log("Removiendo el item", itemId);
    let newCart = [...cart];

    //newCart.filter(item => item.id !== itemId);

    newCart = newCart.filter(function( item ) {
        return item.id !== itemId;
    });
    console.log("REMOVIENDO NEWCART", newCart);
    setCart(newCart);
  }

  function clear() {
    setCart([]);
  }

  const value = {
    cart,
    addToCart,
    totalItemsInCart,
    removeItem,
    totalPriceInCart,
    clear,
  };

  //3.Creamos el "value" para los componentes que consuman el context

  return (
    //4. retornamos el Context Provider con el value creado
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;
