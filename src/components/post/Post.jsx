import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && <img src={PF + post.photo} alt="" />}

      <div className="postCategories">
        {post.categories.map((c) => (
          <span> {c.name} </span>
        ))}
      </div>

      <div className="postTitle">
        <Link className="link" to={`/post/${post._id}`}>
          <h1>{post.title}</h1>
        </Link>
      </div>

      <div className="postDuration">
        <p>{new Date(post.createdAt).toDateString()}</p>
      </div>

      <div className="postContent">
        <p>{post.descrption}</p>
      </div>
    </div>
  );
}
