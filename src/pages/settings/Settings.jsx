import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./settings.css";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.photoPicture = filename;
      try {
        axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
    } catch (error) {}
  };

  return (
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsUpateTitle"> Update your account</span>
      </div>
      <div className="settingsFromWrapper">
        <form action="" className="settingsfrom" onSubmit={handleSubmit}>
          <div className="settingsInputWrapper img">
            <img
              src={file ? URL.createObjectURL(file) : user.profilePicture}
              alt=""
            />
            <label className="settingsImgInputLabel" htmlFor="uploadPP">
              {" "}
              Upload new profile picture{" "}
              <i className=" settingsIcon fa-solid fa-upload"></i>
            </label>
            <input
              type="file"
              name=""
              id="uploadPP"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="settingsInputWrapper">
            <label className="settingsInputLabel" htmlFor="name">
              Username
            </label>
            <input
              className="settingsInput"
              placeholder={user.username}
              type="text"
              name=""
              id="name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="settingsInputWrapper">
            <label className="settingsInputLabel" htmlFor="name">
              Email
            </label>
            <input
              className="settingsInput"
              type="email"
              placeholder={user.email}
              name=""
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="settingsInputWrapper">
            <label className="settingsInputLabel" htmlFor="password">
              Password
            </label>
            <input
              className="settingsInput"
              type="password"
              name=""
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="settingsUpadateBtnWrapper">
            <button type="submit">Update</button>
            {success && <p>Profile has been updated...</p>}
          </div>
        </form>
        <div className="deleteTitle">
          <span className="settingsDeleteTitle">
            {" "}
            <i className="fa-solid fa-trash"></i> Delete your account
          </span>
        </div>
      </div>
    </div>
  );
}
