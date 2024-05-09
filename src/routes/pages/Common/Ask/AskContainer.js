// MainContainer.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AskPresenter from "./AskPresenter";

const AskContainer = () => {
    const navigate = useNavigate();
    const [asks, setAsks] = useState([
        {
            title: '사기신고는 어떻게 하나요?',
            content: '사고신고는 고객센터 1111-2222로 전화하셔서 다이얼 1번을 눌러주신 후 상담원과 사고신고 접수를 하시면 됩니다.',
            isShow: false,
        },
        {
            title: '상품이 훼손되었어요',
            content: '상품이 훼손되셨을 경우 고객센터 1111-2222로 전화하셔서 다이얼 2번을 누른 후 상품 훼손으로 인한 신고접수를 하시면 됩니다.',
            isShow: false,
        },
        {
            title: '탈퇴 문의',
            content: '탈퇴를 원하실경우 마이페이지 회원정보 수정에서 "탈퇴"를 누르시면 자동 탈퇴 됩니다.',
            isShow: false,
        },
        {
            title: '클리닝 업체에서 상품이 늦어졌어요',
            content: '클리닝 업체에서 상품이 늦어졌을 경우 고객센터 1111-2222로 전화하셔서 다이얼 3번을 누르신 후 지점과 맡겼던 상품 회원님의 번호 등을 알려주시면 빠른 조치 취하여 도와드리겠습니다.',
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


