import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [descrption, setDescrption] = useState("");
  const [updateMode, setUpdateMode] = useState("");

  const { user } = useContext(Context);

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescrption(res.data.descrption);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        descrption,
      });
      // window.location.reload("/");
      setUpdateMode(false);
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">{title}</h1>
        )}

        {post.username === user?.username && (
          <div className="singlePostEdit">
            <i
              className=" singlePostIcon fa-solid fa-pen-to-square"
              onClick={() => setUpdateMode(true)}
            ></i>
            <i
              className=" singlePostIcon fa-solid fa-trash-can"
              onClick={handleDelete}
            ></i>
          </div>
        )}

        <div className="singlePostAuthor">
          <span>
            Author:{" "}
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>{" "}
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>

        {updateMode ? (
          <textarea
            value={descrption}
            onChange={(e) => setDescrption(e.target.value)}
          />
        ) : (
          <div className="singlePostContent">
            <p>{descrption}</p>
          </div>
        )}
        {updateMode && (
          <button className="sinlgePostBtn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
