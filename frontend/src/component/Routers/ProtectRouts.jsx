import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route, Routes, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return <Outlet />;
};

export default ProtectedRoute;
