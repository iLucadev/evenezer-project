import logo from "./logo.svg";
import { Component } from "react";
import "./assets/tailwind.css";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";
import AboutContainer from "./containers/AboutContainer";
import CartContainer from "./containers/CartContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>

        <Route exact path="/categories">
          <ProductsContainer />
        </Route>

        <Route exact path="/category/:categoryId">
          <ProductsContainer />
        </Route>

        <Route exact path="/item/:id">
          <ProductDetailContainer />
        </Route>

        <Route exact path="/about">
          <AboutContainer />
        </Route>

        <Route exact path="/cart">
          <CartContainer />
        </Route>

        <Route path="*" children={<main>Not found</main>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
