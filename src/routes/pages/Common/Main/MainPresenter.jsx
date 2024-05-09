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
    {
        id: 4,
        title: "정장",
        image: "https://m.tgfsmall.co.kr/web/product/big/202302/6670e9a80d371326da680f4ef89db7bd.jpg",
        price: "50,000",
        description: "정장 대여해드립니다."
    },
    {
        id: 5,
        title: "패딩",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfpFzkK61SDdSLcrV0R3zjPNhSGS3LTf_OA&usqp=CAU",
        price: "50,000",
        description: "입지않는 고가 패딩 대여해드립니다."
    },
    {
        id: 6,
        title: "애플워치",
        image: "https://static.rethinkmall.com/goods-images/118350/large/1",
        price: "150,000",
        description: "구매한지 3일정도 된 새상품입니다."
    },
    {
        id: 7,
        title: "신발",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png",
        price: "80,000",
        description: "박스랑 신발끈 여분도 드려요."
    },
    {
        id: 8,
        title: "모자",
        image: "https://cdn1-aka.makeshop.co.kr/shopimages/marhenj/0300000003292.jpg?1697509328",
        price: "15,000",
        description: "큰 사이즈로 나와서 여유있게 착용 가능하십니다."
    },
    {
        id: 9,
        title: "에어팟 pro",
        image: "https://i.namu.wiki/i/2Wg0Ga8nuKz1qC29HBh3sXZX8c0EyfvYKHeH5ruL9uy8XYrX2X8XZnPOMdfkHGbqekm1O2gTg_wKAA7syMCnVw.webp",
        price: "150,000",
        description: "전에 쓰던 에어팟을 찾게 되어 판매합니다."
    },
    {
        id: 10,
        title: "와인",
        image: "https://www.shinsegae-lnb.com/upload/product/wine/wine/images/G7%20%EA%B9%8C%EB%B2%A0%EB%A5%B4%EB%84%A4%20%EC%86%8C%EB%B9%84%EB%87%BD%20(%EB%B9%84%EA%B1%B4).jpg",
        price: "50,000",
        description: "선물받았지만 술을 못마셔서 판매합니다."
    },
    {
        id: 11,
        title: "식기세트",
        image: "https://img.danawa.com/prod_img/500000/739/570/img/13570739_1.jpg?_v=20220927160838",
        price: "70,000",
        description: "귀여운 짱구 식기세트 판매합니다."
    },
    {
        id: 12,
        title: "맨투맨",
        image: "https://cafe24img.poxo.com/forseasonn/web/product/big/202310/f16bc147d3d305c326291e9b49895fc4.jpg",
        price: "10,000",
        description: "보폴 조금 있습니다."
    }
    // 추가적인 게시글 데이터를 필요에 따라 작성할 수 있습니다.
];

const MainPresenter = ({ appName, onSearch, onSort, searchQuery, setSearchQuery, navigate }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPost(null);
    };

    const handleBookmarkClick = () => {
        console.log("찜 버튼 클릭");
    };

    const handleShareClick = () => {
        console.log("공유 버튼 클릭");
    };

    const handleChatClick = () => {
        console.log("채팅 버튼 클릭");
    };

    // 검색어에 따라 게시글을 필터링하는 함수
    const filteredPosts = postsData.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>{appName}</h1>
            <div className="header-buttons">
                <button onClick={() => console.log("로그인 버튼 클릭")}>로그인</button>
                <button onClick={() => navigate('/ask')}>고객센터</button>
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
                <button className="chat-button" onClick={() => console.log("채팅 버튼 클릭")}>💬</button>
            </div>
            <div className="post-list">
                {filteredPosts.map(post => (
                    <div key={post.id} className="post" onClick={() => handlePostClick(post)}>
                        <div className="post-wrap">
                            <h2>{post.title}</h2>
                            <img src={post.image} alt={post.title} className="product" />
                            <p>가격: {post.price}</p>
                            <p>{post.description}</p>
                            <div className="post-buttons">
                                {/* 여기에 추가 */}
                                <button className="" onClick={(e) => { e.stopPropagation(); handleBookmarkClick(); e.target.className = e.target.className.length ? '' : 'clicked-button' }}>❤️</button>
                                <button onClick={(e) => { e.stopPropagation(); handleShareClick() }}>💏</button>
                                <button onClick={(e) => { e.stopPropagation(); handleChatClick() }}>💬</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="modal-container">
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

