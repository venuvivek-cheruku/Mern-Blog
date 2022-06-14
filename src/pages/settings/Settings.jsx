import React from "react";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsUpateTitle"> Update your account</span>
        
      </div>
      <div className="settingsFromWrapper">
        <form action="" className="settingsfrom">
          <div className="settingsInputWrapper img">
          <img
              src="https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_960_720.jpg"
              alt=""
            />
            <label className="settingsImgInputLabel" htmlFor="uploadPP"> Upload new profile picture <i className=" settingsIcon fa-solid fa-upload"></i></label>
            <input type="file" name="" id="uploadPP" style={{display: "none"}} />
            
          </div>
          <div className="settingsInputWrapper">
            <label className="settingsInputLabel" htmlFor="name">Username</label>
            <input className="settingsInput" type="text" name="" id="name" />
          </div>
          <div className="settingsInputWrapper">
            <label className="settingsInputLabel" htmlFor="name">Email</label>
            <input className="settingsInput" type="email" name="" id="email" />
          </div>
          <div className="settingsInputWrapper">
            <label className="settingsInputLabel" htmlFor="password">Password</label>
            <input className="settingsInput" type="password" name="" id="password" />
          </div>
         
         <div className="settingsUpadateBtnWrapper">
             <button type="submit">Update</button>
         </div>
         
        </form>
        <div className="deleteTitle">
        <span className="settingsDeleteTitle"> <i class="fa-solid fa-trash"></i> Delete your account</span>
        </div>
      </div>
    </div>
  );
}
