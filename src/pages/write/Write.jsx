import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [descrption, setDescrption] = useState("");
  const [file, setFile] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      descrption,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="writeWrapper">
      <form action="" className="writeFrom" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <div className="writeImgWrapper">
            {file && (
              <img
                className="writeImg"
                src={URL.createObjectURL(file)}
                alt=""
              />
            )}
          </div>

          <div className="uploadWrapper">
            <label htmlFor="fileInput">
              {" "}
              <i className="writeIcon fa-solid fa-upload"> </i>
            </label>
            <input
              type="file"
              id="fileInput"
              className="writeFileInput"
              style={{ display: "block" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <input
            type="text"
            id=""
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div>
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              onChange={(e) => setDescrption(e.target.value)}
            ></textarea>
          </div>
          <div className="writeBtnWrapper">
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
