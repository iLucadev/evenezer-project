import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorage("cart", []);
  const [cart, setCart] = useState(storedCart);

  //Comunicación con el localStorage
  useEffect(() => setStoredCart(cart), [cart]);

  //Añadir elemento al carrito
  const addToCart = (itemToAdd, itemQuantity) => {
    console.log(cart);

    if (isInCart(itemToAdd)) {
      const duplicatedElement = cart.find(
        (element) => element.id == itemToAdd.id
      );

      const actualizedElement = {
        id: duplicatedElement.id,
        name: duplicatedElement.name,
        quantity: (duplicatedElement.quantity += itemQuantity),
      };

      const actualizedCart = cart.filter(
        (element) => element.id !== duplicatedElement.id
      );

      const newCart = [actualizedElement, ...actualizedCart];

      setCart(newCart);
      ///
    } else {
      const newElement = {
        id: itemToAdd.id,
        name: itemToAdd.name,
        quantity: itemQuantity,
      };

      const newCart = [newElement, ...cart];

      setCart(newCart);
    }

    console.log(isInCart(itemToAdd));
  };

  //Validación por duplicación
  const isInCart = (item) => {
    return cart.some((element) => element.id == item.id);
  };

  //Eliminar item del carrito
  const deleteCartItem = (itemToDelete) => {
    const changedCart = cart.filter(
      (element) => element.id !== itemToDelete.id
    );
    setCart(changedCart);
  };

  //Vaciar carrito
  const emptyCart = () => {
    setCart([]);
  };

  //Comprar ya
  const buyNow = (itemToBuy) => {
    setCart([itemToBuy]);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
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
