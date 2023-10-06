import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/product/ProductDetails";
import Products from "./component/product/Products";
import Search from "./component/product/Search.jsx";
import LoginSignUp from "./component/User/LoginSignUp";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import Profile from "./component/User/Profile.jsx";
import ProtectAPI from "./component/Routers/ProtectAPI";
function App() {
  const { isAuthenticated, user } = useSelector((state) => {
    return state.user;
  });
  console.log("isAuthenticated...", isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route extact path="/product/:id" Component={ProductDetails} />
        <Route extact path="/products" Component={Products} />

        <Route path="/account" element={<ProtectAPI Component={Profile} />} />

        <Route path="/products/:keyword" Component={Products} />

        <Route path="/login" Component={LoginSignUp} />
        <Route path="/search" Component={Search} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
