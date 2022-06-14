import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerPanelWrapper">
        <h1 className="registerTitle">Register</h1>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
          <p className="registerInputLabel">Username</p>
          <input
            type="text"
            className="registerInput"
            name=""
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <p className="registerInputLabel">Email</p>
          <input
            type="email"
            className="registerInput"
            name=""
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <p className="registerInputLabel">Password</p>
          <input
            type="password"
            className="registerInput"
            name=""
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <div className="registerbtnWrapper">
            <button className="registerbtn" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="registerRegisterbtn">
        <span>If you have an account please login here -</span>
        <Link to="/login">
          <button>Login</button>
        </Link>
        {error && (
          <div
            style={{
              color: "red",
              textAlign: "center",
              fontFamily: "lora",
              marginTop: "2rem",
              fontSize: "1rem",
            }}
          >
            {" "}
            Something went wrong{" "}
          </div>
        )}
      </div>
    </div>
  );
}
