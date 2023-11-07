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
import ProductList from "./component/admin/ProductList";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList";
import ProcessOrder from "./component/admin/ProcessOrder";
import UsersList from "./component/admin/UserList.jsx";
import UpdateUser from "./component/admin/UpdateUser.jsx";
import NotFound from "./component/layout/Nofound/Notfound.jsx";
function App() {
  const { isAuthenticated, user } = useSelector((state) => {
    return state.user;
  });
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
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
        <Route path="/password/forgot" Component={ForgotPassword} />
        <Route path="/products/:keyword" Component={Products} />
        <Route path="/password/reset/:token" Component={ResetPassword} />
        <Route path="/login" Component={LoginSignUp} />
        <Route path="/search" Component={Search} />
        <Route path="/cart" Component={Cart} />
        <Route path="/account" element={<ProtectAPI Component={Profile} />} />
        <Route
          path="/me/update"
          element={<ProtectAPI Component={UpdateProfile} />}
        />
        <Route
          path="/password/update"
          element={<ProtectAPI Component={UpdatePassword} />}
        />
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
        <Route extact path="/orders" element={<Myorders />} />
        <Route extact path="/orders/:id" element={<OrderDetails />} />
        <Route element={<ProtectedRoute />}>
          <Route extact path="/admin/dashboard" element={<Dashboard />} />
          <Route extact path="/admin/product" element={<NewProduct />} />
          <Route extact path="/admin/products" element={<ProductList />} />
          <Route
            extact
            path="/admin/product/:url"
            element={<UpdateProduct />}
          />
          <Route extact path="/admin/orders" element={<OrderList />} />
          <Route extact path="/admin/order/:id" element={<ProcessOrder />} />
          <Route extact path="/admin/users" element={<UsersList />} />
          <Route extact path="/admin/user/:id" element={<UpdateUser />} />
        </Route>
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

        {/* page not found or wrong url */}

        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
