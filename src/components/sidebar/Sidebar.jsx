import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setcats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setcats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="siderbarItem">
        <span className="siderbarTitle">About Me</span>
        <img
          src="https://cdn.pixabay.com/photo/2017/05/29/20/59/womens-2354905_960_720.jpg"
          alt="siderBar Img"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          sequi veniam molestiae suscipit explicabo facilis inventore mollitia
          at omnis magni, dolor culpa, natus quis, nam ad aspernatur non
          distinctio doloremque!
        </p>
        <span className="siderbarTitle">Categories</span>

        <ul className="siderbarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="siderbarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>

        <span className="siderbarTitle">Follow Us</span>

        <div className="sidebarIcons">
          <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
