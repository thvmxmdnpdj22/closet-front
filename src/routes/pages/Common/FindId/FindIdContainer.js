import React,{useState} from "react";
import FindIdPresenter from './FindIdPresenter';
import { useNavigate } from "react-router-dom";

const FindIdContainer =() => {
    const navigate = useNavigate();

    const [isFindId, setIsFindId] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <FindIdPresenter
            isFindId={isFindId}
            navigate={navigate}
            phoneNumber={phoneNumber}
            
            setIsFindId={setIsFindId}
            setPhoneNumber={setPhoneNumber}
            />
    )
}

export default FindIdContainer;