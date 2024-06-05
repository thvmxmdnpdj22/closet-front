import React, { useState } from "react";
import { Input } from "../../component/Input/Input";
import DaumPostcode from 'react-daum-postcode';
import "./SignUpBox.css";

export const SignUPBox = ({
    id,
    birthday,
    password,
    passwordcheck,
    nickname,
    address,
    postcode,
    detailedAddress,
    phoneNumber,
    securityAnswer,
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
    checkIdAvailability,
    handlePasswordChange,
    passwordError,
}) => {
    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

    const handlePostcodeComplete = (data) => {
        setPostcode(data.zonecode);
        setAddress(data.address);
        setIsPostcodeOpen(false);
    };

    return (
        <div className="signup-box">
            <div className="input-group1">
                <label>아이디</label>
                <Input
                    type={'text'}
                    placeholder={'아이디를 입력(6~20자)'}
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <div className="id-button">
                    <button onClick={checkIdAvailability}>중복확인</button>
                </div>
                
            </div>
            
            <div className="input-group2">
                <label>비밀번호</label>
                <Input
                    type={'password'}
                    placeholder={"비밀번호를 입력해주세요"}
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                    minLength={8}
                    maxLength={20}
                />
                <div>

                    <div>{passwordError}</div>
                </div>
            </div>
            
            <div className="input-group3">
                <label>비밀번호 확인</label>
                <Input
                    type={'password'}
                    placeholder={"비밀번호를 재입력"}
                    value={passwordcheck}
                    onChange={(e) => setPasswordcheck(e.target.value)}
                    minLength={8}
                    maxLength={20}
                />

            </div>
            
            <div className="input-group4">
                <label>닉네임</label>
                <Input
                    type={'text'}
                    placeholder={"닉네임을 입력하세요."}
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            
            <div className="input-group5">
                <label>생년월일</label>
                <Input
                    type={'date'}
                    placeholder={'생년월일을 선택하세요'}
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </div>
            
            <div className="input-group6">
                <label>우편번호</label>
                <div className="address-group">
                    <Input
                        type={'text'}
                        placeholder={'우편번호를 입력하세요'}
                        value={postcode}
                        readOnly
                    />
                        <div className="address-button">
                            <button onClick={() => setIsPostcodeOpen(true)}>주소검색</button>
                        </div>
                </div>
            </div>
            
            <div className="input-group7">
                <label>주소</label>
                <Input
                    type={'text'}
                    placeholder={'주소를 입력하세요'}
                    value={address}
                    readOnly
                />
            </div>
            
            <div className="input-group8">
                <label>상세 주소</label>
                <Input
                    type={'text'}
                    placeholder={'상세 주소를 입력하세요'}
                    value={detailedAddress}
                    onChange={(e) => setDetailedAddress(e.target.value)}
                />
            </div>
            
            <div className="input-group9">
                <label>전화번호</label>
                <Input
                    type={'tel'}
                    placeholder={'휴대폰 번호 입력(-제외 11자 입력).'}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            
            <div className="input-group0">
                <label>본인 확인 질문</label>
                <Input
                    type={'text'}
                    placeholder={'본인 확인 질문을 입력하세요.'}
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                />
            </div>
           {isPostcodeOpen && (
    <>
        <div className="background-overlay" onClick={() => setIsPostcodeOpen(false)}></div>
        <div className="postcode-popup">
            <DaumPostcode onComplete={handlePostcodeComplete} />
            <div className="close-button">
                <button onClick={() => setIsPostcodeOpen(false)}>닫기</button>
            </div>            
        </div>
    </>
)}
        </div>
    );
};

export default SignUPBox;