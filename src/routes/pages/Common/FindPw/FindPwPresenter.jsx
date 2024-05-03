import React from "react";
import"./FindPw.css";

const FindPwPresenter =({
    navigate,
}) => {
    return(
        <div className="findpw-container">
            <h1>비밀번호 찾기</h1>
            <div>
                <button onClick={() => {navigate(-1)}}>뒤로가기</button>
            </div>
        </div>
    )
}

export default FindPwPresenter;