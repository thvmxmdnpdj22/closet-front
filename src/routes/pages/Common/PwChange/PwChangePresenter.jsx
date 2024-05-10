import React from "react";
import "./PwChange.css";
import { PwChangeBox } from "./component/PwChangeBox";

const PwChangePresenter =({
    newPassword,
    checkNewPassword,
    
    navigate,

    setNewPassword,
    setCheckNewPassword,

    handleConfirmClick
}) => {
    return(
        <div className="pwchange-container">
            <h1>비밀번호 재설정</h1>
            <PwChangeBox
            newPassword = {newPassword}
            checkNewPassword= {checkNewPassword}

            setNewPassword={setNewPassword}
            setCheckNewPassword={setCheckNewPassword}

            />
            <div className="PwChange-button">
                <button onClick={handleConfirmClick}>확인</button>
                <button onClick={() => {navigate(-1)}}>뒤로가기</button>
            </div>
        </div>
    )
}

export default PwChangePresenter;