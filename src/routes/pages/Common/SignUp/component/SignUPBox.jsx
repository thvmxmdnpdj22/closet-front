import React from "react";
import { Input } from "../../component/Input/Input";


export const SignUpBox =({
    id,
    birthday,
    password,
    passwordcheck,
    nickname,
    address,
    phoneNumber,
    securityAnswer,

    setId,
    setPassword,
    setPasswordcheck,
    setNickname,
    setBirthday,
    setAddress,
    setPhoneNumber,
    setSecurityAnswer
})=>{
    return(
        
        <div className="signup-">
            <Input
                title={'아이디'}
                type={'text'}
                placeholder={'아이디를 입력하세요.'}
                value={id}
                onChange={(e)=>setId(e.target.value)}/>
            <Input
                title={'비밀번호'}
                type={'password'}
                placeholder={"비밀번호를 입력하세요"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            <Input
                title={'비밀번호 확인'}
                type={'password'}
                placeholder={"비밀번호를 한번 더 입력하세요."}
                value={passwordcheck}
                onChange={(e)=>setPasswordcheck(e.target.value)}/>
            <Input
                title={'닉네임'}
                type={'text'}
                placeholder={"닉네임을 입력하세요."}
                value={nickname}
                onChange={(e)=>setNickname(e.target.value)}/>
            <Input
                title={'생년월일'}
                type={'date'}
                placeholder={'생년월일을 선택하세요'}
                value={birthday}
                onChange={(e)=>setBirthday(e.target.value)}/>
             <Input
                title={'주소'}
                type={'text'}
                placeholder={'주소를 입력하세요'}
                value={address}
                onChange={(e)=>setAddress(e.target.value)}/>
            <Input
                title={'핸드폰 번호'}
                type={'tel'}
                placeholder={'핸드폰 번호를 입력하세요.'}
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}/>
            <Input
                title={'본인 확인 질문'}
                type={'text'}
                placeholder={'본인 확인 질문을 입력하세요.'}
                value={securityAnswer}
                onChange={(e)=>setSecurityAnswer(e.target.value)} />
        </div>
    )
}