import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecommercegaminghub.herokuapp.com/products/")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.results);
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ products, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
