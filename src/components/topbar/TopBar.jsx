import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css";

function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topCenterList">
          <li>
            {" "}
            <Link className="link" to="/">
              {" "}
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/">
              {" "}
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/write">
              {" "}
              Write
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/">
              {" "}
              Contact
            </Link>
          </li>
          <li onClick={handleLogout}> {user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={user.profilePicture}
              alt="profilePicture"
            />
          </Link>
        ) : (
          <>
            <Link className="link" to="/login">
              {" "}
              Login
            </Link>
            <Link className="link " to="/register">
              {" "}
              Register
            </Link>
          </>
        )}
        <i className="topIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
