import { useState } from "react";
import Header from "./component/layout/Header/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/product/ProductDetails";
import Products from "./component/product/Products";
import Search from "./component/product/Search.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route extact path="/product/:id" Component={ProductDetails} />
        <Route extact path="/products" Component={Products} />
        <Route path="/products/:keyword" Component={Products} />

        <Route path="/search" Component={Search} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
