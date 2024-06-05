import React from "react";
import { Input } from "../../component/Input/Input";

export const FindPwBox = ({
    id,
    handleFindPassword,
    setId,
})=>{
    return(
        <div className="findpw">
            <Input
                 title={'아이디'}
                 type={'text'}
                 placeholder={'아이디를 입력하세요.'}
                 value={id}
                 onChange={(e)=>setId(e.target.value)}/>     
        </div>
    )
}
