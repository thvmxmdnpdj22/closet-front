import React from 'react';
import { Outlet } from 'react-router-dom';
import './MyPage.css';

const MyPagePresenter = ({
    userInfo,
    posts,
    navigate
}) => {
    return (
        <div className="mypage-container">
            <header className="mypage-header">
                <h1 onClick={() => navigate('/mypage')}>마이페이지</h1>
            </header>
            <div className="mypage-content">
                <aside className="sidebar">
                    <button onClick={() => navigate('/mypage/profile')}>내 정보</button>
                    <button onClick={() => navigate('/profile')}>찜한 상품</button>
                    <button onClick={() => navigate('/mypage/transactions')}>거래내역</button>
                </aside>
                <main className="main-content">
                    <div className="user-home">
                        <h2>사용자 홈</h2>
                        <p>이름: {userInfo.name}</p>
                        <p>이메일: {userInfo.email}</p>
                        <p>전화번호: {userInfo.phone}</p>
                        <button className='login-button' onClick={() => navigate('/')}>뒤로가기</button>
                    </div>
                    <div className="user-posts">
                        <h2>나의 게시글</h2>
                        <ul>
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    <li key={index} className="post-item">
                                        <h3>{post.title}</h3>
                                        <p>{post.content}</p>
                                        <small>{post.date}</small>
                                        <small>조회수: {post.views}</small>
                                    </li>
                                ))
                            ) : (
                                <p>게시글이 없습니다.</p>
                            )}
                        </ul>
                    </div>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MyPagePresenter;