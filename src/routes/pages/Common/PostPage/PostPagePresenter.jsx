import React from "react";
import "./PostPage.css";

const PostPagePresenter = ({
    navigate,
    handleSubmit,
    title,
    setTitle,
    content,
    setContent
}) => {
    return (
        <div className="postpage-container">
            <h1>글쓰기</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        placeholder="내용을 입력하세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">완료</button>
            </form>
            <div className="back-btn">
                <button onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
        </div>
    );
};

export default PostPagePresenter;