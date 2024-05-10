import React from "react";
import { Input } from "../../component/Input/Input";

export const SignInBox =({
    id,
    password,
    setId,
    setPassword,
})=>{
    return(
        <div className="signin">
            <Input
                title={'아이디'}
                type={'text'}
                placeholder={'아이디를 입력하세요.'}
                value={id}
                onChange={(e)=>setId(e.target.value)}/>
            <Input
                title={'비밀번호'}
                type={'text'}
                placeholder={'비밀번호를 입력하세요.'}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
        </div>
    )
}