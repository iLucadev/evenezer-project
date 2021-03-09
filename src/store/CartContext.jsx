import { createContext, useState, useEffect, useContext } from "react";
import { getFirestore } from "../firebase";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalContext } from "./GlobalContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorage("cart", []);
  const [cart, setCart] = useState(storedCart);

  const { loading } = useContext(GlobalContext);

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
  const buyNow = (buyer, cart) => {
    const date = new Date().toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    });

    const buyTotal = cart.reduce((acc, cur) => {
      return acc.price * acc.quantity + cur.price * cur.quantity;
    });

    /* const total =
    cart.length == 0
      ? 0
      : cart.reduce((prev, cur) => {
          return prev + cur.quantity * cur.price;
        }); */

    const newBuy = { buyer: buyer, items: cart, date: date, total: buyTotal };
    console.log(newBuy);

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

  /* const checkOut = async () => {

    let newOrder = {buyer: {name:, email:, phone:}, items: [...cart], total:}
    const db = getFirestore()
    const orders = db.collection("Orders");
    orders.add(newOrder).then((value) => {
      console.log("xd")
    
      orders.doc("").update({total:3000})
    })
  }
 */

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
