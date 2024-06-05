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
    setId,
    setPassword
    
}) => {
    return(
        <div className="signin-contanier">
            <h1>로그인</h1>

            <SignInBox
                id={id}
                password={password}

                setId={setId}
                setPassword={setPassword}

                isSignIn={isSignIn}
            />
            <div className="button-control">
            <button onClick={SignIn}>로그인</button>
            </div>
            <div className="button-control2">
            <button onClick={() => navigate('/signup')}>회원가입</button>
            <button onClick={() => {navigate('/findid')}}> 아이디 찾기</button>
            <button onClick={() => {navigate('/findpw')}}>비밀번호 찾기</button>
            </div>
        </div>
    )
}

export default SignInPersenter;