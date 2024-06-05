import React,{useState} from "react";
import SignInPersenter from "./SignInPersenter";
import {useNavigate} from "react-router-dom";


const SignInContainer = () => {
    
    const testData = {
        id: "qwer",
        password: "123"
    };
    console.log(testData)
    console.log(testData.id)
    console.log(testData.password)

    const navigate = useNavigate();

    const [isSignIn, setIsSignIn] = useState(null);
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');

    const SignIn = async () => {

        const missingFields =[];
        if(!id) missingFields.push('아이디')
        if (!password) missingFields.push("비밀번호");

        if (missingFields.length > 0) {
            alert(`${missingFields.join(', ')}을(를) 입력해주세요.`);
            return; // 필수 입력 필드가 누락되면 함수 실행 중지
        }

        if (id != testData.id) {
            alert("김권후")
            return;
        }

        const result = await fetch('http://localhost:3333/user/signin', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        setIsSignIn(true)
        alert('로그인 완료')
        navigate('/')

    }
    


    return(
        <SignInPersenter
            isSignIn={isSignIn}
            navigate ={navigate}
            SignIn ={SignIn}

            id={id}
            password={password}

            

            setId={setId}
            setPassword={setPassword}
            />
    )
}

export default SignInContainer;