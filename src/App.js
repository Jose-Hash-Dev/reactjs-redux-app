import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import CartList from "./Components/Cart/CartList";
import TopNav from "./Components/TopNav/TopNav";
import CheckoutList from "./Components/Checkout/CheckoutList";
import OrderList from "./Components/Order/OrderList";
import { routes } from "./Routes/Routes";

initializeIcons();

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home}>
          <TopNav isBackUsed={true} />
          <ProductList />
        </Route>
        <Route path="/product/:bookId">
          <TopNav isBackUsed={true} />
          <ProductDetail />
        </Route>
        <Route path={routes.cart}>
          <TopNav isBackUsed={true} />
          <CartList />
        </Route>
        <Route path={routes.checkout}>
          <TopNav isBackUsed={true} />
          <CheckoutList />
        </Route>
        <Route exact path={routes.order}>
          <TopNav isBackUsed={true} />
          <OrderList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
