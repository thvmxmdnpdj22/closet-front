import React, { useState, useEffect } from "react";
import SignUpPresenter from './SignUpPresenter';
import {useNavigate} from "react-router-dom";


const SignUpContainer = () => {

    const navigate = useNavigate();

    const [isSignUp, setIsSignUp] = useState(null);
    const [id, setId] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordcheck] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    //본인확인 질문 함수
    const [securityAnswer, setSecurityAnswer] = useState('');
  
    const SignUp = async () => {
        // API 호출 전 입력 값 확인
        // 필수인데 비어있는게 있으면 호출이 안되게

        const missingFields = [];
        if (!id) missingFields.push("아이디");
        if (!password) missingFields.push("비밀번호");
        if (!passwordcheck) missingFields.push("비밀번호 확인");
        if (!nickname) missingFields.push("닉네임");
        if (!birthday) missingFields.push("생년월일");
        if (!address) missingFields.push("주소");
        if (!phoneNumber) missingFields.push("핸드폰 번호");
        if (!securityAnswer) missingFields.push("본인 확인 질문")

        if (missingFields.length > 0) {
            alert(`${missingFields.join(', ')}을(를) 입력해주세요.`);
            return; // 필수 입력 필드가 누락되면 함수 실행 중지
        }

        // 비밀번호 확인
        if (password !== passwordcheck) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return; // 비밀번호가 일치하지 않으면 함수 실행 중지
        }


        const result = await fetch('http://localhost:3333/user/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        // console.log("성공")
        // console.log(id, email, password, passwordcheck, nickname,checkPw)
        setIsSignUp(true)
        // alert('회원가입이 완료 되었습니다.');
        // navigate('/signin')
    }

    useEffect(() => {
        if (isSignUp === true) {
            alert("회원가입이 완료되었습니다.");
            navigate('/signin');
        } else if (isSignUp === false) {
            alert("회원가입에 실패하였습니다.");
            // 실패 시 추가적인 처리 가능
        }
    }, [isSignUp]);

    const handleIdChange = (e) => {
       setId(e.target.value);
    };//setMessage 는 메세지를 변경시키는 함수 handleMassage 는 내가 직접 만든 함수


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordCheckChange= (e) => {
        setPasswordcheck(e.target.value);
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleBirtdayChange = (e) => {
        setBirthday(e.target.value)
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    };

    const handleSecurityAnswerChange = (e) => {
        setSecurityAnswer(e.target.value)
    };

    return (
        <SignUpPresenter
            isSignUp={isSignUp}
            SignUp = {SignUp}
            navigate = {navigate}

            handleIdChange = {handleIdChange}
            handlePasswordChange = {handlePasswordChange}      
            handlePasswordcheckChange = {handlePasswordCheckChange}
            handleNicknameChange = {handleNicknameChange}
           
            handleAddressChange={handleAddressChange}
            handleBirthdayChange={handleBirtdayChange}
            handlePhoneNumberChange={handlePhoneNumberChange}

            handleSecurityAnswerChange={handleSecurityAnswerChange}
         
           id={id}
           password={password}
           passwordcheck={passwordcheck}
           nickname={nickname}
           birthday={birthday}
           address={address}
           phoneNumber={phoneNumber}
           securityAnswer={securityAnswer}

     

            setId={setId}
            setPassword={setPassword}
            setPasswordcheck={setPasswordcheck}
            setNickname={setNickname}
            setBirthday={setBirthday}
            setAddress={setAddress}
            setPhoneNumber={setPhoneNumber}

            setSecurityAnswer={setSecurityAnswer}
        />
    )
}

export default SignUpContainer;