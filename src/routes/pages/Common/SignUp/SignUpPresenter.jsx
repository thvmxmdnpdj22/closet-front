import React from "react";
import "./SignUp.css"
// import { SignUpPresenter as ReactSignUpPresenter } from "react"
import { Input } from "../component/Input/Input";
import { SignUpBox } from "./component/SignUPBox";

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
    setPhoneNumber,

    setSecurityAnswer,

    id,
    password,
    passwordcheck,
    nickname,

    birthday,
    address,
    phoneNumber,

    securityQuestion,
    securityAnswer,



    
    
}) => {
    return (
       
        <div className="signup-container">
            <h1>회원가입</h1>
            <SignUpBox
                setId={setId}
                setPassword={setPassword}
                setPasswordcheck={setPasswordcheck}
                setNickname={setNickname}
                setBirthday={setBirthday}
                setAddress={setAddress}
                setPhoneNumber={setPhoneNumber}
    
                setSecurityAnswer={setSecurityAnswer}

               id={id}
               password={password}
               passwordcheck={passwordcheck}
               nickname={nickname}
               birthday={birthday}
               address={address}
               phoneNumber={phoneNumber}

               securityQuestion={securityQuestion} 
               securityAnswer={securityAnswer}

               isSignUp={isSignUp}

        

            
            />
        
            <div className="button-control">
            <button onClick={SignUp}>회원가입</button>
            <button onClick={() => {navigate(-1)}}>뒤로가기</button>
            </div>
            
            
        </div>
    )
}

export default SignUpPresenter;