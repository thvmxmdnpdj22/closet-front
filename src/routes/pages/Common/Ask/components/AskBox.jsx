import React from "react";
import './AskBox.css'

const AskBox = ({
    asks,
    ShowContent,
}) => {
    console.log(asks)
    return (
        <div className="ask-box">
            <h2>고객센터</h2>
            {
                asks?.map((ask, idx) => (
                    <div className="ask-wrap" onClick={() => {
                        ShowContent(ask, idx)
                    }}>
                        <div className="ask-title">
                            <span>{ask.title}</span>
                            <span className={ask.isShow ? 'arrow show' : 'arrow hidden'}>
                                ◀
                            </span>
                        </div>
                        {
                            ask.isShow &&
                            <div className="ask-content">
                                {
                                    ask.content
                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default AskBox;