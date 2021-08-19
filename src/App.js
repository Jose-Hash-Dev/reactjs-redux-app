import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import CartList from "./Components/Cart/CartList";
import TopNav from "./Components/TopNav/TopNav";
import { connect } from "react-redux";

initializeIcons();

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route path="/products/:bookId">
          <ProductDetail />
        </Route>
        <Route>
          <CartList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
