import React from "react";
import"./FindPw.css";
import { FindPwBox } from "./component/FindPwBox";

const FindPwPresenter =({
    navigate,
    id,
    setId,
    handleFindPassword,
    isFindPW
}) => {
    return(
        <div className="findpw-container">
            <h1>비밀번호 재설정</h1>
            <FindPwBox
                id = {id}
                setId={setId}
                handleFindPassword={handleFindPassword}
                isFindPW={isFindPW}
                />
            <div>
                <button onClick={handleFindPassword}>확인</button> 
                <button  onClick={() => {navigate(-1)}}>뒤로가기</button>
            </div>
        </div>
    )
}

export default FindPwPresenter;