import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 className="headerTitleSm">Pharmacy & Health</h1>
        <h1 className="headerTitleLg"> Blog</h1>
      </div>

      <img
        className="headerImg"
        // src=" https://cdn.pixabay.com/photo/2019/05/04/22/59/vitamins-4179315_960_720.jpg"
        src="https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715_960_720.jpg"
        alt="headerImg"
      />
    </div>
  );
}
