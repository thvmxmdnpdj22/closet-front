import React from "react";
import { Input } from "../../component/Input/Input";

export const FindIdBox =({
    phoneNumber,

    setPhoneNumber,
}) =>{
    return(
        <div className="findup-">
            <Input
                title={'핸드폰 번호'}
                type={'tel'}
                placeholder={'핸드폰 번호를 입력하세요.'}
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                />
        </div>
    )
}