import React from "react";
import './Community.css';
import { CommunityBox } from "./component/CommunityBox";

const CommunityPresenter = ({
    navigate,
    searchTerm,
    setSearchTerm,
    handleSearch,
    posts,
    renderNoResultMessage,
    currentPage,
}) => {
    return (
        <div className="community-container">
            <header className="header-container">
                <h1 className="community-title">커뮤니티</h1>
                <div className="search-container">
                    <CommunityBox
                        type="text"
                        placeholder="검색어 입력"
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <div className="search-button">
                        <button onClick={() => handleSearch(searchTerm)}>검색</button>
                    </div>
                    
                </div>
            </header>
            <div className="footer-container">
                <button onClick={() => { navigate('/') }}>뒤로가기</button>
                <div className="write-post-container">
                    <button onClick={() => { navigate('/postpage') }}>글쓰기</button>
                </div>
            </div>
            <div className="post-list">
                <h3>게시글 목록</h3>
                {renderNoResultMessage()}
                <table>
                    <thead>
                        <tr>
                            <th className="no">NO</th>
                            <th className="title">글제목</th>
                            <th className="content">내용</th>
                            <th className="author">작성자</th>
                            <th className="view">조회수</th>
                            <th className="date">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts?.map((post, index) => (
                            <tr key={index} onClick={() => { navigate(`/viewpage`, { state: { post } }) }}>
                                <td>{(currentPage - 1) * 10 + (index + 1)}</td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>{post.author || '작성자 없음'}</td>
                                <td>{post.views || 0}</td>
                                <td>{post.date || '날짜 없음'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommunityPresenter;