import React from "react";
import { Input } from "../../component/Input/Input";

export const PostPageBox=({
    title,
    content,
    setTitle,
    setContent
})=>{
    return(
        <div className="postpage-">
            <Input
               type={"text"}
               placeholder={"제목을 입력하세요."}
               value={title}
               onChange={(e)=>setTitle(e.target.value)} />
            <Input
                placeholder={"내용을 입력하세요"}
                value={content}
                onChange={(e)=>setContent(e.target.value)}/>
        </div>
    )
}