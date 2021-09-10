import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/cart";
import Header from "./components/header/Header";
import ProductDetailed from "./components/productDetailed/productDetailed";
import Products from "./components/products/products";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Products} />
          <Route exact path="/products/:id" component={ProductDetailed} />
          <Route
            path=""
            component={() => (
              <h1 style={{ textAlign: "center" }}>404 Page not found</h1>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
