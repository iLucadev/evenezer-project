import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    console.log(cart.some((product) => product.item == id));
    return cart.some((product) => product.id == id);
  };

  const addToCart = (itemToAdd, itemQuantity) => {
    if (isInCart(itemToAdd)) {
      cart.find((element) => (element.quantity += itemQuantity));
    } else {
      setCart([
        ...cart,
        {
          item: itemToAdd,
          quantity: itemQuantity,
        },
      ]);
    }
  };

  const deleteCartItem = () => {};

  const emptyCart = () => {};

  const buyNow = () => {}; ///

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        deleteCartItem,
        emptyCart,
        buyNow,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
