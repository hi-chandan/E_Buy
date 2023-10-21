import React, { useState } from "react";
import "./Header.css";
import {
  FaFacebookSquare,
  // FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/react.svg";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const searchSubmitHandler = (e) => {
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img src={logo} alt="" />
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <div className="mobilenav">
              <li>
                <NavLink to="/cart">
                  <BsFillCartCheckFill size={35} className="cart" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <FaCircleUser size={35} className="cart" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/orders">
                  <FaYoutubeSquare size={30} className="youtube" />
                </NavLink>
              </li>
            </div>

            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">products</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
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
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <NavLink to="/cart">
                <BsFillCartCheckFill size={35} className="cart" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <FaCircleUser size={35} className="cart" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders">
                <FaYoutubeSquare size={30} className="youtube" />
              </NavLink>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
