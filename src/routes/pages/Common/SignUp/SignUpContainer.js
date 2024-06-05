import React, { useState, useEffect } from "react";
import SignUpPresenter from './SignUpPresenter';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

const SignUpContainer = () => {
    const navigate = useNavigate();

    const [isSignUp, setIsSignUp] = useState(null); //회원가입 성공 여부
    const [id, setId] = useState(''); //아이디
    const [password, setPassword] = useState(''); //비밀번호
    const [passwordcheck, setPasswordcheck] = useState(''); //비밀번호 확인
    const [nickname, setNickname] = useState(''); // 닉네임
    const [birthday, setBirthday] = useState(''); // 생년월일
    const [address, setAddress] = useState(''); // 주소
    const [postcode, setPostcode] = useState(''); //우편번호
    const [detailedAddress, setDetailedAddress] = useState(''); //상세주소
    const [phoneNumber, setPhoneNumber] = useState(''); // 전화번호
    const [securityAnswer, setSecurityAnswer] = useState(''); // 보안 질문
    const [isIdAvailable, setIsIdAvailable] = useState(null); // 아이디 사용 가능 여부
    const [passwordError, setPasswordError] = useState(''); // 비밀번호 유효성 검사

    //아이디 사용 가느 여부 함수
    const checkIdAvailability = async () => {
        if (!id) {
            alert("아이디를 입력해주세요.");
            return;
        }

        const result = await fetch(`http://localhost:3333/user/checkId/${id}`);
        const data = await result.json();
        if (data.isAvailable) {
            alert("사용 가능한 아이디입니다.");
            setIsIdAvailable(true);
        } else {
            alert("이미 사용 중인 아이디입니다.");
            setIsIdAvailable(false);
        }
    };

    //비밀번호의 유효성 검사 함수
    const isPasswordValid = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!regex.test(password)) {
            setPasswordError('비밀번호는 8자 이상 20자 미만, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.');
            return false;
        }
        setPasswordError('');
        return true;
    };
    // 비밀번호 입력값이 변경될 때 마다 유효성 검사 수행
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        isPasswordValid(newPassword);
    };

    // 회원가입을 수행하는 함수
    const SignUp = async () => {
        //필수 입력값의 누락여부 초깃값
        const missingFields = [];
        //누락된 항목 찾는 코드
        if (!id) missingFields.push("아이디");
        if (!password) missingFields.push("비밀번호");
        if (!passwordcheck) missingFields.push("비밀번호 확인");
        if (!nickname) missingFields.push("닉네임");
        if (!birthday) missingFields.push("생년월일");
        if (!address) missingFields.push("주소");
        if (!detailedAddress) missingFields.push("상세 주소");
        if (!phoneNumber) missingFields.push("핸드폰 번호");
        if (!securityAnswer) missingFields.push("본인 확인 질문");

        if (missingFields.length > 0) {
            alert(`${missingFields.join(', ')}을(를) 입력해주세요.`);
            return;
        }

        if (password !== passwordcheck) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        if (!isPasswordValid(password)) {
            alert("비밀번호는 최소 8자, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.");
            return;
        }

        if (isIdAvailable === false) {
            alert("이미 사용 중인 아이디입니다.");
            return;
        }

        const result = await fetch('http://localhost:3333/user/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                id,
                password,
                nickname,
                birthday,
                address: `${address} ${detailedAddress}`,
                phoneNumber,
                securityAnswer
            })
        });

        const data = await result.json();
        setIsSignUp(true);
    };

    //회원가입 성공 여부에 따라 페이지 이동 처리 하는 훅
    useEffect(() => {
        if (isSignUp === true) {
            alert("회원가입이 완료되었습니다.");
            navigate('/signin');
        } else if (isSignUp === false) {
            alert("회원가입에 실패하였습니다.");
        }
    }, [isSignUp, navigate]);

    return (
        <SignUpPresenter
            isSignUp={isSignUp}
            SignUp={SignUp}
            checkIdAvailability={checkIdAvailability}
            navigate={navigate}
            id={id}
            password={password}
            passwordcheck={passwordcheck}
            nickname={nickname}
            birthday={birthday}
            address={address}
            postcode={postcode}
            detailedAddress={detailedAddress}
            phoneNumber={phoneNumber}
            securityAnswer={securityAnswer}
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
            passwordError={passwordError}
            handlePasswordChange={handlePasswordChange}
        />
    );
};

export default SignUpContainer;