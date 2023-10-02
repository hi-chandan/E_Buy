import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <nav class="navbar navbar-expand-lg  ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" srcset="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" aria-current="page" className="nav-link active">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/products" className="nav-link active">
                products
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" className="nav-link active">
                Login
              </Link>
            </li>

            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form class="d-flex " role="search" onSubmit={searchSubmitHandler}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
