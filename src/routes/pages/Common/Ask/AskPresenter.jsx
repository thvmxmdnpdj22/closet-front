import React, { useState } from "react";
import AskBox from "./components/AskBox";
import './Main.css';

const AskPresenter = ({
    navigate,

    asks,
    ShowContent,
}) => {
    return (
        <div className="ask-container">
            <h1>{"CLOETCHIC"}</h1>
            <div className="header-buttons">
                <button onClick={() => navigate('/')}>메인화면</button>
            </div>
            <AskBox
                asks={asks}
                ShowContent={ShowContent}
            />
        </div>
    );
}

export default AskPresenter;

