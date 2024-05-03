import React from "react";
import "./SignIn.css"
import { SignInBox } from "./component/SigninBox";
import { paste } from "@testing-library/user-event/dist/paste";

const SignInPersenter = ({
    isSignIn,
    navigate,
    SignIn,
    id,
    password,
    handleMessageChange,
    handleMessageChange2
}) => {
    return(
        <div className="signin-contanier">
            <h1>로그인</h1>

            <SignInBox
                handleMessageChange={handleMessageChange}
                handleMessageChange2={handleMessageChange2}

                id={id}
                password={password}

                isSignIn={isSignIn}
            />
            
            <button onClick={SignIn}>로그인</button>
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
            <button onClick={() => navigate('/signup')}>회원가입</button>
            <button onClick={() => {navigate('/findid')}}> 아이디 찾기</button>
            <button onClick={() => {navigate('/findpw')}}>비밀번호 찾기</button>
        </div>
    )
}

export default SignInPersenter;