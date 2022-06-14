import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginPanelWrapper">
        <h1 className="loginTitle">Login</h1>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
          <p className="loginInputLabel">Username</p>
          <input
            type="text"
            className="loginInput"
            name=""
            id="username"
            ref={userRef}
          />{" "}
          <br />
          <p className="loginInputLabel">Password</p>
          <input
            type="password"
            className="loginInput"
            name=""
            id="password"
            ref={passwordRef}
          />{" "}
          <br />
          <div className="loginbtnWrapper">
            <button className="loginbtn" type="submit" disabled={isFetching}>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="loginRegisterbtn">
        <span>If you don't have an account please register here -</span>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
