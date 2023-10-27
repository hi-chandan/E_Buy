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
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import ResetPassword from "./component/User/ResetPassword.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Shipping from "./component/Cart/Shipping";
import axios from "axios";
import Payment from "./component/Cart/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.jsx";
import Myorders from "./component/Order/MyOrders";
import ProtectedRoute from "./component/Routers/ProtectRouts";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/admin/Dashboard.jsx";
import NewProduct from "./component/admin/NewProduct";
function App() {
  const { isAuthenticated, user } = useSelector((state) => {
    return state.user;
  });
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log("data...strip..", data);
    setStripeApiKey(data.stripeApiKey);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());

    getStripeApiKey();
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
        <Route
          path="/me/update"
          element={<ProtectAPI Component={UpdateProfile} />}
        />
        <Route
          path="/password/update"
          element={<ProtectAPI Component={UpdatePassword} />}
        />
        <Route path="/password/forgot" Component={ForgotPassword} />
        <Route path="/products/:keyword" Component={Products} />
        <Route path="/password/reset/:token" Component={ResetPassword} />
        <Route path="/login" Component={LoginSignUp} />
        <Route path="/search" Component={Search} />
        <Route path="/cart" Component={Cart} />
        <Route
          path="/login/shipping"
          element={<ProtectAPI Component={Shipping} />}
        />
        <Route
          path="/order/confirm"
          element={<ProtectAPI Component={ConfirmOrder} />}
        />
        <Route
          path="/success"
          element={<ProtectAPI Component={OrderSuccess} />}
        />
        <Route element={<ProtectedRoute />}>
          <Route extact path="/orders" element={<Myorders />} />
          <Route extact path="/orders/:id" element={<OrderDetails />} />
        </Route>
        <Route extact path="/admin/dashboard" element={<Dashboard />} />
        <Route extact path="/admin/product" element={<NewProduct />} />
        {stripeApiKey && (
          <Route
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectAPI Component={Payment} />
              </Elements>
            }
          />
        )}
        // Testing the protected router // finish the test
      </Routes>
      <Footer />
    </>
  );
}

export default App;
