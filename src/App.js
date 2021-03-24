/*----------------------------------- Imports -----------------------------------*/
//DOM
import logo from "./logo.svg";

//React
import { Component } from "react";

//Assets
import "./assets/tailwind.css";
import "./styles/App.css";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Containers
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";
import AboutContainer from "./containers/AboutContainer";
import CartContainer from "./containers/CartContainer";
import CheckoutContainer from "./containers/CheckoutContainer";
import UserContainer from "./containers/UserContainer";
import ContactContainer from "./containers/ContactContainer";

//React Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Context
import { GlobalContext, GlobalProvider } from "./store/GlobalContext";
import { CartContext, CartProvider } from "./store/CartContext";

/*--------------------------------- Aplication ----------------------------------*/

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <CartProvider>
            <Route exact path="/" component={HomeContainer} />

            <Route
              exact
              path="/category/:categoryId"
              component={ProductsContainer}
            />

            <Route
              exact
              path="/items/:itemId"
              component={ProductDetailContainer}
            />

            <Route exact path="/cart" component={CartContainer} />

            <Route exact path="/checkout" component={CheckoutContainer} />

            <Route exact path="/user/:username" component={UserContainer} />
          </CartProvider>
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/contact" component={ContactContainer} />

          <Route path="*" children={<main>Not found</main>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
