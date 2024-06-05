import React from "react";
import { Input } from "../../component/Input/Input";

export const CommunityBox = ({
    searchTerm,
    setSearchTerm
}) =>{
    return(
        <div className="community-container box">
            <Input
                type={"text"}
                placeholder={"검색어를 입력하세요."}
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
        
        </div>
    )
}