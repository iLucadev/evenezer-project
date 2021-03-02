import { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase/index";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  /*  useEffect(() => {
    fetch("https://ecommercegaminghub.herokuapp.com/products/")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.results);
        setLoading(false);
      });
  }, []); */

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

    /*  const categories = db.collection("Categories");

    categories
      .get()
      .then((value) => {
        if (value.size === 0) {
          console.log("there is no results!");
        }

        let aux = value.docs.map((element) => {
          return element.data();
        });
        console.log(aux);
        setCategories(aux);
      })
      .catch((error) => {
        console.log("error at searching items", error);
      })
      .finally(() => {
        setLoading(false);
      }); */
  }, []);

  return (
    <GlobalContext.Provider value={{ categories, products, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
