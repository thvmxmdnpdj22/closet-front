import React from "react";
import "./FindId.css";
import { FindIdBox } from "./component/FindIdBox";

const FindIdPresenter = ({
    navigate,
    phoneNumber,
    verificationCode,
    verificationCodeSent,

    setPhoneNumber,
    handlePhoneNumberSubmit,
    handleVerificationSubmit,
    setVerificationCode
}) => {

    return(
        <div className="findid-container">
            <h1>아이디 찾기</h1>
            <FindIdBox
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                />
                 {verificationCodeSent && (
                <div className="verification-container">
                    <input
                        type="text"
                        placeholder="인증번호를 입력하세요."
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    <button className="login-button" onClick={handleVerificationSubmit}>확인</button>
                </div>
            )}
            {!verificationCodeSent && (
                <button className="login-button" onClick={handlePhoneNumberSubmit}>인증번호 요청</button>
            )}
            <div className="button-co">
            {/* <button  onClick={handlePhoneNumberSubmit} >인증번호</button> */}
            <div>
                <button className="login-button" onClick={() => {navigate('/signin')}}>뒤로가기</button>
            </div>
            </div>
        </div>
    )
}

export default FindIdPresenter; 