import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import "./App.scss";
import TopNav from "./Components/TopNav/TopNav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
