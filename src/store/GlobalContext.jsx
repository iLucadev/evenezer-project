import { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase/index";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setLoading(true);
    //connect to db
    const db = getFirestore();
    //saving the collection reference who we want to take
    const products = db.collection("Products");

    //taking collection data
    products
      .get()
      .then((value) => {
        if (value.size === 0) {
          console.log("there is no results!");
        }
        let aux = value.docs.map((element) => {
          return element.data();
        });
        setProducts(aux);
      })
      .catch((error) => {
        console.log("error at searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });

    //saving the collection reference who we want to take
    const categories = db.collection("Categories");

    //taking collection data
    categories
      .get()
      .then((value) => {
        if (value.size === 0) {
          console.log("there is no results!");
        }

        let aux = value.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });

        setCategories(aux);
      })
      .catch((error) => {
        console.log("error at searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ products, loading, categories, cartLength, setCartLength }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
