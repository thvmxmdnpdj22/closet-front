import React from "react";
import "./SignUp.css"
// import { SignUpPresenter as ReactSignUpPresenter } from "react"
import { Input } from "../component/Input/Input";
import { SignUpBox } from "./component/SignUPBox";

const SignUpPresenter = ({
    isSignUp,
    navigate,
    SignUp,

    handleIdChange,
    handlePasswordChange,
    handlePasswordcheckChange,
    handleNicknameChange,
    handleBirthdayChange,
    handleAddressChange,
    handlePhoneNumberChange,
    handleSecurityQuestionChange,
    handleSecurityAnswerChange,
    // handlePwCheck,
    // handleEmailCheck,
    


    id,
    // email,
    password,
    passwordcheck,
    nickname,
    // isCheckPw,
    checkPw,
    birthday,
    address,
    phoneNumber,
    // isCheckEmail,
    // checkEmail
    securityQuestion,
    securityAnswer

    
    
}) => {
    return (
       
        <div className="signup-container">
            <h1>회원가입</h1>
            <SignUpBox
                handleIdChange={handleIdChange}
                handlePasswordChange={handlePasswordChange}
                handlePasswordcheckChange={handlePasswordcheckChange}
                handleNicknameChange={handleNicknameChange}
                handleBirthdayChange={handleBirthdayChange}
                handleAddressChange={handleAddressChange}
                handlePhoneNumberChange={handlePhoneNumberChange}
                handleSecurityQuestionChange={handleSecurityQuestionChange}
                handleSecurityAnswerChange={handleSecurityAnswerChange}
                // handleMessageChange5={handleMessageChange5}
                // handlePwCheck={handlePwCheck}
                // handleEmailCheck={handleEmailCheck}

               id={id}
            //    email={email}
               password={password}
               passwordcheck={passwordcheck}
               nickname={nickname}
               birthday={birthday}
               address={address}
               phoneNumber={phoneNumber}

               securityQuestion={securityQuestion} 
               securityAnswer={securityAnswer}

               isSignUp={isSignUp}
            //    isCheckPw={isCheckPw}
            //    isCheckEmail={isCheckEmail}
            //    checkPw={checkPw}
            //    checkEmail={checkEmail}

        

            
            />
        
            <div className="button-control">
            <button onClick={SignUp}>회원가입</button>
            <button onClick={() => {navigate(-1)}}>뒤로가기</button>
            {/* <button onClick={checkPw}>비밀번호 확인</button> */}
            {/* <button onClick={checkEmail}>이메일확인</button> */}
            </div>
            
            
        </div>
    )
}

export default SignUpPresenter;