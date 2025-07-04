import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const Blog = () => {
  var storedData = JSON.parse(localStorage.getItem("postData"));
  console.log(storedData);
  const [posts, setPosts] = useState(storedData);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="blog-container">
      <h2>Student Forum for Coders</h2>
      <NewPostForm addNewPost={addNewPost} />
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.title}</h3>
            <p>Posted by: {post.author}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewPostForm = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPost({ title, author, content });
    const postData = {title, author, content};
    var storedData = localStorage.getItem("postData");
    if (!storedData) {
        storedData = [];
    } else {
        storedData = JSON.parse(storedData);
    }
    storedData.push(postData);
    localStorage.setItem("postData", JSON.stringify(storedData));
    console.log(storedData);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Post</button>
    </form>
  );
};

export default Blog;
