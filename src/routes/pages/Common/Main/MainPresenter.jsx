import React, { useState} from "react";
import './Main.css';

const postsData = [
    {
        id: 1,
        title: "[전자제품]냉장고 판매",
        image: "https://www.lge.co.kr/kr/images/refrigerators/md10039827/gallery/medium02.jpg",
        price: "500,000",
        description: "이사 가서 새로운 냉장고를 구매하게 되어 급하게 처분합니다."
    },
    {
        id: 2,
        title: "[가구]식탁 판매",
        image: "https://cdn.imweb.me/thumbnail/20211109/ae2674fd9b4aa.jpg",
        price: "100,000",
        description: "상태 깨끗한 식탁 처분합니다."
    },
    {
        id: 3,
        title: "[가구]소파 판매",
        image: "https://m.tapeline.co.kr/web/product/big/202105/57acda1aa6247df2bdc39b9a9a71e78f.gif",
        price: "150,000",
        description: "일주일정도 사용하였고 하자 없습니다."
    },
    {
        id: 4,
        title: "[의류]정장 대여",
        image: "https://m.tgfsmall.co.kr/web/product/big/202302/6670e9a80d371326da680f4ef89db7bd.jpg",
        price: "50,000",
        description: "정장 대여해드립니다."
    },
    {
        id: 5,
        title: "[의류]패딩 대여",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfpFzkK61SDdSLcrV0R3zjPNhSGS3LTf_OA&usqp=CAU",
        price: "50,000",
        description: "입지않는 고가 패딩 대여해드립니다."
    },
    {
        id: 6,
        title: "[전자기기]애플워치 판매",
        image: "https://static.rethinkmall.com/goods-images/118350/large/1",
        price: "150,000",
        description: "구매한지 3일정도 된 새상품입니다."
    },
    {
        id: 7,
        title: "[의류]신발 판매",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png",
        price: "80,000",
        description: "박스랑 신발끈 여분도 드려요."
    },
    {
        id: 8,
        title: "[의류]모자",
        image: "https://cdn1-aka.makeshop.co.kr/shopimages/marhenj/0300000003292.jpg?1697509328",
        price: "15,000",
        description: "큰 사이즈로 나와서 여유있게 착용 가능하십니다."
    },
    {
        id: 9,
        title: "[전자기기]에어팟 pro 판매",
        image: "https://i.namu.wiki/i/2Wg0Ga8nuKz1qC29HBh3sXZX8c0EyfvYKHeH5ruL9uy8XYrX2X8XZnPOMdfkHGbqekm1O2gTg_wKAA7syMCnVw.webp",
        price: "150,000",
        description: "전에 쓰던 에어팟을 찾게 되어 판매합니다."
    },
    {
        id: 10,
        title: "[주류]와인 판매",
        image: "https://www.shinsegae-lnb.com/upload/product/wine/wine/images/G7%20%EA%B9%8C%EB%B2%A0%EB%A5%B4%EB%84%A4%20%EC%86%8C%EB%B9%84%EB%87%BD%20(%EB%B9%84%EA%B1%B4).jpg",
        price: "50,000",
        description: "선물받았지만 술을 못마셔서 판매합니다."
    },
    {
        id: 11,
        title: "[식기]식기세트 판매",
        image: "https://img.danawa.com/prod_img/500000/739/570/img/13570739_1.jpg?_v=20220927160838",
        price: "70,000",
        description: "귀여운 짱구 식기세트 판매합니다."
    },
    {
        id: 12,
        title: "[의류]맨투맨 판매",
        image: "https://cafe24img.poxo.com/forseasonn/web/product/big/202310/f16bc147d3d305c326291e9b49895fc4.jpg",
        price: "10,000",
        description: "보폴 조금 있습니다."
    },
    {  
         id: 13,
        title: "[전자기기]아이패드 판매",
        image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfNTYg%2FMDAxNzA4MTYzNDA0Mjk1.zBVT5Jznn9K7FRPT32yMBF2Lkg9YUtqY17v_Hu46c7Mg.eP56dMVPckjPJSIUuBf8ST4XvygRynkkKRY7X7YXtb8g.JPEG.smlove051029%2FIMG_0304.JPG&type=a340",
        price: "350,000",
        description: "2주정도 사용한 아이패드 판매합니다."   
    },
    {  
         id: 14,
        title: "[의류]등산 용품 대여",
        image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MDhfMTAg%2FMDAxNTY3OTUzOTA3NjM0.7EnkFxilnmfL57brcjKyFaYphm7fnjSiO2TbqWFHOIIg.Z7yKBDI4no0iI7w59A_eI-ld54hblTqdTi_7vI0OSlog.JPEG.syusyudori%2F1567953905489.jpg&type=a340",
        price: "30,000",
        description: "하루당 가격입니다."   
    },
    {  
        id: 15,
        title: "[전자기기]닌텐도 판매",
        image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240414_100%2F1713027261208geSko_JPEG%2F59661062031943145_1805945296.jpg&type=a340",
        price: "200,0000",
        description: "사용감 없는 제품입니다."   
    }
];


const MainPresenter = ({ appName, onSearch, onSort, searchQuery, setSearchQuery, navigate }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [likedPosts, setLikedPosts] = useState([]);

    const handlePostClick = (post) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPost(null);
    };

    const handleBookmarkClick = (post) => {
        if (likedPosts.includes(post)) {
            setLikedPosts(likedPosts.filter(likedPost => likedPost.id !== post.id));
        } else {
            setLikedPosts([...likedPosts, post]);
        }
    };

    const handleShareClick = () => {
        console.log("공유 버튼 클릭");
    };

    const handleChatClick = () => {
        console.log("채팅 버튼 클릭");
    };

    const filteredPosts = postsData.filter(post =>
        post.title.includes(searchQuery) || post.description.includes(searchQuery)
    );

    const getRecommendedPosts = () => {
        let recommendedPosts = [...likedPosts];
        likedPosts.forEach(likedPost => {
            const likedPostCategory = likedPost.title.split(']')[0].slice(1); // 카테고리 추출
            postsData.forEach(post => {
                if (post.id !== likedPost.id && !recommendedPosts.some(recommendation => recommendation.id === post.id)) {
                    const postCategory = post.title.split(']')[0].slice(1); // 카테고리 추출
                    if (postCategory === likedPostCategory) {
                        recommendedPosts.push(post);
                    }
                }
            });
        });
        return recommendedPosts;
    };

    const recommendedPosts = getRecommendedPosts();

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
            {recommendedPosts.length > 0 && (
                <div className="recommended-container">
                    <h2>추천 상품</h2>
                    {recommendedPosts.map(recommendation => (
                        <div key={recommendation.id} className="recommended-post" onClick={() => handlePostClick(recommendation)}>
                            <img src={recommendation.image} alt={recommendation.title} className="recommended-product" />
                            <p>{recommendation.title}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="post-list">
                {filteredPosts.map(post => (
                    <div key={post.id} className="post" onClick={() => handlePostClick(post)}>
                        <div className="post-wrap">
                            <h2>{post.title}</h2>
                            <img src={post.image} alt={post.title} className="product" />
                            <p>가격: {post.price}</p>
                            <p>{post.description}</p>
                            <div className="post-buttons">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleBookmarkClick(post);
                                        e.target.classList.toggle('clicked-button');
                                    }}
                                    className={likedPosts.includes(post) ? 'clicked-button' : ''}
                                >❤️</button>
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
};

export default MainPresenter;