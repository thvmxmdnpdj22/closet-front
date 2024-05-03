// MainContainer.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AskPresenter from "./AskPresenter";

const AskContainer = () => {
    const navigate = useNavigate();
    const [asks, setAsks] = useState([
        {
            title: '문의 테스트1',
            content: '문의 내용',
            isShow: false,
        },
        {
            title: '문의 테스트2',
            content: '문의 내용2',
            isShow: false,
        },
        {
            title: '문의 테스트3',
            content: '문의 내용3',
            isShow: false,
        },
        {
            title: '문의 테스트4',
            content: '문의 내용4',
            isShow: false,
        },
    ])

    const ShowContent = (ask, idx) => {
        console.log('asd')
        const asks_copy = Array.from(asks);
        asks_copy[idx].isShow = !ask.isShow;
        setAsks(asks_copy)
    }

    return (
        <AskPresenter
            navigate={navigate}

            asks={asks}
            ShowContent={ShowContent}
        />
    );
}

export default AskContainer;


