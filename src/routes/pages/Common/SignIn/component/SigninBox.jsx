import React from "react";
import { Input } from "../../component/Input/Input";

export const SignInBox =({
    id,
    password,
    handleMessageChange,
    handleMessageChange2,
})=>{
    return(
        <div className="signin">
            <Input
                title={'아이디'}
                type={'text'}
                placeholder={'아이디를 입력하세요.'}
                value={id}
                onChange={handleMessageChange}/>
            <Input
                title={'비밀번호'}
                type={'text'}
                placeholder={'비밀번호를 입력하세요.'}
                value={password}
                onChange={handleMessageChange2}/>
        </div>
    )
}