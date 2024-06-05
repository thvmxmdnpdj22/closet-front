import React from "react";
import { Input } from "../../component/Input/Input";

export const CommunityBox = ({
    searchTerm,
    handleSearchTerm
}) =>{
    return(
        <div className="notepg-">
            <Input
                type={"text"}
                placeholder={"검색어를 입력하세요."}
                value={searchTerm}
                onChange={handleSearchTerm}/>
        
        </div>
    )
}