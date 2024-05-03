import React,{useState} from "react";
import FindPwPresenter from "./FindPwPresenter";
import { useNavigate } from "react-router-dom";

const FindPwContainer =() => {
    const navigate = useNavigate();

    const [isFindPW, setIsFindPw] = useState(null);

    return(
        <FindPwPresenter
            isFindPW ={isFindPW}
            navigate={navigate}

            setIsFindPw={setIsFindPw}
             />
    )
}

export default FindPwContainer;