// MainContainer.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // 검색 로직을 수행할 부분
        console.log("검색어:", searchQuery);
    }

    const handleSort = () => {
        // 정렬 로직을 수행할 부분
        console.log("정렬 버튼 클릭");
    }

    return (
        <MainPresenter
            appName="CLOETCHIC" // 앱 이름 전달
            onSearch={handleSearch}
            onSort={handleSort}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery} // setSearchQuery 함수 전달

            navigate={navigate}
        />
    );
}

export default MainContainer;


