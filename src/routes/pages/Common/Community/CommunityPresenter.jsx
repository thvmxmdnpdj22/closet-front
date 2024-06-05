import React from "react";
import './Community.css';

const CommunityPresenter = ({
    navigate,
    searchTerm,
    setSearchTerm,
    handleSearch,
    posts,
}) => {
    return (
        <div className="community-container">
            <header className="header-container">
                <h1 className="community-title">커뮤니티</h1>
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="검색어 입력"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") handleSearch(searchTerm);
                        }} />
                    <button onClick={() => handleSearch(searchTerm)}>검색</button>
                </div>
            </header>
            <div className="footer-container">
                <button onClick={() => { navigate(-1) }}>뒤로가기</button>
                <div className="write-post-container">
                    <button onClick={() => {navigate('/postpage')}}>글쓰기</button>
                </div>
            </div>
            <div className="post-list">
                <h3>게시글 목록</h3>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>{post}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CommunityPresenter;