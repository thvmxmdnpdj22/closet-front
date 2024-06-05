import React from "react";
import './View.css';

const ViewPresenter = ({
    post,
    navigate
}) => {
  return (
    <div className="view-container">
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="content">
        <textarea>{post.content}</textarea>
      </div>
      <div className="info">
        <p><strong>작성자:</strong> {post.author || "작성자 없음"}</p>
        <p><strong>날짜:</strong> {post.date || "날짜 없음"}</p>
        <p><strong>조회수:</strong> {post.views || 0}</p>
      </div>
      <div>
        <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
      </div>
    </div>
  );
};

export default ViewPresenter;