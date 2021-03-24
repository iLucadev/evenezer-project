import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase";

const CheckoutContainer = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState();

  useEffect(() => {
    setLoading(true);

    //connect to db
    const db = getFirestore();
    //saving the collection reference who we want to take
    const orders = db.collection("Orders");

    //taking collection data
    orders
      .get()
      .then((value) => {
        if (value.size === 0) {
          console.log("there is no results!");
        }
        let aux = value.docs.map((element) => {
          return element.data();
        });
        console.log(aux);
        setOrders(aux);
      })
      .catch((error) => {
        console.log("error at searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orders]);

  return (
    <main className="container mx-auto py-12 full-width space-y-8 grid grid-cols-2 grid-rows-6">
      <h2 className="flex justify-center font-semibold col-span-2 row-span-1">
        Comprobante
      </h2>
      <section>
        <h2>Código de orden</h2>
        <span></span>
      </section>
    </main>
  );
};

export default CheckoutContainer;
