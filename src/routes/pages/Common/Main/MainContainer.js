import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const appName = "CLOSETCHIC"; // 앱 이름

    // 게시글 데이터
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

    // 검색 함수
    const handleSearch = () => {
        // 검색 로직을 수행할 부분
        console.log("검색어:", searchQuery);
    };

    // 정렬 함수
    const handleSort = () => {
        // 정렬 로직을 수행할 부분
        console.log("정렬 버튼 클릭");
    };

    // 채팅 버튼 클릭 시 실행되는 함수
    const handleChat = (postId) => {
        // 여기에 해당 게시글에 대한 채팅 기능을 구현할 수 있습니다.
        console.log(`${postId}번 게시글의 채팅 버튼 클릭`);
    };

    return (
        <MainPresenter
            appName={appName} // 앱 이름 전달
            onSearch={handleSearch} // 검색 함수 전달
            onSort={handleSort} // 정렬 함수 전달
            searchQuery={searchQuery} // 검색어 상태 전달
            setSearchQuery={setSearchQuery} // 검색어 상태 업데이트 함수 전달
            posts={postsData} // 게시글 데이터 전달
            onChat={handleChat} // 채팅 버튼 클릭 이벤트 핸들러 전달
        />
    );
};

export default MainContainer;
