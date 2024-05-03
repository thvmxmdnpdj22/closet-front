import React from "react";
import './DBConnectTest.css';

/*
    ※ 컴포넌트 이름(함수 이름)은 무조건 대문자로 시작해야 함!! ※
      만약 소문자로 시작한다면 컴포넌트를 출력할 수 없으므로 반드시 주의해서 작성할 것
*/
export const DBConnectTest = ({
    children
}) => {
    return (
        <div className="db-connect-test">
            {children}
        </div>
    )
}