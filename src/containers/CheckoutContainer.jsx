import React, { useContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import { CartContext } from "../store/CartContext";

const CheckoutContainer = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const { orderInfo, deleteBuyInfo } = useContext(CartContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
          return { ...element.data(), id: element.id };
        });
        setOrders(aux);
      })
      .catch((error) => {
        console.log("error at searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [ourOrder, setOurOrder] = useState();

  useEffect(() => {
    console.log(orders);
    console.log(orderInfo);
    const ourOrderIs = orders.find((order) => order.date == orderInfo.date);
    setOurOrder(ourOrderIs);
  }, [orders]);

  return (
    <main className="container mx-auto py-12 full-width space-y-10">
      <h2 className="flex justify-center font-semibold col-span-2 row-span-1">
        Comprobante
      </h2>
      <section className="space-y-6">
        <h3 className="font-semibold">Código de orden</h3>
        <span className="font-bold">{ourOrder.id}</span>
        <h4 className="font-semibold">Items</h4>
        {ourOrder.items.map((item) => {
          return (
            <span>
              {item.name}, X{item.quantity}
            </span>
          );
        })}

        <h4 className="font-semibold">Nombre</h4>
        <span>{ourOrder.buyer.name}</span>
        <h4 className="font-semibold">Email</h4>
        <span>{ourOrder.buyer.email}</span>
        <h4 className="font-semibold">Teléfono</h4>
        <span>{ourOrder.buyer.phone}</span>
        <h4 className="font-semibold">Monto Total</h4>
        <span>{formatter.format(ourOrder.total)}</span>
      </section>

      <button type="button" onClick={() => deleteBuyInfo()}>
        X
      </button>
    </main>
  );
};

export default CheckoutContainer;
