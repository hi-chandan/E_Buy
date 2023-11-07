import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route, Routes, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role === "user") {
      navigate("/login");
      return;
    }
  }, [user.role]);

  return <Outlet />;
};

export default ProtectedRoute;
