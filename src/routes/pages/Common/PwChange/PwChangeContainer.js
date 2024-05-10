import React, { useState } from "react";
import PwChangePresenter from "./PwChangePresenter";
import { useNavigate } from "react-router-dom";

const PwChangeContainer = () => {
    const navigate = useNavigate();
    
    const [newPassword, setNewPassword] = useState('');
    const [checkNewPassword, setCheckNewPassword] = useState('');

    
    const handleConfirmClick = () => {
        if (newPassword === checkNewPassword) {
            alert("비밀번호가 성공적으로 재설정되었습니다.");
            navigate("/signin"); // 로그인 페이지로 이동
        } else {
            alert('새로운 비밀번호와 확인 값이 다릅니다.');
            setNewPassword(''); // 새 비밀번호 초기화
            setCheckNewPassword(''); // 확인 값 초기화
        }
    };
    return (
        <PwChangePresenter
            newPassword={newPassword}
            checkNewPassword={checkNewPassword}

            setNewPassword={setNewPassword}
            setCheckNewPassword={setCheckNewPassword}

            navigate={navigate}
            handleConfirmClick={handleConfirmClick}
        />
    );
}

export default PwChangeContainer;