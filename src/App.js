import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  ErrorPage,
  CartPage,
  CheckoutPage,
  AuthWrapper,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/products/:id">
            <SingleProductPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <PrivateRoute path="/checkout">
            <CheckoutPage />
          </PrivateRoute>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
