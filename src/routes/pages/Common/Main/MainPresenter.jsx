import React, { useState } from "react";
import './Main.css';

const postsData = [
    {
        id: 1,
        title: "냉장고",
        image: "https://www.lge.co.kr/kr/images/refrigerators/md10039827/gallery/medium02.jpg",
        price: "500,000",
        description: "이사 가서 새로운 냉장고를 구매하게 되어 급하게 처분합니다."
    },
    {
        id: 2,
        title: "식탁",
        image: "https://cdn.imweb.me/thumbnail/20211109/ae2674fd9b4aa.jpg",
        price: "100,000",
        description: "상태 깨끗한 식탁 처분합니다."
    },
    {
        id: 3,
        title: "소파",
        image: "https://m.tapeline.co.kr/web/product/big/202105/57acda1aa6247df2bdc39b9a9a71e78f.gif",
        price: "150,000",
        description: "일주일정도 사용하였고 하자 없습니다."
    },
    // 추가적인 게시글 데이터를 필요에 따라 작성할 수 있습니다.
];

const MainPresenter = ({ appName, onSearch, onSort, searchQuery, setSearchQuery }) => {
    const [showModal, setShowModal] = useState(false); // 모달 창 열림 여부
    const [selectedPost, setSelectedPost] = useState(null); // 선택된 게시글

    // 게시글 모달 열기
    const handlePostClick = (post) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    // 모달 닫기
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPost(null);
    };

    // 찜 버튼 클릭 시 실행되는 함수
    const handleBookmarkClick = () => {
        console.log("찜 버튼 클릭");
        // 여기에 찜 기능을 추가할 수 있습니다.
    };

    // 공유 버튼 클릭 시 실행되는 함수
    const handleShareClick = () => {
        console.log("공유 버튼 클릭");
        // 여기에 공유 기능을 추가할 수 있습니다.
    };

    // 채팅 버튼 클릭 시 실행되는 함수
    const handleChatClick = () => {
        console.log("채팅 버튼 클릭");
        // 여기에 채팅 기능을 추가할 수 있습니다.
    };

    return (
        <div>
            <h1>{appName}</h1>
            <div className="header-buttons">
                <button onClick={() => console.log("로그인 버튼 클릭")}>로그인</button>
                <button onClick={() => console.log("상담사 채팅 버튼 클릭")}>상담사 채팅</button>
                <button onClick={() => console.log("커뮤니티 버튼 클릭")}>커뮤니티</button>
                <button onClick={() => console.log("마이페이지 버튼 클릭")}>마이페이지</button>
            </div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="검색..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                />
                <button onClick={onSearch}>검색</button>
                <button onClick={onSort}>정렬</button>
            </div>
            <div className="chat-button-container">
                <button className="chat-button" onClick={() => console.log("채팅 버튼 클릭")}>채팅</button>
            </div>
            {/* 게시글 목록 */}
            <div className="post-list">
                {postsData.map(post => (
                    <div key={post.id} className="post" onClick={() => handlePostClick(post)}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title}  className="product"/>
                        <p>가격: {post.price}</p>
                        <p>{post.description}</p>
                        {/* 추가된 버튼들 */}
                        <div className="post-buttons">
                            <button onClick={(e) => { e.stopPropagation(); handleBookmarkClick() }}>찜</button>
                            <button onClick={(e) => { e.stopPropagation(); handleShareClick() }}>공유</button>
                            <button onClick={(e) => { e.stopPropagation(); handleChatClick() }}>채팅</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* 게시글 모달 */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedPost.title}</h2>
                        <img src={selectedPost.image} alt={selectedPost.title} />
                        <p>가격: {selectedPost.price}</p>
                        <p>{selectedPost.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPresenter;

