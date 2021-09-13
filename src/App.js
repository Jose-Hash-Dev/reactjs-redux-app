import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import CartList from "./Components/Cart/CartList";
import TopNav from "./Components/TopNav/TopNav";
import CheckoutList from "./Components/Checkout/CheckoutList";

initializeIcons();

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:bookId">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <CartList />
        </Route>
        <Route path="/checkout">
          <CheckoutList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
