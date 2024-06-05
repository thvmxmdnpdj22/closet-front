import React,{useState} from "react";
import FindPwPresenter from "./FindPwPresenter";
import { useNavigate } from "react-router-dom";

const FindPwContainer =() => {
    const navigate = useNavigate();

    const [isFindPW, setIsFindPw] = useState(false);
    const [id,setId] = useState('');

    const handleFindPassword =() => {

        if(id.trim() === "") {
            alert("아이디를 입력해주세요.")
        }else {
            setIsFindPw(true);
            navigate('/pwchange');
        }
    };


    

    return(
        <FindPwPresenter
            isFindPW ={isFindPW}
            id={id}

            navigate={navigate}

            setIsFindPw={setIsFindPw}
            setId={setId}
            handleFindPassword={handleFindPassword}
            
             />
    )
}

export default FindPwContainer;