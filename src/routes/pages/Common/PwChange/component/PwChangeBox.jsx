import React from "react";
import { Input } from "../../component/Input/Input";

export const PwChangeBox =({
    newPassword,
    checkNewPassword,

    setNewPassword,
    setCheckNewPassword
}) => {
    return(
        <div className="pwchange-">
            <Input
                title={'새로운 비밀번호'}
                type={'password'}
                placeholder={'새로운 비밀번호를 설정해주세요.'}
                value={newPassword}
                onChange={(e)=>setNewPassword(e.target.value)}/>
            <Input
                 title={'비밀번호 확인'}
                 type={'password'}
                 placeholder={'다시한번입력해주세요.'}
                 value={checkNewPassword}
                 onChange={(e)=>setCheckNewPassword(e.target.value)}/>
        </div>
    )
}

