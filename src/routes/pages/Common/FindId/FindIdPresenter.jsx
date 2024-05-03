import React from "react";
import "./FindId.css";

const FindIdPresenter = ({
    navigate,
    // phoneNumber,
}) => {
    return(
        <div className="findid-container">
            <h1>아이디 찾기</h1>
            <button>휴대폰 번호 입력</button>
            <div>
                <button onClick={() => {navigate(-1)}}>뒤로가기</button>
            </div>
        </div>
    )
}

export default FindIdPresenter; 