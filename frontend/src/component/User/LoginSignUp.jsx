import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loder";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { login, register, clearErrors } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate, useLocation } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useFormik } from "formik";
import { signupSchema } from "./userValidation";
const LoginSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useAlert();

  const { error, isAuthenticated } = useSelector((state) => {
    return state.user;
  });

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [avatar, setAvatar] = useState("/user.png");
  const [avatarPreview, setAvatarPreview] = useState("/user.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const initialvalues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };

  const {
    values,
    errors,
    handleChange,
    setFieldValue,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: initialvalues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },

    // Dispatch your action or perform other logic here
  });

  const redirect = location.search ? location.search.split("=")[1] : "/account";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, alert, isAuthenticated, redirect]);

  const registersubmit = (e) => {
    e.preventDefault();
  };
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <MetaData title="LOGIN & SIGUP" />
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            // encType="multipart/form-data"
            // onSubmit={registerSubmit}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="signUpName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.name && touched.name ? (
              <p className="fromerror">{errors.name}</p>
            ) : null}

            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={values.email}
                // onChange={registerDataChange}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && touched.email ? (
              <p className="fromerror">{errors.email}</p>
            ) : null}

            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={values.password}
                // onChange={registerDataChange}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.password && touched.password ? (
              <p className="fromerror">{errors.password}</p>
            ) : null}
            <div id="registerImage">
              <img src={avatar} alt="avatar " />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={(e) => {
                  let reader = new FileReader();
                  reader.onload = () => {
                    if (reader.readyState === 2) {
                      setFieldValue("avatar", reader.result);
                      setAvatar(reader.result);
                    }
                  };
                  reader.readAsDataURL(e.target.files[0]);
                }}
                onBlur={handleBlur}
              />
            </div>
            {<p className="fromerror">{errors.avatar}</p>}

            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
