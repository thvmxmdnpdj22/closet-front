import React, { useEffect, useState } from 'react';
import MyPagePresenter from './MyPagePresenter';
import { useNavigate } from 'react-router-dom';

const MyPageContainer = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        name: "홍길동",
        email: "hong@example.com",
        phone: "010-1234-5678"
    });

    const [posts, setPosts] = useState([]);

    // 로컬스토리지에서 게시글 데이터를 불러오는 함수
    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    return (
        <MyPagePresenter
            navigate={navigate}
            userInfo={userInfo}
            posts={posts}
        />
    );
};

export default MyPageContainer;