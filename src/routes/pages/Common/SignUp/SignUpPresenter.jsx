import React from "react";
import "./SignUp.css";
import { SignUPBox } from "./component/SignUPBox"; // 정확한 파일 경로 및 파일명

const SignUpPresenter = ({
    isSignUp,
    navigate,
    SignUp,
    setId,
    setPassword,
    setPasswordcheck,
    setNickname,
    setBirthday,
    setAddress,
    setPostcode,
    setDetailedAddress,
    setPhoneNumber,
    setSecurityAnswer,
    id,
    password,
    passwordcheck,
    nickname,
    birthday,
    address,
    postcode,
    detailedAddress,
    phoneNumber,
    securityQuestion,
    securityAnswer
}) => {
    return (
        <div className="signup-container">
            <h1>회원가입</h1>
            <SignUPBox
                setId={setId}
                setPassword={setPassword}
                setPasswordcheck={setPasswordcheck}
                setNickname={setNickname}
                setBirthday={setBirthday}
                setAddress={setAddress}
                setPostcode={setPostcode}
                setDetailedAddress={setDetailedAddress}
                setPhoneNumber={setPhoneNumber}
                setSecurityAnswer={setSecurityAnswer}
                id={id}
                password={password}
                passwordcheck={passwordcheck}
                nickname={nickname}
                birthday={birthday}
                address={address}
                postcode={postcode}
                detailedAddress={detailedAddress}
                phoneNumber={phoneNumber}
                securityQuestion={securityQuestion}
                securityAnswer={securityAnswer}
                isSignUp={isSignUp}
            />
            <div className="button-control">
                <button onClick={SignUp}>회원가입</button>
                <button onClick={() => { navigate(-1) }}>뒤로가기</button>
            </div>
        </div>
    );
};

export default SignUpPresenter;