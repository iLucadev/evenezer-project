import { createContext, useState, useEffect, useContext } from "react";
import { getFirestore } from "../firebase";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalContext } from "./GlobalContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorage("cart", []);
  const [cart, setCart] = useState(storedCart);

  const { loading, setCartLength } = useContext(GlobalContext);

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
        price: itemToAdd.price,
      };

      const newCart = [newElement, ...cart];

      setCart(newCart);
    }
  };

  //Detectar cantidad de elementos

  useEffect(() => setCartLength(cart.length), [cart]);

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
  const buyNow = (buyer, cart) => {
    const date = new Date().toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    });

    const buyTotal = cart.reduce((acc, cur) => {
      return acc.price * acc.quantity + cur.price * cur.quantity;
    });

    const newBuy = { buyer: buyer, items: cart, date: date, total: buyTotal };
    emptyCart();
    checkOut(newBuy);
  };

  //Finalizar compra
  const checkOut = async (buyOrder) => {
    if (!loading) {
      const db = getFirestore();

      const ordersCollection = db.collection("Orders");
      ordersCollection.add(buyOrder).then(() => console.log("exito"));
    }
  };

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
