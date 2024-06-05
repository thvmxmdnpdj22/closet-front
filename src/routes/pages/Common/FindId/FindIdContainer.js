import React, { useState, useEffect } from "react";
import FindIdPresenter from './FindIdPresenter';
import { useNavigate } from "react-router-dom";

const FindIdContainer = () => {
    
    const navigate = useNavigate();

    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationCodeSent, setVerificationCodeSent] = useState(false);
    const [showVerificationInput, setShowVerificationInput] = useState(false);
    const [timer, setTimer] = useState(null);


    const handlePhoneNumberSubmit = () => {
        if (!phoneNumber) {
            alert("휴대폰 번호를 입력해주세요.");
        } else if (isNaN(phoneNumber)){
            alert("번호를 입력해주세요")
        } 
        else {
            // 전송 로직을 여기에 추가할 수 있습니다.
            setVerificationCodeSent(true);
            setShowVerificationInput(true);
            alert("문자로 인증번호를 전송했습니다.");

            // 타이머 시작 (예: 5분)
            const timeout = setTimeout(() => {
                setVerificationCodeSent(false);
                setShowVerificationInput(false);
                setVerificationCode('');
                alert("인증번호 입력 시간이 초과되었습니다. 다시 시도해주세요.");
            }, 5 * 60 * 1000); // 5분

            setTimer(timeout);
        }
    };

    const handleVerificationSubmit = () => {
        // 인증번호 확인 로직을 여기에 추가할 수 있습니다.
        if (verificationCode === "123456") { // 실제로는 서버에서 인증번호를 확인해야 합니다.
            clearTimeout(timer); // 타이머 초기화
            alert("인증이 성공하였습니다!");
            // 인증 성공 후 다음 작업 수행
            navigate('/next-page'); // 페이지 이동 예시
        } else {
            alert("인증번호가 일치하지 않습니다.");
        }
    };

    useEffect(() => {
        return () => {
            // 컴포넌트가 언마운트될 때 타이머 초기화
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (
        <FindIdPresenter
            phoneNumber={phoneNumber}
            verificationCodeSent={verificationCodeSent}
            verificationCode={verificationCode}
            showVerificationInput={showVerificationInput}

            navigate={navigate}

            handlePhoneNumberSubmit={handlePhoneNumberSubmit}
            handleVerificationSubmit={handleVerificationSubmit}
            setPhoneNumber={setPhoneNumber}
            setVerificationCode={setVerificationCode}
            setShowVerificationInput={setShowVerificationInput}
        />
    )
}

export default FindIdContainer;