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

    
    handleIdChange,
    handlePasswordChange,
    handlePasswordcheckChange,
    handleNicknameChange,
    handleBirthdayChange,
    handleAddressChange,
    handlePhoneNumberChange,
    handleSecurityAnswerChange
})=>{
    return(
        <div className="signup-">
            <Input
                title={'아이디'}
                type={'text'}
                placeholder={'아이디를 입력하세요.'}
                value={id}
                onChange={handleIdChange}/>
            <Input
                title={'비밀번호'}
                type={'password'}
                placeholder={"비밀번호를 입력하세요"}
                value={password}
                onChange={handlePasswordChange}/>
            <Input
                title={'비밀번호 확인'}
                type={'password'}
                placeholder={"비밀번호를 한번 더 입력하세요."}
                value={passwordcheck}
                onChange={handlePasswordcheckChange}/>
            <Input
                title={'닉네임'}
                type={'text'}
                placeholder={"닉네임을 입력하세요."}
                value={nickname}
                onChange={handleNicknameChange}/>
            <Input
                title={'생년월일'}
                type={'date'}
                placeholder={'생년월일을 선택하세요'}
                value={birthday}
                onChange={handleBirthdayChange}/>
             <Input
                title={'주소'}
                type={'text'}
                placeholder={'주소를 입력하세요'}
                value={address}
                onChange={handleAddressChange}/>
            <Input
                title={'핸드폰 번호'}
                type={'tel'}
                placeholder={'핸드폰 번호를 입력하세요.'}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}/>
            <Input
                title={'본인 확인 질문'}
                type={'text'}
                placeholder={'본인 확인 질문을 입력하세요.'}
                value={securityAnswer}
                onChange={handleSecurityAnswerChange} />
        </div>
    )
}