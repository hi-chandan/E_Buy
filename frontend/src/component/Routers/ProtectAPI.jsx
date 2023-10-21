import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectAPI = ({ Component }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      return navigate("/login");
    }
  }, [isAuthenticated]);
  return <Fragment>{isAuthenticated && <Component />}</Fragment>;
};

export default ProtectAPI;
